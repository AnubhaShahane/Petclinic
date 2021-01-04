Feature: Radiology count should be displayed

Scenario Outline: Verify user is able to add New Owner
        Given User is on New Owner page
        When User enters the "<First_Name>","<Last_Name>","<Address>","<City>","<Phone>"
        Then User should be navigated to Owners page,Newly added owner should be displayed at the end
        And User verifies a particular owner is present in the list
        Then 

        Examples:
            | First_Name | Last_Name   | Address             | City        | Phone |
            | Sam        | Cooper    | 321/1 Orchid apt    | Pune        | 2158964130|
            
Scenario: Verify count of radiology on page of Veterinarians
Given User is on Veterinarians page
When User clicks on list of all Veterinarians id displayed with Specialties
Then Count of radiology specialities should be displayed
