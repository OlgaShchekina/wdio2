
import {URL_LOGIN,pageLoginSelectors, existingUser} from '../Register/register_data';


function loginAsAdmin() {
  browser.url(URL_LOGIN);
  $(pageLoginSelectors.emailInput).setValue(existingUser.email);
  $(pageLoginSelectors.passwordInput).setValue(existingUser.password);
  $(pageLoginSelectors.submitButton).click();
  browser.pause(5000);
}

function logoutAsAdmin() {
  browser.$('//a[@class="dropdown-toggle nav-link"]').click();
  browser.$('//button[contains(text(),"Logout")]').click();
  browser.pause(5000);
}



module.exports = {loginAsAdmin,logoutAsAdmin};