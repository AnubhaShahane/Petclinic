//import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { browser, protractor , element, by} from "protractor";

var EC = protractor.ExpectedConditions;
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const log = require("../log/logs").default;

export class HomePageObjects 
{
    private Home=element(by.css("ul.navbar-nav .glyphicon-home"));
    private VetTab=element(by.css('[href="/petclinic/vets"]'));
    private OwnersTab=element(by.css('[href="/petclinic/owners"]'));
    private PageTitle=element(by.css('div.xd-container h2'));

    async HomePageClick()
    {
        await this.Home.click();
    }
    

    async OwnerTabClick()
    {
        
         let PageTitle = this.PageTitle.getText();
         this.OwnersTab.click();
         await log.debug("Page name is " + PageTitle);
         
    }

    async VetTabClick()
    {
        await this.VetTab.click();
    }


}