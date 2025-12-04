describe('Testes de remoção na agenda', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve remover um contato existente na agenda', () => {
        // Conta quantos contatos existem antes
        cy.get('.contato')
        .its('length')
        .then((quantidadeInicial) => {

            cy.get('.delete').first().click()

            cy.get('.contato')
            .should('have.length', quantidadeInicial - 1)
        })
    })
})