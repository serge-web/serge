/* global it expect */
import isChatChannel from '../is-chat-channel'
/* Import mock data */

const empty = {
  name: 'Channel 16',
  participants: [
    { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [] },
    { force: 'Red', forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [] },
    { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [] }],
  uniqid: 'channel-k63pjit0'
}

const chat = {
  name: 'Channel 16',
  participants: [
    { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [] },
    { force: 'Red', forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Chat', _id: 'k16eedkl' }] },
    { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [] }],
  uniqid: 'channel-k63pjit0'
}

const mixed = {
  name: 'Channel 16',
  participants: [
    { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [{ title: 'Weather', _id: 'weather' }, { title: 'Chat', _id: 'k16eedkl' }] },
    { force: 'Red', forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Chat', _id: 'k16eedkl' }] },
    { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [] }],
  uniqid: 'channel-k63pjit0'
}

const nonChat = {
  name: 'Channel 16',
  participants: [
    { force: 'White', forceUniqid: 'umpire', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjpfv', templates: [{ title: 'RFI', _id: 'rfi' }] },
    { force: 'Red', forceUniqid: 'Red', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pjsbv', templates: [{ title: 'Weather', _id: 'weather' }] },
    { force: 'Blue', forceUniqid: 'Blue', icon: 'default_img/umpireDefault.png', roles: [], subscriptionId: 'k63pju7l', templates: [] }],
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
