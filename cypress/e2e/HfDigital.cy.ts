import { Login } from "cypress/support/login"

const baseURL = 'https://digital-dev.h-f.co.uk/';

describe('Automatic login to Digital', () => {
  it('Login', () => {

      cy.visit('https://digital-dev.h-f.co.uk')
      cy.wait(500)

      Login.login('automationTestAdmiral@h-f.co.uk', 'Test321?')
      cy.wait(5000)
      cy.visit(baseURL)
  })
})
describe('Admin and reporting testing', () =>{
  it('Mike', () =>{
    // cy.visit(baseURL)
    cy.get('[alt="Admin & Reporting"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="MIKE Link. Active. Click here to navigate to the MIKE application."]').click()
    cy.url().should('include' , 'digital-dev.h-f.co.uk/assets/Flyers/MIKE%20-%20Flyer.pdf')
  })
})