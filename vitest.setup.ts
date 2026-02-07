import "@testing-library/jest-dom/vitest";
import React from "react";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { server } from "@/test/server";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string }) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
