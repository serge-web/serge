Cypress.Commands.add("chooseWarGame", (warName) => {
  cy.wait(500)
  cy.get('.css-1hwfws3.react-select__value-container')
    .click()
  cy.wait(500)
  cy.get('.react-select__option').contains(warName)
    .click()
})
Cypress.Commands.add("chooseRoleGame", (forceName, roleName) => {
  cy.wait(500)
  const locator = 'ul[data-qa-force-name="' + forceName + '"]  button.btn.btn-sm.btn-primary'
  cy.get(locator).contains(roleName)
    .click()
})
Cypress.Commands.add("clickEnterButton", () => {
  cy.wait(500)
  cy.get('button[name="enter-game"]')
    .click()
})
Cypress.Commands.add("clickInitiateButton", () => {
  cy.wait(500)
  cy.get('button[name="initiate-game"]')
    .click()
})
