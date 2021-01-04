import { HomePageObjects } from "../pageObjects/HomePageObject";
import { browser, Button, by, element, ElementFinder, ExpectedConditions, protractor } from "protractor";


let HomePage = new HomePageObjects();
const log = require("../log/logs").default;

const SpecialityStrCnt = "radiology";


export class VatPageObj 
{

    private AllVetList=element(by.linkText("ALL"));
    private TableOFVet=element(by.xpath("//table[@class='table table-striped']/tbody"));
    private PageTitle=element(by.xpath("//*[@class='container xd-container']/h2"));

    // async navigateVetPage()
    // {
    //     await HomePage.Veterinarians.click();
    //     let pagename =  HomePage.PageName.getText();
    //     log.debug("Pagename at vet is:"+pagename);
    // }

    async displayVetList()
    {
        await this.AllVetList.click();
        log.debug("List is displayed");
    
    }

    async countRadiology()
    {
        let iSpeciality = 0;      

        let btnEditVet = this.TableOFVet.all(by.tagName("tr")).each(function (item) 
        {
            
            
            item!.getText().then(function (text) 
            {

                log.debug("Displaying text",+text);
                //console.log("Displaying text",+text);

                if (text.indexOf(SpecialityStrCnt) >= 0) 
                {

                    iSpeciality = iSpeciality + 1;

                    log.debug("Total number of", SpecialityStrCnt, ":", iSpeciality);
                    //console.log("Total number of", SpecialityStrCnt, ":", iSpeciality);

                }

 
            });            

        });  
    }
   

}