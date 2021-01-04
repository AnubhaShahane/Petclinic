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
const VetObject_1 = require("../pageObjects/VetObject");
const HomePageObject_1 = require("../pageObjects/HomePageObject");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const log = require("../log/logs").default;
//var until=protractor.ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let HomePage = new HomePageObject_1.HomePageObjects();
let VetPage = new VetObject_1.VatPageObj();
cucumber_1.Given('User is on Veterinarians page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield HomePage.VetTabClick();
    });
});
cucumber_1.When('User clicks on All tab list of all Veterinarians id displayed with Specialties', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield VetPage.displayVetList();
    });
});
cucumber_1.Then('Count of radiology specialities should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield VetPage.countRadiology();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9WZXRQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLHdEQUFzRDtBQUN0RCxrRUFBZ0U7QUFJaEUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFM0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUUzQywwQ0FBMEM7QUFDMUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLFFBQVEsR0FBRyxJQUFJLGdDQUFlLEVBQUUsQ0FBQztBQUNyQyxJQUFJLE9BQU8sR0FBRSxJQUFJLHNCQUFVLEVBQUUsQ0FBQztBQUU5QixnQkFBSyxDQUFDLCtCQUErQixFQUFFOztRQUVuQyxNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVqQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGdGQUFnRixFQUFDOztRQUVsRixNQUFNLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUVuQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHFEQUFxRCxFQUFDOztRQUV2RCxNQUFNLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUVuQyxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=