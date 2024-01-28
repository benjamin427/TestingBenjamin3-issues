class GeneratedPassword_PromptWindow {
    password_generated_click_close_window(){
        cy.GeneratedPassword_option_Close();
    }
    password_generated_click_copytoclipboard(){
        cy.GeneratedPassword_option_CopyToClipboard();
    }
}

const generated_password_options = new GeneratedPassword_PromptWindow();
export default generated_password_options;
