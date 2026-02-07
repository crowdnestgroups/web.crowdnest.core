import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import { DatePicker } from "@/components/ui/DatePicker";
import { renderWithProviders } from "@/test/utils";

describe("DatePicker", () => {
  it("renders placeholder text", () => {
    renderWithProviders(<DatePicker />);
    expect(screen.getByText("Pick a date")).toBeInTheDocument();
  });
});
