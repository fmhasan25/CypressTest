describe('Browser Actions',()=>{

    it('Should load correct url',()=>{
        //navigating to the browser using timout command
        cy.visit('http://example.com',{timeout:10000})
    })

    it('should checck correct url',()=>{
        cy.url().should('include','example.com')
    })

    it('should checck for correct element on the page',()=>{
        cy.get('h1').should('be.visible')
    })
    it('should wait for 3 seconds',()=>{
        cy.wait(3000)
    })
    it('should pause the execution',()=>{
        cy.pause()
    })

})