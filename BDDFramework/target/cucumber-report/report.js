$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login_example.feature");
formatter.feature({
  "line": 1,
  "name": "GMail login",
  "description": "",
  "id": "gmail-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login to Gmail account",
  "description": "",
  "id": "gmail-login;login-to-gmail-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an open browser with accounts.google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\".",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login should be \"\u003cresult\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser.",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "gmail-login;login-to-gmail-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ],
      "line": 11,
      "id": "gmail-login;login-to-gmail-account;;1"
    },
    {
      "cells": [
        "testcaseforselenium",
        "9386206687",
        "My Account"
      ],
      "line": 12,
      "id": "gmail-login;login-to-gmail-account;;2"
    },
    {
      "cells": [
        "testcaseforselenium",
        "asd1236545",
        "Wrong password"
      ],
      "line": 13,
      "id": "gmail-login;login-to-gmail-account;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login to Gmail account",
  "description": "",
  "id": "gmail-login;login-to-gmail-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an open browser with accounts.google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"testcaseforselenium\" and Password as \"9386206687\".",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login should be \"My Account\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.start()"
});
formatter.result({
  "duration": 5636795037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcaseforselenium",
      "offset": 21
    },
    {
      "val": "9386206687",
      "offset": 59
    }
  ],
  "location": "LoginTest.login(String,String)"
});
formatter.result({
  "duration": 1646754628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 17
    }
  ],
  "location": "LoginTest.verifyLogin(String)"
});
formatter.result({
  "duration": 4211096780,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.close()"
});
formatter.result({
  "duration": 145469705,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to Gmail account",
  "description": "",
  "id": "gmail-login;login-to-gmail-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "an open browser with accounts.google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter Username as \"testcaseforselenium\" and Password as \"asd1236545\".",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login should be \"Wrong password\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.start()"
});
formatter.result({
  "duration": 3712262069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcaseforselenium",
      "offset": 21
    },
    {
      "val": "asd1236545",
      "offset": 59
    }
  ],
  "location": "LoginTest.login(String,String)"
});
formatter.result({
  "duration": 1630552976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong password",
      "offset": 17
    }
  ],
  "location": "LoginTest.verifyLogin(String)"
});
formatter.result({
  "duration": 757541730,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.close()"
});
formatter.result({
  "duration": 88284457,
  "status": "passed"
});
formatter.uri("send_email.feature");
formatter.feature({
  "line": 1,
  "name": "Send Email",
  "description": "",
  "id": "send-email",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "an open browser with accounts.google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter Username as \"testcaseforselenium\" and Password as \"9386206687\".",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "login should be \"My Account\".",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.start()"
});
formatter.result({
  "duration": 9412042296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcaseforselenium",
      "offset": 21
    },
    {
      "val": "9386206687",
      "offset": 59
    }
  ],
  "location": "LoginTest.login(String,String)"
});
formatter.result({
  "duration": 1490747916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 17
    }
  ],
  "location": "LoginTest.verifyLogin(String)"
});
formatter.result({
  "duration": 4312875285,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Send email",
  "description": "",
  "id": "send-email;send-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click on compose button the mail window is opened",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter the Receiver, Subject and Content",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click the send button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the email should be sent",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "logoff and quit",
  "keyword": "Then "
});
formatter.match({
  "location": "SendEmailTest.compose()"
});
formatter.result({
  "duration": 13115925561,
  "status": "passed"
});
formatter.match({
  "location": "SendEmailTest.addRequiredData()"
});
formatter.result({
  "duration": 3602007662,
  "status": "passed"
});
formatter.match({
  "location": "SendEmailTest.sendMail()"
});
formatter.result({
  "duration": 211765431,
  "status": "passed"
});
formatter.match({
  "location": "SendEmailTest.checkSendEmails()"
});
formatter.result({
  "duration": 20094180603,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.34.522913 (36222509aa6e819815938cbf2709b4849735537c),platform\u003dLinux 3.19.0-25-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027lusine-Lenovo-G50-70\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-25-generic\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.34.522913 (36222509aa6e81..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 62.0.3202.94, webStorageEnabled: true}\nSession ID: 1b93dfb6b4e300bede9bdf2a09f983e1\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\n\tat pageobjects.MailActionsPage.goToFolder(MailActionsPage.java:82)\n\tat tests.SendEmailTest.checkSendEmails(SendEmailTest.java:33)\n\tat ✽.Then the email should be sent(send_email.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "SendEmailTest.eit()"
});
formatter.result({
  "status": "skipped"
});
});