const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cc7hda', // This is your Cypress Dashboard project ID
  apiKey: '6667c068-5575-46a0-b0ff-9f866e285a58', // This is your Cypress Dashboard API key
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/temp_results/report.xml'
  },
  env: {
    screenshotOnRun: true
  },
  e2e: {
    baseUrl: "https://shopmtn.eu",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
