Note: This automation framework was created to test PHPTravels website. I'm currently fixing the left arrow folder and try to replace 
it with a normal file folder containing features and step definitions. That folder was empty after pushing it to this repository. 

Feature: PHP Travels create account form

    Background:
        Given Navigate to the url

    Scenario: Enter info in the registration form without second address
    
        Then Enter every text field for personal information
            | FirstName          | LastName               | EmailAddress                           |  PhoneNumber            |
            | Benjamin           | Saint Elien            | shadowboxer79@hotmail.com              |  677-900-2000           |
        Then Enter every text field for billing address
            | CompanyName        | StreetAddress        | StreetAddress2 |         | City          | State          | Postcode          |
            | SpaceX             | 44 Main Street       | Suite 112      |         | New York      | New York       | 10012             |
        Then Enter required information for whatsapp mobile number
            | WhatsAppMobileNumber               |
            | 777-890-2211                       |
        Then Enter password for account security and click generate password
            | Password       | ConfirmPassword    |
            | Quick!silver2  | Quick!silver2      |
        When Password generated window displays click close button
        Then Click recaptcha checkbox and click register
        
Create account step definition:
const {Given, Then, When} = require("@badeball/cypress-cucumber-preprocessor");
import registrationForm from "../pages/PHP_Create_Account_Form";
import generated_password_options from "../pages/PHP_PasswordGenerated_prompt_window";


Given("Navigate to the url", () => {
    registrationForm.navigate_form()
})

Then("Enter every text field for personal information", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(registrationForm.enter_first_name).type(element.FirstName);
        cy.get(registrationForm.enter_last_name).type(element.LastName);
        cy.get(registrationForm.enter_email_address).type(element.EmailAddress);
        cy.get(registrationForm.enter_phone_number).type(element.PhoneNumber);
    })
})

Then("Enter every text field for billing address", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(registrationForm.enter_company_name).type(element.CompanyName);
        cy.get(registrationForm.enter_street_address).type(element.StreetAddress);
        cy.get(registrationForm.enter_street_address2).type(element.StreetAddress2);
        cy.get(registrationForm.enter_city).type(element.City);
        cy.get(registrationForm.enter_state).type(element.State);
        cy.get(registrationForm.enter_postcode).type(element.Postcode);
    })
})

Then("Enter required information for whatsapp mobile number", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(registrationForm.enter_whatsapp_mobile_phone_number).type(element.WhatsAppMobileNumber);
    })
})

Then("Enter password for account security and click generate password", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(registrationForm.enter_password).type(element.Password);
        cy.get(registrationForm.enter_confirmed_password).type(element.ConfirmPassword);
        registrationForm.click_generate_password_button()
    })
})

When("Password generated window displays click close button", () => {
    generated_password_options.password_generated_click_close_window();
})

When("Click recaptcha checkbox and click register", () => {
    registrationForm.click_recaptcha_checkbox();
    registrationForm.click_register_button();
})


Feature: PHP Travels Demo request form

    Background: 
        Given Navigate to the url

    Scenario: Fill the request form for the demo
        Then Enter info in the request form and click submit
            |   FirstName  | LastName    | BusinessName   | Email                     |Result   |
            |    Benjamin  | Saint Elien | SpaceX         | shadowboxer79@hotmail.com |10       |

Demo request form step definition:
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import requestForm from '../pages/PHP_Demo_Form';


Given("Navigate to the url", () => {
    requestForm.navigate_form()
})

Then("Enter info in the request form and click submit", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get(requestForm.enter_first_name).type(element.FirstName);
        cy.get(requestForm.enter_last_name).type(element.LastName);
        cy.get(requestForm.enter_business_name).type(element.BusinessName);
        cy.get(requestForm.enter_email_address).type(element.Email);
        cy.get(requestForm.enter_result_number).type(element.Result);
    });
    requestForm.Click_Submit_button()
})
