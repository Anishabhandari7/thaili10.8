describe('services', ()=>{
    beforeEach(()=>{
        cy.login('9847659504', 'Test@thaili1')
    })
    it('internet',()=>{
        cy.contains("Internet").click()
        cy.wait(2000) 
        cy.get('img[class="icon"]').click()
        cy.wait(2000)
       cy.get('div[class="box__white"]').click()
    })
    })