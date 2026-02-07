import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import ProductSummary from "./ProductSummary";
import { renderWithProviders } from "@/test/utils";

describe("ProductSummary", () => {
  it("renders section title", () => {
    renderWithProviders(<ProductSummary />);
    expect(screen.getByText("Product Summary")).toBeInTheDocument();
  });
});
