const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const email = Math.random().toFixed(4) + 'kakak@gmail.com';
const URL_DAIRY = `${HOST}/diary`;

const user = {
  firstName: 'John',
  lastName: 'Smith',
  password: 'password',
  phone: '14259195668',
  email: email,
  about: 'something about me',
  goals: 'eat sleep code',
  englishLevel: 'Native'
};
const existingUser = {
  password: '11111',
  email: 'olya6avg@gmail.com',
};
const pageRegister = {
  title: 'Progress Monitor',
  h1: 'User Register',
  description: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit',
  h4: 'User created successfully. Please check your email and verify it'
};

const pageRegisterSelectors = {
  h1: 'h1',
  description: 'p',
  submitButton: 'form button[type="submit"]',
  firstNameInput: 'form input[name="firstName"]',
  lastNameInput: 'form input[name="lastName"]',
  phoneInput: 'form input[name="phone"]',
  emailInput: 'form input[name="email"]',
  passwordInput: 'form input[name="password"]',
  aboutInput: 'form textarea[name="about"]',
  goalsInput: 'form textarea[name="goals"]',
  englishLevelInput: 'form select[name="englishLevel"]',
  messageTrowInput: '//h4[@class="notification-title"]',
};

const pageLogin = {
  title: 'Progress Monitor',
  h1: 'User Login',
};

const pageLoginSelectors = {
  emailInput: 'form input[name="email"]',
  passwordInput: 'form input[name="password"]',
  submitButton: 'form button[type="submit"]',

};

const pageConfirmation = {
  h1: 'You are a new user',
  h4: 'Auth success',
};
const pageConfirmationSelectors = {
  messageTrowInput: '//h4[@class="notification-title"]',
};

const pageDayReport = {
  title: 'Daily reports',
  checkbox1 : 'I need help',
  howWasYourDayText:'I made tests for the page create day report',
  throwMessageText:'Diary created'

};
const pageDayReportsSelectors = {
  pageTitle: '//h1[contains(text(),"Daily reports")]',
  buttonCreateReport: '//a[@class="btn btn-secondary"]',
  markCheckbox3:'//input[@id="input-[3]"]',
  markCheckbox4:'//input[@id="input-[4]"]',
  moraleLevel: '//select[@name="morale"]',
  hoursInput: '//input[@name="hours"]',
  howWasYourDayInput:'//textarea[@name="description"]',
  saveButton:'//button[@class="btn btn-primary"]',
  trowMessageText:'//h4[@class="notification-title"]'



};
module.exports = {
  URL_REGISTER, URL_LOGIN, URL_DAIRY, user, existingUser,
  pageRegister, pageDayReportsSelectors, pageRegisterSelectors, pageLoginSelectors,
  pageConfirmationSelectors, pageLogin, pageConfirmation, pageDayReport
};