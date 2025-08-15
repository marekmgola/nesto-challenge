import test, { expect } from "@playwright/test";

test('complete mortgage application flow', async ({ page }) => {
  // 1. Start from homepage and select a product
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Wait for and click the first product in the list
  const selectProductButton = page.getByTestId('select-product').first();
  await selectProductButton.waitFor({ state: 'visible' });
  await selectProductButton.click();

  // 2. Fill out the application form
  await page.waitForURL(/.*\/application\?.*status=NEW/);
  
  // Fill out applicant information

  const randomPhone = Math.floor(Math.random() * 1000000000000).toString().slice(0, 10); // Generate a random phone number

  await page.locator('#firstName-0').fill('John');
  await page.locator('#lastName-0').fill('Doe');
  await page.locator('#email-0').fill('john.doe@example.com');
  await page.locator('#phone-0').fill(randomPhone);

  // Submit the form
  await page.getByRole('button', { name: /finished/i }).click();

  // 3. Verify the application was created and navigate to My Applications
  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: /my applications/i }).click();

  // 4. Verify the application appears in the list
  await page.waitForURL(/.*\/my-applications/);
  
  // Wait for the applications list to load
  await page.getByTestId('application-list-item').first().waitFor({ state: 'visible' });

  // Verify the new application is in the list
  const applicationItems = await page.getByTestId('application-list-item').all( );
    expect(applicationItems.length).toBeGreaterThan(0);
    // Look for an application with the same phone number
    
      applicationItems.forEach(async (item) => {
        const textContent = await item.textContent();
        if (textContent && textContent.includes(randomPhone)) {
          expect(textContent).toContain('John Doe');

        }
      })
});
