
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import './commands'
//to disable uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})

//Admin
Cypress.Commands.add("adminLogin", (username, password)=>{
  cy.visit("http://uatthailiadmin.digihub.com.np/")
  cy.get('#user_name').type(username)
  cy.get('#Password').type(password)
  cy.contains('Log In').click()

})

//WEB

Cypress.Commands.add("login", (username, password)=>{
  cy.visit("http://uatthaili.digihub.com.np/")
  cy.get('#user_name').type(username)
  cy.get('#user_password').type(password)
  cy.contains('LOGIN').click()

})

//Customer command for MPIN
const mpin= (mpin)=>{
    cy.get(`input[type=password]`).eq(0).type(mpin)
    cy.get(`button[id="btnConfirmmodal"]`).dblclick().wait(1000)
}

Cypress.Commands.addAll({mpin})


Cypress.Commands.add("DateSelect", (i,id, year, month, date) => {
  //date
  cy.get(id).click().wait(500)
    .get('.the-datepicker__year > .the-datepicker__select').eq(i).select(year)
    .get('.the-datepicker__month > .the-datepicker__select').eq(i).select(month-1)  //when user select month 4 =0,1,2,3,4,5-1=4
    .get(".the-datepicker__calendar-body").eq(i).contains(date).click()
  //date
  // cy.get('[data-date="2013-01-01"] > .the-datepicker__button > ')
  
});
//for date picker 
/** 
 * id = DOM element of date picker input
 * year, month and date passes each values
 * USE cy.DateSelectNepali(0,'.DOB',2022,01,09) when date picker is required
*/
Cypress.Commands.add("DateSelectNepali", (id, year, month, date) => {
  //date
  cy.get(id).click();
  cy.get("#ndp-year-select").select(year);
  cy.get("#ndp-month-select").select(month-1);
  cy.get("#ndp-table-div tbody tr td a").eq(date-1).click();
  //date
});

//for date picker 
/** 
 * i = index of date picker, set 0 if there is only one date picker in DOM
 * id = DOM element of date picker input
 * year, month and date passes each values
 * USE cy.DateSelect(0,'.DOB',2022,01,09) when date picker is required
*/
Cypress.Commands.add("DateSelect", (i, id, date) => {
  //date
  cy.get(id).click().wait(500)
    .get('.the-datepicker__year > .the-datepicker__select').eq(i).select(date.split("-")[0])
    .get('.the-datepicker__month > .the-datepicker__select').eq(i).select(date.split("-")[1]-1)
    .get(".the-datepicker__calendar-body").eq(i).contains(date.split("-")[2]).click()
});

//MerchantAdd
Cypress.Commands.add("ADDateSelect", (id, date) => {
  //date
  cy.get(id).click();
  cy.get(".ui-datepicker-year").select(date.split("-")[0]);
  cy.get(".ui-datepicker-month").select(date.split("-")[1]-1);
  cy.get(".ui-datepicker-calendar tbody tr td a").contains(date.split("-")[2]).click();
  //date
});
//for date picker 
/** 
 * id = DOM element of date picker input
 * year, month and date passes each values
 * USE cy.DateSelectNepali(0,'.DOB',2022,01,09) when date picker is required
*/
Cypress.Commands.add("DateSelectNepali", (id, date) => {
  //date
  cy.get(id).click();
  cy.get("#ndp-year-select").select(date.split("-")[0]);
  cy.get("#ndp-month-select").select( date.split("-")[1]-1);
  cy.get("#ndp-table-div tbody tr td a").eq( date.split("-")[2]-1).click();
  //date
});



Cypress.Commands.addAll({mpin})


Cypress.Commands.add("DateSelect", (i,id, year, month, date) => {
  //date
  cy.get(id).click().wait(500)
    .get('.the-datepicker__year > .the-datepicker__select').eq(i).select(year)
    .get('.the-datepicker__month > .the-datepicker__select').eq(i).select(month-1)  //when user select month 4 =0,1,2,3,4,5-1=4
    .get(".the-datepicker__calendar-body").eq(i).contains(date).click()
  //date
  // cy.get('[data-date="2013-01-01"] > .the-datepicker__button > ')
  
});
//for date picker 
/** 
 * id = DOM element of date picker input
 * year, month and date passes each values
 * USE cy.DateSelectNepali(0,'.DOB',2022,01,09) when date picker is required
*/
// Cypress.Commands.add("DateSelectNepali", (id, year, month, date) => {
//   //date
//   cy.get(id).click();
//   cy.get("#ndp-year-select").select(year);
//   cy.get("#ndp-month-select").select(month-1);
//   cy.get("#ndp-table-div tbody tr td a").eq(date-1).click();
//   //date
// });



// require('cypress-xpath');

// require('cypress-cucumber-preprocessor').default
// Cypress.Commands.add('login', (text, password) => {
// cy.visit("")

// cy.get("#user_name").type(text)
// cy.xpath("//input[@name='user_password']").type(password)
// cy.get('#loginform > .btn').click()

// })
