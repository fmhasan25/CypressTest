

describe('Custom command',()=>{
    it('should login to application using custom cypress command',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.wait(2000)
        cy.login('username', 'password')
    })


})