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
const SpecialitiesObject_1 = require("../pageObjects/SpecialitiesObject");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const userData_1 = require("../testdata/userData");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let HomeObj = new HomePageObjects_1.HomePageObjects();
let specialitiesObj = new SpecialitiesObject_1.SpecialitiesObject();
//browser.sleep(5000);
cucumber_1.Given('User is on New speciality page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield HomeObj.Specialties.getText();
        yield HomeObj.Specialties.click();
        yield console.log("page name is : " + pagename);
    });
});
cucumber_1.When('User clicks on add button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield specialitiesObj.AddBtn.click();
    });
});
cucumber_1.When('User enter Name in new speciality', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let Name = userData_1.default.userData.OwnerData.Name;
        yield specialitiesObj.Name.sendKeys(Name);
    });
});
cucumber_1.When('User clicks on save button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield specialitiesObj.SaveBtn.click();
    });
});
cucumber_1.Then('New specialities should be added', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Message Displayed Successfully");
    });
});
//second scenario
// Given('User is on speciality page', async function () {
//     let pagename = await HomeObj.Specialties.getText();
//     //await HomeObj.Specialties.click();
//     await console.log("page name is : " + pagename);
//});
cucumber_1.When('User clicks on edit button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //    var value=document.getElementsByName("spec_name").values;
        //    expect(value).toEqual("Given");
        yield specialitiesObj.EditBtn.click();
    });
});
cucumber_1.When('User enters new name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let EditName = userData_1.default.userData.OwnerData.EditName;
        yield specialitiesObj.EditName.clear();
        yield specialitiesObj.EditName.sendKeys(EditName);
    });
});
cucumber_1.When('User clicks on update button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield specialitiesObj.UpdateBtn.click();
    });
});
cucumber_1.Then('Speciality should be updated', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Specialities are updated");
    });
});
// //delete scenario
// When('User clicks on delete button', async function () {
//     await specialitiesObj.DeleteBtn.click();
// });
// Then('Name should be deleted', async function () {
//     await console.log("Name is deleted Successfully");
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lhbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL1NwZWNpYWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywwRUFBc0U7QUFDdEUsb0VBQWlFO0FBRWpFLG1EQUE0QztBQUc1QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksT0FBTyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ3BDLElBQUksZUFBZSxHQUFFLElBQUksdUNBQWtCLEVBQUUsQ0FBQztBQUU5QyxzQkFBc0I7QUFDdEIsZ0JBQUssQ0FBQyxnQ0FBZ0MsRUFBRTs7UUFDcEMsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25ELE1BQU0sT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFFcEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywyQkFBMkIsRUFBRTs7UUFDOUIsTUFBTSxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBR3pDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7O1FBQ3RDLElBQUksSUFBSSxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUMsTUFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUc5QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFOztRQUMvQixNQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRTs7UUFDckMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGlCQUFpQjtBQUVqQiwwREFBMEQ7QUFDMUQsMERBQTBEO0FBQzFELDJDQUEyQztBQUMzQyx1REFBdUQ7QUFFdkQsS0FBSztBQUNMLGVBQUksQ0FBQyw0QkFBNEIsRUFBRTs7UUFDbkMsK0RBQStEO1FBQy9ELHFDQUFxQztRQUNqQyxNQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFHMUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzQkFBc0IsRUFBRTs7UUFDekIsSUFBSSxRQUFRLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNwRCxNQUFNLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsTUFBTSxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUd0RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhCQUE4QixFQUFFOztRQUNqQyxNQUFNLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4QkFBOEIsRUFBRTs7UUFDakMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdILG9CQUFvQjtBQUVwQiwyREFBMkQ7QUFFM0QsK0NBQStDO0FBQy9DLE1BQU07QUFFTixxREFBcUQ7QUFDckQseURBQXlEO0FBQ3pELE1BQU0ifQ==