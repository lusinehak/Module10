package tests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import decorator.ChristmasEmailDecorator;
import decorator.SignatureEmailDecorator;
import decorator.SimpleEmail;
import org.junit.Assert;
import pageobjects.MailActionsPage;

public class SendEmailTest {

    @When("^I click on compose button the mail window is opened")
    public void compose() {
        new MailActionsPage(RunTest.webDriver).composeEmail();
    }

    @Then("^I enter the Receiver, Subject and Content")
    public void addRequiredData() {
        String content = new SignatureEmailDecorator(new ChristmasEmailDecorator(new SimpleEmail())).getContent();
        new MailActionsPage(RunTest.webDriver).addData("lusine-hakobian@mail.ru",
                "Christmas Email", content);
    }

    @And("^I click the send button")
    public void sendMail() {
        new MailActionsPage(RunTest.webDriver).send();
    }

    @Then("^the email should be sent")
    public void checkSendEmails() {
        boolean isSent = new MailActionsPage(RunTest.webDriver).goToFolder("Sent").isItemExists("Christmas Email");
        Assert.assertTrue(isSent);
    }

    @Then("^logoff and quit")
    public void eit() {
        new MailActionsPage(RunTest.webDriver).logOut();
        RunTest.webDriver.quit();
    }

}
