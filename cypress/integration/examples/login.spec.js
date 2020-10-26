describe('Working with inputs',()=>{

    it('should override the current time',()=>{
    const date = new Date(2020,3,10).getTime() //return a timestamp
    cy.clock(date) 
    cy.log(date) 
    
    
    })

    it('navigate to the website',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item',{log:true})
        cy.title().should('include','Zero - Log in') 
    })

    it('Should fill userName',()=>{
        cy.get('#user_login').as('username')
        cy.get('@username')
        .clear()
        .type('Some invalid name')

    })

    it('Should fill password',()=>{
        cy.get('#user_password').as('password')
       cy.get('@password').type('Some invalid password')
    })

    it('should submit login form',()=>{
        cy.get('#user_remember_me').click()
        cy.get('.btn').click()
        //cy.contains('Sign in').click()
        
    })
    it('Should display error message',()=>{

        cy
        .get('.alert')
        .should('be.visible')
        .and('contain','Login and/or password are wrong.')
    })



})