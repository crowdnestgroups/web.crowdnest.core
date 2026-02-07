import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import VerificationTransparency from "./VerificationTransparency";
import { renderWithProviders } from "@/test/utils";

describe("VerificationTransparency", () => {
  it("renders section title", () => {
    renderWithProviders(<VerificationTransparency />);
    expect(
      screen.getByText("Verification & Transparency")
    ).toBeInTheDocument();
  });
});
