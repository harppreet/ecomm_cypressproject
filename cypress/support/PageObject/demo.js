class demo{

openURL()
{
    cy.visit('https://guneet.pythonanywhere.com/')
}
loginusername()
{
    cy.get('#username').click()

}
loginpassword()
{
    cy.get('#password').click()
}
loginsubmit()
{
    cy.get("input[type='submit']").click()
}

}
export default demo