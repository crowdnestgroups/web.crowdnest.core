import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateQueryKeys } from "@/lib/constants/queryKeys";
import {
  publicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  privateRoutes,
} from "@/lib/constants/routes";

// Only run this in development for validation
if (process.env.NODE_ENV === "development") {
  validateQueryKeys();
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, ""); // Normalize

  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  const sessionToken = request.cookies.get(
    process.env.NEXT_PUBLIC_SESSION_KEY!
  )?.value;
  // const username = request.cookies.get(process.env.NEXT_PUBLIC_ID_KEY!)?.value;

  const isAuthenticated = !!sessionToken;
  // const isOnboarded = !!username;
  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url));
  }

  // Redirect unauthenticated users away from protected routes
  if (!isAuthenticated && isPrivateRoute) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Redirect authenticated users to onboard if not yet onboarded
  if (
    isAuthenticated &&
    !isPublicRoute &&
    pathname !== "/onboard"
  ) {
    return NextResponse.redirect(new URL("/onboard", request.url));
  }

  // Allow request to continue
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    "/((?!api|_next|public|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico)$).*)",
  ],
};
