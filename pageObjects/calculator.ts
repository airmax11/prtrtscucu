import { ElementFinder, element, by } from "protractor";

export class calculators {

    firstEditBox: ElementFinder;
    secondEditBox: ElementFinder;
    goButton: ElementFinder;
    ngb: ElementFinder;

    constructor() {
        this.firstEditBox = element(by.model("first"));
        this.secondEditBox = element(by.model("second"));
        this.goButton = element(by.id("gobutton"));
        this.ngb = element(by.css("h2[class='ng-binding']"));

    }

}