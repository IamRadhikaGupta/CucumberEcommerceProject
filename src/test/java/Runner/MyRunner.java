package Runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict=false ,
		dryRun =false,
		features={"src/test/java/features/PracticeScenarioOutline.feature"},
		glue={"stepdefinitions/practiceScenarioOutline"},
		tags={"not @skip"},
		monochrome=true,
				plugin={"pretty",

				"html:target/site/cucumber-html",

				"json:target/cucumber1.json"

				}
		
		)
public class MyRunner {
	
}
