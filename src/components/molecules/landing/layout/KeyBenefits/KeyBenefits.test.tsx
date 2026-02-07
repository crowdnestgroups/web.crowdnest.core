import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import KeyBenefits from "./KeyBenefits";
import { renderWithProviders } from "@/test/utils";

describe("KeyBenefits", () => {
  it("renders section title", () => {
    renderWithProviders(<KeyBenefits />);
    expect(screen.getByText("Key Benefits")).toBeInTheDocument();
  });
});
