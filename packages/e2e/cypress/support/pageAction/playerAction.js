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

Cypress.Commands.add("chooseRoom", (roomName) => {
  cy.wait(500)
  cy.get('div.flexlayout__tab_button_content').contains(roomName)
    .click()
})

Cypress.Commands.add("openNewMessage", () => {
  cy.wait(500)
  cy.get('div.tab-content-blue-hq .Collapsible__trigger.is-closed').contains('New Message').click()
})

Cypress.Commands.add("inputMessage", (turnNumber, overallIntentions, unit, tasking, policy, action, comment) => {
  cy.wait(500)
  cy.get('input[type="number"]').type(turnNumber)
  cy.get('textarea[name="root[OverallIntentions]"]').type(overallIntentions)
  cy.get('tr[data-schemapath="root.Orders.0"]  input[name="root[Orders][0][Unit]"]').type(unit)
  cy.get('tr[data-schemapath="root.Orders.0"]  textarea[name="root[Orders][0][Tasking]"]').type(tasking)
  cy.get('tr[data-schemapath="root.Orders.0"]  textarea[name="root[Orders][0][SearchPolicy]"]').type(policy)
  cy.get('tr[data-schemapath="root.Orders.0"]  select[name="root[Orders][0][ActionOnContact]"]').select(action)
  cy.get('tr[data-schemapath="root.Orders.0"]  textarea[name="root[Orders][0][AnyOtherComments]"]').type(comment)
})

Cypress.Commands.add("clickSendMessageButtonForRoom", (roomName) => {
  cy.wait(500)
  cy.get('.tab-content-' + roomName + ' > .new-message-creator > .Collapsible > .Collapsible__contentOuter > .Collapsible__contentInner > .form-group > .btn > span').click()
})

Cypress.Commands.add("clickNewMessageButtonForRoom", (roomName) => {
  cy.wait(500)
  cy.get('div.tab-content-' + roomName + ' .Collapsible__trigger.is-closed').contains('New Message').click()
})

Cypress.Commands.add("addMoreRow", (number, unit, tasking, policy, action, comment) => {
  cy.wait(500)
  cy.get('button.btn-secondary.json-editor-btntype-add span').contains('Add row').click()
  cy.wait(500)
  cy.get('tr[data-schemapath="root.Orders.' + number + '"]  input[name="root[Orders][' + number + '][Unit]"]').type(unit)
  cy.get('tr[data-schemapath="root.Orders.' + number + '"]  textarea[name="root[Orders][' + number + '][Tasking]"]').type(tasking)
  cy.get('tr[data-schemapath="root.Orders.' + number + '"]  textarea[name="root[Orders][' + number + '][SearchPolicy]"]').type(policy)
  cy.get('tr[data-schemapath="root.Orders.' + number + '"]  select[name="root[Orders][' + number + '][ActionOnContact]"]').select(action)
  cy.get('tr[data-schemapath="root.Orders.' + number + '"]  textarea[name="root[Orders][' + number + '][AnyOtherComments]"]').type(comment)
})

Cypress.Commands.add("changeForce", (url, gameRoom) => {
  cy.visit(url)
    .clickButton('button[name="play"]')
    .chooseWarGame(gameRoom)
})

Cypress.Commands.add("InputMessageForRoom", (roomName, text) => {
  cy.wait(500)
  cy.get('div.tab-content-' + roomName + ' textarea[name="root[content]"]')
    .type(text)
})

Cypress.Commands.add("openNewestMessage", () => {
  cy.wait(500)
  cy.get('div.message-title-wrap').first()
    .click()
})

Cypress.Commands.add("openMessageWithTitle", (title) => {
  cy.wait(500)
  cy.get('div.message-title-wrap .message-title').contains(title)
    .click()
})

Cypress.Commands.add("verifyMessageIsDisplayed", (expectedMsg) => {
  cy.wait(500)
  cy.get('.Collapsible__trigger.is-open + .Collapsible__contentOuter .message-preview-player.wrap .data').contains(expectedMsg)
  .should('be.visible')  
})

Cypress.Commands.add("verifyGameRoleIsDisplayed", (role) => {
  cy.wait(500)
  cy.get('.role-info').contains(role).should('be.visible')
})

Cypress.Commands.add("verifyGameForceIsDisplayed", (force) => {
  cy.wait(500)
  cy.get('.force-type').contains(force).should('be.visible')
})

Cypress.Commands.add("verifyDOMAttribute", (locator, expectedValue) => {
   cy.wait(500)
   cy.get(locator).parent().then(($elm) => {
      expect($elm.attr("style")).to.equal(expectedValue)      
 })
})

Cypress.Commands.add("dragRoom", (roomName, position) => {
   cy.wait(500)
   cy.get('div.flexlayout__tab_button_content').contains(roomName).trigger('mousedown', { force: true })
          .get('.contain-channel-tabs .flexlayout__layout').trigger('mousemove', position, { force: true })
          .trigger('mouseup', { force: true })
   cy.wait(1000)
 })
