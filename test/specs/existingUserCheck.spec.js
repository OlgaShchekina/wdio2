import {expect} from 'chai';
import {URL_REGISTER, user, existingUser, pageRegisterSelectors} from './register_data';

describe('Register page', () => {
  before('Check existing user', () => {
    browser.url(URL_REGISTER);
    $(pageRegisterSelectors.firstNameInput).setValue(user.firstName);
    $(pageRegisterSelectors.lastNameInput).setValue(user.lastName);
    $(pageRegisterSelectors.phoneInput).setValue(user.phone);
    $(pageRegisterSelectors.emailInput).setValue(existingUser.email);
    $(pageRegisterSelectors.passwordInput).setValue(existingUser.password);
    $(pageRegisterSelectors.aboutInput).setValue(user.about);
    $(pageRegisterSelectors.goalsInput).setValue(user.goals);
    $(pageRegisterSelectors.englishLevelInput).selectByVisibleText(user.englishLevel);
    $(pageRegisterSelectors.submitButton).click();
    browser.pause(2000);
  });

  it('should throw the message', () => {
    const actualH4text = browser.$('//h4[@class="notification-title"]').getText();
    const expectedH4Text = 'User with this e-mail exists';
    expect(actualH4text).equal(expectedH4Text);
    browser.pause(1000);
  });
});






