import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import SignUpPage from "@/app/signup/page";
import { renderWithProviders } from "@/test/utils";

const push = vi.fn();
const showSuccess = vi.fn();
const showError = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

vi.mock("@/providers/ToastContextProvider", () => ({
  useToast: () => ({ showSuccess, showError }),
}));

describe("SignUpPage", () => {
  it("submits signup and navigates to dashboard", async () => {
    const user = userEvent.setup();
    renderWithProviders(<SignUpPage />);

    await user.type(screen.getByLabelText("Email Address"), "test@example.com");
    await user.type(screen.getByLabelText("Password"), "Password123!");
    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(showSuccess).toHaveBeenCalledWith("Signup successful");
    expect(push).toHaveBeenCalledWith("/dashboard");
  });

  it("shows error when email already exists", async () => {
    const user = userEvent.setup();
    renderWithProviders(<SignUpPage />);

    await user.type(screen.getByLabelText("Email Address"), "error@example.com");
    await user.type(screen.getByLabelText("Password"), "Password123!");
    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(showError).toHaveBeenCalledWith("Email already exists");
  });

  it("shows validation errors for invalid inputs", async () => {
    const user = userEvent.setup();
    renderWithProviders(<SignUpPage />);

    await user.type(screen.getByLabelText("Email Address"), "invalid-email");
    await user.type(screen.getByLabelText("Password"), "short");
    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(await screen.findByText("Invalid email")).toBeInTheDocument();
    expect(
      screen.getByText("Password must be at least 8 characters long")
    ).toBeInTheDocument();
  });
});
