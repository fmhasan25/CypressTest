describe('Searchbox test',()=>{

    before(function(){

        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('should display online banking content',()=>{
        cy.contains('Online Banking').click()
        cy.get('h1').contains('Online Banking').should('be.visible')
        
    })
    


})