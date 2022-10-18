Cypress.Commands.add('login', (text, password) => {
cy.visit("")

cy.get("#user_name").type(text)
cy.get("#user_password").type(password)
cy.get('#loginform > .btn').click()
})