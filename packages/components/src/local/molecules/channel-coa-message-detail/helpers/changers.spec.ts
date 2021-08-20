import { messageDataCollaborativeEditing } from '@serge/mocks'
import { CollaborativeMessageStates } from '../../../../../../config/build'
import { endorse } from './changers'

const messages = messageDataCollaborativeEditing
const pendingReview = messages[2]

describe('Endorse tests', () => {
  it('Editable by correct role', () => {
    const res = endorse(pendingReview)
    expect(endorse(res)).toBeTruthy()
    expect(res.details.collaboration?.status).toEqual(CollaborativeMessageStates.DocumentPending)
  })
})
