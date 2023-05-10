describe('browser actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the correct number of weekly posts (21)', () => {
    cy.get('a[href*="blog/week"]').its('length').should('eq', 21);
  })

  it('should not be able to read the blog content while unauthorized', () => {
    cy.get('h1').contains('Week 2').click()
    cy.get('p').contains('Lorem ipsum')
  })

  it('should not be able to read the blog content if the wrong key is entered', () => {
    cy.get('h1').contains('Week 2').click()
    cy.wait(500).get('button').contains('Gain').click();
    cy.get('input[id*="key"]').type('somewrongkey', { delay: 50 }).wait(500)
    cy.get('button').contains('Submit').click().wait(500)
    cy.get('.fixed > .box-static').should('be.visible')
    cy.get('.box-static > .fa-solid').click()
    cy.get('p').contains('Lorem ipsum')
    cy.get('.text-lg > .absolute').should('be.visible')

  })

  it('should gain access to the blog content by entering the right key', () => {
    cy.get('h1').contains('Week 2').click()
    cy.wait(500).get('button').contains('Gain').click();
    cy.get('input[id*="key"]').type(Cypress.env('key'), { delay: 50 }).wait(500)
    cy.get('button').contains('Submit').click().wait(500)
    cy.get('div').contains('tweede week')
  })
})