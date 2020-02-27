import Page from '../Page';

class TestGroupPage extends Page {
  get title() {
    return browser.$('//h1');
  }

  get trainingLable() {
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

  get iKnow() {
    return $('//button[contains(text(),"I know")]');
  }

  get progress1() {
    return $('//div[@class="container"]//div[@aria-valuenow="0"]');
  }

  get progress2() {
    return $('//div[@class="container"]//div[@aria-valuenow="33"]');
  }

  get progress3() {
    return $('//div[@class="container"]//div[@aria-valuenow="66"]');
  }

  get initialValue1() {
    return $('//h3[contains(text(),"what is the numerator?")]');
  }

  get currentValue2() {
    return $('//h3[contains(text(),"What is the Quotient")]');
  }

  get currentValue3() {
    return $('//h3[contains(text(),"what is the numerator?")]');
  }




  open() {
    super.open('https://stage.pasv.us/flash/group/5e4827ebf6b40c003cc03c11');
  }
}

export default new TestGroupPage();