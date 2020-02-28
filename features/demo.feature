Feature: To check two features

   Feature description is following: check something to show it works


   Scenario: To check calculation

   Given I navigate to the main calculation page
   When I make a calculation "3" plus "8"
   Then I see the correct calculation results is "11"

   Scenario: To check calculation 2

   Given I navigate to the main calculation page
   When I make a calculation "2" plus "2"
   Then I see the correct calculation results is "4"

#    Scenario: To check Angular Website access

#    Given I navigate to the angular site
#    When I redirect to angular second site
#    Then I can enter "hello" word into search field