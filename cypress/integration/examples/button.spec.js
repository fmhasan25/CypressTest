describe('Browser Actions',()=>{

    it('should load books website',()=>{
        cy.visit('http://books.toscrape.com/index.html',{timeout:10000})
        cy.url().should('include','index.html')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
    })
    it('should click on Travel category',()=>{
        cy.get('a')
        .contains('Travel')
        .click()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books',()=>{

        cy.get('.product_pod').its('length').should('eq',11)

    })

    it('should click poetry',()=>{

        cy.get('a').contains('Poetry').click()
        cy.wait(2000)
    })

    it('should click Olio',()=>{
        cy.get('.col-xs-6.col-sm-4.col-md-3.col-lg-3').contains('Olio').click()
        cy.wait(2000)
    })

    it('should check the price',()=>{
        cy.get('p').contains('£23.88')
        cy.wait(2000)
        
    })

})