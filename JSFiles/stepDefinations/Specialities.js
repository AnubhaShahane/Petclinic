// import { Given, When, Then } from "cucumber";
// import { SpecialitiesObject} from "../pageObjects/SpecialitiesObject";
// import { HomePageObjects } from "../pageObjects/HomePageObject";
// import { browser, by, element, ElementFinder, protractor } from "protractor";
// import testdata from "../testdata/userData";
// import { isAssertionExpression } from "typescript";
// import { DriverProvider } from "protractor/built/driverProviders";
// const chai = require("chai").use(require("chai-as-promised"));
// const expect = chai.expect;
// var { setDefaultTimeout } = require('cucumber');
// setDefaultTimeout(50 * 1000);
// let HomeObj = new HomePageObjects();
// let SpecialitiesObj= new SpecialitiesObject();
// //browser.sleep(5000);
// Given('User is on New speciality page', async function () {
//     let pagename = await HomeObj.Specialties.getText();
//     await HomeObj.Specialties.click();
//     await console.log("page name is : " + pagename);
// });
// When('User clicks on add button', async function () 
// {
//     await SpecialitiesObj.AddBtn.click();
// });
// When('User enter Name in new speciality', async function () {
//     let Name = testdata.userData.OwnerData.Name;
//     await SpecialitiesObj.Name.sendKeys(Name);
// });
// When('User clicks on save button', async function () {
//     await SpecialitiesObj.SaveBtn.click();
// });
// Then('New specialities should be added', async function () {
//     await console.log("Message Displayed Successfully");
// });
// //second scenario
// Given('User is on speciality page', async function () {
//     let pagename = await HomeObj.Specialties.getText();
//     //await HomeObj.Specialties.click();
//     await console.log("page name is : " + pagename);
// });
// When('User clicks on edit button', async function () {
// //    var value=document.getElementsByName("spec_name").values;
// //    expect(value).toEqual("Given");
//     await SpecialitiesObj.EditBtn.click();
// });
// When('User enters new name', async function () 
// {
//     let EditName = testdata.userData.OwnerData.EditName;
//     await SpecialitiesObj.EditName.clear();
//     await SpecialitiesObj.EditName.sendKeys(EditName);
// });
// When('User clicks on update button', async function () 
// {
//     await SpecialitiesObj.UpdateBtn.click();
// });
// Then('Speciality should be updated', async function () {
//     await console.log("Specialities are updated");
// });
//  //delete scenario
//  //browser.sleep(5000);
// When('User clicks on delete button', async function () {
//     await SpecialitiesObj.DeleteBtn.click();
// });
// Then('Name should be deleted', async function () {
//     await console.log("Name is deleted Successfully");
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lhbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL1NwZWNpYWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnREFBZ0Q7QUFDaEQseUVBQXlFO0FBQ3pFLG1FQUFtRTtBQUNuRSxnRkFBZ0Y7QUFDaEYsK0NBQStDO0FBQy9DLHNEQUFzRDtBQUN0RCxxRUFBcUU7QUFFckUsaUVBQWlFO0FBQ2pFLDhCQUE4QjtBQUU5QixtREFBbUQ7QUFDbkQsZ0NBQWdDO0FBRWhDLHVDQUF1QztBQUN2QyxpREFBaUQ7QUFFakQseUJBQXlCO0FBQ3pCLDhEQUE4RDtBQUM5RCwwREFBMEQ7QUFDMUQseUNBQXlDO0FBQ3pDLHVEQUF1RDtBQUV2RCxNQUFNO0FBQ04sdURBQXVEO0FBQ3ZELElBQUk7QUFDSiw0Q0FBNEM7QUFHNUMsTUFBTTtBQUVOLGdFQUFnRTtBQUNoRSxtREFBbUQ7QUFDbkQsaURBQWlEO0FBR2pELE1BQU07QUFFTix5REFBeUQ7QUFDekQsNkNBQTZDO0FBQzdDLE1BQU07QUFFTiwrREFBK0Q7QUFDL0QsMkRBQTJEO0FBQzNELE1BQU07QUFFTixvQkFBb0I7QUFFcEIsMERBQTBEO0FBQzFELDBEQUEwRDtBQUMxRCwyQ0FBMkM7QUFDM0MsdURBQXVEO0FBRXZELE1BQU07QUFDTix5REFBeUQ7QUFDekQsa0VBQWtFO0FBQ2xFLHdDQUF3QztBQUN4Qyw2Q0FBNkM7QUFHN0MsTUFBTTtBQUVOLGtEQUFrRDtBQUNsRCxJQUFJO0FBQ0osMkRBQTJEO0FBQzNELDhDQUE4QztBQUM5Qyx5REFBeUQ7QUFHekQsTUFBTTtBQUVOLDBEQUEwRDtBQUMxRCxJQUFJO0FBQ0osK0NBQStDO0FBQy9DLE1BQU07QUFFTiwyREFBMkQ7QUFDM0QscURBQXFEO0FBQ3JELE1BQU07QUFHTixxQkFBcUI7QUFFckIsMEJBQTBCO0FBRTFCLDJEQUEyRDtBQUUzRCwrQ0FBK0M7QUFDL0MsTUFBTTtBQUVOLHFEQUFxRDtBQUNyRCx5REFBeUQ7QUFDekQsTUFBTSJ9