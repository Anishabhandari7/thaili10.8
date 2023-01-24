let rowsLength;
describe('Fill kyc', () => {
  before(() => {
    cy.task("readXlsx", {
      file: "cypress/fixtures/kyc.xlsx", //excel file name
      sheet: "Sheet1", //sheetname
    }).then((rows) => {
      rowsLength = rows.length;
      cy.writeFile("cypress/fixtures/kyc.json", { rows });
    });
  });
  it('Fill kyc form', () => {
   

    cy.fixture('kyc').then(data=>{
    for(let i=0;i< rowsLength; i++){
      cy.clearCookies()
      let iss
      let exp
      cy.visit('http://uatthaili.digihub.com.np')
      cy.get('#user_name').type(`${data.rows[i].user}`)
      cy.get('#user_password').type(`${data.rows[i].password}`)
      cy.contains("LOGIN").click().wait(3000)
       //goto userdetails page after login
       cy.visit('http://uatthaili.digihub.com.np/User/UserDetails#')
       //Fill KYC button
       cy.get(`button[type="submit"]`).contains('Fill KYC').click()
       cy.mpin(`${data.rows[i].mpin}`)
       cy.get(`#FirstName`).clear().type(`${data.rows[i].firstName}`)
       cy.get(`#MiddleName`).clear().type(`${data.rows[i].middleName}`)
       cy.get(`#LastName`).clear().type(`${data.rows[i].lastName}`)
       //select gender
       cy.get(`.form-check-input-styled`).eq(`${data.rows[i].gender}`).check()
       cy.get(`#Nationality`).select(`${data.rows[i].nation}`, {force:true})
       cy.get('.input-group > #EmailAddress').clear().type(`${data.rows[i].email}`)
       //select date
       
       if (`${data.rows[i].DOBType}` === 'ad') {
        cy.get(`button[name='${data.rows[i].DOBType}']`).eq(0).click()
        cy.DateSelect(0, `#DOB_Eng`, `${data.rows[i].EN_DOB_year}`, `${data.rows[i].EN_DOB_month}`, `${data.rows[i].EN_DOB_day}`)

    } else {
        cy.get(`button[name='${data.rows[i].DOBType}']`).eq(0).click()
        cy.DateSelectNepali(`#DOB_Nep`, `${data.rows[i].NP_DOB_year}`, `${data.rows[i].NP_DOB_month}`, `${data.rows[i].NP_DOB_day}`)
    }

 //Select marital status
                cy.get(`button[name='bs']`).contains(`${data.rows[i].maritalStatus}`).click()
                //use Spouse name only when .contains(c.mar) is used other wise comment spouse 
                //Spouse name
                if (`${data.rows[i].maritalStatus}` === 'Married') {
                    cy.get(`#SpouseName`).clear().type(`${data.rows[i].spouse}`)
                }
                   //Screenshot fo Personal details form
                   cy.screenshot('KYC/1PersonalDetails')
                   //click continue
                   cy.get(`button[id='btn_basicContinue']`).click()
   
  //Guardian Details ____________________________________
  cy.get(`#FatherName`).clear().type(`${data.rows[i].fatherName}`)
  cy.get(`#MotherName`).clear().type(`${data.rows[i].motherName}`)
  cy.get(`#GrandFatherName`).clear().type(`${data.rows[i].grandFatherName}`)
  //select Occupation
  cy.get(`#Occupation`).select(`${data.rows[i].occupation}`, { force: true })
  //screenshot of guardian details
  cy.screenshot('KYC/2GuardianDetails')
  //click continue
  cy.get(`button[id='btn_personalcontinue']`).click()
  
                 //Address
                //Permanent Address
                //select country
                cy.get(`#Country`).select(`${data.rows[i].country}`, { force: true })
                //--
                cy.get(`#PAddress`).clear().type(`${data.rows[i].permanentStreet}`)
                //select provience
                cy.get(`#PProvince`).select(`${data.rows[i].permanentProvience}`, { force: true }).wait(1000)
                //--
                //select District
                cy.get(`#PDistrict`).select(`${data.rows[i].permanentDistrict}`, { force: true }).wait(1000)
                //--
                //select vdc.muncipality
                cy.get(`#PLocalBody`).select(`${data.rows[i].permanentLocal}`, { force: true })
                //--
                //input ward
                cy.get(`#PWardNo`).clear().type(`${data.rows[i].permanentWard}`)
                cy.get(`#permanentHouseNo`).clear().type(`${data.rows[i].permanentHouseNo}`)

                if (`${data.rows[i].sameAsPermanent}` === 'true') {
                  //same as permanent address
                  cy.get(`#SameAsPermanentAddress`).check()
              } else {
                  //Temporary Address
                  //select country
                  //temporary address, comment if same as permanent address
                  cy.get(`#TAddress`).clear().type(`${data.rows[i].temporaryStreet}`)
                  //select provience
                  cy.get(`#TProvince`).select(`${data.rows[i].temporaryProvience}`, { force: true }).wait(1000)
                  //--
                  //select District
                  cy.get(`#TDistrict`).select(`${data.rows[i].temporaryDistrict}`, { force: true }).wait(1000)
                  //--
                  //select vdc.muncipality
                  cy.get(`#TLocalBody`).select(`${data.rows[i].temporaryLocal}`, { force: true })
                  //--
                  //input Ward
                  cy.get(`#TWardNo`).clear().type(`${data.rows[i].temporaryWard}`)
                  cy.get(`#currentHouseNo`).clear().type(`${data.rows[i].temporaryHouseNo}`)
              }
              cy.screenshot('KYC/3Address')
              //click continue
              cy.get(`button[id='btn_addresscontinue']`).click()


                //dcoument details
                //select document type
                cy.get(`#Id_type`).select(`${data.rows[i].document}`, { force: true })


                cy.get(`span[id='select2-Id_type-container']`).then(ctz => {
                    if (`${data.rows[i].DOBType}` === 'ad') {
                        iss = 1
                        exp = 2
                        if (ctz[0].innerText == 'Citizenship') {
                            if (`${data.rows[i].IssueDateType}` === 'ad') {
                                cy.get(`div[class='cls_identificationDetails'] button[name='${data.rows[i].IssueDateType}']`).eq(0).click().wait(300)
                                cy.DateSelect(iss, `#IssueDateAD`, `${data.rows[i].EN_Issue_year}`, `${data.rows[i].EN_Issue_month}`, `${data.rows[i].EN_Issue_day}`)
                            } else {
                                cy.get(`div[class='cls_identificationDetails'] button[name='${data.rows[i].IssueDateType}']`).eq(0).click().wait(300)
                                cy.DateSelectNepali(`#IssueDateBS`, `${data.rows[i].NP_Issue_year}`, `${data.rows[i].NP_Issue_month}`, `${data.rows[i].NP_Issue_day}`)

                            }
                            cy.get(`#Id_DocumentBackFile`).selectFile(`image/${data.rows[i].DocumentBack}`)
                        }
                        // cy.log('iss',iss)
                    } else {
                        iss = 0
                        exp = 1

                        cy.get(`div[class='cls_identificationDetails'] button[name='${data.rows[i].IssueDateType}']`).eq(0).click().wait(300)

                        if (`${data.rows[i].IssueDateType}` === 'ad') {
                            cy.get(`div[id='CitizenshipHide'] button[name='${data.rows[i].ExpiryDateType}']`).click().wait(300)
                            cy.DateSelect(iss, `#IssueDateAD`, `${data.rows[i].EN_Issue_year}`, `${data.rows[i].EN_Issue_month}`, `${data.rows[i].EN_Issue_day}`)
                        } else {
                            cy.get(`div[id='CitizenshipHide'] button[name='${data.rows[i].ExpiryDateType}']`).click().wait(300)
                            cy.DateSelectNepali(`#IssueDateBS`, `${data.rows[i].NP_Issue_year}`, `${data.rows[i].NP_Issue_month}`, `${data.rows[i].NP_Issue_day}`)
                        }
                        if (`${data.rows[i].IssueDateType}` === 'bs'){
                            exp = 0
                        if (`${data.rows[i].ExpiryDateType}` === 'ad') {
                            cy.get(`div[id='CitizenshipHide'] button[name='${data.rows[i].ExpiryDateType}']`).click().wait(300)
                            cy.DateSelect(exp, `#ExpireDateAD`, `${data.rows[i].EN_Expire_year}`, `${data.rows[i].EN_Expire_month}`, `${data.rows[i].EN_Expire_day}`)
                        } else {
                            cy.get(`div[id='CitizenshipHide'] button[name='${data.rows[i].ExpiryDateType}']`).click().wait(300)
                            cy.DateSelectNepali(`#ExpireDateBS`, `${data.rows[i].NP_Expire_year}`, `${data.rows[i].NP_Expire_month}`, `${data.rows[i].NP_Expire_day}`)
                        }
                    }
                    }
                })
                //document id
                cy.get(`#Id_No`).clear().type(`${data.rows[i].docId}`)
                //select issued place
                cy.get(`#Id_IssuedPlace`).select(`${data.rows[i].IssuePlace}`, { force: true })

                //add front image
                cy.get(`#Id_DocumentFrontFile`).selectFile(`cypress/image/${data.rows[i].DocumentFront}`)
                //check if select document is Citizenship or other documents
                cy.get(`#PPImageFile`).selectFile(`cypress/image/${data.rows[i].ProfileImage}`)

                //cy.get(`button[id='btnSubmit']`).click()



    }
    })
  
  })
})