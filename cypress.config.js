const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl:"http://uatthaili.digihub.com.np",
    experimentalSessionAndOrigin:true,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
