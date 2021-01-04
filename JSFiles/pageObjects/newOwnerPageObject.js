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
exports.newOwnerPageObject = void 0;
//import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
const protractor_1 = require("protractor");
var EC = protractor_1.protractor.ExpectedConditions;
const log = require("../log/logs").default;
class newOwnerPageObject {
    constructor() {
        this.FirstName = protractor_1.element(protractor_1.by.id('firstName'));
        this.LastName = protractor_1.element(protractor_1.by.id('lastName'));
        this.Address = protractor_1.element(protractor_1.by.id('address'));
        this.City = protractor_1.element(protractor_1.by.id('city'));
        this.Telephone = protractor_1.element(protractor_1.by.id('telephone'));
        this.AddNewOwner = protractor_1.element(protractor_1.by.css('[href="/petclinic/owners/add"]'));
        this.OwnersTab = protractor_1.element(protractor_1.by.css('[href="/petclinic/owners"]'));
        this.AddOwnerButton = protractor_1.element(protractor_1.by.buttonText('Add Owner'));
        this.AllOwnersTabSearch = protractor_1.element(protractor_1.by.css('[href="/petclinic/owners"]'));
        this.PageTitle = protractor_1.element(protractor_1.by.css('div .xd-container h2'));
        this.TableContentOwner = protractor_1.element(protractor_1.by.css('table.table-striped tbody'));
    }
    OwnerTabClick() {
        return __awaiter(this, void 0, void 0, function* () {
            let PageTitle = this.PageTitle.getText();
            this.OwnersTab.click();
            this.AddNewOwner.click();
            yield log.debug("Page name is " + PageTitle);
            //console.log("page name is : " + PageTitle);
        });
    }
    addNewOwnerData(firstName, lastName, address, city, telephone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.FirstName.sendKeys(firstName);
            yield this.LastName.sendKeys(lastName);
            yield this.Address.sendKeys(address);
            yield this.City.sendKeys(city);
            yield this.Telephone.sendKeys(telephone);
            yield protractor_1.browser.wait(EC.visibilityOf(this.AddOwnerButton), 4000);
            yield this.AddOwnerButton.click();
        });
    }
    ;
    verifyAddedOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            this.OwnersTab.click();
            this.AllOwnersTabSearch.click();
            protractor_1.browser.wait(EC.visibilityOf(this.PageTitle), 2000, 'Element is taking longer time than expected');
            let PageTitle = this.PageTitle.getText();
            log.debug("PageTitle after navigating to owner page is:", PageTitle);
            //console.log("PageTitle after navigating to owner page is:",PageTitle);
            protractor_1.browser.wait(EC.visibilityOf(this.TableContentOwner), 2000, 'Element is taking longer time than expected');
            let ownerDetails = this.TableContentOwner.all(protractor_1.by.tagName("tr")).last();
            protractor_1.browser.actions().mouseMove(ownerDetails).perform();
            let ownerName = ownerDetails.getText();
            protractor_1.browser.wait(EC.elementToBeClickable(ownerDetails), 2000, ' Element is taking longer time than expected');
            log.debug("New added owner name is:", ownerName);
            //console.log("New added owner name is:",ownerName);
            return ownerName;
        });
    }
    // PetDetails()
    // {
    //    this.PetName.getText().then(async function(PetName) 
    //     {
    //log.debug("Petname is:"+PetName);
    //          
    //     })
    //     this.PetBirthDate.getText().then(async function(PetBirthDate) 
    //     {
    //log.debug("PetBirthDate is:"+PetBirthDate);
    //         
    //     })
    //     this.PetType.getText().then(async function(PetType) 
    //     {
    //log.debug("PetBirthDate is:"+PetType);
    //        
    //     })
    // }
    VerifyExistingOwner() {
        return __awaiter(this, void 0, void 0, function* () {
            this.TableContentOwner.getText().then(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let count = yield this.ListTbl.all(protractor_1.by.tagName("tr")).count();
                    log.debug("Count is:", count);
                    //console.log("Count is:",count);
                    for (let i = 1; i <= count; i++) {
                        let OwnersTab = yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
                        log.debug(OwnersTab);
                        //console.log(OwnersTab);
                        if (OwnersTab == "Peter McTavish") {
                            yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
                            break;
                        }
                        else {
                        }
                    }
                });
            });
        });
    }
}
exports.newOwnerPageObject = newOwnerPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXJQYWdlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvbmV3T3duZXJQYWdlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhFQUE4RTtBQUM5RSwyQ0FBOEU7QUFHOUUsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUN2QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRTNDLE1BQWEsa0JBQWtCO0lBQS9CO1FBR1UsY0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLGFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNwQyxZQUFPLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsU0FBSSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdCLGNBQVMsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN2QyxnQkFBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDOUQsY0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDeEQsbUJBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuRCx1QkFBa0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMs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