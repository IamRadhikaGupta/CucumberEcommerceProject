package stepdefinitions;

import cucumber.api.java.AfterStep;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.After;

public class login {
    @Before(order=1)
    public void user_launches_chrome() {
       System.out.println("hook open browser");
    }
    @Before(order=2)
    public void user_launches_chrome1() {
        System.out.println("hook-launch website");
    }

    @When("press submit")
    public void press_submit() {
        System.out.println(" press submit");
    }

    @Given("enter username and password")
    public void enterCreds() {
        System.out.println("enter creds");
    }

    @Then("home page is displayed")
    public void displayHomePage() {
        System.out.println("chk home page");
    }
    @After
    public void tearDown() {
        System.out.println("hook close browser");
    }

}
