class aboutpage{

aboutpageopen()
{
    cy.contains('About').click()
    cy.title().should('eq',"About Us")
}

}
export default aboutpage