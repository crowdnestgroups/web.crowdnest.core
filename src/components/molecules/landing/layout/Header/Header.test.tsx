import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";
import { renderWithProviders } from "@/test/utils";

describe("Header", () => {
  it("renders brand name", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("CrowdNest")).toBeInTheDocument();
  });
});
