Feature: GMail login

  Background:
    Given an open browser with accounts.google.com

    Scenario Outline: Login to Gmail account
      When I enter Username as "<username>" and Password as "<password>".
      Then login should be "<result>".
      Then close the browser.

      Examples:
        | username            | password    |result         |
        | testcaseforselenium | 9386206687  |My Account     |
        | testcaseforselenium | asd1236545  |Wrong password |


