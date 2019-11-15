describe('demo', function () {
  const user = cy


  it('Walkthought_player_Blue_CO', function () {
    user.fixture('testData').then((testData) => {
      user.viewport('macbook-15')
      user.visit(testData.playerUrl)

      user.clickButton('button[name="play"]')
        .chooseWarGame('This is Cypress Testing_18')
        .chooseRoleGame(testData.role.white.name, testData.role.white.gc)
        .clickEnterButton()
        .wait(1000)

      user.dragRoom('Media', 'bottom')
        .dragRoom('Red HQ', 'right')
        .dragRoom('Blue HQ', 'topRight')
        .verifyDOMAttribute('.tab-content-blue-chat', 'display: block; left: 0px; top: 45px; width: 804px; height: 624px; position: absolute;')
        .verifyDOMAttribute('.tab-content-blue-hq', 'display: block; left: 812px; top: 45px; width: 268px; height: 855px; position: absolute;')
        .verifyDOMAttribute('.tab-content-media', 'display: block; left: 0px; top: 722px; width: 804px; height: 178px; position: absolute;')
    })
  })
})
