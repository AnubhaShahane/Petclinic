import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class newOwnerPageObject {
    FirstName: ElementFinder;
    LastName: ElementFinder;
    Address: ElementFinder;
    City: ElementFinder;
    Telephone: ElementFinder;
    AddOwnerButton: ElementFinder;
    SearchOwner :ElementFinder;
    PetName: ElementFinder;
    BirthDate: ElementFinder;
    Type: ElementFinder;
    AllList:ElementFinder;

    ArrayListElement:ElementFinder;


    constructor() {
        this.FirstName = element(by.xpath("//input[@id='firstName']"));
        this.LastName = element(by.xpath("//*[@id='lastName']"));
        this.Address = element(by.xpath("//*[@id='address']"));
        this.City = element(by.xpath("//*[@id='city']"));
        this.Telephone = element(by.xpath("//*[@id='telephone']"));
        this.AddOwnerButton = element(by.xpath("//*[contains(text(),'Add Owner')]"));
        this.SearchOwner=element(by.xpath("//a[text()='Betty Davis']"));
        this.PetName=element(by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[1]"));
        this.BirthDate=element(by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[2]"));
        this.AllList=element(by.xpath("/html/body/app-root/div[1]/nav/div/ul/li[2]/ul/li[1]/a/span[1]"));
        this.Type=element(by.xpath("/html/body/app-root/app-owner-detail/div/div/table[2]/tr/app-pet-list/table/tr/td[1]/dl/dt[3]"));
    
        this.ArrayListElement=element(by.xpath("//div[@class='container xd-container']"));
    
    }
}
