describe('college payment', () => {
    beforeEach('login',() =>{
        cy.login('9847659504', 'Anisha@12')

    })
    it('nibl payment',()=>{
        cy.visit('/merchantpayment/CollegePayment')
        cy.get('.selection').contains('--Select College--').click()
        cy.get('.select2-results__option').contains('College Merchant').click()
        cy.get('#StudentName').type('hari')
        cy.get('.select2-selection__rendered').contains('--Select Faculty--').click()
        cy.get('.select2-results__option').contains('BBS').click()
        cy.get('#RollNumber').type(122345)
        cy.get('.select2-selection__rendered').contains('--Select Year--').click()
         .get('.select2-results__options').contains('2022').click()
         cy.get('.select2-selection__rendered').contains('--Select Month--').click()
         .get('.select2-results__option').contains('April').click()
         cy.get('#BillNumber').type(847543)
         cy.get('#Amount').type(500)
         cy.get("#PaymentType").select("Nepal Investment Bank Ltd")
         cy.get('#Remarks').type('test')
         cy.get('#btnConfirm').click()
         cy.get('#btnConfirm').click()
         cy.get("input[type='password']").eq(0).type('1234')
         cy.get("#btnConfirmmodal").click()
         


    })
}

)