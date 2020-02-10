
import {URL_LOGIN,pageLoginSelectors, existingUser} from'./register_data';

describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(existingUser.email);
    $(pageLoginSelectors.passwordInput).setValue(existingUser.password);
    $(pageLoginSelectors.submitButton).click();
    browser.pause(2000);
  });
  it('should open User page', () => {
    browser.url('https://stage.pasv.us/user');
    browser.pause(2000);
  });
  it('should choose Roles dropdown', () => {
    const element = browser.$(' //div[contains(@class,"css-1uccc91-singleValue")]');
   // element.click();
    element.selectByVisibleText('new');
    browser.pause(2000);
  });

});