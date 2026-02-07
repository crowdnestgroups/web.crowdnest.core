import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import TransparencyFeed from "./TransparencyFeed";
import { renderWithProviders } from "@/test/utils";

describe("TransparencyFeed", () => {
  it("renders section title", () => {
    renderWithProviders(<TransparencyFeed />);
    expect(screen.getByText("Transparency Feed")).toBeInTheDocument();
  });
});
