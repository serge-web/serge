import { messageDataCollaborativeEditing } from '@serge/mocks'
import { CollaborativeMessageStates } from '@serge/config'
import {
  editFinalise, close, requestChanges,
  editSubmit, assign, responseSubmit, responseRelease
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
    expect(requestChanges(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.Pending)

    expect(responseRelease(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.Released)

    // check original status unchanged
    expect(pendingReview.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
  })

  it('member data changes', () => {
    // methods that take data

    expect(pendingReview.details.collaboration?.owner).toEqual(undefined)

    const res1 = assign(pendingReview, whiteUmpire)
    expect(res1.details.collaboration?.status).toEqual(CollaborativeMessageStates.BeingEdited)
    expect(res1.details.collaboration?.owner).toEqual(whiteUmpire)

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
