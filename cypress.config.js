const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vbkatw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
