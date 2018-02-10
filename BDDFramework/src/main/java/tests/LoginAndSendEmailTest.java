package tests;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.LoginPage;
import singleton.Logger;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.assertThat;

public class LoginAndSendEmailTest {

    @Given("^an open browser with accounts.google.com")
    public void start() {
        Logger.getInstance().info("Given: open browser with accounts.google.com");
        RunTest.init();
        Logger.getInstance().info("Given: successfully completed");
    }

    @When("^I enter Username as \"([^\"]*)\" and Password as \"([^\"]*)\"")
    public void login(String username, String password) {
        Logger.getInstance().info("Enter username and password");
        new LoginPage(RunTest.webDriver).logInAccount(username, password);

    }

    @Then("^login should be \"([^\"]*)\"")
    public void verifyLogin(String expected) {
        String result = new LoginPage(RunTest.webDriver).checkLogin();
        assertThat(result,containsString(expected));
        Logger.getInstance().info("Login verification successfully completed");
    }

    @Then("^close the browser")
    public void close() {
        RunTest.webDriver.quit();
        Logger.getInstance().info("Browser closed");
    }

}
