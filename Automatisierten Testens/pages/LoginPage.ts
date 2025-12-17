import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

readonly page: Page;
readonly usernameInpur : Locator;
readonly passwordInput: Locator;
readonly loginButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.usernameInpur = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
}
async goto() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }




    }

