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
const VatPageObject_1 = require("../pageObjects/VatPageObject");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const protractor_1 = require("protractor");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const SpecialityStrCnt = "radiology";
var until = protractor_1.protractor.ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let HomeObj = new HomePageObjects_1.HomePageObjects();
let VatObj = new VatPageObject_1.VatPageObj();
cucumber_1.Given('User is on Veterinarians page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield HomeObj.PageName.getText();
        yield HomeObj.Veterinarians.click();
        yield console.log("Pagename at vat is:" + pagename);
    });
});
cucumber_1.When('User clicks on All tab list of all Veterinarians id displayed with Specialties', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield VatObj.AllVat.click();
        yield console.log("List is displayed");
    });
});
cucumber_1.Then('Count of radiology specialities should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let iSpeciality = 0;
        let btnEditVet = VatObj.AllTbl.all(protractor_1.by.tagName("tr")).all(protractor_1.by.tagName("td")).each(function (item) {
            item.getText().then(function (text) {
                console.log("Displaying text", +text);
                if (text.indexOf(SpecialityStrCnt) >= 0) {
                    iSpeciality = iSpeciality + 1;
                    console.log("Total number of", SpecialityStrCnt, ":", iSpeciality);
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmF0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9WYXRQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLGdFQUEwRDtBQUMxRCxvRUFBaUU7QUFDakUsMkNBQXlHO0FBR3pHLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNCLE1BQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0FBRXJDLElBQUksS0FBSyxHQUFDLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDeEMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRSxJQUFJLDBCQUFVLEVBQUUsQ0FBQztBQUU3QixnQkFBSyxDQUFDLCtCQUErQixFQUFFOztRQUVuQyxJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEQsTUFBTSxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBQyxRQUFRLENBQUMsQ0FBQztJQUd0RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGdGQUFnRixFQUFDOztRQUVsRixNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFM0MsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxxREFBcUQsRUFBQzs7UUFFbkQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFJMUYsSUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBRy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFckMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUN2QztvQkFFSSxXQUFXLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7aUJBRXRFO1lBR0wsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUdYLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==