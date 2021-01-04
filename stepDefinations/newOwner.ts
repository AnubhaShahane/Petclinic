import { Given, When, Then } from "cucumber";
import { newOwnerPageObject } from "../pageObjects/newOwnerPageObject";
import { browser, Button, by, element, ElementFinder, ExpectedConditions, protractor } from "protractor";



const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const log = require("../log/logs").default;

//var until=protractor.ExpectedConditions;
var EC = protractor.ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let OwnerPage = new newOwnerPageObject();

Given('User is on New Owner page', async function () 
{
    await OwnerPage.OwnerTabClick();
 
});


When('User enters the {string},{string},{string},{string},{string}', async function (First_Name:any,Last_Name:any,Address:any,City:any,Phone:any) 
{
     await OwnerPage.addNewOwnerData(First_Name,Last_Name,Address,City,Phone);

    
});


Then('User should be navigated to Owners page', async function ()
{
     await log.debug("Owner lis is displayed!")

    

});

Then('Newly added owner should be displayed at the end',async function()
{
    //await browser.refresh();
    await OwnerPage.verifyAddedOwner();

});


// Then('Pet details as Firstname, Birthdate and Type should be displayed ',async function()
// {
//     OwnerPage.PetDetails();

// });


When('User verifies a particular owner is present in the list',async function() 
{
    await browser.refresh();
    await OwnerPage.VerifyExistingOwner();    
    
});



