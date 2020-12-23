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
        this.AddOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Add Owner')]"));
        this.SearchOwner = protractor_1.element(protractor_1.by.xpath("//a[text()='Betty Davis']"));
        this.PetName = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[1]"));
        this.BirthDate = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[2]"));
        this.AllList = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/div[1]/nav/div/ul/li[2]/ul/li[1]/a/span[1]"));
        this.Type = protractor_1.element(protractor_1.by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[3]"));
        this.ArrayListElement = protractor_1.element(protractor_1.by.xpath("//div[@class='container xd-container']"));
    }
}
exports.newOwnerPageObject = newOwnerPageObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3T3duZXJQYWdlT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL25ld093bmVyUGFnZU9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRFO0FBRTVFLE1BQWEsa0JBQWtCO0lBZ0IzQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrRkFBK0YsQ0FBQyxDQUFDLENBQUM7UUFDaEksSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0ZBQStGLENBQUMsQ0FBQyxDQUFDO1FBQ2xJLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsSUFBSSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrRkFBK0YsQ0FBQyxDQUFDLENBQUM7UUFFN0gsSUFBSSxDQUFDLGdCQUFnQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7SUFFdEYsQ0FBQztDQUNKO0FBaENELGdEQWdDQyJ9