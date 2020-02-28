import { Config } from "protractor";

export let config: Config = {
    //  seleniumAddress: "http://localhost:4444/wd/hub",
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    cucumberOpts: {
        // require step definitions
        require: [
          './stepDefinitions/*' // accepts a glob
        ]
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
       //   "--headless",
          "--window-size=1600,900"
        ],
          'w3c': false
          } 
      }
  };