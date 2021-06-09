describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Principal')
    cy.contains('Inicio')
  })
})
