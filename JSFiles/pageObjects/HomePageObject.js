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
exports.HomePageObjects = void 0;
//import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
const protractor_1 = require("protractor");
var EC = protractor_1.protractor.ExpectedConditions;
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const log = require("../log/logs").default;
class HomePageObjects {
    constructor() {
        this.Home = protractor_1.element(protractor_1.by.xpath("ul.navbar-nav .glyphicon-home"));
        this.VetTab = protractor_1.element(protractor_1.by.css('[href="/petclinic/vets"]'));
        this.OwnersTab = protractor_1.element(protractor_1.by.css('[href="/petclinic/owners"]'));
        this.PageTitle = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
    }
    OwnerTabClick() {
        return __awaiter(this, void 0, void 0, function* () {
            let PageTitle = this.PageTitle.getText();
            this.OwnersTab.click();
            yield log.debug("Page name is " + PageTitle);
        });
    }
    VetTabClick() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.VetTab.click();
        });
    }
}
exports.HomePageObjects = HomePageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VPYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Ib21lUGFnZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4RUFBOEU7QUFDOUUsMkNBQThEO0FBRTlELElBQUksRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDdkMsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUUzQyxNQUFhLGVBQWU7SUFBNUI7UUFFWSxTQUFJLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUN4RCxXQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUNuRCxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUN4RCxjQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztJQW1CbkYsQ0FBQztJQWZTLGFBQWE7O1lBR2QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFFbEQsQ0FBQztLQUFBO0lBRUssV0FBVzs7WUFFYixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsQ0FBQztLQUFBO0NBR0o7QUF4QkQsMENBd0JDIn0=