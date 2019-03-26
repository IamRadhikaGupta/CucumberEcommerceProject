package com.biotique.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.biotique.qa.util.TestBase;

public class LoginPage extends TestBase{
	
	//PageFactory(OR for login Page)
		@FindBy(id="email")
		WebElement username;
		
		@FindBy(id="pass")
		WebElement password;
		
		@FindBy(xpath="//button[@id='send2']")
		WebElement Loginbtn;
		
		public LoginPage(){
			PageFactory.initElements(driver,this);
		}
		
		public UserHomePage login(String userName,String pass){
			username.sendKeys(userName);
			password.sendKeys(pass);
			Loginbtn.click();
			return new UserHomePage();
		}
		
		

}
