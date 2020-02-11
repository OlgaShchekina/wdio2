import Page from '../Page';
import {existingUser, pageRegisterSelectors, URL_REGISTER, user} from './register_data';

class RegisterPage extends Page {

  get title() {
    return $(pageRegisterSelectors.title);
  }
  get h1() {
    return $(pageRegisterSelectors.h1);
  }
  get description() {
    return $(pageRegisterSelectors.description);
  }
  get buttonText() {
    return $(pageRegisterSelectors.submitButton);
  }
  get firstName() {
    return $(pageRegisterSelectors.firstNameInput);
  }
  get lastName() {
    return $(pageRegisterSelectors.lastNameInput);
  }
  get phone() {
    return $(pageRegisterSelectors.phoneInput);
  }
  get email() {
    return $(pageRegisterSelectors.emailInput);
  }
  get password() {
    return $(pageRegisterSelectors.passwordInput);
  }
  get about() {
    return $(pageRegisterSelectors.aboutInput);
  }
  get goals() {
    return $(pageRegisterSelectors.goalsInput);
  }
  get englishLevel() {
    return $(pageRegisterSelectors.englishLevelInput);
  }
  get submitBtn() {
    return $(pageRegisterSelectors.submitButton);
  }
  get warning (){
    return $(pageRegisterSelectors.messageTrowInput);
  }



  open() {
    super.open(URL_REGISTER);
  }

  submit() {
    this.submitBtn.click();
  }


  registerExisting () {
    this.open();
    this.firstName.setValue(user.firstName);
    this.lastName.setValue(user.lastName);
    this.phone.setValue(user.phone);
    this.email.setValue(existingUser.email);
    this.password.setValue(existingUser.password);
    this.about.setValue(user.about);
    this.goals.setValue(user.goals);
    this.englishLevel.selectByVisibleText(user.englishLevel);
    this.submit();
    browser.pause(1000);
  }
}
export default new RegisterPage();