Cypress.Commands.add("inputTitleName", (titleName) => {
  cy.wait(500)
  cy.get('input#editable-title')
    .click()
    .clear()
    .type(titleName)
})

Cypress.Commands.add("inputPassword", (pwd) => {
  cy.wait(500)
  cy.get('input.material-input')
    .click()
    .clear()
    .type(pwd)
})

Cypress.Commands.add("clickButton", (locator) => {
  cy.wait(500)
  cy.get(locator)
    .click()
})

Cypress.Commands.add("createNewGame", () => {
  cy.wait(500)
  cy.get('span[href="/serge/gameSetup"]')
    .click()
})

Cypress.Commands.add("clearAllGame", () => {
  cy.wait(500)
  cy.get('.link.link--noIcon.link--secondary')
    .click()
})

Cypress.Commands.add("inputRoomName", (roomName) => {
  cy.wait(500)
  cy.get('input#title-editable')
    .click()
    .clear()
    .type(roomName)
  cy.wait(500)
  cy.get('svg[data-icon="save"] > path[fill="currentColor"]').click()
})

Cypress.Commands.add("clickSaveOverview", () => {
  cy.wait(500)
  cy.get('span.link.link--noIcon[data-qa-type="submit"]')
    .click()
})

let numberRun = 0
export function checkAccessCodeCheckbox() {
  numberRun++
  cy.get('input#show-access-codes')
  .check({
    force: true
  })
  cy.wait(500);
  cy.get('input#show-access-codes').invoke('prop', 'checked').then($isChecked => {
    ($isChecked === true || numberRun > 5) ? cy.log('done') : checkAccessCodeCheckbox();
  })
  cy.get('input#show-access-codes').should('be.checked');
}

Cypress.Commands.add("clickShowAccessCode", () => {
  cy.wait(500)
  checkAccessCodeCheckbox()
})

Cypress.Commands.add("inputRoleName", (roleName) => {
  cy.wait(500)
  cy.get('#root > div.modal-bg > div > div > div.flex-content-wrapper.flex-content-wrapper--column > div:nth-child(1) > input')
    .click()
    .clear()
    .type(roleName)
})

Cypress.Commands.add("clickAddNewRoleButton", () => {
  cy.wait(500)
  cy.get('button.btn.btn-action.btn-action--primary')
    .click()
})

Cypress.Commands.add("clickAddNew", () => {
  cy.wait(500)
  cy.get('span.link.link--noIcon[data-qa-type="add"]')
    .click()
})

Cypress.Commands.add("clickAddNewRole", () => {
  cy.wait(500)
  cy.get('p.heading--sml + span.link.link--secondary.link--noIcon')
    .click()
})

Cypress.Commands.add("clickSave", () => {
  cy.wait(500)
  cy.get('span.link.link--noIcon[data-qa-type="save"]')
    .click()
    .wait(1000)
})

Cypress.Commands.add("chooseColor", (color) => {
  cy.wait(500)
  cy.get('div.force-color-icon > div')
    .click()
  cy.wait(500)
  cy.get('div[title="' + color + '"]')
    .click()
    .get('button[name="cancel"]')
    .click()
})

Cypress.Commands.add("chooseForce", (force) => {
  cy.wait(500)
  cy.get('div.list-list.list-forces > span').contains(force)
    .click()
})

Cypress.Commands.add("chooseForceFromDropDown", (value) => {
  cy.wait(500)
  cy.get('div.css-1hwfws3.react-select__value-container.react-select__value-container--has-value')
    .click()
  cy.wait(500)
  cy.get('.react-select__option').contains(value)
    .click()
})

Cypress.Commands.add("chooseRoleFromMultiChoose", (value) => {
  cy.wait(500)
  cy.get('#custom-select-role-selection > div')
    .click()
  cy.wait(500)
  cy.get('.react-select__option').contains(value)
    .click()
})

Cypress.Commands.add("chooseTemplateFromMultiChoose", (value) => {
  cy.wait(500)
  cy.get('#custom-select-template-selection > div')
    .click()
  cy.wait(500)
  cy.get('.react-select__option').contains(value)
    .click()
})

Cypress.Commands.add("clickCheckButton", () => {
  cy.wait(500)
  cy.get('svg[data-icon="check"]')
    .click()
})

Cypress.Commands.add("clickDeleteButton", () => {
  cy.wait(500)
  cy.get('svg[data-icon="trash"]')
    .click()
})
