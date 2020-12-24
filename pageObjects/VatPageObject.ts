import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import locators from "../TestData/webObjects";



export class VatPageObj 
{
    AllVat:ElementFinder;
    AllTbl:ElementFinder;
    PageName:ElementFinder;

    constructor() 
    {
       
        this.AllVat= element(by.linkText("ALL"));
        this.AllTbl=element(by.xpath("//table[@class='table table-striped']/tbody"));
        this.PageName=element(by.xpath("//*[@class='container xd-container']/h2"));
    }

}