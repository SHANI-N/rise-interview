import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {

    charts: true,

    reportPageTitle: 'Cypress Inline Reporter',

    embeddedScreenshots: true,

    inlineAssets: true, //Adds the asserts inline

  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: "https://sdk.streamrail.com/interview",
    chromeWebSecurity: false,
    viewportHeight: 970,
    viewportWidth: 1500
  }
});
