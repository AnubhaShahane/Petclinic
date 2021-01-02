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
const HomePageObject_1 = require("../pageObjects/HomePageObject");
const userData_1 = require("../testdata/userData");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let HomeObj = new HomePageObject_1.HomePageObjects();
let SpecialitiesObj = new SpecialitiesObject_1.SpecialitiesObject();
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
        yield SpecialitiesObj.AddBtn.click();
    });
});
cucumber_1.When('User enter Name in new speciality', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let Name = userData_1.default.userData.OwnerData.Name;
        yield SpecialitiesObj.Name.sendKeys(Name);
    });
});
cucumber_1.When('User clicks on save button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield SpecialitiesObj.SaveBtn.click();
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
        yield SpecialitiesObj.EditBtn.click();
    });
});
cucumber_1.When('User enters new name', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let EditName = userData_1.default.userData.OwnerData.EditName;
        yield SpecialitiesObj.EditName.clear();
        yield SpecialitiesObj.EditName.sendKeys(EditName);
    });
});
cucumber_1.When('User clicks on update button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield SpecialitiesObj.UpdateBtn.click();
    });
});
cucumber_1.Then('Speciality should be updated', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Specialities are updated");
    });
});
//delete scenario
//browser.sleep(5000);
cucumber_1.When('User clicks on delete button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield SpecialitiesObj.DeleteBtn.click();
    });
});
cucumber_1.Then('Name should be deleted', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log("Name is deleted Successfully");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lhbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluYXRpb25zL1NwZWNpYWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywwRUFBc0U7QUFDdEUsa0VBQWdFO0FBRWhFLG1EQUE0QztBQUk1QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksT0FBTyxHQUFHLElBQUksZ0NBQWUsRUFBRSxDQUFDO0FBQ3BDLElBQUksZUFBZSxHQUFFLElBQUksdUNBQWtCLEVBQUUsQ0FBQztBQUU5QyxzQkFBc0I7QUFDdEIsZ0JBQUssQ0FBQyxnQ0FBZ0MsRUFBRTs7UUFDcEMsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25ELE1BQU0sT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFFcEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQywyQkFBMkIsRUFBRTs7UUFFOUIsTUFBTSxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBR3pDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUNBQW1DLEVBQUU7O1FBQ3RDLElBQUksSUFBSSxHQUFHLGtCQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDNUMsTUFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUc5QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFOztRQUMvQixNQUFNLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRTs7UUFDckMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGlCQUFpQjtBQUVqQixnQkFBSyxDQUFDLDRCQUE0QixFQUFFOztRQUNoQyxJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkQsb0NBQW9DO1FBQ3BDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUVwRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDRCQUE0QixFQUFFOztRQUNuQywrREFBK0Q7UUFDL0QscUNBQXFDO1FBQ2pDLE1BQU0sZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUcxQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNCQUFzQixFQUFFOztRQUV6QixJQUFJLFFBQVEsR0FBRyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ3BELE1BQU0sZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxNQUFNLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBR3RELENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOEJBQThCLEVBQUU7O1FBRWpDLE1BQU0sZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhCQUE4QixFQUFFOztRQUNqQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0YsaUJBQWlCO0FBRWpCLHNCQUFzQjtBQUV2QixlQUFJLENBQUMsOEJBQThCLEVBQUU7O1FBRWpDLE1BQU0sZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdCQUF3QixFQUFFOztRQUMzQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=