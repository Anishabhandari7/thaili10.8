import { c } from "../../support/constants"

/**
* From support/constants.js file import
    * walletUname
    * bankUname
    * pwd1
    * tpin1 [linked user tpin]
    * tpin2 [wallet user tpin]
 */

describe('Transfer Fund Wallet', () => {
  //WALLET
  it('Transfer fund wallet', () => {
    //declare variables for username, pwd and tpin which are subject to be changed
    //some variables are used from constants.js file
    var uname = c.bankUname //mobile number
    var pwd = c.pwd2 //password
    var transferNumber = c.noKycUname // top up number
    var remarks =c.remarks
    var tpin = c.tpin2 //tpin
    //add amount
    var amt = '10'
    //import login frim commands
    cy.login(uname, pwd)
     //Visit Transfer fund and
    cy.visit(`Balance/Send`)
    //add details
    cy.xpath(`//input[@name='MobileNumber']`).type(transferNumber)
    cy.xpath(`//input[@name='Amount']`).type(amt)
    cy.xpath(`//select[@id='PaymentType']`).select(2)
    cy.xpath(`//input[@name='Remarks']`).type(remarks)

    //screenshot of form
    cy.screenshot('Transfer Fund/Wallet/1Form')

    cy.xpath(`//input[@type='submit']`).dblclick().wait(500)

    //screenshot of details
    cy.screenshot('Transfer Fund/Wallet/2Details')
    cy.xpath(`//button[@id='btnConfirm']`).dblclick().wait(500)
    cy.xpath(`//input[@type='password']`).eq(0).type(tpin)
    cy.xpath(`//button[@id='btnConfirmmodal']`).click().wait(1000)

    //screenshot of confirmation
    cy.screenshot('Transfer Fund/Wallet/3Confirmation')

    cy.xpath(`//a[@name='home']`).click().wait(100)
    cy.xpath(`//span[@id='close-menu']`).click({force:true})
    cy.xpath(`//div[@class='dropdown__box']`).contains('Statement').click()

    //screenshot of statement
    cy.screenshot('Transfer Fund/Wallet/4Statement')
  })
})
