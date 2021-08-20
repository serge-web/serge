import { messageDataCollaborativeEditing } from '@serge/mocks'
import { CollaborativeMessageStates } from '@serge/config'
import { finalize, close, requestChanges, endorse, collabEditAssign, 
  submitForReview, collabResponseAssign, CRCPsubmit, CRRMRelease, CRRMRequestChanges } from './changers'
import { ForceRole } from '@serge/custom-types'

const whiteUmpire: ForceRole = {
  forceId: 'white',
  forceName: 'White',
  roleId: 'w3254',
  roleName: 'umpire'
}

const response = 'response text'
const privMsg = 'Private message text'

const messages = messageDataCollaborativeEditing
const pendingReview = messages[2]

describe('Changer tests', () => {
  it('simple state changes', () => {
    // initial state
    expect(pendingReview.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
    expect(finalize(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.Finalized)
    expect(close(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.Closed)
    expect(requestChanges(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.DocumentPending)
    expect(endorse(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.DocumentPending)

    expect(CRRMRelease(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.Released)
    expect(CRRMRequestChanges(pendingReview).details.collaboration?.status).toEqual(CollaborativeMessageStates.ResponsePending)

    // check original status unchanged
    expect(pendingReview.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
  })

  it('member data changes', () => {
    // methods that take data

    expect(pendingReview.details.collaboration?.owner).toEqual(undefined)

    const res1 = collabEditAssign(pendingReview, whiteUmpire)
    expect(res1.details.collaboration?.status).toEqual(CollaborativeMessageStates.EditDocument)
    expect(res1.details.collaboration?.owner).toEqual(whiteUmpire)

    const res3 = collabResponseAssign(pendingReview, whiteUmpire)
    expect(res3.details.collaboration?.status).toEqual(CollaborativeMessageStates.EditResponse)
    expect(res3.details.collaboration?.owner).toEqual(whiteUmpire)

    const res5 = submitForReview(pendingReview, privMsg)
    expect(res5.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
    expect(res5.details.collaboration?.owner).toEqual(undefined)
    expect(res5.details.privateMessage).toEqual(privMsg)

    const res6 = CRCPsubmit(pendingReview, response, privMsg)
    expect(res6.details.collaboration?.status).toEqual(CollaborativeMessageStates.PendingReview)
    expect(res6.details.collaboration?.owner).toEqual(undefined)
    expect(res6.details.collaboration?.response).toEqual(response)
    expect(res6.details.privateMessage).toEqual(privMsg)
  })
})
