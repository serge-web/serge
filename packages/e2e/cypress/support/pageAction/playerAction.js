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

Cypress.Commands.add("openNewMessage", (turnNumber, overallIntentions, unit, tasking, policy, action, comment) => {
  cy.wait(500)
  cy.get('div.tab-content-blue-hq .Collapsible__trigger.is-closed').contains('New Message').click()
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
}
)
Cypress.Commands.add("setupArrangeChatTab", () => {
  cy.wait(500)
  let json = `{ 
    "global":{ 
       "tabEnableClose":false,
       "tabEnableRenderOnDemand":false,
       "tabSetTabStripHeight":45
    },
    "layout":{ 
       "type":"row",
       "id":"#1",
       "children":[ 
          { 
             "type":"row",
             "id":"#10",
             "weight":12.5,
             "children":[ 
                { 
                   "type":"tabset",
                   "id":"#19",
                   "weight":12.5,
                   "children":[ 
                      { 
                         "type":"tab",
                         "id":"channel-k2sstllz",
                         "name":"Red Chat",
                         "component":"Red Chat",
                         "className":""
                      }
                   ],
                   "active":true
                },
                { 
                   "type":"tabset",
                   "id":"#5",
                   "weight":12.5,
                   "children":[ 
                      { 
                         "type":"tab",
                         "id":"channel-k2sstomv",
                         "name":"Media",
                         "component":"Media",
                         "className":"unread-5"
                      }
                   ]
                },
                { 
                   "type":"tabset",
                   "id":"#9",
                   "weight":50,
                   "children":[ 
                      { 
                         "type":"tab",
                         "id":"channel-k2sstiiz",
                         "name":"Blue Chat",
                         "component":"Blue Chat",
                         "className":""
                      }
                   ]
                }
             ]
          },
          { 
             "type":"tabset",
             "id":"#7",
             "weight":12.5,
             "children":[ 
                { 
                   "type":"tab",
                   "id":"channel-k2sstaaq",
                   "name":"Blue HQ",
                   "component":"Blue HQ",
                   "className":"unread-14plus"
                },
                { 
                   "type":"tab",
                   "id":"channel-k2sst1z7",
                   "name":"Red HQ",
                   "component":"Red HQ",
                   "className":""
                }
             ]
          }
       ]
    },
    "borders":[ 
 
    ]
 }`
      let keyName = 'FlexLayout-model-wargame-k2sssl4p-umpire-Game Control'
      window.localStorage.setItem(keyName, json)
})

