import {expect} from 'chai';
import {pageLoginSelectors, existingUser,pageNewGroup,pageNewGroupSelectors} from '../Register/register_data';
import {URL_LOGIN,URL_GROUP} from '../url';
describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(existingUser.email);
    $(pageLoginSelectors.passwordInput).setValue(existingUser.password);
    $(pageLoginSelectors.submitButton).click();
    browser.pause(2000);
  });
  it('should open the Groups page', () => {
    browser.url(URL_GROUP);
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
  it('should have the right title', () => {
    const actualTitle = browser.$(pageNewGroupSelectors.pageTitle2).getText();
    const expectedTitle = pageNewGroup.title2;
    expect(actualTitle).equal(expectedTitle);
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
  // it('should throw the message', () => {
  //   const actualH4text = browser.$(pageNewGroupSelectors.throwMessageText).getText();
  //   const expectedH4Text=pageNewGroup.throwMessage;
  //   expect(actualH4text).equal(expectedH4Text);
  //   browser.pause(2000);
  // });
  // it('should find created group', () => {
  //   const element = browser.$$('h4');
  //   let num = element.find(el => el === pageNewGroup.groupName);
  //   expect(num).equal(pageNewGroup.groupName);
  //
  //   browser.pause(2000);
  // });



});

