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
const newOwnerPageObject_1 = require("../pageObjects/newOwnerPageObject");
const protractor_1 = require("protractor");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const log = require("../log/logs").default;
//var until=protractor.ExpectedConditions;
var EC = protractor_1.protractor.ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let OwnerPage = new newOwnerPageObject_1.newOwnerPageObject();
cucumber_1.Given('User is on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield OwnerPage.addOwnerClick();
    });
});
cucumber_1.When('User enters the {string},{string},{string},{string},{string}', function (First_Name, Last_Name, Address, City, Phone) {
    return __awaiter(this, void 0, void 0, function* () {
        yield OwnerPage.addNewOwnerData(First_Name, Last_Name, Address, City, Phone);
    });
});
cucumber_1.Then('User should be navigated to Owners page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //OwnerPage.NewAddedOwner();
        //await browser.refresh();
    });
});
cucumber_1.Then('Newly added owner should be displayed at the end', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await browser.refresh();
        yield OwnerPage.verifyAddedOwner();
    });
});
// Then('Pet details as Firstname, Birthdate and Type should be displayed ',async function()
// {
//     OwnerPage.PetDetails();
// });
cucumber_1.When('User verifies a particular owner is present in the list', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.refresh();
        yield OwnerPage.VerifyExistingOwner();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvbmV3T3duZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMEVBQXVFO0FBQ3ZFLDJDQUF5RztBQUl6RyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzQixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRTNDLDBDQUEwQztBQUMxQyxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBQ3ZDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxTQUFTLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO0FBRXpDLGdCQUFLLENBQUMsMkJBQTJCLEVBQUU7O1FBRS9CLE1BQU0sU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRXBDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsOERBQThELEVBQUUsVUFBZ0IsVUFBYyxFQUFDLFNBQWEsRUFBQyxPQUFXLEVBQUMsSUFBUSxFQUFDLEtBQVM7O1FBRTNJLE1BQU0sU0FBUyxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFHOUUsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRTs7UUFFM0MsNEJBQTRCO1FBRTVCLDBCQUEwQjtJQUkvQixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtEQUFrRCxFQUFDOztRQUVwRCwwQkFBMEI7UUFDMUIsTUFBTSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsNEZBQTRGO0FBQzVGLElBQUk7QUFDSiw4QkFBOEI7QUFFOUIsTUFBTTtBQUdOLGVBQUksQ0FBQyx5REFBeUQsRUFBQzs7UUFFM0QsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLE1BQU0sU0FBUyxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFFMUMsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9