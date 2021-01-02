//import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { browser, by, element, ElementFinder,  protractor } from "protractor";


var EC = protractor.ExpectedConditions;
const log = require("../log/logs").default;

export class newOwnerPageObject 
{

  private FirstName=element(by.xpath("//input[@id='firstName']"));
  private LastName=element(by.xpath("//*[@id='lastName']"));
  private Address= element(by.xpath("//*[@id='address']"));
  private City= element(by.xpath("//*[@id='city']"));
  private Telephone= element(by.xpath("//*[@id='telephone']"));
  private AddNewOwner= element(by.xpath("//*[contains(text(),'Add New')]"));
  private OwnersTab=element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
  private AddOwnerButton=element(by.xpath("//*[@class='btn btn-default' and text()='Add Owner']"));
  private AllOwnersTabSearch=element(by.xpath("//*[@class='glyphicon glyphicon-search']"));
  private PageTitle=element(by.xpath("//*[@class='container xd-container']/h2"));
  private TableContentOwner=element(by.xpath("//*[@class='table table-striped']/tbody"));

    // private FirstName: ElementFinder;
    // private LastName: ElementFinder;
    // private Address: ElementFinder;
    // private City: ElementFinder;
    // private Telephone: ElementFinder;
    // private AddNewOwner: ElementFinder;
    // private PetName: ElementFinder;
    // private PetBirthDate: ElementFinder;
    // private PetType: ElementFinder;
    // private AllOwnersTabSearch:ElementFinder;
    // private OwnersTab: ElementFinder;
    // private PageTitle:ElementFinder;
    // private AddOwnerButton :ElementFinder;
    // private TableContentOwner:ElementFinder;
   
    
    


    // constructor() {
    //     this.FirstName = element(by.xpath("//input[@id='firstName']"));
    //     this.LastName = element(by.xpath("//*[@id='lastName']"));
    //     this.Address = element(by.xpath("//*[@id='address']"));
    //     this.City = element(by.xpath("//*[@id='city']"));
    //     this.Telephone = element(by.xpath("//*[@id='telephone']"));
    //     this.AddNewOwner = element(by.xpath("//*[contains(text(),'Add New')]"));
    //     this.PetName=element(by.xpath("//table[@class='table table-striped']/tr[1]/td/dl/dt"));
    //     this.PetBirthDate=element(by.xpath("//table[@class='table table-striped']/tr[1]/td/dl/dt[2]"));
    //     this.AllOwnersTabSearch=element(by.xpath("//*[@class='glyphicon glyphicon-search']"));
    //     this.PetType=element(by.xpath("//table[@class='table table-striped']/tr[1]/td/dl/dt[3]"));
    //     this.OwnersTab = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
    //     this.TableContentOwner=element(by.xpath("//*[@class='table table-striped']/tbody"));
    //     this.PageTitle=element(by.xpath("//*[@class='container xd-container']/h2"));
    //     this.AddOwnerButton=element(by.xpath("//*[@class='btn btn-default' and text()='Add Owner']"));
        
        
    // }
     async addOwnerClick()
    {
        
         let PageTitle = this.PageTitle.getText();
         this.OwnersTab.click();
         this.AddNewOwner.click();
         log.debug("Page name is " + PageTitle);
         //console.log("page name is : " + PageTitle);
    }

    


     async addNewOwnerData(firstName:any,lastName:any,address:any,city:any,telephone:any)
    {
        
        await this.FirstName.sendKeys(firstName);
        
        await this.LastName.sendKeys(lastName);
        
        await this.Address.sendKeys(address);

        await this.City.sendKeys(city);

        await this.Telephone.sendKeys(telephone);

        await browser.wait(EC.visibilityOf(this.AddOwnerButton),4000);

        await this.AddOwnerButton.click();

        

    };

    

   

   async verifyAddedOwner()
    {
        this.OwnersTab.click();
        this.AllOwnersTabSearch.click();

        
        browser.wait(EC.visibilityOf(this.PageTitle),2000,'Element is taking longer time than expected');
        let PageTitle= this.PageTitle.getText();
        log.debug("PageTitle after navigating to owner page is:",PageTitle);
        //console.log("PageTitle after navigating to owner page is:",PageTitle);

        browser.wait(EC.visibilityOf(this.TableContentOwner),2000,'Element is taking longer time than expected');
        let ownerDetails= this.TableContentOwner.all(by.tagName("tr")).last();
        browser.actions().mouseMove(ownerDetails).perform();
        let ownerName= ownerDetails.getText();
    

        browser.wait(EC.elementToBeClickable(ownerDetails),2000,' Element is taking longer time than expected');
        log.debug("New added owner name is:",ownerName);
        //console.log("New added owner name is:",ownerName);

        return ownerName;

    }
    // PetDetails()
    // {
    //    this.PetName.getText().then(async function(PetName) 
    //     {
            //log.debug("Petname is:"+PetName);
    //          
                        
    //     })

    //     this.PetBirthDate.getText().then(async function(PetBirthDate) 
    //     {
            //log.debug("PetBirthDate is:"+PetBirthDate);
    //         
    //     })

    //     this.PetType.getText().then(async function(PetType) 
    //     {
                //log.debug("PetBirthDate is:"+PetType);
    //        
    //     })
    
    // }

   async VerifyExistingOwner() 
    {
        this.TableContentOwner.getText().then(async function () 
        {
            
        
        let count = await this.ListTbl.all(by.tagName("tr")).count();
        log.debug("Count is:",count);
        //console.log("Count is:",count);

        for (let i = 1; i <= count; i++) 
        {
            let OwnersTab = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
            log.debug(OwnersTab);
            //console.log(OwnersTab);
            
            if (OwnersTab == "Peter McTavish") 
            {
                await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();           
                break;
            }
            else 
            {
                
                
            }
        }
    });

    }
    

   



}
