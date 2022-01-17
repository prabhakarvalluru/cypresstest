Feature: Hello Feature

Scenario: scenario1

#Given I logs to api
# When I logout to api

Given I launch website
When I check the title of webpage contains "Automation Practice"


Scenario: scenario2
When I read data using Fixtures
Then I need to validate if "Home" link is present
When I select "Appium" value from dropdown
When I write the data into file
Then I Read the data into file


#And I need to see the text

#When I read data using Fixtures
