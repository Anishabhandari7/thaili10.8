

describe('Reset Password', () => {

  var resetMo = '9847659504'
  var resetPwd = 'Admin@123'

  it('Reset and set password', () => {
    cy.adminLogin("superavin", "Super@123");
    cy.visit('http://uatthailiadmin.digihub.com.np/CustomerManagement/Index')
     cy.contains('Show Filters').click().wait(1000)
     cy.get('#mobilenumber').type(resetMo)
    cy.contains('Search').click()
    cy.get('.btn-group > a').eq(3).click().wait(1000)
    cy.contains('Yes').click().wait(3000)
    cy.contains('Close').click()
    cy.get('.btn-group > a').eq(1).click().wait(1000)
    cy.contains('Yes').click()
    cy.wait(3000)
    cy.get('.btn').contains('Close').should('be.visible').click()

    cy.visit('http://uatthailiadmin.digihub.com.np/Log/SmsLog')
    cy.contains('Show Filters').click().wait(1000)
    cy.get('#SmsDestinationNo').type(resetMo)
    cy.contains('Search').click().wait(1000)
    
    cy.get('tr[id=1] td').eq(2).then(password=>{
      const sms = password[0].innerText
      
      let pass = sms.toString().substring(sms.toString().indexOf('password is ') + 11);
      
      let pwd = pass.toString().substring(pass.toString().indexOf('. Please'), -11);
      cy.log(pwd)
      cy.login(resetMo,pwd)
    })
      cy.get(`#Password`).type(resetPwd)
      cy.get(`#ConfirmPassword`).type(resetPwd)
      cy.contains('Submit').click()
      cy.login(resetMo,resetPwd)

  
  })

})