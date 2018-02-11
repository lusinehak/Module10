Feature: Send Email

Background:
Given an open browser with accounts.google.com
When I enter Username as "testcaseforselenium" and Password as "9386206687".
Then login should be "My Account".

Scenario: Send email
When I click on compose button the mail window is opened
Then I enter the Receiver, Subject and Content
And I click the send button
Then the email should be sent
Then logoff and quit 


