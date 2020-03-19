import { Config } from "protractor";
import * as reporter from "cucumber-html-reporter"

export let config: Config = {
    //  seleniumAddress: "http://localhost:4444/wd/hub",
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    cucumberOpts: {
        // require step definitions
      //  tags: "@smoke",
        format:"json:./cucumberreport.json",
        require: [
          './stepDefinitions/*' // accepts a glob
        ],
      },

      onComplete: () => {
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberreport.json',
          output: './report/cucumber_report.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
   
      reporter.generate(options);
      },  

    specs: [
      //  "spec1.js",
      //  "spec2.js",
      //  "actions.js",
      //  "frame.js",
      //"project_1/practice.js"
      //"testspec.js"
      "../features/demo.feature"
     ],
    capabilities: {
          'browserName': 'chrome',
          'chromeOptions': {
             args: [
          "--headless",
          "--window-size=1600,900"
        ],
          'w3c': false
          } 
      }
  };