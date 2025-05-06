package stepdefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class practiceScenarioOutline {
    WebDriver driver;
    @Given("user open chrome browser")
    public void user_open_chrome_browser() {
         driver=new ChromeDriver();
    }

    @When("user launches website demoqa")
    public void user_launches_website_demoqa() {
        driver.get("https://demoqa.com/login");
    }

    @When("user enters {string} and {string}")
    public void user_enters_credentials(String userName, String password) {
        driver.findElement(By.xpath("//input[@id='userName']")).sendKeys(userName);
        driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);

    }

    @When("user clicks on login button")
    public void user_clicks_on_login_button() {
        driver.findElement(By.xpath("//button[@id='login']")).click();
    }

    @Then("user gets login failed error message")
    public void user_gets_login_failed_error_message() {
        String actualMessage=driver.findElement(By.xpath("//p[text()='Invalid username or password!']")).getText();
        String expMessage="Invalid username or password!";
        Assert.assertEquals(actualMessage, expMessage);
    }
}
