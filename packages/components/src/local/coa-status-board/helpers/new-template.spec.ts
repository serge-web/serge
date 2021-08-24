import { ChannelData, ForceRole, Participant } from '@serge/custom-types'
import { channelDataCollaborativeEditing } from '@serge/mocks'
import { deepCopy } from '@serge/helpers'
import { newTemplates } from './new-templates'

const whiteLogs: ForceRole = {
  forceId: 'umpire',
  forceName: 'White',
  roleId: 'w2222',
  roleName: 'logs'
}
const blueLogs: ForceRole = {
  forceId: '-blue-',
  forceName: 'Blue',
  roleId: 'w2aa2',
  roleName: 'logs'
}

const channelWithWhiteRoles: ChannelData = deepCopy(channelDataCollaborativeEditing)
channelWithWhiteRoles.participants[0].roles = ['w2222']

const channelWithWhiteNonRoles: ChannelData = deepCopy(channelDataCollaborativeEditing)
channelWithWhiteNonRoles.participants[0].roles = ['w1111']

// need to check we can skip participations for other forces, and that we
// can remove duplicate channels
const channelWithMultiParticipation: ChannelData = deepCopy(channelDataCollaborativeEditing)
const particip1: Participant = deepCopy(channelWithMultiParticipation.participants[0])
particip1.roles = ['w2222']
particip1.subscriptionId = 'asdfbv'
channelWithMultiParticipation.participants.push(particip1)
const particip2: Participant = { ...channelWithMultiParticipation.participants[0], force: 'Delta', forceUniqid: 'charlie' }
channelWithMultiParticipation.participants.push(particip2)

describe('Templates for user', () => {
  it('By force', () => {
    // start off with role that has no templates
    expect(newTemplates(channelDataCollaborativeEditing, blueLogs)).toBeTruthy()
    expect(newTemplates(channelDataCollaborativeEditing, blueLogs).length).toEqual(0)

    // start off with role that has templates
    expect(newTemplates(channelDataCollaborativeEditing, whiteLogs)).toBeTruthy()
    expect(newTemplates(channelDataCollaborativeEditing, whiteLogs).length).toEqual(1)
    expect(newTemplates(channelDataCollaborativeEditing, whiteLogs)[0]).toBeTruthy()
  })

  it('By role', () => {
    // start off with role that has no templates
    expect(newTemplates(channelWithWhiteRoles, blueLogs)).toBeTruthy()
    expect(newTemplates(channelWithWhiteRoles, blueLogs).length).toEqual(0)

    // start off with role that isn't named templates
    expect(newTemplates(channelWithWhiteNonRoles, whiteLogs)).toBeTruthy()
    expect(newTemplates(channelWithWhiteNonRoles, whiteLogs).length).toEqual(0)

    // start off with role that has templates
    expect(newTemplates(channelWithWhiteRoles, whiteLogs)).toBeTruthy()
    expect(newTemplates(channelWithWhiteRoles, whiteLogs).length).toEqual(1)
    expect(newTemplates(channelWithWhiteRoles, whiteLogs)[0].title).toEqual('RFI')
  })

  it('Multiple templates', () => {
    // start off with role that has templates
    const multiTemplates: ChannelData = deepCopy(channelDataCollaborativeEditing)
    multiTemplates.participants[0].templates.push({ title: 'RFI-2', _id: 'rfi2_id' })
    expect(newTemplates(multiTemplates, whiteLogs)).toBeTruthy()
    expect(newTemplates(multiTemplates, whiteLogs).length).toEqual(2)
    expect(newTemplates(multiTemplates, whiteLogs)[0].title).toEqual('RFI')
    expect(newTemplates(multiTemplates, whiteLogs)[1].title).toEqual('RFI-2')
  })

  it('Non-member channels, and reduce templates', () => {
    // start off with role that has templates
    expect(newTemplates(channelWithMultiParticipation, whiteLogs)).toBeTruthy()
    expect(newTemplates(channelWithMultiParticipation, whiteLogs).length).toEqual(1)
    expect(newTemplates(channelWithMultiParticipation, whiteLogs)[0].title).toEqual('RFI')
  })
})
