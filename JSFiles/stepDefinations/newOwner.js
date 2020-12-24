"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const newOwnerPageObjects_1 = require("../pageObjects/newOwnerPageObjects");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const protractor_1 = require("protractor");
const userData_1 = require("../testdata/userData");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var until = protractor_1.protractor.ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let HomeObj = new HomePageObjects_1.HomePageObjects();
let newOwnerObj = new newOwnerPageObjects_1.newOwnerPageObject();
cucumber_1.Given('User is on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield newOwnerObj.PageName.getText();
        yield HomeObj.Owners.click();
        //await HomeObj.AllOwners.click();
        yield newOwnerObj.AddNewOwner.click();
        yield console.log("page name is : " + pagename);
    });
});
cucumber_1.Then('User enter valid First Name, Last Name, Address, City, Telephone', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstName = userData_1.default.userData.OwnerData.FirstName;
        yield newOwnerObj.FirstName.sendKeys(firstName);
        let lastName = userData_1.default.userData.OwnerData.LastName;
        yield newOwnerObj.LastName.sendKeys(lastName);
        let address = userData_1.default.userData.OwnerData.Address;
        yield newOwnerObj.Address.sendKeys(address);
        let city = userData_1.default.userData.OwnerData.City;
        yield newOwnerObj.City.sendKeys(city);
        let telephone = userData_1.default.userData.OwnerData.Telephone;
        yield newOwnerObj.Telephone.sendKeys(telephone);
    });
});
cucumber_1.When('User clicks on Add Owner button on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.AddOwnerButton.click();
    });
});
cucumber_1.Then('User should be navigated to owners page and added owner should be displayed at the end', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await HomeObj.Owners.click();
        // await newOwnerObj.AllList.click();
        var EC = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.visibilityOf(HomeObj.PageName));
        let PageName = yield HomeObj.PageName.getText();
        yield console.log("Pagename after navigating to owner page is:", PageName);
        //refresh
        yield protractor_1.browser.refresh();
        yield HomeObj.Owners.click();
        yield newOwnerObj.AllList.click();
        yield protractor_1.browser.wait(EC.visibilityOf(newOwnerObj.ArrayListElement), 2000, 'Element is taking longer time than expected');
        let ownerDetails = yield newOwnerObj.ArrayListElement.all(protractor_1.by.tagName("tr")).last();
        yield protractor_1.browser.actions().mouseMove(ownerDetails).perform();
        let ownerName = yield ownerDetails.getText();
        yield protractor_1.browser.wait(EC.elementToBeClickable(ownerDetails), 2000, ' Element is taking longer time than expected');
        yield console.log("New added owner name is:", ownerName);
    });
});
cucumber_1.When('User searches particular owner name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let count = yield newOwnerObj.ArrayListElement.all(protractor_1.by.tagName("tr")).all(protractor_1.by.tagName("td")).count();
        console.log("Count is:", count);
        for (let i = 1; i <= count; i++) {
            let owners = yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
            console.log(owners);
            if (owners == "Peter McTavish") {
                yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
                yield protractor_1.browser.wait(until.presenceOf(newOwnerObj.ArrayListElement), 20000, 'Element is not present');
                break;
            }
            else {
                console.log("That user is not present in list");
            }
        }
        // let colcnt = newOwnerObj.ArrayListElement.all(by.tagName("tr")).last().all(by.tagName("td")).count();
        // await colcnt.then(function (text) { console.log("Total columns:", text); })
        //console.log(OwnList);
        //let OwnerNameList= OwnList.getText();
        //expect(OwnList).to.equal("George Franklin");
    });
});
cucumber_1.Then('Details should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Details are displayed");
    });
});
// When('User clicks on that owner',async function() {
//     // var EC = protractor.ExpectedConditions;
//     // browser.wait(EC.visibilityOf(newOwnerObj.SearchOwner));
//     // await newOwnerObj.SearchOwner.click();
// });
// Then('All details of pet should be displayed and Pet name, Birthdate and Type should be displayed',async function () {
//     // await newOwnerObj.BirthDate.getText();
//     // await newOwnerObj.PetName.getText();
//     // await newOwnerObj.Type.getText();
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbmV3T3duZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsNEVBQXdFO0FBQ3hFLG9FQUFpRTtBQUNqRSwyQ0FBeUc7QUFDekcsbURBQTRDO0FBRTVDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLElBQUksS0FBSyxHQUFDLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDeEMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHdDQUFrQixFQUFFLENBQUM7QUFFM0MsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRTs7UUFDL0IsSUFBSSxRQUFRLEdBQUcsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BELE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixrQ0FBa0M7UUFDbEMsTUFBTSxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLGtFQUFrRSxFQUFFOztRQUlyRSxJQUFJLFNBQVMsR0FBRyxrQkFBUSxDQUFDLFFBQVEs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