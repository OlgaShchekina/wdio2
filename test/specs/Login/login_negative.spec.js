import { expect } from 'chai';
import LoginPage from './LoginPage';
import {admin} from './login_data';

describe('LOGIN (negative)', () => {
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
    LoginPage.password.setValue('11111+');
  });

  it('should submit form', () => {
    LoginPage.submit();
    browser.pause(700);
  });

  it('should check h1 text', () => {
    expect(LoginPage.h1.getText()).eq('User Login');
  });

});