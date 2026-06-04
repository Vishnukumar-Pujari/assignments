import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000
  },

  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {

    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',

    video: 'retain-on-failure',

    viewport: {
      width: 1280,
      height: 720
    }
  },

  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }

  ]

});