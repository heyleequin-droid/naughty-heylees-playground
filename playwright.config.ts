import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/visual',
  timeout: 30_000,
  expect: { timeout: 5000 },
  retries: 0,
  reporter: 'list',
  use: {
    headless: true,
    viewport: { width: 1200, height: 800 },
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: 'python3 -m http.server --directory public 8000',
    url: 'http://localhost:8000',
    timeout: 30_000,
    reuseExistingServer: false,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
