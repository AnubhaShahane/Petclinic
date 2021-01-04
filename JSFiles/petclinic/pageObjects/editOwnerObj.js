"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editOwnerObj = void 0;
const protractor_1 = require("protractor");
class editOwnerObj {
    constructor() {
        this.firstOwner = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[1]/td[1]/a"));
        this.addVisit = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Add Visit')]"));
        this.date = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-datepicker-toggle']"));
        this.month = protractor_1.element(protractor_1.by.xpath("//*[@class='mat-calendar-period-button mat-button']"));
        this.selectDate = protractor_1.element(protractor_1.by.css('.cdk-overlay-container mat-month-view[aria-label="2020/12/01"]'));
        //this.nextMnth = element(by.xpath("//*[@class='mat-calendar-next-button mat-icon-button']"));
        this.nextMnth = protractor_1.element(protractor_1.by.xpath("//*[@aria-label='Next month']"));
        this.previousMnth = protractor_1.element(protractor_1.by.xpath("//*[@aria-label='Previous month']"));
    }
}
exports.editOwnerObj = editOwnerObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdE93bmVyT2JqLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcGV0Y2xpbmljL3BhZ2VPYmplY3RzL2VkaXRPd25lck9iai50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEU7QUFDNUUsTUFBYSxZQUFZO0lBU3JCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxDQUFDLENBQUMsQ0FBQztRQUNwRyw4RkFBOEY7UUFDOUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztJQUc5RSxDQUFDO0NBR0o7QUF2QkQsb0NBdUJDIn0=