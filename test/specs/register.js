
const assert = require('assert');
const {expect} = require ('chai');
//const email = 'www@gmail.com'//Math.random()+'olya6avg@gmail.com';
//const firstName = 'John';

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
        element.setValue('John');
    });
    it('should fill last name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue('Smith');
    });
    it('should fill  email field', () => {
        const element = $('form input[name="email"]');
        element.setValue('aaa@gmail.com');
    });
    it('should fill  Cell phone numberfield', () => {
        const element = $('form input[name="phone"]');
        element.setValue('16503055577');
    });
    it('should fill password field', () => {
        const element = $('form input[name="password"]');
        element.setValue('11111');

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

    it('should choose click button', () => {
        const element = $('form button[type="submit"]').click();
        //element.click();

    });
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
        element.setValue('aaa@gmail.com');

    });
    it('should fill Email field on Login page', () => {
        const element = $('form input[name = "password"]');
        element.setValue('11111');

    });
    it('should choose click button', () => {
        const element = $('form button[type="submit"]').click();
        browser.pause(3000);
    });





// проверить что страница логин login title
    //email
    //ligin
   // wait
    //title first name + last name
});