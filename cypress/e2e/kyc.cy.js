import {
    c
} from "../support/constants"

c


/**
 * NOTE: change noKycUname in constants.js if KYC of user is already filled
 * From support/constants.js file import
 * noKycUname
 * pwd1
 * tpin1 [linked user tpin]
 * tpin2 [no kyc tpin]
 * tpin3 [wallet user tpin]
 * fName
 * lName
 * mName
 * fatherName
 * motherName
 * grandFaName
 * email
 * year
 * month
 * sin: 'Single',
 * mar: 'Married',
 * div: 'Divorced',
 * spouse
 * country
 * pstreet
 */
describe('fill kcy', () => {
    it('fill kcy form', () => {
        var uname = '9860347445' //c.noKycUname
        var pwd = 'Test@123' //c.pwd1
        var tpin = '1234' //c.tpin1
        var fName = 'vandari' //c.fName
        var mName = c.mName
        var lName = 'anny' //c.lName
        var gender = c.female
        var nation = c.nepal
        var maritalStatus = c.mar
        var spouse = c.spouse
        var fatherName = c.fatherName
        var grandFaName = c.grandFaName
        var motherName = c.motherName

        //permanet address
        var country = c.country
        var pstreet = c.pstreet
        var tstreet = c.pstreet
        //document types
        var document = c.license
        var docId = c.docId
        var email = 'np@test.com'
        var pProvience = 'Bagmati Pradesh'
        var pDistrict = 'Sindhuli'
        var pLocal = 'Kamalamai Municipality'

        var tProvience = 'Gandaki Pradesh'
        var tDistrict = 'Myagdi'
        var tLocal = 'Beni Municipality'

        //date of birth
        var EN_DOB_year = '1998' //AD DOB year
        var EN_DOB_month = 'April' //AD DOB month
        var EN_DOB_day = '14' //AD DOB day
        //Document issue date
        var EN_Issue_year = '2017' //AD document issue year
        var EN_Issue_month = 'January' //AD document issue month
        var EN_Issue_day = '18' //AD document issue day
        //document expiry date
        var EN_Expire_year = '2026' //AD document expire year
        var EN_Expire_month = 'January' //AD document expire month
        var EN_Expire_day = '23'
        cy.login(uname, pwd)
        cy.visit('/User/UserDetails#')
        cy.xpath(`//button[@type='submit']`).contains('Fill KYC').click()
        cy.xpath(`//input[@type='password']`).eq(0).type(tpin)
        cy.xpath(`//button[@id='btnConfirmmodal']`).click().wait(1000)
        //kyc personal details
        cy.xpath(`//input[@id='FirstName']`).clear().type(fName)
        cy.xpath(`//input[@id='LastName']`).clear().type(lName)
        cy.xpath(`//input[@class='form-check-input-styled']`).eq(gender).check()
        cy.xpath(`//div[@class='NationalitydivClass divide-form ']//span[@class='selection']`).click().wait(2000)
            .xpath(`//ul[@role='tree']`).contains('Nepali').click()
        cy.xpath(`//input[@name='ShowEmailAddress']`).clear().type(email)
        cy.xpath(`//button[@name='ad']`).contains('AD').click()
        cy.xpath(`//input[@id='DOB_Eng']`).click()
        cy.xpath(`//select[@title='Month selection']`).select(EN_DOB_month)
        cy.xpath(`//select[@title='Year selection']`).select(EN_DOB_year)
        cy.xpath(`//table[@class='the-datepicker__calendar']//td`).contains(EN_DOB_day).click()
        cy.xpath(`//button[@name='bs']`).contains(maritalStatus).click()
        cy.xpath(`//input[@name='SpouseName']`).clear().type(spouse)
        //cy.screenshot('KYC/1PersonalDetails')
        cy.xpath(`//button[@id='btn_basicContinue']`).click()
        cy.xpath(`//input[@id='FatherName']`).clear().type(fatherName)
        cy.xpath(`//input[@id='MotherName']`).clear().type(motherName)
        cy.xpath(`//input[@id='GrandFatherName']`).clear().type(grandFaName).wait(2000)
        cy.xpath(`//span[@id="select2-Occupation-container"]`).click()
            .xpath(`//li[@role='treeitem']`).eq(4).click()
        //screenshot of guardian details
        //cy.screenshot('KYC/2GuardianDetails')
        cy.xpath(`//button[@id='btn_personalcontinue']`).click()
        cy.xpath(`//span[@id='select2-Country-container']`).click()
            .xpath(`//li[@role='treeitem']`).eq(1).click()
        cy.xpath(`//input[@id='PAddress']`).clear().type(pstreet)
        cy.xpath(`//span[@id='select2-PProvince-container']`).click()
            .xpath(`//li[@role='treeitem']`).eq(3).click()
        cy.xpath(`//span[@id='select2-PDistrict-container']`).click()
            .xpath(`//li[@role='treeitem']`).contains(pDistrict).click().wait(1000)
        cy.xpath(`//span[@id='select2-PLocalBody-container']`).click()
            .xpath(`//li[@role='treeitem']`).contains(pLocal).click()
             //input ward
    cy.xpath(`//input[@id='PWardNo']`).type('11')

    //same as permanent address
    cy.xpath(`//input[@name='SameAsPermanentAddress']`).eq(0).click()
    

    //cy.screenshot('KYC/3Address')
    //click continue
    cy.xpath(`//button[@id='btn_addresscontinue']`).click()

    //dcoument details
    //select document type
    cy.xpath(`//span[@id='select2-Id_type-container']`).click()
      .xpath(`//li[@role='treeitem']`).contains(document).click()
      //select issued place
    cy.xpath(`//span[@id='select2-Id_IssuedPlace-container']`).click()
    .xpath(`//li[@role='treeitem']`).eq(1).click().wait(1000)
    cy.xpath(`//input[@id='Id_No']`).clear().type(34785)
  //select AD button
  cy.xpath(`//div[@class='cls_identificationDetails']//button[@name='ad']`).contains("AD").click()
  
  cy.xpath(`//input[@name='Id_IssuedDateAD']`).click()
   .xpath(`//select[@title='Year selection']`).eq(1).select(EN_Issue_year)
   .xpath(`//select[@title='Month selection']`).eq(1).select(EN_Issue_month)
//   cy.xpath(`//tbody[@class='the-datepicker__calendar']`).contains('18').should('be.visible').click()
  // .xpath(`//div[@class='the-datepicker__body']`).contains(EN_Issue_day).should('be.visible').click()
  cy.get('tbody').eq(1).contains('20').should('be.visible').click()

  
  cy.get('#CitizenshipHide > .date_view > .button__group > [name="ad"]').click()
  cy.xpath(`//input[@name='Id_ExpiryDateAD']`).click()
  .xpath(`//select[@title='Year selection']`).eq(2).select(EN_Expire_year)
  .xpath(`//select[@title='Month selection']`).eq(2).select(EN_Expire_month)
  cy.get('tbody').eq(2).contains('20').should('be.visible').click()
  cy.xpath(`//input[@id='Id_DocumentFrontFile']`).selectFile('cypress/e2e/images/photo.jpg')
  cy.xpath(`//input[@id='PPImageFile']`).selectFile('cypress/e2e/images/image.jpeg')
  cy.xpath(`//button[@id='btnSubmit']`).click()
  //cy.xpath(`//div[@class='success__content']`).contains('BACK TO DASHBOARD').click()



  







    })
})


//Temporary Address
    //select country
    // {//temporary address, comment if same as permanent address
    //   cy.xpath(`//input[@id='TAddress']`).type(tstreet)
    //   //select provience
    //   cy.xpath(`//span[@id='select2-TProvince-container']`).click()
    //     .xpath(`//li[@role='treeitem']`).contains(tProvience).click().wait(1000)
    //   //--
    //   //select District
    //   cy.xpath(`//span[@id='select2-TDistrict-container']`).click()
    //     .xpath(`//li[@role='treeitem']`).contains(tDistrict).click().wait(1000)
    //   //--
    //   //select vdc.muncipality
    //   cy.xpath(`//span[@id='select2-TLocalBody-container']`).click()
    //     .xpath(`//li[@role='treeitem']`).contains(tLocal).click()
    //   //--
    //   //input Ward
    //   cy.xpath(`//input[@id='TWardNo']`).type('02')
    // }