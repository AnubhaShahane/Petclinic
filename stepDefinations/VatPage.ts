import { Given, When, Then } from "cucumber";
import { VatPageObj } from "../pageObjects/VetObject";
import { HomePageObjects } from "../pageObjects/HomePageObject";
import { browser, Button, by, element, ElementFinder, ExpectedConditions, protractor } from "protractor";


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const SpecialityStrCnt = "radiology";

//var until=protractor.ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let HomePage = new HomePageObjects();
let VatPage =new VatPageObj();

Given('User is on Veterinarians page', async function()
{
    await HomePage.Veterinarians.click();
    let pagename =  HomePage.PageName.getText();
    console.log("Pagename at vat is:"+pagename);


});

When('User clicks on All tab list of all Veterinarians id displayed with Specialties',async function () 
{
    await VatPage.AllVat.click();
    console.log("List is displayed");
    
});


Then('Count of radiology specialities should be displayed',async function()
{
        let iSpeciality = 0;      

        let btnEditVet = VatPage.AllTbl.all(by.tagName("tr")).each(function (item) 
        {
            
            
            item!.getText().then(function (text) 
            {

                console.log("Displaying text",+text);

                if (text.indexOf(SpecialityStrCnt) >= 0) 
                {

                    iSpeciality = iSpeciality + 1;

                    console.log("Total number of", SpecialityStrCnt, ":", iSpeciality);

                }

 
            });            

        });  

    
});