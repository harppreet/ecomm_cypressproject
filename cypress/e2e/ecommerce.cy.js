
describe('automationexercise', () => {

  it('pass', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get("a[href='/products']").click()
   // cy.get("p[class='error']").contains("Invalid username or password.")
  })
});