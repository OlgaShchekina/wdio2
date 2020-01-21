const {URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLoginSelectors, pageConfirmationSelectors, pageLogin, pageConfirmation} = require('./register_data');

const {expect} = require('chai');

describe('Register page', () => {
  it('should have the right title', () => {
    browser.url(URL_REGISTER);
    const actualTitle = browser.getTitle();
    const expectedTitle = pageRegister.title;
    expect(actualTitle).equal(expectedTitle);
  });

  it('should have a correct title', () => {
    const actualH1text = $(pageRegisterSelectors.h1).getText();
    const expectedH1Text = pageRegister.h1;
    expect(actualH1text).equal(expectedH1Text);
  });

  it('should have a correct description', () => {
    const actual = $(pageRegisterSelectors.description).getText();
    const expected = pageRegister.description;
    expect(actual).equal(expected);
  });

  it('should have a correct submit button text', () => {
    const actual = $(pageRegisterSelectors.submitButton).getText();
    const expected = pageRegister.buttonText;
    expect(actual).equal(expected);
  });

  it('should fill in first name field', () => {
    const element = $(pageRegisterSelectors.firstNameInput);
    element.setValue(user.firstName);
  });

  it('should fill in last name field', () => {
    const element = $(pageRegisterSelectors.lastNameInput);
    element.setValue(user.lastName);
  });

  it('should fill in phone num field', () => {
    const element = $(pageRegisterSelectors.phoneInput);
    element.setValue(user.phone);
  });

  it('should fill in email field', () => {
    const element = $(pageRegisterSelectors.emailInput);
    element.setValue(user.email);
  });

  it('should fill in password field', () => {
    const element = $(pageRegisterSelectors.passwordInput);
    element.setValue(user.password);
  });

  it('should fill in about field', () => {
    const element = $(pageRegisterSelectors.aboutInput);
    element.setValue(user.about);
  });

  it('should fill in goals field', () => {
    const element = $(pageRegisterSelectors.goalsInput);
    element.setValue(user.goals);
  });

  it('should choose English level dropdown', () => {
    const element = $(pageRegisterSelectors.englishLevelInput);
    element.selectByVisibleText(user.englishLevel);
  });

  it('should click Submit button', () => {
    const element = $(pageRegisterSelectors.submitButton);
    element.click();
    browser.pause(2000);
  });
  it('should throw the message', () => {
    const actualH4text = browser.$(pageRegisterSelectors.messageTrowInput).getText();
    const expectedH4Text = pageRegister.h4;
    expect(actualH4text).equal(expectedH4Text);
    browser.pause(1000);
  });
});

describe('Login page', () => {
  it('should have the right title', () => {
    browser.url(URL_LOGIN);
    const actualTitle = browser.getTitle();
    const expectedTitle = pageLogin.title;
    expect(actualTitle).equal(expectedTitle);
  });

  it('should have a correct title', () => {
    const actualH1text = $('h1').getText();
    const expectedH1Text = pageLogin.h1;
    expect(actualH1text).equal(expectedH1Text);
  });

  it('should fill in email field', () => {
    const element = $(pageLoginSelectors.emailInput);
    element.setValue(user.email);
  });

  it('should fill in password field', () => {
    const element = $(pageLoginSelectors.passwordInput);
    element.setValue(user.password);
  });

  it('should click Login button', () => {
    const element = $(pageLoginSelectors.submitButton);
    element.click();
    browser.pause(1000);
  });

});

describe('Confirmation register page', () => {
  it('should have a correct title', () => {
    const actualH1text = $('h1').getText();
    const expectedH1Text = pageConfirmation.h1;
    expect(actualH1text).equal(expectedH1Text);
    browser.pause(1000);
  });
  it('should throw the message', () => {
    const actualH4text = browser.$(pageConfirmationSelectors.messageTrowInput).getText();
    const expectedH4Text = pageConfirmation.h4;
    expect(actualH4text).equal(expectedH4Text);
    browser.pause(1000);
  });
});