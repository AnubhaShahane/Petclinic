Feature: User going to validate specialities for Petclinic application
    
   
    Scenario: Verify user is able to add New Speciality
        Given User is on New speciality page
        When User clicks on add button
        When User enter Name in new speciality
        And User clicks on save button
        Then New specialities should be added
    
        Scenario: Verify user is able to edit the speciality
        Given User is on New speciality page
        When User clicks on edit button
        When User enters new name
        And User clicks on update button
        Then Speciality should be updated

    
        # Scenario: Verify user is able to delete added speciality
        # When User clicks on delete button
        # Then Name should be deleted

        