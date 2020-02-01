const HOST = 'https://stage.pasv.us';

const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;
const email = Math.random() + 'kakak@gmail.com';
const URL_DAIRY = `${HOST}/diary`;
const URL_GROUP = `${HOST}/group`;
const URL_FLASH = `${HOST}/flash`;

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
  messageTrowInput: 'h4'
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
  messageTrowInput: 'h4'
};

const pageDayReport = {
  title: 'Daily reports',
  checkbox1 : 'I need help',
  howWasYourDayText:'I made tests for the page create day report-2',
  throwMessage:'Diary created'

};
const pageDayReportsSelectors = {
  pageTitle: 'h1',
  buttonCreateReport: '//a[@class="btn btn-secondary"]',
  markCheckbox3: 'form input[id="input-3"]',
  markCheckbox4:'form input[id="input-4"]',
  moraleLevel: 'form select[name="morale"]',
  hoursInput: 'form input[name="hours"]',
  howWasYourDayInput:'form textarea[name="description"]',
  saveButton:'form button[type="submit"]',
  trowMessageText:'h4'
};
const pageNewGroup = {
  title: 'Groups',
  groupName: Math.random().toFixed(4) + 'HELLO',
  groupDescription:'New test group',
  accessType: 'All',
  throwMessage: 'Group created',
  title2:'Create new Group'
};
const pageNewGroupSelectors = {
  pageTitle: 'h1',
  createNewGroupButton: '//a[@class="btn btn-secondary"]',
  groupNameInput:'form input[name="name"]',
  groupDescriptionInput:'form input[name="description"]',
  accessTypeInput:'form select[name="accessType"]',
  createButtonClick:'form button[type="submit"]',
  throwMessageText:'h4',
  pageTitle2: 'h1'
};
const pageFlashGroup = {
  title: 'FlashCards',
  flashGroupName:'Testing',
  flashGroupDescription:'Group for testing',
  flashGroupThrowMessage:'Get all Flash cards groups',
  title2: 'Create Flash Group'

};
const pageFlashGroupSelectors = {
  flashGroupTitleInput:'h1',
  flashGroupButton:'//button[@class="btn btn-secondary"]',
  flashGroupNameInput:'form input[name="name"]',
  flashGroupDescriptionInput:'form input[name="description"]',
  flashGroupCreateButton:'//button[@class="btn btn-primary"]',
  flashGroupThrowMessage:'h4',
  h5: 'h5'




};
module.exports = {
  URL_REGISTER, URL_LOGIN, URL_DAIRY,URL_GROUP,URL_FLASH, user, existingUser,
  pageRegister, pageDayReportsSelectors, pageRegisterSelectors, pageLoginSelectors,
  pageConfirmationSelectors, pageLogin, pageConfirmation, pageDayReport,pageNewGroup,
  pageNewGroupSelectors,pageFlashGroup,pageFlashGroupSelectors
};