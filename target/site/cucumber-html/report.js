$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/com/biotique/qa/features/BiotiqueHomePage.feature");
formatter.feature({
  "name": "Home page features",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that login link is present in homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BiotiqueHomePageSteps.openBrowserTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launches the url",
  "keyword": "When "
});
formatter.match({
  "location": "BiotiqueHomePageSteps.launchURLTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see the login/Registration link",
  "keyword": "Then "
});
formatter.match({
  "location": "BiotiqueHomePageSteps.validateLoginLinkTest()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy13.isDisplayed(Unknown Source)\r\n\tat com.biotique.qa.pages.BiotiqueHomePage.verifyLoginLink(BiotiqueHomePage.java:35)\r\n\tat com.biotique.qa.stepdefinitions.BiotiqueHomePageSteps.validateLoginLinkTest(BiotiqueHomePageSteps.java:26)\r\n\tat ✽.user can see the login/Registration link(file:src/main/java/com/biotique/qa/features/BiotiqueHomePage.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Verify Biotique home page title",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.match({
  "location": "BiotiqueHomePageSteps.openBrowserTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launches the url",
  "keyword": "When "
});
formatter.match({
  "location": "BiotiqueHomePageSteps.launchURLTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title of the page is Biotique Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "BiotiqueHomePageSteps.verifyTitleTest()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/main/java/com/biotique/qa/features/BiotqueUserHomePage.feature");
formatter.feature({
  "name": "User home page features",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that username is displayed in homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on HomePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is able to see username in the page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify that user is able to see MyAccount link on home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is able to see My Account link in the page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/main/java/com/biotique/qa/features/LoginPage.feature");
formatter.feature({
  "name": "Login page features",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify that user can navigate to Login Page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Biotique home page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on Login link",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user can see the login page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Verify that login funtionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters login id and password",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user is able to login to application",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});