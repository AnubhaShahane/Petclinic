import { Given, When, Then } from "cucumber";
import { VatPageObj } from "../pageObjects/VatPageObject";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, Button, by, element, ElementFinder, ExpectedConditions, protractor } from "protractor";
import testdata from "../testdata/userData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const SpecialityStrCnt = "radiology";

var until=protractor.ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let HomeObj = new HomePageObjects();
let VatObj =new VatPageObj();

Given('User is on Veterinarians page', async function()
{
    await HomeObj.Veterinarians.click();
    let pagename = await HomeObj.PageName.getText();
    await console.log("Pagename at vat is:"+pagename);


});

When('User clicks on All tab list of all Veterinarians id displayed with Specialties',async function () 
{
    await VatObj.AllVat.click();
    await console.log("List is displayed");
    
});


Then('Count of radiology specialities should be displayed',async function()
{
        let iSpeciality = 0;      

        let btnEditVet = VatObj.AllTbl.all(by.tagName("tr")).all(by.tagName("td")).each(function (item) 
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