import {expect} from 'chai';
import {pageRegister, user, pageLogin,} from './register_data';
import RegisterPage from '../Register/RegisterPage';
import ProfilePage from '../profile/ProfilePage';
import LoginPage from '../Login/LoginPage';


describe('NEW USER REGISTER', () => {
  it('should open Register page', () => {
    RegisterPage.open();
    browser.pause(500);
  });
  it('should have correct title', () => {
    expect(RegisterPage.title.getText()).eq(pageRegister.title);
  });

  it('should have a correct h1 name', () => {
    expect(RegisterPage.h1.getText()).equal(pageRegister.h1);
  });

  it('should have a correct description', () => {
    expect(RegisterPage.description.getText()).equal(pageRegister.description);
  });

  it('should have a correct submit button text', () => {
    expect(RegisterPage.buttonText.getText()).equal(pageRegister.buttonText);
  });

  it('should fill out First name field', () => {
    RegisterPage.firstName.setValue(user.firstName);
  });

  it('should fill out Last name field', () => {
    RegisterPage.lastName.setValue(user.lastName);
  });

  it('should fill out Phone num field', () => {
    RegisterPage.phone.setValue(user.phone);
  });

  it('should fill out Email field', () => {
    RegisterPage.email.setValue(user.email);
  });

  it('should fill out Password field', () => {
    RegisterPage.password.setValue(user.password);
  });

  it('should fill out About field', () => {
    RegisterPage.about.setValue(user.about);
  });

  it('should fill out Goals field', () => {
    RegisterPage.goals.setValue(user.goals);
  });

  it('should choose English level dropdown', () => {
    RegisterPage.englishLevel.selectByVisibleText(user.englishLevel);
  });
  it('should Submit form', () => {
    RegisterPage.submit();
    browser.pause(500);
  });

});

describe('Login page', () => {
  it('should have correct h1 name', () => {
    expect(LoginPage.h1.getText()).eq(pageLogin.h1);
  });

  it('should fill out email field', () => {
    LoginPage.email.setValue(user.email);
  });

  it('should fill out password field', () => {
    LoginPage.password.setValue(user.password);
  });

  it('should submit form', () => {
    LoginPage.submit();
    browser.pause(500);
  });
});

describe('Confirmation register page', () => {
  it('should have a correct title', () => {
    expect(ProfilePage.h1.getText()).equal('You are a new user');
    browser.pause(500);
  });
});