import { expect, test } from "@playwright/test";

test("landing page renders core CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("CrowdNest")).toBeVisible();
  await expect(page.getByRole("link", { name: "Get Started" })).toHaveAttribute(
    "href",
    "/signup",
  );
});
