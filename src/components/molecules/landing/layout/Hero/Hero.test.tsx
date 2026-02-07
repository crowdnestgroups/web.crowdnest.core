import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import Hero from "./Hero";
import { renderWithProviders } from "@/test/utils";

describe("Hero", () => {
  it("renders section headline", () => {
    renderWithProviders(<Hero />);
    expect(
      screen.getByText("Transparent Collection Management")
    ).toBeInTheDocument();
  });
});
