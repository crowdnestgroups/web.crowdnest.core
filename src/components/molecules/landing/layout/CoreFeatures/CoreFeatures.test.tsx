import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import CoreFeatures from "./CoreFeatures";
import { renderWithProviders } from "@/test/utils";

describe("CoreFeatures", () => {
  it("renders section title", () => {
    renderWithProviders(<CoreFeatures />);
    expect(screen.getByText("Core Features")).toBeInTheDocument();
  });
});
