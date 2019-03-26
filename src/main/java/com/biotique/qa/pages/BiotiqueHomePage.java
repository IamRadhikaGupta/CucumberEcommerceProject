package com.biotique.qa.pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.biotique.qa.util.TestBase;

public class BiotiqueHomePage extends TestBase{
	
	@FindBy(xpath="//a[text()='LOGIN / REGISTER']")
	WebElement loginlnk;
	
	//initialize Page factory
		public BiotiqueHomePage(){
			PageFactory.initElements(driver, this);
			}
		
		//actions
		public LoginPage clickLoginLink(){
			loginlnk.click();
			return new LoginPage();
		}
		
		public String validateTitle(){
			return driver.getTitle();
		}
		
		public boolean verifyLoginLink(){
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				
				e.printStackTrace();
			}
			return loginlnk.isDisplayed();
		}
	

}
