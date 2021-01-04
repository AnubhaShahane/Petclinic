import { Config, browser } from "protractor";
//import {WebDriver} from 'selenium-webdriver';
let reporter = require('cucumber-html-reporter');



let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

let ReportDate = yyyy + '-' + mm + '-' + dd;




export let config: Config = {

  allScriptsTimeout: 50000,
  getPageTimeout: 50000,
  directConnect: true,

  baseUrl :'http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/',
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),


  // Capabilities to be passed to the webdriver instan

  capabilities:
  {
     browserName: 'chrome',
    //  firefox_profile: 'support/firefox_profile',
    // 'moz:firefoxOptions': 
    // {
    //  'args': ['--safe-mode']
    // },
    // prefs:{
    // download: {
    //         prompt_for_download: false,
    //         directory_upgrade: true,
    //         default_directory: './Download/'
    //       }
    // }
  

    chromeOptions: {

      args: ["--incognito"],

      prefs: {

        download: {
          prompt_for_download: false,
          directory_upgrade: true,
          default_directory: './Download/'
        }
      }
    }
  
},

specs: [
  //'../features/login.feature',
  '../features/homePage.feature',
   '../features/newOwner.feature',
  // '../features/specialities.feature',
  '../features/Vet.feature'
],
  

  cucumberOpts: {
    
    format: 'json:./cucumberreport.json',
    strict: true,

    require: [
      './stepDefinations/*.js', 

    ]

    
  },

  onPrepare: () => 
  {

    browser.ignoreSynchronization = false;
    browser.driver.manage().window().maximize();
    browser.waitForAngularEnabled(false);
    
    
    
  },
  onComplete: () => 
  {
    var options = 
    {
      theme: 'bootstrap',
      jsonFile: './cucumberreport.json',
      screenshotsDirectory: 'screenshots/',
      storeScreenshots: true,
      output: './Reports/' + ReportDate + '.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: 
      {
        "App Version": "0.3.2",
        "Test Environment": "test",
        "Browser": "Firefox  87.0.1",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Web App"
      }
    };

    reporter.generate(options);

  }
};
