import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import React from "react";
import PaymentRecordStructure from "./PaymentRecordStructure";
import { renderWithProviders } from "@/test/utils";

describe("PaymentRecordStructure", () => {
  it("renders section title", () => {
    renderWithProviders(<PaymentRecordStructure />);
    expect(screen.getByText("Payment Record Structure")).toBeInTheDocument();
  });
});
