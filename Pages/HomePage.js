const I = actor();
const assert = require("assert");
module.exports = {
  searchText: "#q-downshift-input",

  searchProduct(searchString) {
    I.waitForElement(this.searchText, 10);
    // I.seeElement(this.searchText, 10);
    I.fillField(this.searchText, searchString);
    // I.click(this.searchButton);
    I.pressKey("Enter");
    I.wait(20);
    I.waitForElement(locate("p").withText("Viewing"));
  },
};
