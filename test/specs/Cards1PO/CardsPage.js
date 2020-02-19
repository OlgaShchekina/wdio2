import Page from '../Page';


class CardsPage extends Page {

  get title() {
    return browser.$('//h1');
  }

  get card() {
    return browser.$('//div[@qa="flash-group-list "]//a[@href="/flash/group/5e4827ebf6b40c003cc03c11"]');
  }
  get progress() {
    return $('')
  }
  open() {
    super.open('https://stage.pasv.us/flash');
  }
}

export default new CardsPage();