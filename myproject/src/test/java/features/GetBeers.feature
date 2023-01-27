@beers
Feature:Validating the punk api 
    I call the punk api with beer id 192
    I expect a 200 status response
    The malt is “Extra Pale”
    The malt value is 5.3 and the unit is “kilograms”

Scenario: Validating the punk API
    Given url environment
    And path '/v2/beers/192'
    When method get
    Then status 200
    And match $[0].ingredients.malt[0].name == 'Extra Pale'
    And match $.[0].ingredients.malt[0].amount contains {"value":5.3,"unit":"kilograms"}



