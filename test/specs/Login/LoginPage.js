import Page from '../Page';
import {admin,pageLoginSelectors} from './login_data';

class LoginPage extends Page {
  get email() {
    return $(pageLoginSelectors.emailInput);
  }

  get password() {
    return $(pageLoginSelectors.passwordInput);
  }

  get submitBtn() {
    return $(pageLoginSelectors.submitButton);
  }

  get h1() {
    return $(pageLoginSelectors.h1);
  }
  get loginLink() {
    return $('//div[@id="site-menu"]//a[@qa="cards-link"]')
  }
  get cardsLink(){
    return browser.$('//div[@id="site-menu"]//a[@qa="cards-link"]');
  }

  login() {
    this.open();
    this.email.setValue(admin.email);
    this.password.setValue(admin.password);
    this.submit();
    browser.pause(3000);
  }

  open() {
    super.open('https://stage.pasv.us/user/login');
  }

  submit() {
    this.submitBtn.click();
  }
}
export default new LoginPage();