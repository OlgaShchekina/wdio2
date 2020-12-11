import {expect} from 'chai';
import LoginPage from '../Login/LoginPage';
import CardsPage from './CardsPage';
import TestGroupPage from './TestGroupPage';
import ProfilePage from '../profile/ProfilePage';
let progressBefore;
let progressAfter;



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

  it('should check if Training label is displayed', function () {
    expect(TestGroupPage.trainingLable.isDisplayed()).true;
  });
  it('should click Training link', function () {
    TestGroupPage.trainingLable.click();
    browser.pause(500);
  });
  it('should check if start button is displayed', function () {
    expect(TestGroupPage.startButton.isDisplayed()).true;
    browser.pause(1000);

  });

  it('should check if start button is clickable', function () {

    TestGroupPage.startButton.click();
    browser.pause(1000);

  });
  //
  // it('should check if button I know is displayed', function () {
  //   expect(TestGroupPage.iKnowButton.isDisplayed()).true;
  // });
  //
  // it('should check if "Show answer button" is displayed', () => {
  //   expect(TestGroupPage.showAnswerButton.isDisplayed()).true;
  // });
  //
  //
  // it('should check if button Get random next is displayed', function () {
  //   expect(TestGroupPage.getRandomNext.isDisplayed()).true;
  // });
  //
  // it('should click button Show Answer', function () {
  //   TestGroupPage.showAnswerButton.click();
  //   browser.pause(500);
  // });
  //
  // it('should check if Answer is displayed', function () {
  //   expect (TestGroupPage.answer.isDisplayed()).true;
  //   browser.pause(2000);
  //   TestGroupPage.getRandomNext.click();
  //   browser.pause(1000);
  // });
  //
  // while (//(it('should check progress bar before `I Know` click', () => {
  //   TestGroupPage.progressBar.isDisplayed())
  // {
  //   TestGroupPage.iKnowButton.click();
  // }
  // //
  // // it('should click `I Know` and check ib progress has changed from 0 to 33 ', () => {
  //   TestGroupPage.iKnowButton.click();
  //   progressAfter = TestGroupPage.progress2.getText();
  //   expect(progressAfter).to.not.equal(progressBefore);
  //   browser.pause(100);
  //
  // });
  // it('should click `I Know` and check ib progress has changed from 33 to 66', () => {
  //   TestGroupPage.iKnowButton.click();
  //   progressBefore = TestGroupPage.progress2.getText();
  //   progressAfter = TestGroupPage.progress3.getText();
  //   expect(progressAfter).to.not.equal(progressBefore);
  //   browser.pause(100);
  //
  // });
  //
  // it('should click `I Know` and exit to the start', () => {
  //   TestGroupPage.iKnowButton.click();
  //   browser.pause(1000);
  // });

  it('should check if start button is displayed ', function () {
    expect(TestGroupPage.startButton.isDisplayed()).true;
    browser.pause(1000);

  });







});