const {expect} = require('chai');
const {URL_LOGIN, URL_DAIRY,pageLoginSelectors, existingUser, pageDayReport, pageDayReportsSelectors,} = require('./register_data');

describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(existingUser.email);
    $(pageLoginSelectors.passwordInput).setValue(existingUser.password);
    $(pageLoginSelectors.submitButton).click();
    browser.pause(2000);
  });

  it('should open the Dairy page', () => {
    browser.url(URL_DAIRY);
  });

  it('should have the right title', () => {
    const actualTitle = browser.$(pageDayReportsSelectors.pageTitle).getText();
    const expectedTitle = pageDayReport.title;
    expect(actualTitle).equal(expectedTitle);
  });
  it('should click Create day report button', () => {
    const element = $(pageDayReportsSelectors.buttonCreateReport);
    element.click();
    browser.pause(1000);
  });
  it('should mark checkbox Watched lectures', () => {
    const element = browser.$( pageDayReportsSelectors.markCheckbox3);
    element.click();
    browser.pause(1000);
  });
  it('should mark checkbox Read documentation', () => {
    const element = browser.$( pageDayReportsSelectors.markCheckbox4);
    element.click();
    browser.pause(1000);
  });
  it('should choose Morale level dropdown', () => {
    const element = browser.$(pageDayReportsSelectors.moraleLevel);
    element.selectByVisibleText('9');
    browser.pause(1000);
  });
  it('should fill Hours field ', () => {
    const element = browser.$(pageDayReportsSelectors.hoursInput);
    element.setValue('4');
    browser.pause(1000);
  });
  it('should fill in How Was Your Day field', () => {
    const element = browser.$(pageDayReportsSelectors.howWasYourDayInput);
    element.setValue(pageDayReport.howWasYourDayText);
    browser.pause(1000);
  });
  it('should click Save button', () => {
    const element = $(pageDayReportsSelectors.saveButton);
    element.click();
    browser.pause(2000);
  });
  it('should throw the message', () => {
    const actualH4text = browser.$(pageDayReportsSelectors.trowMessageText).getText();
    const expectedH4Text=pageDayReport.throwMessage;
    expect(actualH4text).equal(expectedH4Text);
    browser.pause(2000);
  });


});






