import { Given, When, Then } from "cucumber";
import { newOwnerPageObject } from "../pageObjects/newOwnerPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, Button, by, element, ElementFinder, ExpectedConditions, protractor } from "protractor";
import testdata from "../testdata/userData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

//var until=protractor.ExpectedConditions;
var EC = protractor.ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let HomeObj = new HomePageObjects();
let newOwnerObj = new newOwnerPageObject();

Given('User is on New Owner page', async function () 
{
    let pagename = await newOwnerObj.PageName.getText();
    await HomeObj.Owners.click();
    //await HomeObj.AllOwners.click();
    await newOwnerObj.AddNewOwner.click();
    
    await console.log("page name is : " + pagename);
});


Then('User enter valid First Name, Last Name, Address, City, Telephone', async function () 
{

    let firstName = testdata.userData.OwnerData.FirstName;
    await newOwnerObj.FirstName.sendKeys(firstName);

    let lastName = testdata.userData.OwnerData.LastName;
    await newOwnerObj.LastName.sendKeys(lastName);

    let address = testdata.userData.OwnerData.Address;
    await newOwnerObj.Address.sendKeys(address);

    let city = testdata.userData.OwnerData.City;
    await newOwnerObj.City.sendKeys(city);

    let telephone = testdata.userData.OwnerData.Telephone;
    await newOwnerObj.Telephone.sendKeys(telephone);
});


When('User clicks on Add Owner button on New Owner page', async function () 
{
    await newOwnerObj.AddOwnerButton.click();
    await browser.refresh();
});

Then('User should be navigated to owners page and added owner should be displayed at the end', async function ()
{
    await HomeObj.Owners.click();
    await newOwnerObj.AllList.click();
    
    //await browser.refresh();
    await browser.wait(EC.visibilityOf(HomeObj.PageName),2000,'Element is taking longer time than expected');
    let PageName=await HomeObj.PageName.getText();
    await console.log("Pagename after navigating to owner page is:",PageName);

    //refresh
    //await browser.refresh();
    
    await browser.wait(EC.visibilityOf(newOwnerObj.ListTbl),2000,'Element is taking longer time than expected');
    let ownerDetails=await newOwnerObj.ListTbl.all(by.tagName("tr")).last();
    await browser.actions().mouseMove(ownerDetails).perform();
    let ownerName=await ownerDetails.getText();
    

    await browser.wait(EC.elementToBeClickable(ownerDetails),2000,' Element is taking longer time than expected');
    await console.log("New added owner name is:",ownerName);

   


    
   

    //await browser.refresh();
    

    
    

});




When('User searches particular owner name',async function() 
{

    // await HomeObj.Owners.click();
    // await newOwnerObj.AllList.click();
    //let petnametext =await newOwnerObj.PetName.getText();

    let count = await newOwnerObj.ListTbl.all(by.tagName("tr")).count();
    console.log("Count is:",count);

    for (let i = 1; i <= count; i++) 
    {
        let owners = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
        console.log(owners);
        
        if (owners == "Peter McTavish") 
        {
            await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
            
            //await console.log("Pet name of selected owner is :",petnametext);
            //await browser.wait(EC.presenceOf(newOwnerObj.ListTbl));
            
            break;
        }
        else 
        {
            //console.log("That user is not present in list")
            
        }

    }
    


    
});

Then('All details should be displayed',async function()
{
    await console.log("Details of owners are displayed!!");

});


