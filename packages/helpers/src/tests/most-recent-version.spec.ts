import mostRecentOnly from '../most-recent-only'

import { GameMessagesMockRFI, AdminMessagesMock, InfoMessagesMock } from '@serge/mocks'
import { MessageCustom, MessageChannel } from '@serge/custom-types'

function reverseArr(input: MessageCustom[]) {
  var ret = new Array;
  for(var i = input.length-1; i >= 0; i--) {
      ret.push(input[i]);
  }
  return ret;
}

it('find new message across all channels', () => {

  const payload: Array<MessageChannel> = AdminMessagesMock.concat(GameMessagesMockRFI).concat(InfoMessagesMock) as Array<MessageChannel>

  // check full list present at start
  expect(payload.length).toEqual(18)

  // reverse the order, since that's how the 
  const messages = reverseArr(GameMessagesMockRFI)

  // check we get reduced set of messages
  const mostRecent: MessageChannel[] = mostRecentOnly(messages)
  expect(mostRecent.length).toEqual(7)

  const firstMessage = mostRecent[0] as unknown as MessageCustom
  expect(firstMessage._id).toEqual("id_4c")
  expect(firstMessage._rev).toEqual("4")

  const lastMessage = mostRecent[6] as unknown as MessageCustom
  expect(lastMessage._id).toEqual("2020-03-25T15:08:47.520Z")
  expect(lastMessage._rev).toEqual("1")

})




