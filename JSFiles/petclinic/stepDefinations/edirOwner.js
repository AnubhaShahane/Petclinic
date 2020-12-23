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
const protractor_1 = require("protractor");
const editOwnerObj_1 = require("../pageObjects/editOwnerObj");
const expect = global['chai'].expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let editOwnObj = new editOwnerObj_1.editOwnerObj();
cucumber_1.When('User clicks on first owner name to check owner information', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield editOwnObj.firstOwner.click();
    });
});
cucumber_1.When('User clicks on Add Visit button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield editOwnObj.addVisit.click();
    });
});
cucumber_1.When('User selects date from calendar', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield editOwnObj.date.click();
        let month = "12 2019";
        let date = "20";
        while (true) {
            let currentMonth = yield editOwnObj.month.getText();
            yield console.log("Month : " + currentMonth);
            if (month == currentMonth) {
                break;
            }
            else {
                yield editOwnObj.previousMnth.click();
                //await editOwnObj.nextMnth.click();
            }
        }
        yield protractor_1.element(protractor_1.by.xpath("//*[@class='mat-calendar-table']/tbody/tr/td[.='" + date + "']")).click();
    });
});
// await editOwnObj.date.click();
// let month = "12 2022";
// let date = "20";
// while (true) {
//     let currentMonth = await editOwnObj.month.getText();
//     await console.log("Month : " + currentMonth);
//     if (month == currentMonth) {
//         break;
//     }
//     else {
//         await editOwnObj.nextMnth.click();
//     }
// }
// await element(by.xpath("//*[@class='mat-calendar-table']/tbody/tr/td[.='" + date + "']")).click();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpck93bmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcGV0Y2xpbmljL3N0ZXBEZWZpbmF0aW9ucy9lZGlyT3duZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXlDO0FBQ3pDLDhEQUEyRDtBQUUzRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBRXJDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7QUFFcEMsZUFBSSxDQUFDLDREQUE0RCxFQUFFOztRQUMvRCxNQUFNLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxpQ0FBaUMsRUFBRTs7UUFDcEMsTUFBTSxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsaUNBQWlDLEVBQUU7O1FBQ3BDLE1BQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixJQUFJLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sSUFBSSxFQUFFO1lBQ1QsSUFBSSxZQUFZLEdBQUcsTUFBTSxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFFN0MsSUFBSSxLQUFLLElBQUksWUFBWSxFQUFFO2dCQUN2QixNQUFNO2FBQ1Q7aUJBRUk7Z0JBQ0QsTUFBTSxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN0QyxvQ0FBb0M7YUFDdkM7U0FDSjtRQUNELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RHLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxpQ0FBaUM7QUFDakMseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsMkRBQTJEO0FBQzNELG9EQUFvRDtBQUNwRCxtQ0FBbUM7QUFDbkMsaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUixhQUFhO0FBQ2IsNkNBQTZDO0FBQzdDLFFBQVE7QUFDUixJQUFJO0FBQ0oscUdBQXFHIn0=