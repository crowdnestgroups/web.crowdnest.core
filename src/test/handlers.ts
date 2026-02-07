import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("*/auth/sign-in", async ({ request }) => {
    const body = (await request.json()) as { email?: string; password?: string };
    if (body.email === "error@example.com") {
      return HttpResponse.json(
        { message: "Invalid credentials" },
        { status: 401 },
      );
    }
    return HttpResponse.json({
      message: "ok",
      data: { accessToken: "test-token" },
    });
  }),
  http.post("*/auth/sign-up", async ({ request }) => {
    const body = (await request.json()) as { email?: string };
    if (body.email === "error@example.com") {
      return HttpResponse.json(
        { message: "Email already exists" },
        { status: 409 },
      );
    }
    return HttpResponse.json({
      message: "ok",
    });
  }),
];
