import { c } from "../../support/constants"
/**
* From support/constants.js file import
    * walletUname
    * bankUname
    * pwd1
    * tpin1 [linked user tpin]
    * tpin2 [wallet user tpin]
 */
describe('Topup', () => {
  //Wallet topup
  it('Topup mobile number wallet', () => {
    //declare variables for username, pwd and tpin which are subject to be changed
    //some variables are used from constants.js file
    var uname = c.walletUname //mobile number
    var pwd = c.pwd1 //password
    var topupNo = c.ntc // top up number
    var tpin = c.tpin2 //tpin
    //add amount
    var amt = '10'
    //import login 
    cy.login('9847659504','Test@1234')
    //visit mobile topup
    cy.visit('/Payment/MobileTopUp')
    //add mobile number and amount
    cy.xpath(`//input[@name='MobileNo']`).type(topupNo).wait(1000)
    cy.xpath(`//input[@name='Amount']`).type(amt)

    //screenshot of form
    cy.screenshot('Topup/Wallet/1Form')
    //click confirm button
    cy.xpath(`//button[@id='confirmButton']`).dblclick().wait(1000) 

    //screenshot of details
    cy.screenshot('Topup/Wallet/2Details')  

    //goto confirm page 
    cy.xpath(`//button[@id='btnConfirm']`).click()
    //add tpin and submit
    cy.xpath(`//input[@type='password']`).eq(0).type(tpin)
    //click confirm
    cy.xpath(`//button[@id='btnConfirmmodal']`).click().wait(1000)
    
    //screenshot of confirmation
    cy.screenshot('Topup/Wallet/3Confirmation')
    //___________________
    //goto dashboard
    //get name for phonenumber provider
    cy.xpath(`//p[@class='success__heading center']`).then(title=>{
      cy.xpath(`//p[@class='success__heading center']`).should('have.text',title[0].innerText)
      cy.xpath(`//table[@class='successdetail']//td`).eq(3).then(txn=>{
        cy.xpath(`//table[@class='successdetail']//td`).eq(3).should('have.text',txn[0].innerText)
       //Goto Statement
        cy.xpath(`//a[@name='home']`).click().wait(100)
        cy.xpath(`//span[@id='close-menu']`).click({force:true})
        cy.xpath(`//div[@class='dropdown__box']`).contains('Statement').click()
        //verify in statement
        //e.g 	NT Mobile Prepaid (GSM) 9860526655 TID#100000046663
        var txnRemark=title[0].innerText+' '+topupNo+' '+'TID#'+txn[0].innerText
        cy.xpath(`//td[@class='trxn__remarks']`).eq(0).contains(txnRemark)
        
        //screenshot of statement
        cy.screenshot('Topup/Wallet/4Statement')
      })
    })
  })
})

// describe("topup", () => {


//   beforeEach(() => {

//       cy.login('9847659504', 'Test@thaili1')
//       cy.wait(2000)
//   })


//   it("topup", () => {

//       cy.contains("Topup").click()
//       cy.get('#MobileNo').type("9849258880")
//       cy.wait(5000)
//       cy.get('#Amount').type('20')
//       cy.wait(5000)
//       // cy.get('#Amount').click().type('20{enter}', { force: true })
//       cy.get('#confirmButton').click()
//       cy.get('#btnConfirm').click()
//       cy.wait(10000)
//       cy.get("#pin1").type("1")
//       cy.get("#pin2").type("2")
//       cy.get("#pin3").type("3")
//       cy.get("#pin4").type("4")
//       cy.wait(20000)
//       cy.get('#btnConfirmmodal').click()
//       cy.wait(2000)
//       cy.get('.success__content > .btn').click()
//       cy.get('img[class="user__img"]').click()
//       cy.wait(2000)
//       cy.get(':nth-child(5) > .dropdown__a').click()
//       // cy.get('#modal-close-button-ok').click()
//       // cy.screenshot("NT Prepaid recharge success")
//   })

// })