package tests;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import factory.Driver;
import factory.DriverFactory;
import factory.DriverType;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.BeforeTest;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true, plugin = { "json:target/cucumber-report.json",
        "html:target/cucumber-report" }, features = "src/main/resources", glue = "tests")


public class RunTest {
    public static WebDriver webDriver;
    public static Driver driver;

    @BeforeTest()
    public static void init() {
        driver = DriverFactory.getDriver(DriverType.CHROME);
        webDriver = driver.createDriver();
        if (webDriver == null) {
            System.exit(1);
        }
        webDriver.get("https://accounts.google.com");
    }
}
