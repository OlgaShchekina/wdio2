const {expect} = require('chai');
const {URL_LOGIN, pageLoginSelectors, existingUser,pageFlashGroup,pageFlashGroupSelectors} = require('../register_data');

describe('FLASH GROUP CREATE', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(existingUser.email);
    $(pageLoginSelectors.passwordInput).setValue(existingUser.password);
    $(pageLoginSelectors.submitButton).click();
    browser.pause(2000);
  });
  after('AFTER', () => {
    browser.pause(3000);
  });
  it('should click top menu Cards', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="cards-link"]').click();
  });

  it('should click button Create new FlashGroup', () => {
    browser.$('//button[@qa="flash-create-new-group"]').click();
    browser.pause(1000);
  });

  it('should check if model form is open ', () => {
   const element = browser.$('//div[contains(@class,"sidepanel")]');
   expect(element.isDisplayed()).true;
  });
  it('should check if model form is correct ', () => {
    const actual = browser.$('//div[contains(@class,"sidepanel")]//*[@class="modal-title"]').getText();
    const expected = 'Create Flash Group';
    expect(actual).equal(expected);
  });

  it('should fill in FlashGroup name field', () => {
    const element = browser.$('//div[contains(@class,"sidepanel")]//input[@name="name"]');
    element.setValue(pageFlashGroup.flashGroupName);
    browser.pause(1000);
  });
  it('should fill in FlashGroup description field', () => {
    const element = browser.$('//div[contains(@class,"sidepanel")]//input[@name="description"]');
    element.setValue(pageFlashGroup.flashGroupDescription);
    browser.pause(1000);
  });
  it('should click Create button', () => {
    const element = browser.$('//div[contains(@class,"sidepanel")]//button[@type="submit"]');
    element.click();
    browser.pause(1000);
  });
  it('should check first item in list be equal created group title', () => {
    const actual = browser.$('//div[@qa="flash-group-list "]//h4/a').getText();
    const expected = 'Testing';
    expect(actual).equal(expected);
    browser.pause(1000);
  });
  it('should check first item in list be equal created group description', () => {
    const actual = browser.$('//div[@qa="flash-group-list "]//div[@qa="description"]').getText();
    const expected = 'Group for testing';
    expect(actual).equal(expected);
    browser.pause(1000);
  });
  it('should verify created title group is clickable', () => {
    const element = browser.$('//div[@qa="flash-group-list "]//h4/a');
    element.click();
    browser.pause(1000);
  });
  it('should clicked group has correct title', () => {
    const actual = browser.$('//h1').getText();
    const expected = 'Testing';
    expect(actual).equal(expected);
    browser.pause(1000);
  });

});
    