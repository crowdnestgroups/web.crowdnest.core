import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import { Icon } from "@/components/ui/Icon";
import { renderWithProviders } from "@/test/utils";

describe("Icon", () => {
  it("renders the requested icon", () => {
    renderWithProviders(<Icon name="logo" />);
    const img = screen.getByAltText("logo icon");
    expect(img).toHaveAttribute("src", "/icons/image/logo.png");
  });
});
