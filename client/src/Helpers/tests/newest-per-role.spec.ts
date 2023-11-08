import newestPerRole, { logTable } from '../newest-per-role'
import { GameMessagesMockRFI, AdminMessagesMock, InfoMessagesMock, forces } from 'src/mocks'
import { MessageChannel, MessageCustom } from 'src/custom-types'
import { PlayerMessageLog, PlayerLogUI } from 'src/custom-types/player-log'

it('find newest message across all roles', () => {
  const payload: Array<MessageChannel> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageChannel>

  // check full list present at start
  expect(payload.length).toEqual(18)

  // reverse the order, since that's how the data arrives
  const messages = payload.reverse()

  const firstMessage: MessageCustom = messages[3] as MessageCustom
  const secondMessage: MessageCustom = messages[7] as MessageCustom

  // NOTE: this next block provides a table of the above
  // NOTE: messages, which is useful if the unit test breaks
  // const lister: any[] = []
  // messages.forEach((msg: MessageChannel) => {
  //   if (msg.messageType === CUSTOM_MESSAGE) {
  //     const msgC: MessageCustom = msg
  //     lister.push({ name: msgC.details.from.roleId, mType: msgC.details.messageType, timeS: msgC.details.timestamp })
  //   } else {
  //     lister.push({})
  //   }
  // })
  // console.table(lister)

  // use uniqby with our uniqueness operator
  const mostRecent: PlayerMessageLog = newestPerRole(messages as (MessageCustom)[])

  // check we get reduced set of messages
  expect(mostRecent).toBeTruthy()
  expect(Object.values(mostRecent).length).toEqual(3)

  // check the first item
  const firstMatch = Object.values(mostRecent)[0]
  expect(firstMatch.roleId).toEqual(firstMessage.details.from.roleId)
  expect(firstMatch.lastMessageTime).toEqual(firstMessage.details.timestamp)
  expect(firstMatch.lastMessageTitle).toEqual(firstMessage.details.messageType)

  // check the second item
  const secondMatch = Object.values(mostRecent)[1]
  expect(secondMatch.roleId).toEqual(secondMessage.details.from.roleId)
  expect(secondMatch.lastMessageTime).toEqual(secondMessage.details.timestamp)
  expect(secondMatch.lastMessageTitle).toEqual(secondMessage.details.messageType)
})

it('neatly collate player log data', () => {
  const payload: Array<MessageChannel> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageChannel>

  // check full list present at start
  expect(payload.length).toEqual(18)

  // reverse the order, since that's how the data arrives
  const messages = payload.reverse()

  // use uniqby with our uniqueness operator
  const mostRecent: PlayerMessageLog = newestPerRole(messages as (MessageCustom)[])

  const logRes: Array<PlayerLogUI> = logTable(mostRecent, forces)
  expect(logRes).toBeTruthy()
  expect(logRes.length).toEqual(8)
  const withData = logRes.filter((list: PlayerLogUI) => list.time !== undefined)
  expect(withData.length).toEqual(3)
})
