import { c } from "../../support/constants"


describe('Television Payment', () => {
/**
* From support/constants.js file import
    * walletUname
    * bankUname
    * pwd1
    * tpin1 [linked user tpin]
    * tpin2 [wallet user tpin]
    * dishHomeId
 */
 //Bank
  it('Television Bank payment', () => {
    //declare variables for username, pwd and tpin which are subject to be changed
    //some variables are used from constants.js file
    var uname = c.bankUname //mobile number
    var pwd = c.pwd2 //password
    var dishhomeId = c.dishHomeId //dishhome user ID
    var tpin = c.tpin2 //tpin
    //add amount
    var amt = '500'
    cy.login(uname,pwd)
    cy.visit('DishHomeDirectBillPayment/DishHomeDirectInquiry')
    cy.xpath(`//input[@name='DishhomeId']`).type(dishhomeId)

    //screenshot of form
    cy.screenshot('Television/Bank/1Form')
    cy.xpath(`//button[@id='btnConfirm']`).dblclick()
    //goto confirmation page
    cy.xpath(`//select[@id='PaymentType']`).select(2)
    cy.xpath(`//span[@class='selection']`).click()
      .xpath(`//ul[@role='tree']`).contains(amt).click()
    //screenshot of details
    cy.screenshot('Television/Bank/2Details')
    cy.xpath(`//button[@id='btnConfirm']`).dblclick()
    //detail confirm page
    cy.screenshot('Television/Bank/3Confirmation')
    cy.xpath(`//button[@id='btnConfirm']`).dblclick()
    //proceed payment
    cy.xpath(`//input[@type='password']`).eq(0).type(tpin)
    cy.xpath(`//button[@id='btnConfirmmodal']`).dblclick()
    cy.screenshot('Television/Bank/4Reciept')

    cy.xpath(`//table[@class='successdetail']//td`).eq(3).then(txn=>{
      cy.xpath(`//table[@class='successdetail']//td`).eq(3).should('have.text',txn[0].innerText)
      //goto dashboard
      cy.xpath(`//a[@href='/Home/Dashboard']`).click().wait(100)
      //Goto Statement
      cy.xpath(`//span[@id='close-menu']`).click({force:true})
      cy.xpath(`//div[@class='dropdown__box']`).contains('Statement').click()    
      //add date time to validate in statements page
      var txnRemark= 'DishHome '+dishHomeId+' TID#'+txn[0].innerText
      cy.xpath(`//td[@class='trxn__remarks']`).eq(0).contains(txnRemark)
    })
    cy.screenshot('Television/Bank/5Statement')
   })
})


// describe('services', ()=>{
//   beforeEach(()=>{
//       cy.login('9847659504', 'Test@thaili1')
//   })
//   it('television',()=>{
//       cy.contains("Television").click()
//       cy.wait(2000)
//       cy.get('img[class="icon"]').click()
//       cy.wait(2000)
//       cy.get('#DishhomeId').type(6658042)
//       cy.get('#btnConfirm').click()

//       cy.get('#select2-Amount-container').click()
//       cy.get('select').select('500', {force:true})  //Select the option with the value "500"
//       cy.get('#btnConfirm').click()
//       cy.get('#btnConfirm').click()
//       cy.wait(2000)
//       cy.get("#pin1").type("1")
//       cy.get("#pin2").type("2")
//       cy.get("#pin3").type("3")
//       cy.get("#pin4").type("4")
//       cy.wait(2000)
//       cy.get('#btnConfirmmodal').click()
//       cy.wait(2000)
//       cy.get('.success__content > .btn').click()

//   })
// })