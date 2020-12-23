Feature: User going to validate New Owner Page for Petclinic application

    # Scenario: Verify user is able to add New Owner
    #     Given User is on New Owner page
    #     When User enter valid First Name, Last Name, Address, City, Telephone
    #     And User clicks on Add Owner button on New Owner page
    #     Then New Owner added successfully message should be displayed

        Scenario:Verify user is present in a list and find respective pet details 
        Given User is on New Owner page
        When user clicks on list of owner
        When User searches particular owner name
        And User clicks on that owner
        Then All details of pet should be displayed and Pet name, Birthdate and Type should be displayed
