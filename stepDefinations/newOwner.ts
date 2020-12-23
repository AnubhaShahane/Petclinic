import { Given, When, Then } from "cucumber";
import { newOwnerPageObject } from "../pageObjects/newOwnerPageObjects";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor";
import testdata from "../testdata/userData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let HomeObj = new HomePageObjects();
let newOwnerObj = new newOwnerPageObject();

Given('User is on New Owner page', async function () {
    let pagename = await HomeObj.PageName.getText();
    await HomeObj.Owners.click();
    await HomeObj.AddNewOwner.click();
    await console.log("page name is : " + pagename);
});
// When('User enter valid First Name, Last Name, Address, City, Telephone', async function () {
//     let firstName = testdata.userData.OwnerData.FirstName;
//     await newOwnerObj.FirstName.sendKeys(firstName);

//     let lastName = testdata.userData.OwnerData.LastName;
//     await newOwnerObj.LastName.sendKeys(lastName);

//     let address = testdata.userData.OwnerData.Address;
//     await newOwnerObj.Address.sendKeys(address);

//     let city = testdata.userData.OwnerData.City;
//     await newOwnerObj.City.sendKeys(city);

//     let telephone = testdata.userData.OwnerData.Telephone;
//     await newOwnerObj.Telephone.sendKeys(telephone);
// });
// When('User clicks on Add Owner button on New Owner page', async function () {
//     await newOwnerObj.AddOwnerButton.click();
// });
// Then('New Owner added successfully message should be displayed', async function () {
//     await console.log("Message Displayed Successfully");
// });


When('user clicks on list of owner',async function(){
    await HomeObj.Owners.click();
    await newOwnerObj.AllList.click();

});

When('User searches particular owner name',async function() {

    let OwnList= newOwnerObj.ArrayListElement.all(by.tagName("tr")).first().all(by.tagName("td"));
    let OwnerNameList= OwnList.getText();
    expect(OwnerNameList).toMatch("George Franklin"); 
    
    //ArrayList aList= newOwnerObj.ArrayListElement;
    //await newOwnerObj.SearchOwner.getText();

    
});
When('User clicks on that owner',async function() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(newOwnerObj.SearchOwner));
    
    await newOwnerObj.SearchOwner.click();
    
});

Then('All details of pet should be displayed and Pet name, Birthdate and Type should be displayed',async function () {
    await newOwnerObj.BirthDate.getText();

    await newOwnerObj.PetName.getText();

    await newOwnerObj.Type.getText();
    
});