const {expect} = require('chai');
const {URL_LOGIN,URL_DAIRY,pageLoginSelectors, existingUser} = require('../register_data');
const {loginAsAdmin,logoutAsAdmin} = require('./actions');

describe('CREATE DAY REPORT', () => {
    before('Login as admin', () => {
        loginAsAdmin();
    });
    it('should open Create day report page', () => {
        browser.url(URL_DAIRY);
        browser.pause(1000);
    });
    after('Logout', () =>{
        logoutAsAdmin();
        browser.pause(2000);
    });
    });