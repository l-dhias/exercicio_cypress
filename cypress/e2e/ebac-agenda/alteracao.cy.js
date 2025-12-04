/// <reference types="cypress" />

describe('Testes de alteração na agenda', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })
    it('Deve alterar um contato existente na agenda', () => {
        cy.get('.edit').first().click()
    
        cy.get('input[type="text"]').clear().type('gustavo')
        cy.get('input[type="email"]').clear().type('gustavo@teste1010.com')
        cy.get('input[type="tel"]').clear().type('000000000')

        cy.get('.alterar').click()

        cy.contains('gustavo').should('exist')
        cy.contains('gustavo@teste1010.com').should('exist')
        cy.contains('000000000').should('exist')
    })
})