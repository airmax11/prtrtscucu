import { browser } from "protractor";
import {calculators} from "./pageObjects/calculator"
import { angularPage } from "./pageObjects/angularSite";

let calc = new calculators();
let ang = new angularPage();

describe('Protractor baby group', ()=> {
    it('Open Angular js website', async ()=> {
        await browser.get("http://juliemr.github.io/protractor-demo/");
        await calc.firstEditBox.sendKeys("7");
        await calc.secondEditBox.sendKeys("8");
        await calc.goButton.click();
        const test = await calc.ngb.getText();
        expect(test).toBe("15");
        console.log("Spec_1")
    
    });

    it('Angular website opening...', async ()=>{
        await browser.get('https://angularjs.org/');
        await ang.angulartLink.click();
        await ang.searchField.sendKeys('Test');
        await browser.sleep(2000);

    })
});
