
const assert = require('assert');
const {expect} = require ('chai');
const email = Math.random()+'olya6avg@gmail.com';
const firstName = 'John';

describe('Register page', () => {
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register');
        const actual = browser.getTitle();
        const expected = 'Progress Monitor';
        expect (actual).equal(expected);
    });
    it('should have a correct title ', () => {
        const actual = $('h1').getText();
        const expected = 'User Register';
        expect (actual).equal(expected);

    });
    it('should have a correct description ', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect (actual).equal(expected);
    });
    it('should have a correct submit button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect (actual).equal(expected);
    });
    it('should fill first name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);
    });
    it('should fill last name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue('Smith');
    });
    it('should fill  email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
    });
    it('should fill passworn field', () => {
        const element = $('form input[name="password"]');
        element.setValue('wrereerrg');

    });
    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('about me');

    });
    it('should fill goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('wrereerrg');
    });
    it('should choose English level from dropdown menu', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Native');

    });
    it('should click button submit', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });

// проверить что страница логин login title
    //email
    //ligin
   // wait
    //title first name + last name
});