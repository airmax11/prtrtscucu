import { Given, When, Then } from "cucumber";
import {calculators} from "../pageObjects/calculator";
import { browser } from "protractor";

expect

let calc = new calculators();

Given('I navigate to the main calculation page', async ()=> {
  await browser.get("http://juliemr.github.io/protractor-demo/");
});

When('I make a calculation {string} plus {string}', async (string, string2) => {
  await calc.firstEditBox.sendKeys(string);
  await calc.secondEditBox.sendKeys(string2);
});

Then('I see the correct calculation results is {string}', async (string)=> {
    await calc.goButton.click();
    await expect(calc.ngb.getText()).toBe(string);
});

// Given('I navigate to the angular site', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// When('I redirect to angular second site', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// Then('I can enter {string} word into search field', function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });