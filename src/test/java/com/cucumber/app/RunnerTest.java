package com.cucumber.app;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@Cucumber.Options(features={"src/test/resource"},
                  format={"html:target/cucumber-html-report",
                         "junit:target/cucumber-junit-report/allcukes.xml"})
public class RunnerTest {

}
