import {expect} from 'chai';
import LoginPage from '../Login/LoginPage';
import CardsPage from './CardsPage';
import TestGroupPage from './TestGroupPage';
import ProfilePage from '../profile/ProfilePage';
let progressBefore;
describe('CARDS TESTING WHEN TEST START AND NOT FINISHED', () => {
  before('login as a student', () => {
    LoginPage.login();

  });
  it('should  click Cards link', function () {
    ProfilePage.cardsLink.click();
    browser.pause(1000);
  });

  it('should open Cards page and check title', function () {
    expect(CardsPage.title.getText()).eq('FlashCards');
    browser.pause(1000);

  });

  it('should click element TestGroup', function () {
    // (CardsPage.card.isDisplayed()).true;
    CardsPage.card.click();
    browser.pause(500);
  });

  it('should check Group title', function () {
    expect(TestGroupPage.title.getText()).equal('TestGroup');
  });

  it('should check if Training lable is displayed', function () {
    expect(TestGroupPage.trainingLable.isDisplayed()).true;
  });
  it('should click Training link', function () {
    TestGroupPage.trainingLable.click();
    browser.pause(500);
  });
  it('should check if start button is displayed -click, if not -check progress bar', function () {
    if (TestGroupPage.startButton.isDisplayed()) {
      TestGroupPage.startButton.click();
      browser.pause(1000);
    } else {
      TestGroupPage.progressBar.isDisplayed();
    }
    browser.pause(1000);
  });
  it('should check if button I know is displayed', function () {
    expect(TestGroupPage.iKnowButton.isDisplayed()).true;
  });

  it('should check if button Show Answer is displayed', function () {
    expect(TestGroupPage.showAnswerButton3.isDisplayed()).true;
  });
  it('should check if button Get random next is displayed', function () {
    expect(TestGroupPage.getRandomNext.isDisplayed()).true;
  });
  it('should click button Show Answer', function () {
    TestGroupPage.showAnswerButton.click();
    browser.pause(500);
  });

  it('should check if Answer is displayed', function () {
    expect (TestGroupPage.answer.isDisplayed()).true;
    browser.pause(1000);
    TestGroupPage.getRandomNext.click();
    browser.pause(2000);
  });
  it('should check progress bar before `I Know` click', () => {
    progressBefore = TestGroupPage.progress.getText();
    browser.pause(2000);
  });
  it('should click `I Know`', () => {
    TestGroupPage.iKnowButton.click();
    browser.pause(5000);
  });
  it('should check if progress has changed', () => {
    //browser.refresh();
    const progressAfter = TestGroupPage.progress2.getText();
    expect(progressAfter).to.not.equal(progressBefore);
    browser.pause(1000);
  });
  it('should click `I Know`', () => {
    TestGroupPage.iKnowButton.click();
    browser.pause(1000);
    browser.refresh();
  });





});