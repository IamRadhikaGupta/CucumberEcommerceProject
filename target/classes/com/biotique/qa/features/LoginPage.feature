Feature: Login page features

Scenario: Verify that user can navigate to Login Page

Given user is on Biotique home page
When user clicks on Login link
Then user can see the login page

Scenario: Verify that login funtionality

Given user is on login page
When user enters login id and password 
And user clicks on login button
Then user is able to login to application



