module.exports = {
  searchText: "#q-downshift-input",

  async searchProduct(searchString = "amazon echo") {
    I.fillField(this.searchText, searchString);
    I.click(this.searchButton);
  },
};
