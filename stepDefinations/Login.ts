import { Given, When, Then } from "cucumber";
import { LoginPageObjects } from "../pageObjects/LoginPageObject";
import { browser, by, element, ElementFinder, protractor } from "protractor";

const log = require("../log/logs").default;
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let LoginPage = new LoginPageObjects();
var EC = protractor.ExpectedConditions;

Given('User will navigate to Petclinic url', async function () 
{
    
    await browser.get(browser.baseUrl);

    //await browser.wait(EC.urlIs(baseUrl),3000);
    //browser.get('http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/');
    

});

Then('User should able to see Welcome to Petclinic message', async function () 
{
    browser.wait(EC.visibilityOf(LoginPage.WelcomeMsg),4000);
    await LoginPage.WelcomeMsg.isDisplayed().then(async function (result) 
    {
        await expect(true).to.equal(result);
    });
});

Then('User should able to see title of the webpage', async function () 
{
    let title = await browser.getTitle();
     //log.debug("WebPage Title is " + title);
     console.log("WebPage Title is " + title);
    await expect("SpringPetclinicAngular").to.equal(title);
});
