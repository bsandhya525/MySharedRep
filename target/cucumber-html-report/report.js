$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("samplelogin.feature");
formatter.feature({
  "line": 1,
  "name": "Logging a user into app",
  "description": "",
  "id": "logging-a-user-into-app",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Logging a user into app with credentials",
  "description": "",
  "id": "logging-a-user-into-app;logging-a-user-into-app-with-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User clicks on the login link",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter username as sample",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter password as test",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on loginbutton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User login should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.User_clicks_on_the_login_link()"
});
formatter.result({
  "duration": 158228658,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Enter_username_as_sample()"
});
formatter.result({
  "duration": 101425,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Enter_password_as_test()"
});
formatter.result({
  "duration": 245715,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Click_on_loginbutton()"
});
formatter.result({
  "duration": 88144,
  "status": "passed"
});
formatter.match({
  "location": "Steps.User_login_should_be_success()"
});
formatter.result({
  "duration": 67013,
  "status": "passed"
});
});