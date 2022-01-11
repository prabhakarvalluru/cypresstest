Feature: Hello Feature

Scenario: scenario1

#Given I logs to api
# When I logout to api

Given I launch website
When I check the title of webpage contains "Automation Practice"


Scenario: scenario2
Given I launch website
Then I need to validate if "Home" link is present
When I select "Appium" value from dropdown
#And I need to see the text