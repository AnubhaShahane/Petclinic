// import { Given, When, Then } from "cucumber";
// import { LoginPageObjects } from "../pageObjects/LoginPageObject";
// import { browser, by, element, ElementFinder, protractor } from "protractor";
// const log = require("../log/logs").default;
// const chai = require("chai").use(require("chai-as-promised"));
// const expect = chai.expect;
// var { setDefaultTimeout } = require('cucumber');
// setDefaultTimeout(50 * 1000);
// let LoginPage = new LoginPageObjects();
// var EC = protractor.ExpectedConditions;
// Given('User will navigate to Petclinic url', async function () 
// {
//     await browser.get(browser.baseUrl);
//     //await browser.wait(EC.urlIs(baseUrl),3000);
//     //browser.get('http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/');
// });
// Then('User should able to see Welcome to Petclinic message', async function () 
// {
//     browser.wait(EC.visibilityOf(LoginPage.WelcomeMsg),4000);
//     await LoginPage.WelcomeMsg.isDisplayed().then(async function (result) 
//     {
//         await expect(true).to.equal(result);
//     });
// });
// Then('User should able to see title of the webpage', async function () 
// {
//     let title = await browser.getTitle();
//      //log.debug("WebPage Title is " + title);
//      console.log("WebPage Title is " + title);
//     await expect("SpringPetclinicAngular").to.equal(title);
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELHFFQUFxRTtBQUNyRSxnRkFBZ0Y7QUFFaEYsOENBQThDO0FBQzlDLGlFQUFpRTtBQUNqRSw4QkFBOEI7QUFDOUIsbURBQW1EO0FBQ25ELGdDQUFnQztBQUVoQywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBRTFDLGtFQUFrRTtBQUNsRSxJQUFJO0FBRUosMENBQTBDO0FBRTFDLG9EQUFvRDtBQUNwRCw0RkFBNEY7QUFHNUYsTUFBTTtBQUVOLGtGQUFrRjtBQUNsRixJQUFJO0FBQ0osZ0VBQWdFO0FBQ2hFLDZFQUE2RTtBQUM3RSxRQUFRO0FBQ1IsK0NBQStDO0FBQy9DLFVBQVU7QUFDVixNQUFNO0FBRU4sMEVBQTBFO0FBQzFFLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsaURBQWlEO0FBQ2pELGlEQUFpRDtBQUNqRCw4REFBOEQ7QUFDOUQsTUFBTSJ9