import { Given, When, Then } from "cucumber";
import { VatPageObj } from "../pageObjects/VetObject";
import { HomePageObjects } from "../pageObjects/HomePageObject";
import { browser, Button, by, element, ElementFinder, ExpectedConditions, protractor } from "protractor";


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const log = require("../log/logs").default;

//var until=protractor.ExpectedConditions;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(50 * 1000);

let HomePage = new HomePageObjects();
let VetPage =new VatPageObj();

Given('User is on Veterinarians page', async function()
{
    await HomePage.VetTabClick();

});

When('User clicks on All tab list of all Veterinarians id displayed with Specialties',async function () 
{
    await VetPage.displayVetList();
    
});


Then('Count of radiology specialities should be displayed',async function()
{
    await VetPage.countRadiology();
    
});