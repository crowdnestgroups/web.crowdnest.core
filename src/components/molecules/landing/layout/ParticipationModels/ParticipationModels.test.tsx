import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import ParticipationModels from "./ParticipationModels";
import { renderWithProviders } from "@/test/utils";

describe("ParticipationModels", () => {
  it("renders section title", () => {
    renderWithProviders(<ParticipationModels />);
    expect(screen.getByText("Participation Models")).toBeInTheDocument();
  });
});
