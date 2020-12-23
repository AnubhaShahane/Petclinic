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
const LoginPageObjects_1 = require("../pageObjects/LoginPageObjects");
const protractor_1 = require("protractor");
const expect = global['chai'].expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let logObj = new LoginPageObjects_1.LoginPageObjects();
cucumber_1.Given('User will navigate to Petclinic url', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/');
        yield protractor_1.browser.sleep(1000);
    });
});
cucumber_1.Then('User should able to see Welcome to Petclinic message', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield logObj.WelcomeMsg.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
    });
});
cucumber_1.Then('User should able to see title of the webpage', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let title = yield protractor_1.browser.getTitle();
        yield console.log("WebPage Title is " + title);
        yield expect("SpringPetclinicAngular").to.equal(title);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wZXRjbGluaWMvc3RlcERlZmluYXRpb25zL0xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLHNFQUFtRTtBQUNuRSwyQ0FBNEU7QUFDNUUsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNyQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksTUFBTSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUVwQyxnQkFBSyxDQUFDLHFDQUFxQyxFQUFFOztRQUN6QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7UUFDekYsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNEQUFzRCxFQUFFOztRQUN6RCxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLE1BQU07O2dCQUM3RCxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDhDQUE4QyxFQUFFOztRQUNqRCxJQUFJLEtBQUssR0FBRyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQy9DLE1BQU0sTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=