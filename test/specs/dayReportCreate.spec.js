const {expect} = require('chai');
const {URL_LOGIN, pageLoginSelectors, existingUser, pageDairy, pageDailyReportsSelectors} = require('./register_data');

describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(existingUser.email);
    $(pageLoginSelectors.passwordInput).setValue(existingUser.password);
    $(pageLoginSelectors.submitButton).click();
    browser.pause(2000);
  });

  it('should open the Dairy page', () => {
    browser.url('https://stage.pasv.us/diary/');
  });

  it('should have the right title', () => {
    const actualTitle = browser.$(pageDailyReportsSelectors.pageTitle).getText();
    const expectedTitle = pageDairy.title;
    expect(actualTitle).equal(expectedTitle);
  });
  it('should have a correct Create button text', () => {
    const actual = browser.$(pageDailyReportsSelectors.buttonCreateReport).getText();
    const expected = pageDairy.createButtonText;
    expect(actual).equal(expected);
  });
  it('should click Create day report button', () => {
    const element = $(pageDailyReportsSelectors.buttonCreateReport);
    element.click();
    browser.pause(5000);
  });


});






