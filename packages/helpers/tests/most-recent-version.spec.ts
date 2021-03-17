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

it('find new message in specific channel (blue)', () => {
  // check full list present at start
  expect(GameMessagesMockRFI.length).toEqual(13)

  // check we get reduced set of messages
  const mostRecent: MessageCustom[] = mostRecentOnly(GameMessagesMockRFI, "BLUE RFI")
  expect(mostRecent.length).toEqual(3)

  const lastMessage = mostRecent[2]
  expect(lastMessage._rev).toEqual("3")
})

it('find new message in specific channel (red)', () => {
  // check full list present at start
  expect(GameMessagesMockRFI.length).toEqual(13)

  // check we get reduced set of messages
  const mostRecent: MessageCustom[] = mostRecentOnly(GameMessagesMockRFI, "Red RFI")
  expect(mostRecent.length).toEqual(1)

  const lastMessage = mostRecent[0]
  expect(lastMessage._rev).toEqual("4")
})

it('find new message in specific channel (not present)', () => {
  // check full list present at start
  expect(GameMessagesMockRFI.length).toEqual(13)

  // check we get reduced set of messages
  const mostRecent: MessageCustom[] = mostRecentOnly(GameMessagesMockRFI, "Dud channel")
  expect(mostRecent.length).toEqual(0)
})

it('find new chat message in all channels', () => {
  // check full list present at start
  expect(GameMessagesMockRFI.length).toEqual(13)

  // check we get reduced set of messages
  const mostRecent: MessageCustom[] = mostRecentOnly(GameMessagesMockRFI, undefined, "Chat")
  expect(mostRecent.length).toEqual(3)
})

it('find new RFI message in all channels', () => {
  // check full list present at start
  expect(GameMessagesMockRFI.length).toEqual(13)

  // check we get reduced set of messages
  const mostRecent: MessageCustom[] = mostRecentOnly(GameMessagesMockRFI, undefined, "RFI")
  expect(mostRecent.length).toEqual(4)
})




