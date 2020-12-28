"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
//import {WebDriver} from 'selenium-webdriver';
let reporter = require('cucumber-html-reporter');
//var  Feature = 'APITestingDemo';
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let ReportDate = yyyy + '-' + mm + '-' + dd;
exports.config = {
    allScriptsTimeout: 50000,
    getPageTimeout: 50000,
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
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
        '../features/login.feature',
        '../features/homePage.feature',
        '../features/newOwner.feature',
        '../features/specialities.feature',
        '../features/Vet.feature'
    ],
    cucumberOpts: {
        // require step definitions
        //tags: "@first",
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
                "Browser": "Firefox  84.0.1",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Web App"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdHJhY3RvckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1Byb3RyYWN0b3JDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTZDO0FBQzdDLCtDQUErQztBQUMvQyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUdqRCxrQ0FBa0M7QUFFbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN2QixJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsRCxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlO0FBQ3ZFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUUvQixJQUFJLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBR2pDLFFBQUEsTUFBTSxHQUFXO0lBRTFCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsY0FBYyxFQUFFLEtBQUs7SUFDckIsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUVuQix3QkFBd0IsRUFBRSxLQUFLO0lBQy9CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRy9ELG9EQUFvRDtJQUVwRCxZQUFZLEVBQ1o7UUFDRyxXQUFXLEVBQUUsUUFBUTtRQUN0QiwrQ0FBK0M7UUFDL0MseUJBQXlCO1FBQ3pCLElBQUk7UUFDSiwyQkFBMkI7UUFDM0IsS0FBSztRQUNMLFVBQVU7UUFDVixjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLG1DQUFtQztRQUNuQywyQ0FBMkM7UUFDM0MsVUFBVTtRQUNWLElBQUk7UUFHSixhQUFhLEVBQUU7WUFFYixJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFFckIsS0FBSyxFQUFFO2dCQUVMLFFBQVEsRUFBRTtvQkFDUixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixpQkFBaUIsRUFBRSxJQUFJO29CQUN2QixpQkFBaUIsRUFBRSxhQUFhO2lCQUNqQzthQUNGO1NBQ0Y7S0FFSjtJQUVDLEtBQUssRUFBRTtRQUNMLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLGtDQUFrQztRQUNsQyx5QkFBeUI7S0FDMUI7SUFFRCxZQUFZLEVBQUU7UUFDWiwyQkFBMkI7UUFDM0IsaUJBQWlCO1FBQ2pCLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsTUFBTSxFQUFFLElBQUk7UUFFWixPQUFPLEVBQUU7WUFDUCx3QkFBd0I7U0FFekI7S0FDRjtJQUVELFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFHZCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUN0QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBSXZDLENBQUM7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBRWYsSUFBSSxPQUFPLEdBQ1g7WUFDRSxLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLG9CQUFvQixFQUFFLGNBQWM7WUFDcEMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixNQUFNLEVBQUUsWUFBWSxHQUFHLFVBQVUsR0FBRyxPQUFPO1lBQzNDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUNSO2dCQUNFLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixTQUFTLEVBQUUsaUJBQWlCO2dCQUM1QixVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxTQUFTO2FBQ3RCO1NBQ0YsQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFN0IsQ0FBQztDQUNGLENBQUMifQ==