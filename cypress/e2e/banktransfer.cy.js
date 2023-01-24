//import { c } from "../../support/constants"
//other Bank
describe('otherbanktrasnfer', () => {
  it('positive otherbanktransfer', () => {
    cy.login('9847659504','Admin@123')
    cy.visit(`http://uatthaili.digihub.com.np/Balance/Index`)
    cy.contains(`Other Bank`).click()
    cy.contains(`Direct`).click()
    cy.get(`#select2-InstrumentCode-container`).click()
    cy.get(`.select2-results__option`).contains(`Test Bank Fund transfer`).click()
    cy.get(`#AccountNumber`).type(`1900000000000173`)
    cy.get(`#AccountName`).type(`Rohan Maharjan`) 
    //cy.get(`.form__control`).click()
    cy.get(`#Amount`).type(`30`)
    cy.get(`#Remarks`).type(`Test`)
    cy.get(`#btnConfirm`).contains(`PROCEED`).click()
    cy.contains(`CONFIRM`).click()
    cy.get(`[type="password"]`).eq(0).type(`1111`)
    cy.get(`#btnConfirmmodal`).contains(`CONFIRM`).click()
    cy.contains(`BACK TO DASHBOARD`).click()
   })
  })

// Same Bank
describe('otherbanktrasnfer', () => {
   it('positive otherbanktransfer', () => {
    cy.login('9847659504','Admin@123')
    cy.visit(`http://uatthaili.digihub.com.np/Balance/Index`)
    cy.contains(`Same Bank`).click()
    cy.get(`#AccountNumber`).type(`00105010261104`)
    cy.get(`#AccountName`).type(`Rohan Maharjan`)
     cy.get(`#Amount`).type(`24`)
     cy.get(`#Remarks`).type(`Test`)
     cy.get(`#btnConfirm`).contains(`PROCEED`).click()
      cy.contains(`CONFIRM`).click()
      cy.get(`[type="password"]`).eq(0).type(`1111`)
      cy.get(`#btnConfirmmodal`).contains(`CONFIRM`).click()
       cy.contains(`BACK TO DASHBOARD`).click()
      })
    })


/**
// * From support/constants.js file import
//     * walletUname
//     * bankUname
//     * pwd1
//     * tpin1 [linked user tpin]
//     * tpin2 [wallet user tpin]
//  */

// describe('Transfer Fund Wallet', () => {
//   //WALLET
//   it('Transfer fund wallet', () => {
//     //declare variables for username, pwd and tpin which are subject to be changed
//     //some variables are used from constants.js file
//     var uname = c.bankUname //mobile number
//     var pwd = c.pwd2 //password
//     var transferNumber = c.noKycUname // top up number
//     var remarks =c.remarks
//     var tpin = c.tpin2 //tpin
//     //add amount
//     var amt = '10'
//     //import login frim commands
//     cy.login('9847659504', 'Admin@123')
//      //Visit Transfer fund and
//     cy.visit(`Balance/Send`)
//     //add details
//     cy.xpath(`//input[@name='MobileNumber']`).type(transferNumber)
//     cy.xpath(`//input[@name='Amount']`).type(amt)
//     cy.xpath(`//select[@id='PaymentType']`).select(2)
//     cy.xpath(`//input[@name='Remarks']`).type(remarks)

//     //screenshot of form
//     cy.screenshot('Transfer Fund/Wallet/1Form')

//     cy.xpath(`//input[@type='submit']`).dblclick().wait(500)

//     //screenshot of details
//     cy.screenshot('Transfer Fund/Wallet/2Details')
//     cy.xpath(`//button[@id='btnConfirm']`).dblclick().wait(500)
//     cy.xpath(`//input[@type='password']`).eq(0).type(tpin)
//     cy.xpath(`//button[@id='btnConfirmmodal']`).click().wait(1000)

//     //screenshot of confirmation
//     cy.screenshot('Transfer Fund/Wallet/3Confirmation')

//     cy.xpath(`//a[@name='home']`).click().wait(100)
//     cy.xpath(`//span[@id='close-menu']`).click({force:true})
//     cy.xpath(`//div[@class='dropdown__box']`).contains('Statement').click()

//     //screenshot of statement
//     cy.screenshot('Transfer Fund/Wallet/4Statement')
//   })
// })