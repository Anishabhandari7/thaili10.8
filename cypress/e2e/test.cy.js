describe("hh",()=>{
  let rowsLength //define a variable 
  before(() => {
    cy.task("readXlsx", {
      file: "cypress/fixtures/merchant.xlsx", //excel file name
      sheet: "Sheet1", //sheetname
    }).then((rows) => {
      rowsLength = rows.length;
      cy.writeFile("cypress/fixtures/merchant.json", { rows });
    });
  });//; end the code
  it("test",()=>{
    cy.fixture('merchant').then(data=>{
      cy.log(data.rows[0].agentName)
    })
  })
})