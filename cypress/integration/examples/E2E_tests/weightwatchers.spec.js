const { constant } = require("cypress/types/lodash")

describe('Login testing',()=>{
    before(function(){
        cy.visit('http://google.com')
    })
  
    it('should type car',()=>{
      cy.get('input[name="q"]').type('BMW')
    })
})