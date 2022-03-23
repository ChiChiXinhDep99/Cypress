/// <reference types="cypress" />
class LoginPage{
        open(){
            cy.visit('https://admin-demo.nopcommerce.com/');
        }
         inputEmail(){
            return cy.get("#Email").clear();
        }
         inputPass(){
            return cy.get("#Password").clear();
        }
         btnSubmit(){
            return cy.get(".button-1.login-button");
        }
       
    }
    export default new LoginPage();

