// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("DemoForm_ClickSubmit", () => {
    cy.get("#demo").click();
})

//Functions for create account form
Cypress.Commands.add("CreateAccountForm_ClickRegister", () => {
    cy.get("recaptcha-anchor").click()
})
Cypress.Commands.add("CreateAccountForm_ClickGeneratePassword", () => {
    //cy.get(".btn btn-default btn-sm btn-sm-block generate-password").click();
    cy.contains("Generate Password").click();
})

//Function for click recaptcha checkbox
Cypress.Commands.add("Checkbox_ClickRecaptcha", () => {
    cy.get(".recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox").click()
})

Cypress.Commands.add("GeneratedPassword_option_Close", () => {
    cy.get(".btn btn-default").click();
})

Cypress.Commands.add("GeneratedPassword_option_CopyToClipboard", () => {
    cy.get("#btnGeneratePasswordInsert").click();
})
