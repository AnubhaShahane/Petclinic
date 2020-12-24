Feature: Radiology count should be displayed

Scenario: Verify count of radiology on page of Veterinarians
Given User is on Veterinarians page
When User clicks on All tab list of all Veterinarians id displayed with Specialties
Then Count of radiology specialities should be displayed

