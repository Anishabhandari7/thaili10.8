describe('Adds Merchant Form merchant.xlsx', () => {
    let rowsLength
    before(() => {
        cy.task('readXlsx', {
            file: "cypress/fixtures/merchant.xlsx",
            sheet: "Sheet1"
        }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/merchant.json", {
                rows
            })
        })
    })
    it("fill merchant kyc", () => {
        cy.fixture("merchant").then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                cy.adminLogin("superavin", "Super@123");
                cy.visit('http://uatthailiadmin.digihub.com.np/MerchantManagement/Index')
  
                cy.contains('Add New').click().wait(1000)

            
            cy.get('#AgentName').clear().type(`${data.rows[i].agentName}`)
            

            cy.get('#Merchant_MerchantType').select(`${data.rows[i].merchantType}`, {
                force: true
            })
              if (`${data.rows[i].agentContractDateType}` === 'ad') {
                cy.ADDateSelect(
                    '#Merchant_AgentContractDate',
                    `${data.rows[i].agentContractDateAD}`
                );
            } else {
                cy.DateSelectNepali(
                    "#Merchant_AgentContractDate_BS",
                    `${data.rows[i].agentContractDateBS}`
                );
        
              }
              
              cy.get('#Merchant_AgentMobileNumber').clear().type(`${data.rows[i].merchantAgentNo}`)

              cy.get('#Merchant_AgentEmailAddress').clear().type(`${data.rows[i].merchantEmail}`)

              cy.get('#Merchant_WebUrl').clear().type(`${data.rows[i].webUrl}`)

              cy.get('#Merchant_AgentRegistrationNumber').clear().type(`${data.rows[i].agentRegNo}`)

              cy.get('#Merchant_AgentRegistrationIssuingDistrict').select(`${data.rows[i].regIssueDistrict}`, {
                  force: true
              }).wait(5000)

              // registration issue date
              if(`${data.rows[i].agentRegIssueDateType}`=="bs"){
                cy.DateSelectNepali(
                    "#Merchant_AgentRegistrationIssueDate_BS",
                    `${data.rows[i].agentRegIssueDateBS}`
                );
              }else{
                cy.ADDateSelect(
                    "#Merchant_AgentRegistrationIssueDate",
                    `${data.rows[i].agentRegIssueDateAD}`
                );
              }
              cy.get('#Merchant_AgentPanNumber').clear().type(`${data.rows[i].merchantPan}`)
              if (`${data.rows[i].personalFlag}` === 'no') {
                  cy.get('#no_AgentOperationType').check()
              } else {
                  cy.get('#yes_AgentOperationType').check()
              }

              cy.get('#Merchant_AgentPanIssuingDistrict').select(`${data.rows[i].merchantPanIssueDistrict}`, {
                  force: true
              }).wait(1000)

              if (`${data.rows[i].agentPanIssueDateType}` === 'ad') {
                  cy.ADDateSelect(
                      "#Merchant_AgentPanIssueDate",
                      `${data.rows[i].agentPanIssueDateAD}`
                  );
              } else {
                  cy.DateSelectNepali(
                      "#Merchant_AgentPanIssueDate_BS",
                      `${data.rows[i].agentPanIssueDateBS}`
                  );
              }
              // for permanent address
              cy.get('#Merchant_AgentPermanentProvince').select(`${data.rows[i].permanentProvience}`, {
                  force: true
              }).wait(1000)

              cy.get('#Merchant_AgentPermanentDistrict').select(`${data.rows[i].permanentDistrict}`, {
                  force: true
              }).wait(1000)

              cy.get('#Merchant_AgentPermanentLocalbody').select(`${data.rows[i].permanentLocal}`, {
                  force: true
              })

              cy.get('#Merchant_AgentPermanentWardno').clear().type(`${data.rows[i].permanentWard}`)

              cy.get('#Merchant_AgentPermanentAddress').clear().type(`${data.rows[i].permanentAddress}`)

              if (`${data.rows[i].sameAsPermanent}` === 'true') {
                  cy.get('#is_same_as_permanent').click()
              } else {
                  // for temporary address
                  cy.get('#Merchant_AgentTemporaryProvince').select(`${data.rows[i].temporaryProvience}`, {
                      force: true
                  }).wait(1000)

                  cy.get('#Merchant_AgentTemporaryDistrict').select(`${data.rows[i].temporaryDistrict}`, {
                      force: true
                  }).wait(1000)

                  cy.get('#Merchant_AgentTemporaryLocalbody').select(`${data.rows[i].temporaryLocal}`, {
                      force: true
                  })

                  cy.get('#Merchant_AgentTemporaryWardno').clear().type(`${data.rows[i].temporaryWard}`)

                  cy.get('#Merchant_AgentTemporaryAddress').clear().type(`${data.rows[i].temporaryAddress}`)
              }

              // Valid Account number and Account holder's name  00105010022187    Avin Paudel
              cy.get('#Merchant_AccountNumber').clear().type(`${data.rows[i].merchantAccountNo}`)
              cy.get('#Merchant_AccountName').clear().type(`${data.rows[i].merchantAccountName}`)

              // image file uploads for Merchant Logo, Pan Certificate, Registration Certificate
              cy.get('#Merchant_Logo').selectFile(`cypress/image/${data.rows[i].merchantLogo}`)
              cy.get('#Pan_Certificate').selectFile(`cypress/image/${data.rows[i].panCertificate}`)
              cy.get('#Registration_Certificate').selectFile(`cypress/image/${data.rows[i].registrationCertificate}`)

              // merchant information ends

              cy.contains('Next').click()

              // User Information Page Starts 
              cy.get('#MerchantUser_UserFirstName').clear().type(`${data.rows[i].merchantFirstName}`)

              cy.get('#MerchantUser_UserMiddleName').clear().type(`${data.rows[i].merchantMiddleName}`)

              cy.get('#MerchantUser_UserLastName').clear().type(`${data.rows[i].merchantLastName}`)

              cy.get('#MerchantUser_UserName').clear().type(`${data.rows[i].merchantUserName}`)

              cy.get('#MerchantUser_UserMobileNumber').clear().type(`${data.rows[i].merchantUserMobileNo}`)

              cy.get('#MerchantUser_UserEmailAddress').clear().type(`${data.rows[i].merchantUserEmail}`)

              // User Information Page ends

              cy.get('#BusinessForm').click()

              // Contact Details Starts
              cy.get('#Merchant_AgentContactPersonName').clear().type(`${data.rows[i].agentContactName}`)

              cy.get('#Merchant_AgentContactPersonMobileNumber').clear().type(`${data.rows[i].agentMobileNo}`)

              cy.get('#Merchant_AgentContactPersonAddress').clear().type(`${data.rows[i].agentAddress}`)
              cy.get('#AgentContactPersonIdType').select(`${data.rows[i].agentIdName}`, {
                  force: true
              })
              cy.get('#Merchant_AgentContactPersonIdNumber').clear().type(`${data.rows[i].agentIdNo}`)
              cy.get('#Merchant_AgentContactPersonIdIssuedDistrict').select(`${data.rows[i].agentIdIssuedDistrict}`, {
                  force: true
              })

              if (`${data.rows[i].agentContactIssueDateType}` === 'ad') {
                  cy.ADDateSelect('#Merchant_AgentContactPersonIdIssuedDate', `${data.rows[i].agentContactIssueDateAD}`)
              } else {
                  cy.DateSelectNepali('#Merchant_AgentContactPersonIdIssuedDate_BS', `${data.rows[i].agentContactIssueDateBS}`)
              }
              //for driving license, voter id and passport
              if (`${data.rows[i].agentIdName}` === 'Citizenship') {
                  cy.get('#ID_Back_Image').selectFile(`cypress/image/${data.rows[i].idCertificateBack}`)
              } else {
                  if (`${data.rows[i].agentContactIssueDateType}` === 'ad') {
                      cy.ADDateSelect('#Merchant_AgentContactPersonIdIssuedDate', `${data.rows[i].agentContactIssueDateAD}`)
                  } else {
                      cy.DateSelectNepali('#Merchant_AgentContactPersonIdIssuedDate_BS', `${data.rows[i].agentContactIssueDateBS}`)
                  }
                  if (`${data.rows[i].agentContactExpireDateType}` === 'ad') {
                      cy.ADDateSelect('#Merchant_AgentContactPersonIdExpiryDate', `${data.rows[i].agentContactExpireDateAD}`)
                  } else {
                      cy.DateSelectNepali('#Merchant_AgentContactPersonIdExpiryDate_BS', `${data.rows[i].agentContactExpireDateBS}`)
                  }
              }
              cy.get('#Contact_Person_Id_Certificate').selectFile(`cypress/image/${data.rows[i].idCertificate}`)


              // cy.get('#BusinessSubmit').click()
          }
      })

  })

})

