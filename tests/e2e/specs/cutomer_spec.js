// https://docs.cypress.io/api/introduction/api.html
/// <reference types="Cypress" />

describe('Test Main screen', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Visits the Home page', () => {
		cy.url().should('contain', 'home')
	})

	// it('Renders task tile', () => {
	// 	cy.get('.task-list').find('li').should('have.length', 2)
	// })

	// it('Should stay on same page on browse back but closes modal', () => {
	// 	cy.go(-1)
	// 	cy.hash().should('eq', '#/MainMenu')
	// 	cy.get('.the-dialog').should('not.exist')
	// })

	// it('Should reload main-menu page', () => {
	// 	cy.reload()
	// 	cy.url().should('contain', 'MainMenu')
	// })

	// it('Visits thank you page on clicking finish setup', () => {
	// 	cy.clickActionbarTertiaryBtn()
	// 	cy.url().should('contain', 'ThankYou')
	// })

	// it('Hide Remind Me Later Button when both the tasks are completed', () => {
	// 	cy.signon("4442")
	// 	cy.reload() // Reload to refresh the session entitlements

	// 	cy.visit('/').then(() => {
	// 		cy.url().should('contain', 'MainMenu')
	// 	})

	// 	cy.get('.secondary-btn').should('not.be.visible')

	// 	cy.clickActionbarTertiaryBtn()
	// 	cy.url().should('contain', 'ThankYou')
	// })
})
