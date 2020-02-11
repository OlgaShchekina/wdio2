
import  {loginAsAdmin,logoutAsAdmin} from './actions';
import {URL_DAIRY} from '../url';
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