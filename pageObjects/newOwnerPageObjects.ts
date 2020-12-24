import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class newOwnerPageObject {
    FirstName: ElementFinder;
    LastName: ElementFinder;
    Address: ElementFinder;
    City: ElementFinder;
    Telephone: ElementFinder;
    AddNewOwner: ElementFinder;
    SearchOwner :ElementFinder;
    PetName: ElementFinder;
    BirthDate: ElementFinder;
    Type: ElementFinder;
    AllList:ElementFinder;
    Owners: ElementFinder;
    AllOwners:ElementFinder;
    OwnerList:ElementFinder;
    PageName:ElementFinder;
    AddOwnerButton :ElementFinder;
    ArrayListElement:ElementFinder;
    


    constructor() {
        this.FirstName = element(by.xpath("//input[@id='firstName']"));
        this.LastName = element(by.xpath("//*[@id='lastName']"));
        this.Address = element(by.xpath("//*[@id='address']"));
        this.City = element(by.xpath("//*[@id='city']"));
        this.Telephone = element(by.xpath("//*[@id='telephone']"));
        this.AddNewOwner = element(by.xpath("//*[contains(text(),'Add New')]"));
        this.SearchOwner=element(by.xpath("//a[text()='Betty Davis']"));
        this.PetName=element(by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[1]"));
        this.BirthDate=element(by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[2]"));
        this.AllList=element(by.xpath("//*[@class='glyphicon glyphicon-search']"));
        this.Type=element(by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[3]"));
        this.Owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.ArrayListElement=element(by.xpath("//*[@class='table table-striped']/tbody"));
        this.AllOwners= element(by.linkText("ALL"));
        this.OwnerList=element(by.xpath("//table[@class='table table-striped']/thead/tr"));
        this.PageName=element(by.xpath("//*[@class='container xd-container']/h2"));
        this.AddOwnerButton=element(by.xpath("//*[@class='btn btn-default' and text()='Add Owner']"));
        //this.ArrayListElement=element.all(by.id(""));
    
    }
}
