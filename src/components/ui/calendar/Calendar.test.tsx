import { describe, expect, it } from "vitest";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { renderWithProviders } from "@/test/utils";

describe("Calendar", () => {
  it("renders the calendar root", () => {
    const { container } = renderWithProviders(<Calendar />);
    const root = container.querySelector('[data-slot="calendar"]');
    expect(root).toBeInTheDocument();
  });
});
