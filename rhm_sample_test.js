//const { LoginPage } = require("./Pages/LoginPage");

const { I, loginPage, homePage } = inject();

Feature("Login  and Search for a product");

Before(() => {
  I.amOnPage("/");
});

// Scenario("Ensure Login button is displayed", () => {
//   I.seeElement(loginPage.LoginWithRedhat);
// });

// Scenario("Login to RHM ", () => {
//   loginPage.loginMethod();
//   I.waitForElement(homePage.searchText);
//   // I.seeElement(homePage.searchText);
//   I.wait(2);
//   I.saveScreenshot("RHM1234.png");
// });

Scenario("Search for a product ", () => {
  loginPage.loginMethod();
  homePage.searchProduct("Robin");

  I.wait(2);
  I.saveScreenshot("search.png");
  I.waitForElement(locate("p").withText("Viewing"));

  I.click(locate("a").withAttr({ href: "/en-us/products/robin-storage" }));
  // I.seeNumberOfElements(
  //   locate("a").withAttr({ href: "/en-us/products/robin-storage" }),
  //   2
  // );

  I.waitForElement(locate("span").withText("Free trial"), 60);
  I.saveScreenshot("RobinStorage.png");
});
