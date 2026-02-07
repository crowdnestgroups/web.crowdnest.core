import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { renderWithProviders } from "@/test/utils";

describe("Select", () => {
  it("renders trigger with placeholder", () => {
    renderWithProviders(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">A</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByText("Choose one")).toBeInTheDocument();
  });
});
