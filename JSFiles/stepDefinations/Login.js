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
const LoginPageObject_1 = require("../pageObjects/LoginPageObject");
const protractor_1 = require("protractor");
const log = require("../log/logs").default;
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);
let LoginPage = new LoginPageObject_1.LoginPageObjects();
var EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('User will navigate to Petclinic url', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(protractor_1.browser.baseUrl);
        //await browser.wait(EC.urlIs(baseUrl),3000);
        //browser.get('http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/');
    });
});
cucumber_1.Then('User should able to see Welcome to Petclinic message', function () {
    return __awaiter(this, void 0, void 0, function* () {
        protractor_1.browser.wait(EC.visibilityOf(LoginPage.WelcomeMsg), 4000);
        yield LoginPage.WelcomeMsg.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
            });
        });
    });
});
cucumber_1.Then('User should able to see title of the webpage', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let title = yield protractor_1.browser.getTitle();
        //log.debug("WebPage Title is " + title);
        console.log("WebPage Title is " + title);
        yield expect("SpringPetclinicAngular").to.equal(title);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0Msb0VBQWtFO0FBQ2xFLDJDQUE2RTtBQUU3RSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzNDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNCLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxrQ0FBZ0IsRUFBRSxDQUFDO0FBQ3ZDLElBQUksRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFdkMsZ0JBQUssQ0FBQyxxQ0FBcUMsRUFBRTs7UUFHekMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLDZDQUE2QztRQUM3QyxxRkFBcUY7SUFHekYsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzREFBc0QsRUFBRTs7UUFFekQsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixNQUFNOztnQkFFaEUsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4Q0FBOEMsRUFBRTs7UUFFakQsSUFBSSxLQUFLLEdBQUcsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLHlDQUF5QztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE1BQU0sTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=