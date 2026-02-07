import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { renderWithProviders } from "@/test/utils";

describe("NavigationMenu", () => {
  it("respects viewport setting", () => {
    const { container } = render(
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>Content</NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    const root = container.querySelector('[data-slot="navigation-menu"]');
    expect(root).toHaveAttribute("data-viewport", "false");
  });
});
