package com.biotique.qa.stepdefinitions;
import org.junit.Assert;

import com.biotique.qa.pages.BiotiqueHomePage;
import com.biotique.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BiotiqueHomePageSteps extends TestBase {
	BiotiqueHomePage biotiquehomepage=new BiotiqueHomePage();
	
	@Given("^user opens browser$")
	public void openBrowserTest(){
		TestBase.initialization();
	}

	@When("^user launches the url$")
	public void launchURLTest(){
		TestBase.launchURL();
	}
	
	@Then("^user can see the login/Registration link$")
	public void validateLoginLinkTest(){
		Boolean b=biotiquehomepage.verifyLoginLink();
		Assert.assertTrue(b);
		
	}
	
	@Then("^the title of the page is Biotique Home Page$")
	public void verifyTitleTest(){
		Assert.assertEquals("Ayurvedic Products Online - Natural Cosmetic Products | Biotique",
				biotiquehomepage.validateTitle());
	}
}
