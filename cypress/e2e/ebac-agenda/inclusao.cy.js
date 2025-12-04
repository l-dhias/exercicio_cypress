/// <reference types="cypress" />

describe('Testes de inclusao na agenda', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get('input').should('have.length', 3)
    })
    it('Deve incluir um novo contato na agenda', () => {
        cy.get('input[type="text"]').type('João ')
        cy.get('input[type="email"]').type('joao@teste.com')
        cy.get('input[type="tel"]').type('11999999999')
        cy.get('.adicionar').click()   

        cy.contains('li', 'João').should('exist')
        cy.contains('li', 'joao@teste.com').should('exist')
        cy.contains('li', '11999999999').should('exist')
        
    })
})