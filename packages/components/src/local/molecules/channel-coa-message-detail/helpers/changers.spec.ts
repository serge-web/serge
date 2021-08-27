import { messageDataCollaborativeEditing } from '@serge/mocks'
import { CollaborativeMessageStates } from '@serge/config'
import {
  editFinalise, close, editRequestChanges, editAssign,
  editSubmit, responseAssign, responseSubmit, responseRelease, responseRequestChanges
} from './changers'
import { ForceRole } from '@serge/custom-types'

const whiteUmpire: ForceRole = {
  forceId: 'white',
  forceName: 'White',
  roleId: 'w3254',
  roleName: 'umpire'
}

const response = 'response text'
const privMsg = 'The private content goes in here'
const privMsg2 = 'The other private content goes in here'

const messages = messageDataCollaborativeEditing
const pendingReview = messages[2]

describe('Changer tests', () => {
  it('simple state changes', () => {
    // initial state
    expect(pendingReview.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
    expect(editFinalise(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.Finalized)
    expect(close(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.Closed)
    expect(editRequestChanges(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.DocumentPending)

    expect(responseRelease(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.Released)
    expect(responseRequestChanges(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.ResponsePending)

    // check original status unchanged
    expect(pendingReview.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
  })

  it('member data changes', () => {
    // methods that take data

    expect(pendingReview.details.collaboration?.owner).toEqual(undefined)

    const res1 = editAssign(pendingReview, whiteUmpire)
    expect(res1.details.collaboration?.status).toEqual(CollaborativeMessageStates.EditDocument)
    expect(res1.details.collaboration?.owner).toEqual(whiteUmpire)

    const res3 = responseAssign(pendingReview, whiteUmpire)
    expect(res3.details.collaboration?.status).toEqual(CollaborativeMessageStates.EditResponse)
    expect(res3.details.collaboration?.owner).toEqual(whiteUmpire)

    // create a mock message object, like those we get from json-editor
    const msgTxt = 'message content'
    const newMessage = {
      content: msgTxt
    }

    // check it doesn't have our content already
    expect(pendingReview.message.content).not.toEqual(msgTxt)
    expect(pendingReview.details.privateMessage).not.toEqual(privMsg2)

    // now submit new message
    const res5 = editSubmit(pendingReview, newMessage, privMsg2)
    expect(res5.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
    expect(res5.details.collaboration?.owner).toEqual(undefined)
    expect(res5.details.privateMessage).toEqual(privMsg2)
    expect(res5.message).toBeTruthy()
    expect(res5.message.content).toBeTruthy()
    expect(typeof res5.message).toEqual('object')
    expect(res5.message.content).toEqual(msgTxt)

    const res6 = responseSubmit(pendingReview, response, privMsg)
    expect(res6.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
    expect(res6.details.collaboration?.owner).toEqual(undefined)
    expect(res6.details.collaboration?.response).toEqual(response)
    expect(res6.details.privateMessage).toEqual(privMsg)
  })
})
