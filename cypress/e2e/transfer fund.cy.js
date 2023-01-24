import {
    c
} from "../support/constants";

c
describe('transfer fund wallet', () => {
    it('transfer fund wallet', () => {
        var uname = '9847659504'
        var pwd = 'Anisha@12'
        var transferNumber = c.noKycUname
        var remarks = c.remarks
        var tpin = c.tpin1
        var amt = "40"
        cy.login(uname, pwd)
        cy.visit(`Balance/Send`)
        cy.xpath(`//input[@id='MobileNumber']`).type(transferNumber)
        cy.xpath(`//input[@id='Amount']`).type(amt)
        cy.xpath(`//input[@name='Remarks']`).type('remarks')
        cy.xpath(`//input[@type='submit']`).dblclick().wait(500)
        cy.screenshot('Transfer Fund/Wallet/2Details')
        cy.xpath(`//button[@id='btnConfirm']`).dblclick().wait(500)
        cy.xpath(`//input[@type='password']`).eq(0).type(tpin)
        cy.xpath(`//button[@id='btnConfirmmodal']`).click().wait(1000)
        cy.xpath(`//a[@name='home']`).click().wait(2000)
        cy.xpath(`//span[@id='close-menu']`).click({force:true})
        cy.xpath(`//div[@class='dropdown__box']`).contains('Statement').click()


    })
})