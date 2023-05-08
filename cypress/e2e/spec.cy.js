describe('browser actions', () => {
  beforeEach(() => {
    cy.visit('https://stage-blog-git-dev-svmcd.vercel.app/')
  })

  it('should visit the correct site', () => {
    cy.url().should('include', 'stage-blog')
  })

  it('should display the correct number of weekly posts (21)', () => {
    cy.get('a[href*="blog/week"]').its('length').should('eq', 21);
  })

  it('should click on week 2, and read Lorem ipsum (paywall dummy text)', () => {
    cy.get('h1').contains('Week 2').click()
    cy.get('p').contains('Lorem ipsum')
  })

  it('gain access to the blog content by entering the secret key', () => {
    cy.get('h1').contains('Week 2').click()
    cy.wait(500).get('button').contains('Gain').click();
    cy.get('input[id*="key"]').type('123')
    cy.get('button').contains('Submit').click()
  })
})

// describe('simple specs', () => {
//   it('should pass', () => {
//     cy.visit('https://example.cypress.io')
//   }),

//     it('should check correct url', () => {
//       cy.visit('https://example.cypress.io')
//       cy.url().should('include', 'example.cypress')
//     })

//   it('should wait for 3 seconds', () => {
//     cy.wait(3000)
//   })

//   it('should pause the execution', () => {
//     cy.pause()
//   })

//   it('should check for correct element on the page', () => {
//     cy.visit('https://example.cypress.io')
//     cy.get('h1').should('be.visible')
//   })
// })