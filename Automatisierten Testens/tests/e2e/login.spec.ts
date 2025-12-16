import { test, expect } from '@playwright/test';




test ('Login with valid credentials', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});

test ('Login with invalid credentials', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin1');
await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

const errorMessage = page.getByRole('alert');
await expect(errorMessage).toHaveText('Invalid credentials'); 


    });

test ('Login with missing password', async ({ page }) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.getByRole('textbox', { name: 'Password' }).fill(' ');
await page.getByRole('button', { name: 'Login' }).click();
const requiredfield = page.locator('.oxd-input-field-error-message');
await expect(requiredfield).toHaveText('Required');


   });