class RegistrationForm {
    navigate_form(){
        cy.visit("https://phptravels.org/register.php");
    }
    //Personal information text fields
    enter_first_name = "#inputFirstName"
    enter_last_name = "#inputLastName"
    enter_email_address = "#inputEmail"
    enter_phone_number = "#inputPhone"

    //Billing address text fields
    enter_company_name = "#inputCompanyName"
    enter_street_address = "#inputAddress1"
    enter_street_address2 = "#inputAddress2"
    enter_city = "#inputCity"
    enter_state = "#stateinput"
    enter_postcode = "#inputPostcode"
    select_country = "select#country"

    //Additional required information text fields
    enter_whatsapp_mobile_phone_number = "#customfield2"

    //Account security text fields
    enter_password = "#inputNewPassword1"
    enter_confirmed_password = "#inputNewPassword2"
    click_generate_password_button(){
        cy.CreateAccountForm_ClickGeneratePassword();
    }
    click_recaptcha_checkbox(){
        cy.Checkbox_ClickRecaptcha();
    }
    click_register_button(){
        cy.CreateAccountForm_ClickRegister();
    }
}

const registrationForm = new RegistrationForm();
export default registrationForm;
