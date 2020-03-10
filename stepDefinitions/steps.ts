import { Given, When, Then } from "cucumber";
import { calculators } from "../pageObjects/calculator";
import { browser } from "protractor";
import { angularPage } from "../pageObjects/angularSite";
import chai from "chai";

let calc = new calculators();
let ang = new angularPage();
let expect = chai.expect;

Given('I navigate to the {string} page', async (string)=> {
  if(string === 'calc') {
  await browser.get("https://juliemr.github.io/protractor-demo/");
  }
  else if(string === 'ang'){
    await browser.get('https://angularjs.org/');
  }
});

When('I make a calculation {string} plus {string}', async (string, string2) => {
  await calc.firstEditBox.sendKeys(string);
  await calc.secondEditBox.sendKeys(string2);
});

Then('I see the correct calculation results is {string}', async (string)=> {
    await calc.goButton.click();
    await calc.ngb.getText().then(function(text){
      expect(text).to.equal(string)
    })
});

When('I redirect to angular second site', async () => {
  await ang.angulartLink.click();
});

Then('I can enter {string} word into search field', async (string) => {
  await browser.sleep(2000);
  await ang.searchField.sendKeys('Test');
});