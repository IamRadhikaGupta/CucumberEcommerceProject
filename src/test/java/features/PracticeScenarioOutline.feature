Feature: To practice scenario outline

  Scenario Outline: Login fail Multiple combinations
    Given user open chrome browser
    When user launches website demoqa
    And user enters "<username>" and "<password>"
    And user clicks on login button
    Then user gets login failed error message
    Examples:
      | username |password|
      |test1          |pass1 |
      |test2          |pass2 |

