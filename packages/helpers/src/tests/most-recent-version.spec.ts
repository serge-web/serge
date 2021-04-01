import mostRecentOnly from '../most-recent-only'

import { GameMessagesMockRFI } from '@serge/mocks'
import { MessageCustom } from '@serge/custom-types'

function reverseArr(input: MessageCustom[]) {
  var ret = new Array;
  for(var i = input.length-1; i >= 0; i--) {
      ret.push(input[i]);
  }
  return ret;
}

it('find new message across all channels', () => {
  // check full list present at start
  expect(GameMessagesMockRFI.length).toEqual(13)

  // reverse the order, since that's how the 
  const messages = reverseArr(GameMessagesMockRFI)

  // check we get reduced set of messages
  const mostRecent: MessageCustom[] = mostRecentOnly(messages)
  expect(mostRecent.length).toEqual(7)


  const firstMessage = mostRecent[0]
  expect(firstMessage._id).toEqual("id_4c")
  expect(firstMessage._rev).toEqual("4")

  const lastMessage = mostRecent[6]
  expect(lastMessage._id).toEqual("2020-03-25T15:08:47.520Z")
  expect(lastMessage._rev).toEqual("1")

})




