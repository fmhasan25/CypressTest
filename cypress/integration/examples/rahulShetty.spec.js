const { contains } = require("cypress/types/jquery")

describe('shopping cart Testing',()=>{

    it('Navigating to the browser',()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //cy.get('.products > :nth-child(1)').contains('ADD TO CART').click()
    })
})