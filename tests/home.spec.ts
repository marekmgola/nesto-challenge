import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('/');
  
  // Wait for the page to be fully loaded
  await page.waitForLoadState('networkidle');
  
  // Check if the page title is correct
  await expect(page).toHaveTitle(/Nesto/);
  
  // Check if some key elements are visible
  await expect(page.locator('header')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();
});
