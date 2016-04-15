package com.cucumber.app;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Steps {
	
	
	@Given("^User clicks on the login link$")
	public void User_clicks_on_the_login_link() throws Throwable {
	    System.out.println("User clicks on the login link");
	}

	@And("^Enter username as sample$")
	public void Enter_username_as_sample() throws Throwable {
		System.out.println("Enter username as sample");
	}

	@And("^Enter password as test$")
	public void Enter_password_as_test() throws Throwable {
		System.out.println("Enter password as test");
	}

	@And("^Click on loginbutton$")
	public void Click_on_loginbutton() throws Throwable {
		System.out.println("Click on loginbutton");
	}

	@Then("^User login should be success$")
	public void User_login_should_be_success() throws Throwable {
		System.out.println("User login should be success");
	}



}
