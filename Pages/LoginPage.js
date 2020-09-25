const I = actor();
module.exports = {
  LoginWithRedhat: "#red-hat-logo",
  LoginWithIBM: "#IBMLoginButton",
  UserName: "#username",
  Password: "#password",
  LogIn: "#kc-login",

  loginMethod() {
    console.log("Inside login method " + this.LoginWithRedhat);

    I.click("#red-hat-logo");
    // I.click(this.LoginWithRedhat);
    I.fillField(this.UserName, "stottadi@in.ibm.com");
    I.click("Next");
    I.click;
    I.wait(2);
    I.fillField(this.Password, "July2020!");
    I.wait(5);
    //I.click("Log In");
    //I.click({ css: "input#kc-login" });
    I.click('//*[@id="kc-login"]');
    I.wait(20);
  },
};
