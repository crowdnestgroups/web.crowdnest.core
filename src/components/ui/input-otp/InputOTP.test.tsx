import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import { InputOTP } from "@/components/ui/input-otp";
import { renderWithProviders } from "@/test/utils";

describe("InputOTP", () => {
  it("renders the otp input", () => {
    renderWithProviders(<InputOTP maxLength={4} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("data-slot", "input-otp");
  });
});
