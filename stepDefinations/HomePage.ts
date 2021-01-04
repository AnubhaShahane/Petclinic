import { Given, When, Then } from "cucumber";
import { HomePageObjects } from "../pageObjects/HomePageObject";
import { browser, protractor } from "protractor";
const log = require("../log/logs").default;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let HomePage = new HomePageObjects();

Given('User will navigate to Petclinic url', async function () 
{
    
    await browser.get(browser.baseUrl);  

});

Then('User should able to see Welcome to Petclinic message', async function () 
{
    await HomePage.HomePageClick();
    log.debug("User is on home page")
   
});
