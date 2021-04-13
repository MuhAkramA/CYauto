// type definitions for Cypress object "cy"
///<reference types="Cypress" />

// type definitions for custom commands like "createDefaultTodos"
describe('My First Test', function () {
  it('login', function () {
    cy.visit("https://dev.tanamduit.com//corp//account/login");
    cy.get('#loginname').type("tes678maker")
    cy.get("#password").type("Password123")
    cy.get("#dologin").click()
    cy.get("button.portfolio-new").contains("PILIH PRODUK").click()
    cy.get('.product-name').should('have.length', 32)
    cy.get('.product-name:visible').should('have.length', 32)
    // cy.get("div .product-buy").each(($el) => {
    //   cy.log($el.text()) 
    //   cy.wrap($el).should('contain', 'BELI').eq(0).click()
    //   }
    // )

    cy.get("div .product-buy").eq(1).contains('BELI').click()
    // cy.get('#buy_amount').type("500000")
    cy.get('button.btn-buy-continue').contains("LANJUT").click()
    cy.get(".payment-method-div").click()
    // cy.get("#aggre_div > label > span").click()
    // cy.get("#prospectus-modal").find("button.close").click()
    // cy.get("#continue").click()
    cy.get(".navbar-logo").then(function (logbusiness) {
      cy.log(logbusiness.text())
    })
  })
})