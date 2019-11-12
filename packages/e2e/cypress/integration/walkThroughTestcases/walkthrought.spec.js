describe('Run_automation_test_Serge', function () {
  const user = cy
  const roomName = "This is Cypress Testing_" + Math.floor(Math.random() * 9999)
  // after(()=>{
  //   user.visit('http://192.168.1.14:8080/serge/admin')
  //   user.inputPassword(pwd).get('.link.link--noIcon').click()
  //   user.clearAllGame()
  // })
  it('Walkthrought_admin', function () {

    user.fixture('testData').then((testData) => {

      user.viewport('macbook-15')
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

  it('Walkthought_player_Blue_CO', function () {
    user.fixture('testData').then((testData) => {
      const msgData = testData.blueMessage
      user.visit(testData.playerUrl)

      user.clickButton('button[name="play"]')
        .chooseWarGame(roomName)
        .chooseRoleGame(testData.role.white.name, testData.role.white.gc)
        .clickEnterButton()
        .clickInitiateButton()
        .verifyGameRoleIsDisplayed(testData.role.white.gc)
        .verifyGameForceIsDisplayed(testData.role.white.name)

      user.changeForce(testData.playerUrl, roomName)
        .chooseRoleGame(testData.role.blue.name, testData.role.blue.co)
        .clickEnterButton()
        .verifyGameRoleIsDisplayed(testData.role.blue.co)
        .verifyGameForceIsDisplayed(testData.role.blue.name)

      user.chooseRoom('Blue HQ').openNewMessage(msgData.message1.turnNumber,
          msgData.message1.overallInstruction,
          msgData.message1.unit,
          msgData.message1.tasking,
          msgData.message1.policy,
          msgData.message1.action,
          msgData.message1.comments)
        .addMoreRow("1",
          msgData.message2.unit,
          msgData.message2.tasking,
          msgData.message2.policy,
          msgData.message2.action,
          msgData.message2.comments)
        .clickSendMessageButtonForRoom('blue-hq')

      user.changeForce(testData.playerUrl, roomName)
        .chooseRoleGame(testData.role.white.name, testData.role.white.gc)
        .clickEnterButton()
        .chooseRoom('Blue HQ')
        .openNewestMessage()
        .verifyMessageIsDisplayed(msgData.message1.turnNumber)
        .verifyMessageIsDisplayed(msgData.message1.overallInstruction)
        .verifyMessageIsDisplayed(msgData.message1.unit)
        .verifyMessageIsDisplayed(msgData.message1.tasking)
        .verifyMessageIsDisplayed(msgData.message1.policy)
        .verifyMessageIsDisplayed(msgData.message1.action)
        .verifyMessageIsDisplayed(msgData.message1.comments)
        .verifyMessageIsDisplayed(msgData.message2.unit)
        .verifyMessageIsDisplayed(msgData.message2.tasking)
        .verifyMessageIsDisplayed(msgData.message2.policy)
        .verifyMessageIsDisplayed(msgData.message2.action)
        .verifyMessageIsDisplayed(msgData.message2.comments)

      user.changeForce(testData.playerUrl, roomName)
        .chooseRoleGame(testData.role.blue.name, testData.role.blue.media)
        .clickEnterButton()
        .verifyGameRoleIsDisplayed(testData.role.blue.media)
        .verifyGameForceIsDisplayed(testData.role.blue.name)
        .chooseRoom('Blue Chat')
        .clickNewMessageButtonForRoom('blue-chat')
        .InputMessageForRoom('blue-chat', 'This is Cypress Testing')
        .clickSendMessageButtonForRoom('blue-chat')

      user.changeForce(testData.playerUrl, roomName)
        .chooseRoleGame(testData.role.white.name, testData.role.white.gc)
        .clickEnterButton()
        .chooseRoom('Blue Chat')
        .openMessageWithTitle('This is Cypress Testing')
        .verifyMessageIsDisplayed('This is Cypress Testing')

    })
  })
})
