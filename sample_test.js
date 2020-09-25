Feature("test");

Scenario("test something", (I) => {
  I.amOnPage("/");
  I.click("WYSIWYG Editor");
  I.switchTo("#mce_0_ifr");
  I.fillField("#tinymce", "Hello World");
  I.doubleClick("#tinymce");
  I.wait(10);
  I.switchTo();
  I.click("#mceu_3");
  I.switchTo("#mce_0_ifr");
  I.click("#tinymce");
  I.wait(10);
  I.saveScreenshot("bold2.png");
});
