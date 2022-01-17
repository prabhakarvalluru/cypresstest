var reporter = require('cucumber-html-reporter');
var options = {

        theme: 'bootstrap',

        jsonFile: 'cypress/cucumber-json',

        output: './reports/cucumber-html.html',

        reportSuiteAsScenarios: true,

        scenarioTimestamp: true,

        launchReport: true,

        timestamp:true,

        metadata: {

            "App Version":"0.1",

            "Test Environment": "Test",

            "Browser": "Chrome  96.0",

            "Platform": "Windows 10",

            "Parallel": "Scenarios",

            "Executed": "Remote",

        }

    };

    reporter.generate(options);