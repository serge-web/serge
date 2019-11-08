describe('test_name', function() {

    it('what_it_does', function() {
      let roomName = 'This is Cypress Testing' + Math.floor(Math.random() * 6) + 9999 


       cy.viewport(1280, 688)
       cy.clearCookies()
       cy.visit('http://192.168.1.16:8080/serge/admin')
    
       cy.get('body > #root > #umpire > #form-login-admin > .material-input').click()
    
       cy.get('body > #root > #umpire > #form-login-admin > .material-input').type('Nelson')
    
       cy.get('body > #root > #umpire > #form-login-admin > .link').click()
    
       cy.get('#root > #umpire > .flex-content > .btn-group > .link:nth-child(1)').click()
    
       cy.get('#root > .view-wrapper > #game-setup-head > .flex-content > #title-editable').click()

    
       cy.get('#root > .view-wrapper > #game-setup-head > .flex-content > #title-editable').type(roomName)
    
       cy.get('.view-wrapper > #game-setup-head > .flex-content > .svg-inline--fa > path').click()
    
       cy.get('.flex-content-margin > #game-setup-tab-settings > .flex-content-wrapper > .flex-content--rowend > .link').click()
    
       cy.get('.flex-content > .flex-content > .flex-content > .md-checkbox > label').click()
    
    
       cy.get('.flex-content-margin > #game-setup-tab-settings > .flex-content-wrapper > .flex-content--rowend > .link').click()
    
       cy.get('body > #root > .view-wrapper > .tab-nav > .tab-forces').click()
    
       cy.get('.view-wrapper > .flex-content-margin > #game-setup-tab-forces > .flex-content > .link').click()
    
       cy.get('#game-setup-tab-forces > .flex-content--fill > .flex-content > .force-input-wrap > #editable-title').click()

    
       cy.get('#game-setup-tab-forces > .flex-content--fill > .flex-content > .force-input-wrap > #editable-title').clear().type('Blue')
    
       cy.get('.view-wrapper > .flex-content-margin > #game-setup-tab-forces > .flex-content--fill > .link').click()
    
       cy.get('.modal > .display-text-wrapper > .flex-content-wrapper > .flex-content:nth-child(1) > .material-input').clear().type('Media')
    
       cy.get('.modal-bg > .modal > .display-text-wrapper > .buttons > .btn-action--primary').click()
    
       cy.get('.view-wrapper > .flex-content-margin > #game-setup-tab-forces > .flex-content--fill > .link').click()
    
       cy.get('.modal > .display-text-wrapper > .flex-content-wrapper > .flex-content:nth-child(1) > .material-input').clear().type('Logs')
    
       cy.get('.modal-bg > .modal > .display-text-wrapper > .buttons > .btn-action--primary').click()
    
       cy.get('#game-setup-tab-forces > .flex-content--fill > .flex-content > .force-button-wrap > .link--noIcon').click()
    
       cy.get('.view-wrapper > .flex-content-margin > #game-setup-tab-forces > .flex-content > .link').click()
    
       cy.get('#game-setup-tab-forces > .flex-content--fill > .flex-content > .force-input-wrap > #editable-title').click()
    
       cy.get('#game-setup-tab-forces > .flex-content--fill > .flex-content > .force-input-wrap > #editable-title').clear().type('Red')
    
       cy.get('.flex-content--fill > .flex-content > .force-input-wrap > .force-color-icon > .force-color').click()
    
       cy.get('.sketch-picker > .flexbox-fix > div:nth-child(1) > span > div').click()
    
       cy.get('#root > .modal-bg > .modal > .buttons > .btn').click()
    
       cy.get('.view-wrapper > .flex-content-margin > #game-setup-tab-forces > .flex-content--fill > .link').click()
    
       cy.get('.modal > .display-text-wrapper > .flex-content-wrapper > .flex-content:nth-child(1) > .material-input').clear().type('Media')
    
       cy.get('.modal-bg > .modal > .display-text-wrapper > .buttons > .btn-action--primary').click()
    
       cy.get('.view-wrapper > .flex-content-margin > #game-setup-tab-forces > .flex-content--fill > .link').click()
    
       cy.get('.modal > .display-text-wrapper > .flex-content-wrapper > .flex-content:nth-child(1) > .material-input').clear().type('Logs')
    
       cy.get('.modal-bg > .modal > .display-text-wrapper > .buttons > .btn-action--primary').click()
    
       cy.get('#game-setup-tab-forces > .flex-content--fill > .flex-content > .force-button-wrap > .link--noIcon').click()
    
       cy.get('#game-setup-tab-forces > .flex-content > .list > .list-list > .list-title:nth-child(1)').click()
    
       cy.get('.view-wrapper > .flex-content-margin > #game-setup-tab-forces > .flex-content--fill > .link').click()
    
       cy.get('.modal > .display-text-wrapper > .flex-content-wrapper > .flex-content:nth-child(1) > .material-input').clear().type('Media')
    
       cy.get('.modal-bg > .modal > .display-text-wrapper > .buttons > .btn-action--primary').click()
    
       cy.get('#game-setup-tab-forces > .flex-content--fill > .flex-content > .force-button-wrap > .link--noIcon').click()
    
       cy.get('body > #root > .view-wrapper > .tab-nav > .tab-channels').click()
    
       cy.get('.view-wrapper > .flex-content-margin > #game-setup-tab-channels > .flex-content > .link').click()
    
       cy.get('.flex-content-margin > #game-setup-tab-channels > .flex-content--fill > .flex-content--row > #editable-title').click()
    
    
       cy.get('.flex-content-margin > #game-setup-tab-channels > .flex-content--fill > .flex-content--row > #editable-title').clear().type('Red HQ')
    
       cy.get('#custom-select-force-selection > div > div > div.css-1hwfws3.react-select__value-container.react-select__value-container--has-value').click()
    
       cy.get('#custom-select-force-selection > .css-1pcexqc-container > .css-kj6f9i-menu > .css-11unzgr > #react-select-5-option-2').click()
    
       cy.get('#custom-select-role-selection > div > div.css-bg1rzq-control.react-select__control').click()
    
       cy.get('#custom-select-role-selection > .css-1pcexqc-container > .css-kj6f9i-menu > .css-11unzgr > #react-select-6-option-0').click()
    
       cy.get('td > #custom-select-role-selection > .css-1pcexqc-container > .css-1szy77t-control > .css-1hwfws3').click()
    
       cy.get('#custom-select-role-selection > .css-1pcexqc-container > .css-kj6f9i-menu > .css-11unzgr > #react-select-6-option-1').click()
    
       cy.get('td > #custom-select-role-selection > .css-1pcexqc-container > .css-1szy77t-control > .css-1hwfws3').click()
    
       cy.get('#custom-select-role-selection > .css-1pcexqc-container > .css-kj6f9i-menu > .css-11unzgr > #react-select-6-option-2').click()
    
       cy.get('#game-setup-tab-channels > div.flex-content--fill.channelsTab > div.flex-content > table > tbody > tr > td:nth-child(4) > svg.svg-inline--fa.fa-check.fa-w-16').click()
    
       cy.get('#game-setup-tab-channels > .flex-content--fill > .flex-content--row > .button-wrap-tab > .link').click()
    
       cy.get('.flex-content-margin > #game-setup-tab-channels > .flex-content > .list > .list-input').click()
    
       cy.get('.flex-content-margin > #game-setup-tab-channels > .flex-content > .list > .list-input').clear().type('Blue ')
    
       cy.get('.view-wrapper > .flex-content-margin > #game-setup-tab-channels > .flex-content > .link').click()
    
       cy.get('.flex-content-margin > #game-setup-tab-channels > .flex-content--fill > .flex-content--row > #editable-title').click()
    
       cy.get('.flex-content-margin > #game-setup-tab-channels > .flex-content--fill > .flex-content--row > #editable-title').clear().type('Blue HQ')
    
       cy.get('td > #custom-select-force-selection > .css-1pcexqc-container > .css-1szy77t-control > .css-1hwfws3').click()
    
       cy.get('#custom-select-force-selection > .css-1pcexqc-container > .css-kj6f9i-menu > .css-11unzgr > #react-select-11-option-1').click()
    
       cy.get('td > #custom-select-role-selection > .css-1pcexqc-container > .css-1szy77t-control > .css-1hwfws3').click()
    
       cy.get('#custom-select-role-selection > .css-1pcexqc-container > .css-kj6f9i-menu > .css-11unzgr > #react-select-12-option-0').click()
    
       cy.get('td > #custom-select-role-selection > .css-1pcexqc-container > .css-1szy77t-control > .css-1hwfws3').click()
    
       cy.get('#custom-select-role-selection > .css-1pcexqc-container > .css-kj6f9i-menu > .css-11unzgr > #react-select-12-option-1').click()
    
       cy.get('td > #custom-select-role-selection > .css-1pcexqc-container > .css-1szy77t-control > .css-1hwfws3').click()
    
       cy.get('#custom-select-role-selection > .css-1pcexqc-container > .css-kj6f9i-menu > .css-11unzgr > #react-select-12-option-2').click()
    
       cy.get('table > tbody > tr > td > .fa-check').click()
    
       cy.get('#game-setup-tab-channels > .flex-content--fill > .flex-content--row > .button-wrap-tab > .link').click()
    
    })
   
   })
   