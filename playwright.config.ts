import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  // timeout: 10000,
  retries: 0,
  reporter : [["html"], ["line"], ["allure-playwright"]],
  fullyParallel : true,
  use: {
    headless: true,
   // viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'on',
    baseURL: process.env.BASE_URL || 'https://www.hudl.com',
  },
});