// https://docs.cypress.io/api/introduction/api.html
/// <reference types="Cypress" />

describe('Test Main screen', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Lands on the homepage', () => {
		cy.url().should('contain', '#/')
	})

	it('Renders 3 Customer tiles', () => {
		cy.get('.customer-card').find('.card').should('have.length', 3)
	})

	it('Should stay on the same page on reload', () => {
		cy.reload()
		cy.url().should('contain', '#/')
	})

	it('Should Open Modal when clicked on the edit button', () => {
		cy.clickWarningBtn(0)
		cy.get('.modal.show', { timeout: 2000 }).should('have.length', 1)
  })
  
  it('Should Close Modal when clicked on the Close button', () => {
		cy.clickWarningBtn(0)
    .get('.modal.show').should('have.length', 1)
    .wait(1500)
    
    cy.get('.modal.fade .modal-footer button.btn-secondary').eq(0).click({ waitForAnimations: true, animationDistanceThreshold: 1000, force: true })
  })

  it('Should store the name change after submission', () => {
		cy.clickWarningBtn(0)
    .get('.modal.show').should('have.length', 1)
    .wait(1500)

    cy.get('.modal.fade input').eq(0).type('Long Name')
    
    cy.get('.modal.fade .modal-footer button.btn-primary').eq(0).click({ waitForAnimations: true, animationDistanceThreshold: 1000, force: true })

    cy.get('.customer-card .card').eq(0).find('h5.card-title').should('contain', 'A CustomerLong Name')
  })
})
