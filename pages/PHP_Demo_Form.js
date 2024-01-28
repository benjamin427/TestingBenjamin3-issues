class RequestForm {
    navigate_form(){
        cy.visit("https://phptravels.com/demo");
    }
    
    enter_first_name = "input[name=first_name]"
    enter_last_name = "input[name=last_name]"
    enter_business_name = "input[name=business_name]"
    enter_email_address = "[placeholder='email']"
    enter_result_number = "#number"

    Click_Submit_button(){
       cy.DemoForm_ClickSubmit();
    }
}
const requestForm = new RequestForm();
export default requestForm