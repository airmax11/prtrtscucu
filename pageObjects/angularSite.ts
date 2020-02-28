import { ElementFinder, element, by } from "protractor";


export class angularPage {

    angulartLink: ElementFinder;
    searchField:ElementFinder;

    constructor() {
        this.angulartLink = element(by.linkText('angular.io'));
        this.searchField = element(by.css('input[type="search"]'));
    }



}