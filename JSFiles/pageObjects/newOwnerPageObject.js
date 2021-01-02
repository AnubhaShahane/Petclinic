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
        this.FirstName = protractor_1.element(protractor_1.by.xpath("//input[@id='firstName']"));
        this.LastName = protractor_1.element(protractor_1.by.xpath("//*[@id='lastName']"));
        this.Address = protractor_1.element(protractor_1.by.xpath("//*[@id='address']"));
        this.City = protractor_1.element(protractor_1.by.xpath("//*[@id='city']"));
        this.Telephone = protractor_1.element(protractor_1.by.xpath("//*[@id='telephone']"));
        this.AddNewOwner = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Add New')]"));
        this.OwnersTab = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.AddOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[@class='btn btn-default' and text()='Add Owner']"));
        this.AllOwnersTabSearch = protractor_1.element(protractor_1.by.xpath("//*[@class='glyphicon glyphicon-search']"));
        this.PageTitle = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
        this.TableContentOwner = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody"));
    }
    // private FirstName: ElementFinder;
    // private LastName: ElementFinder;
    // private Address: ElementFinder;
    // private City: ElementFinder;
    // private Telephone: ElementFinder;
    // private AddNewOwner: ElementFinder;
    // private PetName: ElementFinder;
    // private PetBirthDate: ElementFinder;
    // private PetType: ElementFinder;
    // private AllOwnersTabSearch:ElementFinder;
    // private OwnersTab: ElementFinder;
    // private PageTitle:ElementFinder;
    // private AddOwnerButton :ElementFinder;
    // private TableContentOwner:ElementFinder;
    // constructor() {
    //     this.FirstName = element(by.xpath("//input[@id='firstName']"));
    //     this.LastName = element(by.xpath("//*[@id='lastName']"));
    //     this.Address = element(by.xpath("//*[@id='address']"));
    //     this.City = element(by.xpath("//*[@id='city']"));
    //     this.Telephone = element(by.xpath("//*[@id='telephone']"));
    //     this.AddNewOwner = element(by.xpath("//*[contains(text(),'Add New')]"));
    //     this.PetName=element(by.xpath("//table[@class='table table-striped']/tr[1]/td/dl/dt"));
    //     this.PetBirthDate=element(by.xpath("//table[@class='table table-striped']/tr[1]/td/dl/dt[2]"));
    //     this.AllOwnersTabSearch=element(by.xpath("//*[@class='glyphicon glyphicon-search']"));
    //     this.PetType=element(by.xpath("//table[@class='table table-striped']/tr[1]/td/dl/dt[3]"));
    //     this.OwnersTab = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
    //     this.TableContentOwner=element(by.xpath("//*[@class='table table-striped']/tbody"));
    //     this.PageTitle=element(by.xpath("//*[@class='container xd-container']/h2"));
    //     this.AddOwnerButton=element(by.xpath("//*[@class='btn btn-default' and text()='Add Owner']"));
    // }
    addOwnerClick() {
        return __awaiter(this, void 0, void 0, function* () {
            let PageTitle = this.PageTitle.getText();
            this.OwnersTab.click();
            this.AddNewOwner.click();
            log.debug("Page name is " + PageTitle);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXJQYWdlT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvbmV3T3duZXJQYWdlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhFQUE4RTtBQUM5RSwyQ0FBOEU7QUFHOUUsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUN2QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBRTNDLE1BQWEsa0JBQWtCO0lBQS9CO1FBR1UsY0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDeEQsYUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDbEQsWUFBTyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDakQsU0FBSSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDckQsZ0JBQVcsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLGNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLG1CQUFjLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQztRQUN6Rix1QkFBa0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMs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