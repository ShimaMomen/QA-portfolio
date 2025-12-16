import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';


test.describe('Login tests', () => {

  test('successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

  test('invalid login shows error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wrong', 'wrong');

    await expect(await loginPage.getErrorMessage())
      .toContain('Username and password do not match');
  });

});


  



