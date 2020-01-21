const {expect} = require('chai');
const {URL_LOGIN, URL_FLASH, pageLoginSelectors, existingUser,pageFlashGroup,pageFlashGroupSelectors} = require('./register_data');

describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(existingUser.email);
    $(pageLoginSelectors.passwordInput).setValue(existingUser.password);
    $(pageLoginSelectors.submitButton).click();
    browser.pause(2000);
  });
  it('should open Flash Cards page', () => {
    browser.url(URL_FLASH);
  });

  it('should have the right page title', () => {
    const actualTitle = $(pageFlashGroupSelectors.flashGroupTitleInput).getText();
    const expectedTitle = pageFlashGroup.title;
    expect(actualTitle).equal(expectedTitle);
  });
  it('should click Create new FlashGroup button', () => {
    const element = browser.$(pageFlashGroupSelectors.flashGroupButton);
    element.click();
    browser.pause(1000);
  });
  it('should fill in FlashGroup name field', () => {
    const element = browser.$(pageFlashGroupSelectors.flashGroupNameInput);
    element.setValue(pageFlashGroup.flashGroupName);
    browser.pause(1000);
  });
  it('should fill in FlashGroup description field', () => {
    const element = browser.$(pageFlashGroupSelectors.flashGroupDescriptionInput);
    element.setValue(pageFlashGroup.flashGroupDescription);
    browser.pause(1000);
  });
  it('should click Create button', () => {
    const element = browser.$(pageFlashGroupSelectors.flashGroupCreateButton);
    element.click();
    browser.pause(1000);
  });
  it('should throw the message', () => {
    const actualH4text = browser.$(pageFlashGroupSelectors.flashGroupThrowMessage).getText();
    const expectedH4Text = pageFlashGroup.flashGroupThrowMessage;
    expect(actualH4text).equal(expectedH4Text);
    browser.pause(1000);
  });

});
    