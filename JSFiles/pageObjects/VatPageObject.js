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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmF0UGFnZU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL1ZhdFBhZ2VPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRFO0FBSzVFLE1BQWEsVUFBVTtJQU1uQjtRQUdJLElBQUksQ0FBQyxNQUFNLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0NBRUo7QUFkRCxnQ0FjQyJ9