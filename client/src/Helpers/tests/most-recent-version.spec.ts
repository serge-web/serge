import mostRecentOnly from '../most-recent-only'
import { GameMessagesMockRFI, AdminMessagesMock, InfoMessagesMock } from '@serge/mocks'
import { MessageCustom, MessageChannel } from '@serge/custom-types'

it('find new message across all channels', () => {
  const payload: Array<MessageChannel> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageChannel>

  // check full list present at start
  expect(payload.length).toEqual(18)

  // reverse the order, since that's how the
  const messages = payload.reverse()

  const firstBefore = messages[3] as unknown as MessageCustom
  expect(firstBefore._id).toEqual('id_4c')

  // use uniqby with our uniqueness operator
  const mostRecent: MessageChannel[] = mostRecentOnly(messages)

  // check we get reduced set of messages
  expect(mostRecent.length).toEqual(11)

  const firstMessage = mostRecent[2] as unknown as MessageCustom
  expect(firstMessage._id).toEqual('id_4')
  expect(firstMessage._rev).toEqual('1')

  const lastMessage = mostRecent[8] as unknown as MessageCustom
  expect(lastMessage._id).toEqual('2020-03-25T15:08:47.525Z')
  expect(lastMessage._rev).toEqual('1')
})
