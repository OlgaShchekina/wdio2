const {expect} = require('chai');
const {URL_LOGIN,URL_Group, pageLoginSelectors, existingUser,pageNewGroup,pageNewGroupSelectors} = require('./register_data');

describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(existingUser.email);
    $(pageLoginSelectors.passwordInput).setValue(existingUser.password);
    $(pageLoginSelectors.submitButton).click();
    browser.pause(2000);
  });
  it('should open the Groups page', () => {
    browser.url(URL_Group);
  });

  it('should have the right title', () => {
    const actualTitle = browser.$(pageNewGroupSelectors.pageTitle).getText();
    const expectedTitle = pageNewGroup.title;
    expect(actualTitle).equal(expectedTitle);
  });
  it('should click Create new group button', () => {
    const element = browser.$( pageNewGroupSelectors.createNewGroupButton);
    element.click();
  });
  it('should fill in Group name field', () => {
    const element = browser.$(pageNewGroupSelectors.groupNameInput);
    element.setValue(pageNewGroup.groupName);
    browser.pause(1000);
  });
  it('should fill in Group description field', () => {
    const element = browser.$(pageNewGroupSelectors.groupDescriptionInput);
    element.setValue(pageNewGroup.groupDescription);
    browser.pause(1000);
  });
  it('should choose Access type dropdown', () => {
    const element = browser.$(pageNewGroupSelectors.accessTypeInput);
    element.selectByVisibleText(pageNewGroup.accessType);
    browser.pause(1000);
  });
  it('should click Create button', () => {
    const element = $(pageNewGroupSelectors.createButtonClick);
    element.click();
    browser.pause(1000);
  });
  it('should throw the message', () => {
    const actualH4text = browser.$(pageNewGroupSelectors.throwMessageText).getText();
    const expectedH4Text=pageNewGroup.throwMessage;
    expect(actualH4text).equal(expectedH4Text);
    browser.pause(2000);
  });


});

