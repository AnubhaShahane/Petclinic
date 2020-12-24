"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newOwnerPageObject = void 0;
const protractor_1 = require("protractor");
class newOwnerPageObject {
    constructor() {
        this.FirstName = protractor_1.element(protractor_1.by.xpath("//input[@id='firstName']"));
        this.LastName = protractor_1.element(protractor_1.by.xpath("//*[@id='lastName']"));
        this.Address = protractor_1.element(protractor_1.by.xpath("//*[@id='address']"));
        this.City = protractor_1.element(protractor_1.by.xpath("//*[@id='city']"));
        this.Telephone = protractor_1.element(protractor_1.by.xpath("//*[@id='telephone']"));
        this.AddNewOwner = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Add New')]"));
        this.SearchOwner = protractor_1.element(protractor_1.by.xpath("//a[text()='Betty Davis']"));
        this.PetName = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[1]"));
        this.BirthDate = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[2]"));
        this.AllList = protractor_1.element(protractor_1.by.xpath("//*[@class='glyphicon glyphicon-search']"));
        this.Type = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[3]"));
        this.Owners = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.ArrayListElement = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody"));
        this.AllOwners = protractor_1.element(protractor_1.by.linkText("ALL"));
        this.OwnerList = protractor_1.element(protractor_1.by.xpath("//table[@class='table table-striped']/thead/tr"));
        this.PageName = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
        this.AddOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[@class='btn btn-default' and text()='Add Owner']"));
        //this.ArrayListElement=element.all(by.id(""));
    }
}
exports.newOwnerPageObject = newOwnerPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXJQYWdlT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL25ld093bmVyUGFnZU9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRFO0FBRTVFLE1BQWEsa0JBQWtCO0lBcUIzQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrRkFBK0YsQ0FBQyxDQUFDLENBQUM7UUFDaEksSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0ZBQStGLENBQUMsQ0FBQyxDQUFDO1FBQ2xJLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrRkFBK0YsQ0FBQyxDQUFDLENBQUM7UUFDN0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxTQUFTLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLENBQUM7UUFDOUYsK0NBQStDO0lBRW5ELENBQUM7Q0FDSjtBQTFDRCxnREEwQ0MifQ==