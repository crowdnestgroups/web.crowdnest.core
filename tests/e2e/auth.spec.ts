import { expect, test } from "@playwright/test";

test("login flow navigates to dashboard", async ({ page }) => {
  await page.route("**/auth/sign-in", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        message: "ok",
        data: { accessToken: "test-token" },
      }),
    });
  });

  await page.goto("/login");
  await page.getByLabel("Email Address").fill("test@example.com");
  await page.getByLabel("Password").fill("Password123!");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL("**/dashboard");
});

test("login shows error on invalid credentials", async ({ page }) => {
  await page.route("**/auth/sign-in", async (route) => {
    await route.fulfill({
      status: 401,
      contentType: "application/json",
      body: JSON.stringify({
        message: "Invalid credentials",
      }),
    });
  });

  await page.goto("/login");
  await page.getByLabel("Email Address").fill("error@example.com");
  await page.getByLabel("Password").fill("Password123!");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Invalid credentials")).toBeVisible();
});

test("signup flow navigates to dashboard", async ({ page }) => {
  await page.route("**/auth/sign-up", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        message: "ok",
      }),
    });
  });

  await page.goto("/signup");
  await page.getByLabel("Email Address").fill("test@example.com");
  await page.getByLabel("Password").fill("Password123!");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL("**/dashboard");
});

test("signup shows error on duplicate email", async ({ page }) => {
  await page.route("**/auth/sign-up", async (route) => {
    await route.fulfill({
      status: 409,
      contentType: "application/json",
      body: JSON.stringify({
        message: "Email already exists",
      }),
    });
  });

  await page.goto("/signup");
  await page.getByLabel("Email Address").fill("error@example.com");
  await page.getByLabel("Password").fill("Password123!");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Email already exists")).toBeVisible();
});
