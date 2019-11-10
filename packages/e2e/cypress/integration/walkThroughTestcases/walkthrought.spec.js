describe('Run_automation_test_Serge', function () {
  const user = cy
  const roomName = "This is Cypress Testing_" + Math.floor(Math.random() * 9999)
  // after(()=>{
  //   user.visit('http://192.168.1.14:8080/serge/admin')
  //   user.inputPassword(pwd).get('.link.link--noIcon').click()
  //   user.clearAllGame()
  // })
  it.skip('Walkthrought_admin', function () {

    cy.fixture('testData').then((testData) => {

      user.viewport(1280, 688)
      user.clearCookies()
      user.visit(testData.adminUrl)

      //Input Password 
      user.inputPassword(testData.password).get('.link.link--noIcon').click()

      //Overview   
      user.createNewGame()
        .inputRoomName(roomName)
        .clickShowAccessCode('on')
        .clickSaveOverview()

      //Forces
      user.get('.tab-forces').click()
        .clickAddNew()
        .inputTitleName('Blue')
        .chooseColor(testData.color.blue)
        .clickAddNewRole()
        .inputRoleName('Media')
        .clickAddNewRoleButton()
        .clickAddNewRole()
        .inputRoleName('Logs')
        .clickAddNewRoleButton()
        .clickSave()

      user.clickAddNew()
        .inputTitleName('Red')
        .chooseColor(testData.color.red)
        .clickAddNewRole()
        .inputRoleName('Media')
        .clickAddNewRoleButton()
        .clickAddNewRole()
        .inputRoleName('Logs')
        .clickAddNewRoleButton()
        .clickSave()

      user.chooseForce('White')
        .clickAddNewRole()
        .inputRoleName('Media')
        .clickAddNewRoleButton()
        .clickSave()

      //Channel   
      user.get('.tab-channels')
        .click()
        .clickAddNew()
        .inputTitleName('Red HQ')
        .chooseForceFromDropDown('Red')
        .chooseRoleFromMultiChoose('CO')
        .chooseTemplateFromMultiChoose('Daily intentions')
        .clickCheckButton()
        .chooseForceFromDropDown('White')
        .chooseRoleFromMultiChoose('Game Control')
        .chooseTemplateFromMultiChoose('State of World')
        .clickCheckButton()
        .clickSave()

      user.clickAddNew()
        .inputTitleName('Blue HQ')
        .chooseForceFromDropDown('Blue')
        .chooseRoleFromMultiChoose('CO')
        .chooseTemplateFromMultiChoose('Daily intentions')
        .clickCheckButton()
        .chooseForceFromDropDown('White')
        .chooseRoleFromMultiChoose('Game Control')
        .chooseTemplateFromMultiChoose('State of World')
        .clickCheckButton()
        .clickSave()

      user.clickAddNew()
        .inputTitleName('Blue Chat')
        .chooseForceFromDropDown('Blue')
        .clickCheckButton()
        .clickSave()

      user.clickAddNew()
        .inputTitleName('Red Chat')
        .chooseForceFromDropDown('Red')
        .clickCheckButton()
        .clickSave()

      user.clickAddNew()
        .inputTitleName('Media')
        .chooseForceFromDropDown('White')
        .chooseRoleFromMultiChoose('Media')
        .clickCheckButton()
        .chooseForceFromDropDown('Red')
        .chooseRoleFromMultiChoose('Media')
        .clickCheckButton()
        .chooseForceFromDropDown('Blue')
        .chooseRoleFromMultiChoose('Media')
        .clickCheckButton()
        .clickSave()
    })
  })

  it('Walkthought_player', function () {
    cy.fixture('testData').then((testData) => {
      user.visit(testData.playerUrl)
      user.clickButton('button[name="play"]')
        .chooseWarGame('This is Cypress Testing_2018')
        // .chooseWarGame(roomName)
        // .chooseRoleGame(testData.role.white.name, testData.role.white.gc)
        .chooseRoleGame(testData.role.blue.name, testData.role.blue.co)
        .clickEnterButton()
      // .clickInitiateButton()
      user.chooseRoom('Blue HQ').openNewMessage(testData.tunrNumber,
          testData.overallInstruction,
          testData.unit,
          testData.tasking,
          testData.policy,
          testData.action,
          testData.comments)
        .addMoreRow("1",
          testData.unit,
          testData.tasking,
          testData.policy,
          testData.action,
          testData.comments)
        .clickSendMessageButton()
    })
  })
})
