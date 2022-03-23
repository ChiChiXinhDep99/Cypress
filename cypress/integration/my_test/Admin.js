import loginPage from "../PageObjects/LoginPage";

describe("Login",()=>{
    it("Hello, Page Object Model Cypress",()=>{
       loginPage.open();
       loginPage.inputEmail().type("admin@yourstore.com").debug();
       loginPage.inputPass().type("admin");
       loginPage.btnSubmit().click();
       cy.title().should('include','Dashboard')
    })
})