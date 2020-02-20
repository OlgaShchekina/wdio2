import Page from '../Page';

class ProfilePage extends Page {

  get h1() {
    return browser.$('//h1');
  }
  get cardsLink(){
    return browser.$('//div[@id="site-menu"]//a[@qa="cards-link"]');
  }

}

export default new ProfilePage();