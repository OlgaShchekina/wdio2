import { expect } from 'chai';
import LoginPage from './LoginPage';
import ProfilePage from '../profile/ProfilePage';
import {admin} from './login_data';

describe('LOGIN (positive)', () => {
  it('should open login page', () => {
    LoginPage.open();
    browser.pause(300);
  });

  it('should have correct title', () => {
    expect(LoginPage.h1.getText()).eq('User Login');
  });

  it('should fill out email field', () => {
    LoginPage.email.setValue(admin.email);
  });

  it('should fill out password field', () => {
    LoginPage.password.setValue(admin.password);
  });

  it('should submit form', () => {
    LoginPage.submitBtn.click();
    browser.pause(3000);
  });

  it('should check h1 text', () => {
    expect(ProfilePage.h1.getText()).eq('Test Testovich');
  });


});