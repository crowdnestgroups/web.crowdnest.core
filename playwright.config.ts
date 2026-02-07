import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_TEST_BASE_URL ?? "http://127.0.0.1:3000";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  webServer: process.env.PLAYWRIGHT_TEST_BASE_URL
    ? undefined
    : {
        command: "pnpm dev -- --hostname 127.0.0.1 --port 3000",
        port: 3000,
        reuseExistingServer: !process.env.CI,
      },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
