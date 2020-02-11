import {expect} from 'chai';
import {pageRegister} from './register_data';
import RegisterPage from './RegisterPage';

describe('EXISTING USER REGISTER', () => {
  before('Check existing user', () => {
    RegisterPage.registerExisting();
  });
  it('should have the Register page name', () => {
    expect(RegisterPage.h1.getText()).equal(pageRegister.h1);
  });

  it('should throw the message', () => {
    expect(RegisterPage.warning.getText()).equal('User with this e-mail exists');
    browser.pause(500);
  });
});






