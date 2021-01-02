"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VatPageObj = void 0;
const protractor_1 = require("protractor");
class VatPageObj {
    constructor() {
        this.AllVat = protractor_1.element(protractor_1.by.linkText("ALL"));
        this.AllTbl = protractor_1.element(protractor_1.by.xpath("//table[@class='table table-striped']/tbody"));
        this.PageName = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
    }
}
exports.VatPageObj = VatPageObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0T2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvVmV0T2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUs1RSxNQUFhLFVBQVU7SUFNbkI7UUFHSSxJQUFJLENBQUMsTUFBTSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQztDQUVKO0FBZEQsZ0NBY0MifQ==