describe('Weight Watchers Testing',()=>{

    it('navigating to the website',()=>{
        cy.visit('https://www.metlife.com/')
        cy.url().should('include','metlife')
        cy.viewport(1440, 900)


    })

    it('Should click Solution',()=>{
        cy.get('div').contains('SOLUTIONS')

       
    })



})