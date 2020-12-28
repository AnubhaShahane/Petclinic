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
//var until=protractor.ExpectedConditions;
var EC = protractor_1.protractor.ExpectedConditions;
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
        yield protractor_1.browser.refresh();
    });
});
cucumber_1.Then('User should be navigated to owners page and added owner should be displayed at the end', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield HomeObj.Owners.click();
        yield newOwnerObj.AllList.click();
        //await browser.refresh();
        yield protractor_1.browser.wait(EC.visibilityOf(HomeObj.PageName), 2000, 'Element is taking longer time than expected');
        let PageName = yield HomeObj.PageName.getText();
        yield console.log("Pagename after navigating to owner page is:", PageName);
        //refresh
        //await browser.refresh();
        yield protractor_1.browser.wait(EC.visibilityOf(newOwnerObj.ListTbl), 2000, 'Element is taking longer time than expected');
        let ownerDetails = yield newOwnerObj.ListTbl.all(protractor_1.by.tagName("tr")).last();
        yield protractor_1.browser.actions().mouseMove(ownerDetails).perform();
        let ownerName = yield ownerDetails.getText();
        yield protractor_1.browser.wait(EC.elementToBeClickable(ownerDetails), 2000, ' Element is taking longer time than expected');
        yield console.log("New added owner name is:", ownerName);
        //await browser.refresh();
    });
});
cucumber_1.When('User searches particular owner name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await HomeObj.Owners.click();
        // await newOwnerObj.AllList.click();
        //let petnametext =await newOwnerObj.PetName.getText();
        let count = yield newOwnerObj.ListTbl.all(protractor_1.by.tagName("tr")).count();
        console.log("Count is:", count);
        for (let i = 1; i <= count; i++) {
            let owners = yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
            console.log(owners);
            if (owners == "Peter McTavish") {
                yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
                //await console.log("Pet name of selected owner is :",petnametext);
                //await browser.wait(EC.presenceOf(newOwnerObj.ListTbl));
                break;
            }
            else {
                //console.log("That user is not present in list")
            }
        }
    });
});
cucumber_1.Then('All details should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Details of owners are displayed!!");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbmV3T3duZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsNEVBQXdFO0FBQ3hFLG9FQUFpRTtBQUNqRSwyQ0FBeUc7QUFDekcsbURBQTRDO0FBRTVDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLDBDQUEwQztBQUMxQyxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBQ3ZDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDcEMsSUFBSSxXQUFXLEdBQUcsSUFBSSx3Q0FBa0IsRUFBRSxDQUFDO0FBRTNDLGdCQUFLLENBQUMsMkJBQTJCLEVBQUU7O1FBRS9CLElBQUksUUFBUSxHQUFHLE1BQU0sV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNwRCxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0Isa0NBQWtDO1FBQ2xDLE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxrRUFBa0UsRUFBRTs7UUFHckUsSUFBSSxTQUFTLEdBQUcsa0JB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