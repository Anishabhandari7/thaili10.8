describe('services', () => {
    beforeEach(() => {
        cy.login('9847659504', 'Admin@123')
        cy.wait(2000)
    })
    it('landline', () => {
        cy.visit('http://uatthaili.digihub.com.np/PSTNLandLine/PSTNBillPayment')

        // cy.get('img[class="paymentservice"]').click()
        // cy.wait(2000)
        cy.get('#CustomerId').type('023267326')
        cy.get('#Amount').type(100)
        cy.get('#btnConfirm').click()
        cy.get('#btnConfirm').click()
        cy.wait(2000)
        cy.get("#pin1").type("1")
        cy.get("#pin2").type("1")
        cy.get("#pin3").type("1")
        cy.get("#pin4").type("1")
        cy.wait(2000)
        cy.get('#btnConfirmmodal').click()
        cy.wait(2000)
        cy.get('.success__content > .btn').click()


       


    })
})