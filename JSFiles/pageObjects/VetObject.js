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
exports.VatPageObj = void 0;
const HomePageObject_1 = require("../pageObjects/HomePageObject");
const protractor_1 = require("protractor");
let HomePage = new HomePageObject_1.HomePageObjects();
const log = require("../log/logs").default;
const SpecialityStrCnt = "radiology";
class VatPageObj {
    constructor() {
        this.AllVetList = protractor_1.element(protractor_1.by.linkText("ALL"));
        this.TableOFVet = protractor_1.element(protractor_1.by.xpath("//table[@class='table table-striped']/tbody"));
        this.PageTitle = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
    }
    // async navigateVetPage()
    // {
    //     await HomePage.Veterinarians.click();
    //     let pagename =  HomePage.PageName.getText();
    //     log.debug("Pagename at vet is:"+pagename);
    // }
    displayVetList() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.AllVetList.click();
            log.debug("List is displayed");
        });
    }
    countRadiology() {
        return __awaiter(this, void 0, void 0, function* () {
            let iSpeciality = 0;
            let btnEditVet = this.TableOFVet.all(protractor_1.by.tagName("tr")).each(function (item) {
                item.getText().then(function (text) {
                    log.debug("Displaying text", +text);
                    //console.log("Displaying text",+text);
                    if (text.indexOf(SpecialityStrCnt) >= 0) {
                        iSpeciality = iSpeciality + 1;
                        log.debug("Total number of", SpecialityStrCnt, ":", iSpeciality);
                        //console.log("Total number of", SpecialityStrCnt, ":", iSpeciality);
                    }
                });
            });
        });
    }
}
exports.VatPageObj = VatPageObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0T2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvVmV0T2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGtFQUFnRTtBQUNoRSwyQ0FBeUc7QUFHekcsSUFBSSxRQUFRLEdBQUcsSUFBSSxnQ0FBZSxFQUFFLENBQUM7QUFDckMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUUzQyxNQUFNLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQUdyQyxNQUFhLFVBQVU7SUFBdkI7UUFHWSxlQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkMsZUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsY0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7SUErQ25GLENBQUM7SUE3Q0csMEJBQTBCO0lBQzFCLElBQUk7SUFDSiw0Q0FBNEM7SUFDNUMsbURBQW1EO0lBQ25ELGlEQUFpRDtJQUNqRCxJQUFJO0lBRUUsY0FBYzs7WUFFaEIsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVuQyxDQUFDO0tBQUE7SUFFSyxjQUFjOztZQUVoQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFFcEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBSXRFLElBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO29CQUcvQixHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ25DLHVDQUF1QztvQkFFdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUN2Qzt3QkFFSSxXQUFXLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQzt3QkFFOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7d0JBQ2pFLHFFQUFxRTtxQkFFeEU7Z0JBR0wsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUdKO0FBcERELGdDQW9EQyJ9