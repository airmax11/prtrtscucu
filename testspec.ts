import { browser, element, by } from "protractor";

describe('Protractor baby group',function() {
    it('Open Angular js website', function() {
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("7");
        element(by.id("gobutton")).click();
        const test = element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log(text);
            return text;
        });
        expect(test).toBe("10");
        console.log("Spec_1")
    
    });
});