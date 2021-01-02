"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePageObjects = void 0;
const protractor_1 = require("protractor");
//import locators from "../TestData/webObjects";
class HomePageObjects {
    constructor() {
        this.HomeMenu = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.Veterinarians = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.PetTypes = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = protractor_1.element(protractor_1.by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.AllOwners = protractor_1.element(protractor_1.by.linkText("ALL"));
        this.AddNewOwner = protractor_1.element(protractor_1.by.linkText("ADD NEW"));
        this.OwnerList = protractor_1.element(protractor_1.by.xpath("//table[@class='table table-striped']/thead/tr"));
        this.PageName = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
        this.AddOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[@class='btn btn-default']"));
    }
}
exports.HomePageObjects = HomePageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VPYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Ib21lUGFnZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNEU7QUFDNUUsZ0RBQWdEO0FBRWhELE1BQWEsZUFBZTtJQVl4QjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFNBQVMsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGNBQWMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0lBRTNFLENBQUM7Q0FHSjtBQTNCRCwwQ0EyQkMifQ==