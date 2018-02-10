package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class LoginPage extends DriverManager {
    public LoginPage(WebDriver driver) {
        super(driver);
    }


    private static final String USERNAME_FIELD = "identifierId";
    private static final String PASSDOWR_FIELD = "password";
    private static final String NEXT_BTN = "//div[@id='identifierNext']|//div[@id='passwordNext']";
    private static final String VERIFY_ACCOUNT = "//div[contains(text(),'Wrong password')]|//*[@class='paz5i']";

    @FindBy(id = USERNAME_FIELD)
    private WebElement username;

    @FindBy(name = PASSDOWR_FIELD)
    private List<WebElement> password;

    @FindBy(xpath = NEXT_BTN)
    private WebElement nextButton;

    @FindBy(xpath = VERIFY_ACCOUNT)
    private List<WebElement> verifyAccount;

    public void logInAccount(String uName, String passwd) {
        username.sendKeys(uName);
        nextButton.click();
        waitForElement(driver, password);
        password.get(0).sendKeys(passwd);
        nextButton.click();
    }

    public String checkLogin() {
        waitForElement(driver, verifyAccount);
        return verifyAccount.get(0).getText();
    }
}

