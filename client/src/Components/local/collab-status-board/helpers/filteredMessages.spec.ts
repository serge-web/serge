import { MessageCustom } from 'src/custom-types'
import filteredMessages from './filteredMessages'

import { messageDataCollaborativeEditing, GameMessagesMockRFI } from '@serge/mocks'

describe('Correctly handles showArchived', () => {
  it('correctly filters COA messages according to archived status', () => {
    expect(messageDataCollaborativeEditing.length).toEqual(5)

    const res1: MessageCustom[] = filteredMessages(messageDataCollaborativeEditing, true)
    expect(res1).toBeTruthy()
    expect(res1.length).toEqual(5)

    const res2: MessageCustom[] = filteredMessages(messageDataCollaborativeEditing, false)
    expect(res2).toBeTruthy()
    expect(res2.length).toEqual(4)
  })

  it('correctly filters RFI messages according to archived status', () => {
    expect(GameMessagesMockRFI.length).toEqual(13)

    const res1: MessageCustom[] = filteredMessages(GameMessagesMockRFI, true)
    expect(res1).toBeTruthy()
    expect(res1.length).toEqual(13)

    const res2: MessageCustom[] = filteredMessages(GameMessagesMockRFI, false)
    expect(res2).toBeTruthy()
    expect(res2.length).toEqual(12)
  })
})
