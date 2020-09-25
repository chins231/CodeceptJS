const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "https://sandbox.marketplace.redhat.com/",
      browser: "chrome",
      // user: "sriranganathtott1",
      // key: "RnpxzKsCupiRwwpY3vNz",
      // desiredCapabilities: {
      //   os: "osx",
      //   browser_version: "10",
      // },

      windowSize: "maximize",
      timeouts: {
        script: 60000,
        "page load": 10000,
      },
    },
  },
  include: {
    I: "./steps_file.js",
    loginPage: "./Pages/LoginPage.js",
    homePage: "./Pages/HomePage.js",
  },
  bootstrap: null,
  mocha: {},
  name: "Codecept-Selenioum",
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
  },
};
