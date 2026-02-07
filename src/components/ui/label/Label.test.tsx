import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import { Label } from "@/components/ui/label";
import { renderWithProviders } from "@/test/utils";

describe("Label", () => {
  it("renders label text and data-slot", () => {
    renderWithProviders(<Label>First Name</Label>);
    const label = screen.getByText("First Name");
    expect(label).toHaveAttribute("data-slot", "label");
  });
});
