$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/PracticeScenarioOutline.feature");
formatter.feature({
  "name": "To practice scenario outline",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login fail Multiple combinations",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user launches website demoqa",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user gets login failed error message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "test1",
        "pass1"
      ]
    },
    {
      "cells": [
        "test2",
        "pass2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login fail Multiple combinations",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open chrome browser",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user launches website demoqa",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters \"test1\" and \"pass1\"",
  "keyword": "And "
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
  "name": "user gets login failed error message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Login fail Multiple combinations",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open chrome browser",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user launches website demoqa",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters \"test2\" and \"pass2\"",
  "keyword": "And "
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
  "name": "user gets login failed error message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});