//import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { browser, by, element, ElementFinder,  protractor } from "protractor";


var EC = protractor.ExpectedConditions;
const log = require("../log/logs").default;

export class newOwnerPageObject 
{

  private FirstName=element(by.id('firstName'));
  private LastName=element(by.id('lastName'));
  private Address= element(by.id('address'));
  private City= element(by.id('city'));
  private Telephone= element(by.id('telephone'));
  private AddNewOwner=element(by.css('[href="/petclinic/owners/add"]'));
  private OwnersTab=element(by.css('[href="/petclinic/owners"]'));
  private AddOwnerButton=element(by.buttonText('Add Owner'));
  private AllOwnersTabSearch=element(by.css('[href="/petclinic/owners"]'));
  private PageTitle=element(by.css('div .xd-container h2'));
  private TableContentOwner=element(by.css('table.table-striped tbody'));

         async OwnerTabClick()
    {
        
         let PageTitle = this.PageTitle.getText();
         this.OwnersTab.click();
         this.AddNewOwner.click();
         await log.debug("Page name is " + PageTitle);
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
