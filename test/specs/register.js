
//const assert = require('assert');
const {expect} = require ('chai');
const email = Math.random()+'aaa@gmail.com';
const firstName = 'John';
const lastName = 'Smith';
const password = Math.random()+'11111';

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
    it('should fill first name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);

    });
    it('should fill last name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(lastName);

    });
    it('should fill  Cell phone numberfield', () => {
        const element = $('form input[name="phone"]');
        element.setValue('16503055577');
    });
    it('should fill  email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);

    });
    it('should fill password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);


    });
    it('should fill up about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('about me');
    });

    it('should fill goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('hello');
   });
    it('should choose English level from dropdown menu', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Native');
    });

    it('should be able to click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(3000);

    });
    it('should check if email is new', () => {
        const actual = $('h4').getText();
        const expected = 'User created successfully. Please check your email and verify it';
        //const expected2 = 'User with this e-mail exists';
        expect (actual).equal(expected);

    });
});

    describe('Login page', () => {
    it('should have the right login title', () => {
        browser.url('https://stage.pasv.us/user/login');
        const actual = browser.getTitle();
        const expected = 'Progress Monitor';
        expect (actual).equal(expected);
    });
    it('should have a correct title ', () => {
        const actual = $('h1').getText();
        const expected = 'User Login';
        expect (actual).equal(expected);

    });

    it('should fill Email field on Login page', () => {
        const element = $('form input[name = "email"]');
        element.setValue(email);
    });
    it('should fill password field on Login page', () => {
        const element = $('form input[name = "password"]');
        element.setValue(password);

    });
    it('should be able to click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(3000)
    });
    it('should have a correct title ', () => {
        const actual = $('h1').getText();
        const expected = 'You are a new user';
        expect (actual).equal(expected);
    });
    });










