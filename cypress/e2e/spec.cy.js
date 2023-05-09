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

  it('gain access to the blog content by entering the secret key', () => {
    cy.get('h1').contains('Week 2').click()
    cy.wait(500).get('button').contains('Gain').click();
    cy.get('input[id*="key"]').type('123', { delay: 50 }).wait(500)
    cy.get('button').contains('Submit').click().wait(500)
    cy.get('div').contains('tweede week')
  })
})