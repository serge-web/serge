/* global it expect */
import { PARTICIPANT_CUSTOM } from '@serge/config'
import { ChannelData } from '@serge/custom-types'
import { ParticipantCustom } from '@serge/custom-types/participant'
import isChatChannel from '../is-chat-channel'
/* Import mock data */

const empty: ChannelData = {
  name: 'Channel 16',
  participants: [
    { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [], pType: PARTICIPANT_CUSTOM },
    { force: 'Red', forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [], pType: PARTICIPANT_CUSTOM },
    { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [], pType: PARTICIPANT_CUSTOM }
  ] as ParticipantCustom[],
  uniqid: 'channel-k63pjit0'
}

const chat: ChannelData = {
  name: 'Channel 16',
  participants: [
    { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [], pType: PARTICIPANT_CUSTOM },
    { force: 'Red', forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Chat', _id: 'k16eedkl' }], pType: PARTICIPANT_CUSTOM },
    { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [], pType: PARTICIPANT_CUSTOM }
  ] as ParticipantCustom[],
  uniqid: 'channel-k63pjit0'
}

const mixed: ChannelData = {
  name: 'Channel 16',
  participants: [
    { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [{ title: 'Weather', _id: 'weather' }, { title: 'Chat', _id: 'k16eedkl' }], pType: PARTICIPANT_CUSTOM },
    { force: 'Red', forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Chat', _id: 'k16eedkl' }], pType: PARTICIPANT_CUSTOM },
    { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [], pType: PARTICIPANT_CUSTOM }
  ] as ParticipantCustom[],
  uniqid: 'channel-k63pjit0'
}

const nonChat: ChannelData = {
  name: 'Channel 16',
  participants: [
    { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [{ title: 'RFI', _id: 'rfi' }], pType: PARTICIPANT_CUSTOM },
    { force: 'Red', forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Weather', _id: 'weather' }], pType: PARTICIPANT_CUSTOM },
    { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [], pType: PARTICIPANT_CUSTOM }
  ] as ParticipantCustom[],
  uniqid: 'channel-k63pjit0'
}

it('makes correct decision on empty channel', () => {
  expect(isChatChannel(empty)).toBeTruthy()
})

it('makes correct decision on chat channel', () => {
  expect(isChatChannel(chat)).toBeTruthy()
})

it('makes correct decision on mixed channel', () => {
  expect(isChatChannel(mixed)).toBeFalsy()
})

it('makes correct decision on non-chat channel', () => {
  expect(isChatChannel(nonChat)).toBeFalsy()
})
