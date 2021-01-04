"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
//import {WebDriver} from 'selenium-webdriver';
let reporter = require('cucumber-html-reporter');
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let ReportDate = yyyy + '-' + mm + '-' + dd;
exports.config = {
    allScriptsTimeout: 50000,
    getPageTimeout: 50000,
    directConnect: true,
    baseUrl: 'http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/',
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instan
    capabilities: {
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
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = false;
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.waitForAngularEnabled(false);
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            screenshotsDirectory: 'screenshots/',
            storeScreenshots: true,
            output: './Reports/' + ReportDate + '.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdHJhY3RvckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1Byb3RyYWN0b3JDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTZDO0FBQzdDLCtDQUErQztBQUMvQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUlqRCxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3ZCLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWU7QUFDdkUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRS9CLElBQUksVUFBVSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFLakMsUUFBQSxNQUFNLEdBQVc7SUFFMUIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixjQUFjLEVBQUUsS0FBSztJQUNyQixhQUFhLEVBQUUsSUFBSTtJQUVuQixPQUFPLEVBQUUscUVBQXFFO0lBQzlFLHdCQUF3QixFQUFFLEtBQUs7SUFDL0IsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFHL0Qsb0RBQW9EO0lBRXBELFlBQVksRUFDWjtRQUNHLFdBQVcsRUFBRSxRQUFRO1FBQ3RCLCtDQUErQztRQUMvQyx5QkFBeUI7UUFDekIsSUFBSTtRQUNKLDJCQUEyQjtRQUMzQixLQUFLO1FBQ0wsVUFBVTtRQUNWLGNBQWM7UUFDZCxzQ0FBc0M7UUFDdEMsbUNBQW1DO1FBQ25DLDJDQUEyQztRQUMzQyxVQUFVO1FBQ1YsSUFBSTtRQUdKLGFBQWEsRUFBRTtZQUViLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUVyQixLQUFLLEVBQUU7Z0JBRUwsUUFBUSxFQUFFO29CQUNSLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGlCQUFpQixFQUFFLElBQUk7b0JBQ3ZCLGlCQUFpQixFQUFFLGFBQWE7aUJBQ2pDO2FBQ0Y7U0FDRjtLQUVKO0lBRUQsS0FBSyxFQUFFO1FBQ0wsOEJBQThCO1FBQzlCLDhCQUE4QjtRQUM3Qiw4QkFBOEI7UUFDL0Isc0NBQXNDO1FBQ3RDLHlCQUF5QjtLQUMxQjtJQUdDLFlBQVksRUFBRTtRQUVaLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsTUFBTSxFQUFFLElBQUk7UUFFWixPQUFPLEVBQUU7WUFDUCx3QkFBd0I7U0FFekI7S0FHRjtJQUVELFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFHZCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUN0QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBSXZDLENBQUM7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBRWYsSUFBSSxPQUFPLEdBQ1g7WUFDRSxLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLG9CQUFvQixFQUFFLGNBQWM7WUFDcEMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixNQUFNLEVBQUUsWUFBWSxHQUFHLFVBQVUsR0FBRyxPQUFPO1lBQzNDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUNSO2dCQUNFLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixTQUFTLEVBQUUsaUJBQWlCO2dCQUM1QixVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxTQUFTO2FBQ3RCO1NBQ0YsQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFN0IsQ0FBQztDQUNGLENBQUMifQ==