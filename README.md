# CodeceptJS

NodeJS:
We need to install NodeJS –12.0.0 , I will share the package
Once node is installed go to terminal and run below command
node -v
output should be: 12.0.0
Ensure to have VSCode or Brackets or any editor of your choice

Installing CodeceptJS :

1. First create a working director and go into the director
   Run below commands in terminal
   mkdir <Name> && cd <Name>
2. Run npm init -y to create a package.json in the working directory to work with dependencies
   (by giving -y we will accept all prompts asked while creating the json file)
   We can verify by going in to the working directory , can see package.json listed there

3. Next we need to install codeceptjs, webdriverio, selenium server using npm
4. Please run below command in terminal to install
   npm install codeceptjs webdriverio selenium-standalone --save-dev
   save-dev will ensure these are saved under dev-dependencies in package.json which was created earlier
5. Run below command to install selenium server and selenium related dependencies like browser drivers
   npx selenium-standalone install
6. Initialize codeceptJs project in this step
   npx codeceptjs init
   here we will be asked to provide few inputs while creating the project like
   a) Where tests are located - accept default value (what ever file ends with \_test will be executed as part of tests)
   b) Which tool(helper) we need to use with codeceptjs (webdriver, puppeteer, protactor etc) we select webdriver here
   c) Which is output folder -select default value
   d) Extend I object with custom steps –Yes
   e) Location for custom steps -select default value
   f) Select English language in next step
   g) Base url is asked for the test—our test application url
   h) Select the browser -Select Chrome (default value)
   i) Next it will ask which feature we are testing – we can name any feature
   j) Filename (by default feature name will be given) we can select any name
   k) That’s it sample test project is created and we can check the working directory

The values given while creating codeceptjs can be seen in codecept.conf.js file in project folder and can be updated there .
We can configure much more here like multiple browsers(Browserstack/sauce labs)
Also we can configure allure report and get the report once execution is completed .

few commnads to remeber
#to run
npx codeceptjs run <testname> –steps
#get allure reports
#npx allure serve output
#start selenium server
#npx selenium-standalone start
