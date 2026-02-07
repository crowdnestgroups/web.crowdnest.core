import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import { Button } from "@/components/ui/button";
import { renderWithProviders } from "@/test/utils";

describe("Button", () => {
  it("renders children by default", () => {
    renderWithProviders(<Button>Submit</Button>);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("shows loading spinner when loading", () => {
    renderWithProviders(<Button loading>Submit</Button>);
    expect(screen.getByRole("status", { name: "Loading" })).toBeInTheDocument();
  });
});
