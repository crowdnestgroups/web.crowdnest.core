import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import { Input } from "@/components/ui/input";
import { renderWithProviders } from "@/test/utils";

describe("Input", () => {
  it("renders an input with provided type and placeholder", () => {
    renderWithProviders(
      <Input type="email" placeholder="Email address" aria-label="email" />
    );
    const input = screen.getByLabelText("email");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("placeholder", "Email address");
  });

  it("merges custom class names", () => {
    renderWithProviders(<Input aria-label="name" className="custom-class" />);
    expect(screen.getByLabelText("name")).toHaveClass("custom-class");
  });
});
