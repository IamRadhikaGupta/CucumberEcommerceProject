Feature: User home page features
Scenario: Verify that username is displayed in homepage

Given user is on HomePage
Then user is able to see username in the page

Scenario: Verify that user is able to see MyAccount link on home page

Given user is on Home page
Then user is able to see My Account link in the page