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
  xit('Mike', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Admin & Reporting"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="MIKE Link. Active. Click here to navigate to the MIKE application."]').click()
    cy.url().should('include' , 'digital-dev.h-f.co.uk/assets/Flyers/MIKE%20-%20Flyer.pdf')
  })
  xit('Dash', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Admin & Reporting"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="RD Link. Active. Click here to navigate to the RD application."]').click()
    cy.url().should('include' , 'https://hfreportingdev.azureedge.net/')
  })
  xit('Host', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Admin & Reporting"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="host Link. Active. Click here to navigate to the host application."]').click()
    cy.url().should('include' , 'hfhostdev01.z33.web.core.windows.net')
  })
})


describe('Claims Handling', () =>{
  xit('Holt', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="Holt Link. Active. Click here to navigate to the Holt application."]').click()
    cy.url().should('include' , 'holt2-dev.h-f.co.uk')
  })
  xit('Holly', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="Holly Link. Active. Click here to navigate to the Holly application."]').click()
    cy.url().should('include' , 'holt2-dev.h-f.co.uk')
  })
  xit('Harp', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="HARP Link. Active. Click here to navigate to the HARP application."]').click()
    cy.url().should('include' , 'hfp-recoveries.azureedge.net')
  })
  xit('FCV', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="FCV Link. Active. Click here to navigate to the FCV application."]').click()
    cy.url().should('include' , 'hffcvdev.h-f.co.uk')
  })
  xit('Ace', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="ACE Link. Active. Click here to navigate to the ACE application."]').click()
    cy.url().should('include' , 'hffcvv2dev.azureedge.net')
  })
  xit('DRM', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="HARP Link. Active. Click here to navigate to the HARP application."]').click()
    cy.url().should('include' , 'hfp-recoveries.azureedge.net')
  })
  xit('ELI', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="ELI Link. Active. Click here to navigate to the ELI application."]').click()
    cy.url().should('include' , 'digital-dev.h-f.co.uk/assets/Flyers/ELI%20-%20Flyer.pdf')
  })
 xit('Jargone', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="Jargone Link. Active. Click here to navigate to the Jargone application."]').click()
    cy.url().should('include' , 'digital-dev.h-f.co.uk/assets/Flyers/Jar-Gone%20-%20Flyer.pdf')
  })
  xit('Carwash', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="Car Wash Link. Active. Click here to navigate to the Car Wash application."]').click()
    cy.url().should('include' , 'digital-dev.h-f.co.uk/assets/Flyers/CarWash%20-%20Flyer.pdf')
  })
  xit('Spyglass', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="Spyglass Link. Active. Click here to navigate to the Spyglass application."]').click()
    cy.url().should('include' , 'digital-dev.h-f.co.uk/assets/Flyers/SpyGlass%20-%20Flyer.pdf')
  })
  xit('My Legal Link', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="Mylegal-link Link. Active. Click here to navigate to the Mylegal-link application."]').click()
    cy.url().should('include' , 'digital-dev.h-f.co.uk/assets/Flyers/MyLegal-Link%20-%20Flyer.pdf')
  })
  it('Hidra', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Claims Handling"]').click()
    cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    // cy.visit('hidra-dev.h-f.co.uk')
    cy.get('[alt="Hidra Link. Active. Click here to navigate to the Hidra application."]').click()
    cy.url().should('include' , 'hidra-dev.h-f.co.uk')
  })

})

describe('Training & Development', () =>{
  xit('HF TV', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Training & Development"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="HFTV Link. Active. Click here to navigate to the HFTV application."]').click()
    cy.url().should('include' , 'hftvdev01.z33.web.core.windows.net')
  })
  xit('Ask HF', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Training & Development"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="AskHF Link. Active. Click here to navigate to the AskHF application."]').click()
    cy.url().should('include' , 'askhfdev.h-f.co.uk')
  })
  xit('HIIT', () =>{
    cy.visit(baseURL)
    cy.get('[alt="Training & Development"]').click()
    // cy.get('.appName1')
    cy.get('.applogo').each((x) => {
      x.find('a').removeAttr('target')
    })
    cy.get('[alt="HIIT Link. Active. Click here to navigate to the HIIT application."]').click()
    cy.url().should('include' , 'hfhiitdevstatweb01.z33.web.core.windows.net')
  })
})