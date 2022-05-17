import { watuWargame } from '@serge/mocks'
import deepCopy from '../deep-copy'
import canControlAsset from '../can-control-asset'
import { Asset, ChannelMapping, ChannelTypes, ForceData, Role, Wargame } from '@serge/custom-types'

const game: Wargame = deepCopy(watuWargame)
const blueForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'Blue-1')
const redForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'Red-1')
const whiteForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'umpire')
const greenForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'green')

const blueCO: Role | undefined = blueForce && blueForce.roles.find((role: Role) => role.roleId === 'blueCO')
const blueNortRole: Role | undefined = blueForce && blueForce.roles.find((role: Role) => role.roleId === 'nortCO')
const redCO: Role | undefined = redForce && redForce.roles.find((role: Role) => role.roleId === 'red-CO')
const whiteUmpire: Role | undefined = whiteForce && whiteForce.roles.find((role: Role) => role.roleId === 'umpire-GC')
const talnAsset: Asset | undefined = blueForce && blueForce.assets?.find((asset: Asset) => asset.uniqid === 'talnID')
const nortAsset: Asset | undefined = blueForce && blueForce.assets?.find((asset: Asset) => asset.uniqid === 'nortID')
const greenAsset: Asset | undefined = greenForce && greenForce.assets && greenForce.assets[0]
const channel: ChannelMapping | undefined = game.data.channels.channels.find((chann: ChannelTypes) => chann.channelType === 'mapping') as ChannelMapping

// note: we need to handle cases where force assets are controlled by another force

describe('can control asset:', () => {
  it('configured as expected', () => {
    expect(game).toBeTruthy()
    expect(canControlAsset).toBeTruthy()
    // check blue CO has control all
    expect(blueForce && redForce && whiteForce && greenForce).toBeTruthy()
    expect(blueCO && blueNortRole && redCO && whiteUmpire).toBeTruthy()
    expect(channel).toBeTruthy()
    expect(nortAsset && talnAsset && greenAsset).toBeTruthy()
  })
  it('I not named as controlling asset, but I am from controlling force', () => {
    if (channel && blueForce && talnAsset && blueNortRole) {
      expect(canControlAsset(channel, blueForce, talnAsset.uniqid, blueForce.uniqid, blueNortRole.roleId)).toBeFalsy()
    }
  })
  it('I not named as controlling asset,and Im not from controlling force', () => {
    if (channel && blueForce && redForce && talnAsset && redCO) {
      expect(canControlAsset(channel, blueForce, talnAsset.uniqid, redForce.uniqid, redCO.roleId)).toBeFalsy()
    }
  })
  it('I am named as controlling asset', () => {
    if (channel && blueForce && redForce && nortAsset && blueNortRole) {
      expect(canControlAsset(channel, blueForce, nortAsset.uniqid, blueForce.uniqid, blueNortRole.roleId)).toBeTruthy()
    }
  })
  it('I control remaining assets', () => {
    if (channel && blueForce && talnAsset && blueCO) {
      expect(canControlAsset(channel, blueForce, talnAsset.uniqid, blueForce.uniqid, blueCO.roleId)).toBeTruthy()
    }
  })
  it('I control remaining asset of controlled force', () => {
    if (channel && greenForce && greenAsset && whiteUmpire && whiteForce) {
      expect(canControlAsset(channel, greenForce, greenAsset.uniqid, whiteForce.uniqid, whiteUmpire.roleId)).toBeTruthy()
    }
  })
  it('Cannot control remaining asset of force I do not control', () => {
    if (channel && blueForce && talnAsset && whiteUmpire && whiteForce) {
      expect(canControlAsset(channel, blueForce, talnAsset.uniqid, whiteForce.uniqid, whiteUmpire.roleId)).toBeFalsy()
    }
  })
})
