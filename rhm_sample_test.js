//const { LoginPage } = require("./Pages/LoginPage");

const { I, loginPage, homePage } = inject();

Feature("Login  and Search for a product");

Before(() => {
  I.amOnPage("/");
});

Scenario("Ensure Login button is displayed", () => {
  I.seeElement(loginPage.LoginWithRedhat);
});

Scenario("Login to RHM ", () => {
  loginPage.loginMethod();
  I.waitForElement(homePage.searchText);
  // I.seeElement(homePage.searchText);
  I.wait(2);
  I.saveScreenshot("RHM1234.png");
});
