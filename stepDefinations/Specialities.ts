import { Given, When, Then } from "cucumber";
import { SpecialitiesObject} from "../pageObjects/SpecialitiesObject";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor";
import testdata from "../testdata/userData";
import { isAssertionExpression } from "typescript";
import { DriverProvider } from "protractor/built/driverProviders";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let HomeObj = new HomePageObjects();
let SpecialitiesObj= new SpecialitiesObject();

//browser.sleep(5000);
Given('User is on New speciality page', async function () {
    let pagename = await HomeObj.Specialties.getText();
    await HomeObj.Specialties.click();
    await console.log("page name is : " + pagename);

});
When('User clicks on add button', async function () {
    await SpecialitiesObj.AddBtn.click();

    
});

When('User enter Name in new speciality', async function () {
    let Name = testdata.userData.OwnerData.Name;
    await SpecialitiesObj.Name.sendKeys(Name);

    
});

When('User clicks on save button', async function () {
    await SpecialitiesObj.SaveBtn.click();
});

Then('New specialities should be added', async function () {
    await console.log("Message Displayed Successfully");
});

//second scenario

Given('User is on speciality page', async function () {
    let pagename = await HomeObj.Specialties.getText();
    //await HomeObj.Specialties.click();
    await console.log("page name is : " + pagename);

});
When('User clicks on edit button', async function () {
//    var value=document.getElementsByName("spec_name").values;
//    expect(value).toEqual("Given");
    await SpecialitiesObj.EditBtn.click();

    
});

When('User enters new name', async function (): Promise<void> {
    let EditName = testdata.userData.OwnerData.EditName;
    await SpecialitiesObj.EditName.clear();
    await SpecialitiesObj.EditName.sendKeys(EditName);

    
});

When('User clicks on update button', async function () {
    await SpecialitiesObj.UpdateBtn.click();
});

Then('Speciality should be updated', async function () {
    await console.log("Specialities are updated");
});


 //delete scenario

 //browser.sleep(5000);

When('User clicks on delete button', async function () {

    await SpecialitiesObj.DeleteBtn.click();
});

Then('Name should be deleted', async function () {
    await console.log("Name is deleted Successfully");
});
