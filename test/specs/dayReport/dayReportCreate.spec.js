
import {expect} from 'chai';
import {URL_LOGIN,pageLoginSelectors, existingUser, pageDayReport, pageDayReportsSelectors,} from '../register_data';

describe('CREATE DAY REPORT', () => {
  before('Login as admin', () => {
    browser.url(URL_LOGIN);
    $(pageLoginSelectors.emailInput).setValue(existingUser.email);
    $(pageLoginSelectors.passwordInput).setValue(existingUser.password);
    $(pageLoginSelectors.submitButton).click();
    browser.pause(300);
  });
  it('should click top menu Dairy', () => {
    browser.$('//div[@id="site-menu"]//a[@qa="diary-link"]').click();
  });

  it('should have the right title', () => {
    const actualTitle = $(pageDayReportsSelectors.pageTitle).getText();
    const expectedTitle = pageDayReport.title;
    expect(actualTitle).equal(expectedTitle);
  });
  it('should click Create day report button', () => {
    const element = $(pageDayReportsSelectors.buttonCreateReport);
    element.click();
    //browser.pause(1000);
  });
  it('should have the right title', () => {
    const actualTitle = browser.$('//h1').getText();
    const expectedTitle = 'Create day report';
    expect(actualTitle).equal(expectedTitle);
  });
  it('should mark checkbox Watched lectures', () => {
    const element = $( pageDayReportsSelectors.markCheckbox3);
    element.click();
    //browser.pause(1000);
  });
  it('should mark checkbox Read documentation', () => {
    const element = $( pageDayReportsSelectors.markCheckbox4);
    element.click();
   // browser.pause(1000);
  });
  it('should choose Morale level dropdown', () => {
    const element = $(pageDayReportsSelectors.moraleLevel);
    element.selectByVisibleText('9');
   // browser.pause(1000);
  });
  it('should fill Hours field ', () => {
    const element = $(pageDayReportsSelectors.hoursInput);
    element.setValue('4');
   // browser.pause(1000);
  });
  it('should fill in How Was Your Day field', () => {
    const element = $(pageDayReportsSelectors.howWasYourDayInput);
    element.setValue(pageDayReport.howWasYourDayText);
   // browser.pause(1000);
  });
  it('should click Save button', () => {
    const element = $(pageDayReportsSelectors.saveButton);
    element.click();
    browser.pause(1000);
  });
  it('should have the right title', () => {
    const actualTitle = browser.$('//h1').getText();
    const expectedTitle = 'Daily reports';
    expect(actualTitle).equal(expectedTitle);
    browser.pause(1000);
  });

  // it('should check the creator name', () => {
  //   const actual = browser.$('//div[contains(@class,"container")]//input[@name="description"]').getText();
  //   const expected = 'Olga Shchekina';
  //   expect(actual).equal(expected);
  //   browser.pause(1000);
  // });
  it('should check first item in list be equal created dairy', () => {
    const actual = browser.$('//div[@qa="day-report-item-0"]//div[@qa="description"]').getText();
    const expected = 'I have made tests for the page create day report-2';
    expect(actual).equal(expected);
    browser.pause(1000);
  });

});






