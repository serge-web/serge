import mostRecentOnly from '../most-recent-only'

import { GameMessagesMockRFI } from '@serge/mocks'
import { MessageCustom } from '@serge/custom-types'

it('find new message across all channels', () => {
  // check full list present at start
  expect(GameMessagesMockRFI.length).toEqual(13)

  // check we get reduced set of messages
  const mostRecent: MessageCustom[] = mostRecentOnly(GameMessagesMockRFI)
  expect(mostRecent.length).toEqual(7)

  const lastMessage = mostRecent[6]
  expect(lastMessage._rev).toEqual("4")
})




