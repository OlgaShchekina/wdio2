import Page from '../Page';

class TestGroupPage extends Page {
  get title() {
    return browser.$('//h1');
  }
  get trainingLable(){
    return browser.$('//ul[@qa="flash-group-tabs"]//a[contains(text(),"Training")]');
  }
  get startButton() {
    return browser.$('//div//button[@class="btn btn-secondary btn-sm"]');
  }
  get progressBar() {
    return browser.$('//div[@class="progress"]');
  }
  get iKnowButton() {
    return browser.$('//div//button[contains(text(),"I know")]');
  }
  get showAnswerButton() {
    return browser.$('//div//button[contains(text(),"Show")]');
  }
  get getRandomNext() {
    return browser.$('//div//button[contains(text(),"random")]');
  }
  get answer() {
    return browser.$('//div[@class="result"]//p');
  }

  get iKnow(){
    return $('//button[contains(text(),"I know")]');
  }
  get progress(){
    return $('//div[@class="progress")]//div[@aria-valuenow="0"]');
  }



  open() {
    super.open('https://stage.pasv.us/flash/group/5e4827ebf6b40c003cc03c11');
  }
}

export default new TestGroupPage();