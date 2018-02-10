$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login_example.feature");
formatter.feature({
  "line": 1,
  "name": "GMail login",
  "description": "",
  "id": "gmail-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login to Gmail account",
  "description": "",
  "id": "gmail-login;login-to-gmail-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter Username as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\".",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "login should be \"\u003cresult\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser.",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
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
      "line": 12,
      "id": "gmail-login;login-to-gmail-account;;1"
    },
    {
      "cells": [
        "testcaseforselenium",
        "9386206687",
        "My Account"
      ],
      "line": 13,
      "id": "gmail-login;login-to-gmail-account;;2"
    },
    {
      "cells": [
        "testcaseforselenium",
        "asd1236545",
        "Wrong password"
      ],
      "line": 14,
      "id": "gmail-login;login-to-gmail-account;;3"
    }
  ],
  "keyword": "Examples"
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
formatter.match({
  "location": "LoginAndSendEmailTest.start()"
});
formatter.result({
  "duration": 6330900844,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login to Gmail account",
  "description": "",
  "id": "gmail-login;login-to-gmail-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter Username as \"testcaseforselenium\" and Password as \"9386206687\".",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "login should be \"My Account\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser.",
  "keyword": "Then "
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
  "location": "LoginAndSendEmailTest.login(String,String)"
});
formatter.result({
  "duration": 1849084660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Account",
      "offset": 17
    }
  ],
  "location": "LoginAndSendEmailTest.verifyLogin(String)"
});
formatter.result({
  "duration": 3866684584,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.34.522913 (36222509aa6e819815938cbf2709b4849735537c),platform\u003dLinux 3.19.0-25-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027lusine-Lenovo-G50-70\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-25-generic\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.34.522913 (36222509aa6e81..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 62.0.3202.94, webStorageEnabled: true}\nSession ID: 0ade1b6dedd7ab4a5934b9519db1232e\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Wrong password\u0027)]|//*[@class\u003d\u0027paz5i\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:477)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:359)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:85)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\n\tat com.sun.proxy.$Proxy17.iterator(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$9.apply(ExpectedConditions.java:260)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$9.apply(ExpectedConditions.java:257)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat pageobjects.DriverManager.waitForElement(DriverManager.java:19)\n\tat pageobjects.LoginPage.checkLogin(LoginPage.java:42)\n\tat tests.LoginAndSendEmailTest.verifyLogin(LoginAndSendEmailTest.java:31)\n\tat ✽.Then login should be \"My Account\".(login_example.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginAndSendEmailTest.close()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "LoginAndSendEmailTest.start()"
});
formatter.result({
  "duration": 4037545265,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to Gmail account",
  "description": "",
  "id": "gmail-login;login-to-gmail-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I enter Username as \"testcaseforselenium\" and Password as \"asd1236545\".",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "login should be \"Wrong password\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser.",
  "keyword": "Then "
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
  "location": "LoginAndSendEmailTest.login(String,String)"
});
formatter.result({
  "duration": 1643164052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong password",
      "offset": 17
    }
  ],
  "location": "LoginAndSendEmailTest.verifyLogin(String)"
});
formatter.result({
  "duration": 10225937684,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of all [] (tried for 10 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027lusine-Lenovo-G50-70\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-25-generic\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.34.522913 (36222509aa6e81..., userDataDir: /tmp/.org.chromium.Chromium...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 62.0.3202.94, webStorageEnabled: true}\nSession ID: 226d936e7524944565ad96ecd2c20760\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat pageobjects.DriverManager.waitForElement(DriverManager.java:19)\n\tat pageobjects.LoginPage.checkLogin(LoginPage.java:42)\n\tat tests.LoginAndSendEmailTest.verifyLogin(LoginAndSendEmailTest.java:31)\n\tat ✽.Then login should be \"Wrong password\".(login_example.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginAndSendEmailTest.close()"
});
formatter.result({
  "status": "skipped"
});
});