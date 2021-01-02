Feature: User going to validate New Owner Page for Petclinic application

    # Scenario: Verify user is able to add New Owner
    #     Given User is on New Owner page
    #     When User enters the details
    #     Then User should be navigated to Owners page
    #     And Newly added owner should be displayed at the end
    #     Then User verifies a particular owner is present in the list

        Scenario Outline: Verify user is able to add New Owner
        Given User is on New Owner page
        When User enters the "<First_Name>","<Last_Name>","<Address>","<City>","<Phone>"
        Then User should be navigated to Owners page
        And Newly added owner should be displayed at the end
        Then User verifies a particular owner is present in the listt

        Examples:
            | First_Name | Last_Name   | Address             | City        | Phone |
            | Sam        | Cooper    | 321/1 Orchid apt    | Pune        | 2158964130|
            

        

        # Given User is on New Owner Page
        # When User adds a new owner 'Tom' details
        # Then User should be navigated to Owners Page
        # And 'Tom' owner should be displayed in the list

        # Given User is on New Owner Page
        # And User wants to add new owner 'Tom'
        # And 'Tom' Last name is  'Smith'
        # And 
        # When new owner info is added to the page
        # Then User should be navigated to Owners Page
        # And 'Tom' owner should be displayed in the list

        # Scenario:Verify user is present in a list and find respective pet details 
        # Given User is on New Owner page
        # When user clicks on list of owner
        # When User searches particular owner name
        