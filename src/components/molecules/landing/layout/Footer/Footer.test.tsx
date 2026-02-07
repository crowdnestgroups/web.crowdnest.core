import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";
import { renderWithProviders } from "@/test/utils";

describe("Footer", () => {
  it("renders contact section", () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
