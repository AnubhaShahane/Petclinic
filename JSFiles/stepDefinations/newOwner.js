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
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let HomeObj = new HomePageObjects_1.HomePageObjects();
let newOwnerObj = new newOwnerPageObjects_1.newOwnerPageObject();
cucumber_1.Given('User is on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield HomeObj.PageName.getText();
        yield HomeObj.Owners.click();
        yield HomeObj.AddNewOwner.click();
        yield console.log("page name is : " + pagename);
    });
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
cucumber_1.When('user clicks on list of owner', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield HomeObj.Owners.click();
        yield newOwnerObj.AllList.click();
    });
});
cucumber_1.When('User searches particular owner name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let OwnList = newOwnerObj.ArrayListElement.all(protractor_1.by.tagName("tr")).first().all(protractor_1.by.tagName("td"));
        let OwnerNameList = OwnList.getText();
        expect(OwnerNameList).toContain("George Franklin");
        //ArrayList aList= newOwnerObj.ArrayListElement;
        //await newOwnerObj.SearchOwner.getText();
    });
});
cucumber_1.When('User clicks on that owner', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var EC = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(EC.visibilityOf(newOwnerObj.SearchOwner));
        yield newOwnerObj.SearchOwner.click();
    });
});
cucumber_1.Then('All details of pet should be displayed and Pet name, Birthdate and Type should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.BirthDate.getText();
        yield newOwnerObj.PetName.getText();
        yield newOwnerObj.Type.getText();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbmV3T3duZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsNEVBQXdFO0FBQ3hFLG9FQUFpRTtBQUNqRSwyQ0FBNkU7QUFHN0UsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFM0IsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHdDQUFrQixFQUFFLENBQUM7QUFFM0MsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRTs7UUFDL0IsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hELE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCwrRkFBK0Y7QUFDL0YsNkRBQTZEO0FBQzdELHVEQUF1RDtBQUV2RCwyREFBMkQ7QUFDM0QscURBQXFEO0FBRXJELHlEQUF5RDtBQUN6RCxtREFBbUQ7QUFFbkQsbURBQW1EO0FBQ25ELDZDQUE2QztBQUU3Qyw2REFBNkQ7QUFDN0QsdURBQXVEO0FBQ3ZELE1BQU07QUFDTixnRkFBZ0Y7QUFDaEYsZ0RBQWdEO0FBQ2hELE1BQU07QUFDTix1RkFBdUY7QUFDdkYsMkRBQTJEO0FBQzNELE1BQU07QUFHTixlQUFJLENBQUMsOEJBQThCLEVBQUM7O1FBQ2hDLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxQ0FBcUMsRUFBQzs7UUFFdkMsSUFBSSxPQUFPLEdBQUUsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLGFBQWEsR0FBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRW5ELGdEQUFnRDtRQUNoRCwwQ0FBMEM7SUFHOUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywyQkFBMkIsRUFBQzs7UUFDN0IsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUN2QyxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRXZELE1BQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUxQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZGQUE2RixFQUFDOztRQUMvRixNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFdEMsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXBDLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVyQyxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=