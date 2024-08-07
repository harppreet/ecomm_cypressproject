import demo from "../support/PageObject/demo"
import aboutpage from "../support/PageObject/aboutpage";

describe('pythonanywhere', () => {
  const login = new demo();
  const page = new aboutpage();

  it('invalidlogin_Function', () => {
    cy.visit('https://guneet.pythonanywhere.com/')
    cy.get('#username').click()
    cy.get('#username').type("preetkk")
    cy.get('#password').click()
    cy.get('#password').type("Arjoi@25")
    cy.get("input[type='submit']").click()
    cy.get("p[class='error']").contains("Invalid username or password.")
  })
  it('login_Function', () => { 
  login.openURL()
   // cy.visit('https://guneet.pythonanywhere.com/')
  login.loginusername()
  cy.get('#username').type("preetk")
  login.loginpassword()
  cy.get('#password').type("Arjoi@25")
  login.loginsubmit()
  cy.title().should('eq',"GitHub Open Source Projects")
})
it('aboutpageappears_function',() =>{
  login.openURL()
  
  login.loginusername()
  cy.get('#username').type("preetk")
  login.loginpassword()
  cy.get('#password').type("Arjoi@25")
  login.loginsubmit()
  cy.title().should('eq',"GitHub Open Source Projects")
  page.aboutpageopen()
   //cy.contains('About').click()
   //cy.title().should('eq',"About Us")
})
it('clicklinkedin_function',() =>{
  cy.visit('https://guneet.pythonanywhere.com/')
  cy.get('#username').type("preetk")
    cy.get('#password').click()
    cy.get('#password').type("Arjoi@25")
    cy.get("input[type='submit']").click()
   cy.contains('About').click()
   cy.title().should('eq',"About Us")
   cy.get("a[href='https://www.linkedin.com/in/guneetsinghbali/']").click()
   
})
it('clickmerb-corelink_function',() =>{
  cy.visit('https://guneet.pythonanywhere.com/')
  cy.get('#username').type("preetk")
    cy.get('#password').click()
    cy.get('#password').type("Arjoi@25")
    cy.get("input[type='submit']").click()
   cy.contains('merb-core').then($link => {
  const url = $link.prop('href'); // Get the URL of the link
  
  // Use cy.origin to handle the new origin
  cy.origin(url, { args: { url } }, ({ url }) => {
    cy.visit(url);
    cy.wait(100);
    
    // Ensure the element exists before clicking
    cy.get("button[id='branch-picker-repos-header-ref-selector']")
      .should('be.visible')
      .click();
    cy.get("#branch-button").should('contain', "Branches");
  //  cy.get("#tag-button").should('contain',"Tags");
    cy.get("div[class='Box-sc-g0xbh4-0 elDkEp']").contains("experiments").click();
    
  cy.get('[id=":R55ab:"]', { timeout: 10000 }).should('be.visible').click();
  
   // Check for the "Download ZIP" option in the popup
  cy.get('body').then(($body) => {
    if ($body.find('.popup-selector:contains("Download ZIP")').length) {
      cy.contains('Download ZIP').click();
    } else {
      cy.log('Popup not found or "Download ZIP" not present');
    }
  });
});
});
});
it('clickmerb-corelink_function', () => {
  cy.visit('https://guneet.pythonanywhere.com/');

  // Log in
  cy.get('#username').type("preetk");
  cy.get('#password').click().type("Arjoi@25");
  cy.get("input[type='submit']").click();

  // Find and click the 'merb-core' link
  cy.contains('merb-core').then($link => {
    const url = $link.prop('href'); // Get the URL of the link

    // Use cy.origin to handle the new origin
    cy.origin(url, { args: { url } }, ({ url }) => {
      cy.visit(url);
      cy.wait(100);

      // Ensure the element exists before clicking
      cy.get("button[id='branch-picker-repos-header-ref-selector']")
        .should('be.visible')
        .click();

      // Assertion example - Replace this with actual meaningful assertion as per your requirement
      cy.get("#branch-button").should('contain', "Branches");

      // Ensure the experiments section is present and click it
      cy.get("div[class='Box-sc-g0xbh4-0 elDkEp']").contains("experiments").click();

      // Click on the element with the escaped ID
      cy.get('[id="\\:R55ab\\:"]', { timeout: 10000 }).should('be.visible').click();

      // Trigger mouseover event on the element to keep the popup open
      cy.get('[id="\\:R55ab\\:"]').trigger('mouseover');

      // Now, interact with the popup or the element inside the popup
      cy.get('body').then($body => {
        if ($body.find('.popup-selector:contains("Download ZIP")').length) {
          cy.contains('Download ZIP').click();
        } else {
          cy.log('Popup not found or "Download ZIP" not present');
        }
      });

    });
  });
});

it('clickmerb-corelink_function', () => {
  cy.visit('https://guneet.pythonanywhere.com/');

  // Log in
  cy.get('#username').type("preetk");
  cy.get('#password').click().type("Arjoi@25");
  cy.get("input[type='submit']").click();

  // Find and click the 'merb-core' link
  cy.contains('merb-core').then($link => {
    const url = $link.prop('href'); // Get the URL of the link

    // Use cy.origin to handle the new origin
    cy.origin(url, { args: { url } }, ({ url }) => {
      cy.visit(url);
      cy.wait(2000);
      cy.get('body').then($body => {
        if ($body.find('div.Box-sc-g0xbh4-0.dXTsqj').length > 0) {
          // Element is in the DOM, now wait for it to become visible
          cy.get('.Box-sc-g0xbh4-0.dXTsqj', { timeout: 10000 }).click();
          cy.xpath('//span/input[@type="text"]').click();
        };
      });
         /* // Now interact with the input field
          cy.get("input[aria-label='Go to file']")
            .should('be.visible')
            .type('Hello, World');
        } else {
          // Element is not in the DOM, log an error message
          cy.log('Element div.Box-sc-g0xbh4-0.dXTsqj not found in DOM');
        }

      });
      */
     
      

    });
  });
});

});

     






