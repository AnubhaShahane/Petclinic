"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
let reporter = require('cucumber-html-reporter');
const globalAny = global;
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
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
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
        '../features/editOwner.feature',
    ],
    cucumberOpts: {
        // require step definitions
        tags: "@smoke",
        format: 'json:./cucumberreport.json',
        strict: true,
        require: [
            './stepDefinations/*.js',
        ]
    },
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = false;
        protractor_1.browser.driver.manage().window().maximize();
        const chai = require("chai").use(require("chai-as-promised"));
        globalAny.chai = chai;
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
                "Browser": "Chrome  79.0.3945.88",
                "Platform": "Windows 7",
                "Parallel": "Scenarios",
                "Executed": "Web App"
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvdHJhY3RvckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BldGNsaW5pYy9Qcm90cmFjdG9yQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE2QztBQUM3QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNqRCxNQUFNLFNBQVMsR0FBSyxNQUFNLENBQUM7QUFFM0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN2QixJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsRCxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlO0FBQ3ZFLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUUvQixJQUFJLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBR2pDLFFBQUEsTUFBTSxHQUFXO0lBRTFCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsY0FBYyxFQUFFLEtBQUs7SUFDckIsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUVuQix3QkFBd0IsRUFBRSxLQUFLO0lBQy9CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRy9ELHVEQUF1RDtJQUV2RCxZQUFZLEVBQ1o7UUFDRSxXQUFXLEVBQUUsUUFBUTtRQUVyQixhQUFhLEVBQUU7WUFFYixJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFFckIsS0FBSyxFQUFFO2dCQUVMLFFBQVEsRUFBRTtvQkFDUixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixpQkFBaUIsRUFBRSxJQUFJO29CQUN2QixpQkFBaUIsRUFBRSxhQUFhO2lCQUNqQzthQUNGO1NBQ0Y7S0FDRjtJQUVELEtBQUssRUFBRTtRQUNMLDJCQUEyQjtRQUMzQiw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLCtCQUErQjtLQUNoQztJQUVELFlBQVksRUFBRTtRQUNaLDJCQUEyQjtRQUMzQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsTUFBTSxFQUFFLElBQUk7UUFFWixPQUFPLEVBQUU7WUFDUCx3QkFBd0I7U0FFekI7S0FDRjtJQUVELFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFFZCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUN0QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDOUQsU0FBUyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsb0JBQW9CLEVBQUUsY0FBYztZQUNwQyxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLE1BQU0sRUFBRSxZQUFZLEdBQUcsVUFBVSxHQUFHLE9BQU87WUFDM0Msc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGtCQUFrQixFQUFFLE1BQU07Z0JBQzFCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFNBQVM7YUFDdEI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUc3QixDQUFDO0NBQ0YsQ0FBQyJ9