Feature: To check two features

   Feature description is following: check something to show it works

   @smoke
   Scenario Outline: To check calculation 3

   Given I navigate to the "calc" page
   When I make a calculation "<num1>" plus "<num2>"
   Then I see the correct calculation results is "<num3>"

   Examples:
   | num1 | num2 | num3 |
   | 3  | 4  | 71 |
   | 4  | 4  | 8 |

   Scenario Outline: To check Angular Website access

   Given I navigate to the "ang" page
   When I redirect to angular second site
   Then I can enter "<key>" word into search field

   Examples:
   | key |
   | hello |
   | test |