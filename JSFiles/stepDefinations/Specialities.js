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
cucumber_1.Given('User is on speciality page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield HomeObj.Specialties.getText();
        //await HomeObj.Specialties.click();
        yield console.log("page name is : " + pagename);
    });
});
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
//delete scenario
cucumber_1.When('User clicks on delete button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield specialitiesObj.DeleteBtn.click();
    });
});
cucumber_1.Then('Name should be deleted', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Name is deleted Successfully");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lhbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL1NwZWNpYWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywwRUFBc0U7QUFDdEUsb0VBQWlFO0FBRWpFLG1EQUE0QztBQUc1QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksT0FBTyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQ3BDLElBQUksZUFBZSxHQUFFLElBQUksdUNBQWtCLEVBQUUsQ0FBQztBQUU5QyxnQkFBSyxDQUFDLGdDQUFnQyxFQUFFOztRQUNwQyxJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkQsTUFBTSxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUVwRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDJCQUEyQixFQUFFOztRQUM5QixNQUFNLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFHekMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxtQ0FBbUMsRUFBRTs7UUFDdEMsSUFBSSxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUM1QyxNQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRzlDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEJBQTRCLEVBQUU7O1FBQy9CLE1BQU0sZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLGtDQUFrQyxFQUFFOztRQUNyQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsaUJBQWlCO0FBRWpCLGdCQUFLLENBQUMsNEJBQTRCLEVBQUU7O1FBQ2hDLElBQUksUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRCxvQ0FBb0M7UUFDcEMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBRXBELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsNEJBQTRCLEVBQUU7O1FBQ25DLCtEQUErRDtRQUMvRCxxQ0FBcUM7UUFDakMsTUFBTSxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRzFDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0JBQXNCLEVBQUU7O1FBQ3pCLElBQUksUUFBUSxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDcEQsTUFBTSxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFHdEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4QkFBOEIsRUFBRTs7UUFDakMsTUFBTSxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUU7O1FBQ2pDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxpQkFBaUI7QUFFakIsZUFBSSxDQUFDLDhCQUE4QixFQUFFOztRQUVqQyxNQUFNLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx3QkFBd0IsRUFBRTs7UUFDM0IsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9