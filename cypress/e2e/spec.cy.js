describe('browser actions', () => {
  it('should visit the correct site', () => {
    cy.visit('https://stage-blog-git-dev-svmcd.vercel.app/', { timeout: 5000 })
    cy.url().should('include', 'stage-blog')
  })

  it('should click on week 2, and read Lorem ipsum (paywall dummy text)', () => {
    cy.visit('https://stage-blog-git-dev-svmcd.vercel.app/')
    cy.get('h1').contains('Week 2').click()
    cy.get('p').contains('Lorem ipsum')
  })

  it('should display the correct number of posts', () => {
    cy.visit('https://stage-blog-git-dev-svmcd.vercel.app/')
    cy.get('a[href*="blog/week"]').its('length').should('eq', 21);


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