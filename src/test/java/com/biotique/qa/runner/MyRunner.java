package com.biotique.qa.runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict=false ,
		features={"src/test/resources"},
		glue={"com.biotique.qa.steps"},
		monochrome=true,
				plugin={"pretty",

				"html:target/site/cucumber-html",

				"json:target/cucumber1.json"

				}
		
		)
public class MyRunner {
	
}
