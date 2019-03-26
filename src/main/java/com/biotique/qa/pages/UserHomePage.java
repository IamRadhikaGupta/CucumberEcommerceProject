package com.biotique.qa.pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.biotique.qa.util.TestBase;

public class UserHomePage extends TestBase{
	@FindBy(xpath="//a[text()='Gift Sets']")
	WebElement GiftSetslnk;
	
	@FindBy(xpath="//a[@id='account']")
	WebElement userNameLabel;
	
	public UserHomePage(){
		PageFactory.initElements(driver,this);
	}
	
	//actions
	public boolean validateUsername(){
		return userNameLabel.isDisplayed();
	}
	
	public GiftSetsPage clickGiftSetslnk(){
		GiftSetslnk.click();
		return new GiftSetsPage();
		
	}
	
	public String validateUserHomePageTitle(){
		return driver.getTitle();
	}
	
}
