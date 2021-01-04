"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialitiesObject = void 0;
const protractor_1 = require("protractor");
class SpecialitiesObject {
    constructor() {
        this.AddBtn = protractor_1.element(protractor_1.by.xpath("//div/button[2][@class='btn btn-default']"));
        this.Name = protractor_1.element(protractor_1.by.xpath("//*[@id='name']"));
        this.SaveBtn = protractor_1.element(protractor_1.by.xpath("//*[@id='specialty']/div[2]/div/button"));
        this.TextField = protractor_1.element(protractor_1.by.xpath("//*[@id='3']"));
        this.EditBtn = protractor_1.element(protractor_1.by.xpath("//table[@id='specialties']/tbody/tr[6]/td[2]/button[1]"));
        this.EditName = protractor_1.element(protractor_1.by.xpath("//*[@id='name']"));
        this.UpdateBtn = protractor_1.element(protractor_1.by.xpath("//*[@id='specialty']/div[2]/div/button[1]"));
        this.DeleteBtn = protractor_1.element(protractor_1.by.xpath("//table[@id='specialties']/tbody/tr[3]/td[2]/button[2]"));
        this.Specialties = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[5]"));
    }
}
exports.SpecialitiesObject = SpecialitiesObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2lhbGl0aWVzT2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvU3BlY2lhbGl0aWVzT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUU1RSxNQUFhLGtCQUFrQjtJQWEzQjtRQUVJLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztJQUUvRSxDQUFDO0NBQ0o7QUExQkQsZ0RBMEJDIn0=