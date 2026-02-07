import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import PopOver from "@/components/ui/custom/PopOver";
import { renderWithProviders } from "@/test/utils";

describe("PopOver", () => {
  it("renders content when trigger is clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <PopOver>
        <div>Popover content</div>
      </PopOver>
    );

    await user.click(screen.getByRole("button", { name: "question actions" }));
    expect(await screen.findByText("Popover content")).toBeInTheDocument();
  });
});
