describe('Login testing',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should click the sign in button',()=>{

        cy.get('#signin_button').click()
    })

    it('checkbox',()=>{

        cy.get('#user_remember_me').click()
        cy.get('#user_login').type('some invalid username')
        cy.get('#user_password').type('some invalid password')
        cy.get('.btn').click()
        cy.get('.offset3 > a').click()
        cy.get('#user_email').type('someemail@gmail.com')
        cy.get('.btn').click()

    })


})