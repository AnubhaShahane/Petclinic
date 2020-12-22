import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class SpecialitiesObject {
    Specialties: ElementFinder;
    AddBtn: ElementFinder;
    Name: ElementFinder;
    SaveBtn: ElementFinder;
    TextField :ElementFinder;
    EditBtn: ElementFinder;
    EditName :ElementFinder;
    UpdateBtn :ElementFinder;
    DeleteBtn : ElementFinder;
   


    constructor() {
        
        this.AddBtn = element(by.xpath("/html/body/app-root/app-specialty-list/div/div/div/button[2]"));
        this.Name = element(by.xpath("//*[@id='name']"));
        this.SaveBtn = element(by.xpath("//*[@id='specialty']/div[2]/div/button"));
        this.TextField=element(by.xpath("//*[@id='3']"));
        this.EditBtn=element(by.xpath("//table[@id='specialties']/tbody/tr[6]/td[2]/button[1]"));
        this.EditName=element(by.xpath("//*[@id='name']"));
        this.UpdateBtn=element(by.xpath("//*[@id='specialty']/div[2]/div/button[1]"));
        this.DeleteBtn=element(by.xpath("//table[@id='specialties']/tbody/tr[3]/td[2]/button[2]"));
        this.Specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]"));
        
    }
}
