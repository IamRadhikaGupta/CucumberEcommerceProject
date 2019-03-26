package com.biotique.qa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
			dryRun=false,
			strict=true,
			monochrome=false,
			features= {"src/main/java"},
			glue = {"com.biotique.qa.stepdefinitions"},
			plugin= {
					"html:target/site/cucumber-html",
					"json:target/cucumber1.json"}
			
			)
	
	public class TestRunner {

	}	


