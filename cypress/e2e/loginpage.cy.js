




describe('Thaili Login Page', () => {
    it('should load the homepage', () => {
      cy.visit('http://uatthaili.digihub.com.np/')
      cy.title().should('include', 'Thaili | Login')
  
          //Mobile number Field
      // Type a value into the input field:
      cy.get('#user_name').type('9800000000')
  
      // Verify the maximum length of the input field:
      cy.get('#user_name').should('have.attr', 'maxlength', '10')
  
      // Verify the minimum length of the input field:
      // cy.get('#user_name').should('have.attr', 'minlength', '10')
      cy.get('#user_name').should('have.attr', 'data-val-minlength-min', '10')
  
      // Verify the input field's data-val-regex-pattern attribute:
      cy.get('#user_name').should('have.attr', 'data-val-regex-pattern', '^((980)|(981)|(982)|(984)|(985)|(986)|(974)|(976)|(975)|(988)|(961)|(962)|(972))([0-9])+$')
  
      // Verify the input field's data-val-required attribute:
      cy.get('#user_name').should('have.attr', 'data-val-required', 'Required')
  
      // Check the onkeypress event of the input field:
      cy.get('#user_name').should('have.attr', 'onkeypress', 'return isNumber(event)')
  
      // Verify the placeholder text of the input field:
      cy.get('#user_name').should('have.attr', 'placeholder', 'Enter your mobile number')
  
      // Clear the input field:
      cy.get('#user_name').clear()
          // cy.get('header').should('exist')
  
                                    //Password Field
                                    // Verify the maximum length of the input field:
                                cy.get('#user_password').should('have.attr', 'maxlength', '16')
  
                                // Verify the minimum length of the input field:
                                cy.get('#user_password').should('have.attr', 'minlength', '8')
  
                                // Verify the input field's data-val-required attribute:
                                cy.get('#user_password').should('have.attr', 'data-val-required', 'Required')
  
                                // Verify the placeholder text of the input field:
                                cy.get('#user_password').should('have.attr', 'placeholder', 'Enter your password')
  
                                // Verify the input field value:
                                cy.get('#user_password').should('have.value', '')
  
                                // Verify the input field class:
                                cy.get('#user_password').should('have.class', 'form__control')
  
                                // Verify the input field type:
                                cy.get('#user_password').should('have.attr', 'type', 'password')
  
                                // Verify the input field is empty:
                                cy.get('#user_password').should('be.empty')
  
                                // Verify the input field is not empty:
                                cy.get('#user_password').should('not.be.empty')
  
                                // Verify the input field is disabled:
                                cy.get('#user_password').should('be.disabled')
  
                                // Verify the input field is enabled:
                                cy.get('#user_password').should('not.be.disabled')
  
                                // Verify the input field is focused:
                                cy.get('#user_password').should('be.focused')
  
                                // Verify the input field is not focused:
                                cy.get('#user_password').should('not.be.focused')
  
                                //Assert SVG image : thaili logo in footer
                                // Verify the src attribute of the image element:
                                      cy.get('img').should('have.attr', 'src', '/Content/assets/images/nibl-logo.svg')
  
                                      // Verify the alt attribute of the image element:
                                      cy.get('img').should('have.attr', 'alt', 'nibl-logo')
  
                                      // Verify that the image element is visible:
                                      cy.get('img').should('be.visible')
  
                                      // Verify that the image is loaded correctly:
                                      cy.get('img').should('have.attr', 'complete', true)
  
                                      // Verify that the image element has a specific class:
                                      cy.get('img').should('have.class', 'logo-img')
  
                                      // Verify that the image element is not empty
                                      cy.get('img').should('not.be.empty')
  
      //Footer Section : Validation and clik on the footer. 
  
  
      // Assert the class of the container div:
  cy.get('footer .container').should('have.class', 'container')
  
  // Assert the text of the copyright div:
  cy.get('.copyright').should('contain', 'Thaili Digital Paisa 2022. All Right Reserved')
  
  // Assert that the footer is visible:
  cy.get('footer').should('be.visible')
  
  // Click on the "Privacy Policy" link:
  cy.get('a').contains('Privacy Policy').click()
  
  // Click on the "Terms & Conditions" link:
  cy.get('a').contains('Terms & Conditions').click()
  
  // Click on the "About Us" link:
  cy.get('a').contains('About Us').click()
  
  // Click on the "Bank" link:
  cy.get('a').contains('Bank').click()
  
  // Click on the "FAQ's" link:
  cy.get('a').contains('FAQs').click()
  
  // Click on the "Contact Us" link:
  cy.get('a').contains('Contact Us').click()
  
  // Click on the "nibl-logo" image:
  cy.get('img').click()
  
  
  
  
    })
  
      
  })
  
  
  
  
  
  
  
  
  
  
  