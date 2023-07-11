import { watuWargame } from '@serge/mocks'
import deepCopy from '../deep-copy'
import canControlAsset, { canControlAnyAsset, underControlByThisForce, canControlAssetExtended } from '../can-control-asset'
import { Asset, ChannelMapping, ChannelTypes, ForceData, Role, Wargame } from 'src/custom-types'
import { LaydownTypes, Phase } from 'src/config'

const game: Wargame = deepCopy(watuWargame)
const blueForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'Blue-1')
const redForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'Red-1')
const whiteForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'umpire')
const greenForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'green-force')

const blueCO: Role | undefined = blueForce && blueForce.roles.find((role: Role) => role.roleId === 'blueCO')
const blueNortRole: Role | undefined = blueForce && blueForce.roles.find((role: Role) => role.roleId === 'nortCO')
const blueComms: Role | undefined = blueForce && blueForce.roles.find((role: Role) => role.roleId === 'blue-comms')
const redCO: Role | undefined = redForce && redForce.roles.find((role: Role) => role.roleId === 'red-CO')
const whiteUmpire: Role | undefined = whiteForce && whiteForce.roles.find((role: Role) => role.roleId === 'umpire-GC')
const whiteBlueHQ: Role | undefined = whiteForce && whiteForce.roles.find((role: Role) => role.roleId === 'umpire-blue-hq')
const talnAsset: Asset | undefined = blueForce && blueForce.assets?.find((asset: Asset) => asset.uniqid === 'talnID')
const nortAsset: Asset | undefined = blueForce && blueForce.assets?.find((asset: Asset) => asset.uniqid === 'nortID')
const greenAsset1: Asset | undefined = greenForce && greenForce.assets && greenForce.assets[0]
const greenAsset2: Asset | undefined = greenForce && greenForce.assets && greenForce.assets[1]
const channel: ChannelMapping | undefined = game.data.channels.channels.find((chann: ChannelTypes) => chann.channelType === 'mapping') as ChannelMapping

describe('can control asset:', () => {
  it('configured as expected', () => {
    expect(game).toBeTruthy()
    expect(canControlAsset).toBeTruthy()
    // check blue CO has control all
    expect(blueForce && redForce && whiteForce && greenForce).toBeTruthy()
    expect(blueCO && blueNortRole && blueComms && redCO && whiteUmpire && whiteBlueHQ).toBeTruthy()
    expect(channel).toBeTruthy()
    expect(nortAsset && talnAsset && greenAsset1 && greenAsset2).toBeTruthy()
  })

  // CONTROLLED BY THIS
  it('I control this specific asset and this force in general', () => {
    if (channel && blueForce && talnAsset && nortAsset && greenAsset1 && whiteForce && greenForce) {
      expect(underControlByThisForce(channel, talnAsset.uniqid, blueForce.uniqid, blueForce.uniqid)).toBeTruthy()
      expect(underControlByThisForce(channel, nortAsset.uniqid, blueForce.uniqid, blueForce.uniqid)).toBeTruthy()
      // and some we don't contorl
      expect(underControlByThisForce(channel, greenAsset1.uniqid, greenForce.uniqid, blueForce.uniqid)).toBeFalsy()
      // and umpire control
      expect(underControlByThisForce(channel, greenAsset1.uniqid, greenForce.uniqid, whiteForce.uniqid)).toBeTruthy()
    }
  })
  it('I do not control this specific asset and this force in general', () => {
    if (channel && redForce && blueForce && talnAsset && nortAsset) {
      expect(underControlByThisForce(channel, talnAsset.uniqid, blueForce.uniqid, redForce.uniqid)).toBeFalsy()
      expect(underControlByThisForce(channel, nortAsset.uniqid, blueForce.uniqid, redForce.uniqid)).toBeFalsy()
    }
  })

  // CONTROL ANY ASSET
  it('I am not specified as controller for any asset', () => {
    if (channel && blueForce && blueComms) {
      expect(canControlAnyAsset(channel, blueComms.roleId)).toBeFalsy()
    }
  })
  it('I am specified as controller for specific asset', () => {
    if (channel && blueForce && blueNortRole) {
      expect(canControlAnyAsset(channel, blueNortRole.roleId)).toBeTruthy()
    }
  })
  it('I am specified as controller for remaining asset', () => {
    if (channel && blueForce && blueCO) {
      expect(canControlAnyAsset(channel, blueCO.roleId)).toBeTruthy()
    }
  })

  // CAN CONTROL SPECIFIC ASSET
  it('I not named as controlling asset, but I am from controlling force', () => {
    if (channel && blueForce && talnAsset && blueNortRole) {
      expect(canControlAsset(channel, blueForce.uniqid, talnAsset.uniqid, blueNortRole.roleId)).toBeFalsy()
    }
  })
  it('I not named as controlling asset,and Im not from controlling force', () => {
    if (channel && blueForce && redForce && talnAsset && redCO) {
      expect(canControlAsset(channel, blueForce.uniqid, talnAsset.uniqid, redCO.roleId)).toBeFalsy()
    }
  })
  it('I am named as controlling asset', () => {
    if (channel && blueForce && redForce && nortAsset && blueNortRole) {
      expect(canControlAsset(channel, blueForce.uniqid, nortAsset.uniqid, blueNortRole.roleId)).toBeTruthy()
    }
  })
  it('I control remaining assets', () => {
    if (channel && blueForce && talnAsset && blueCO && blueNortRole) {
      expect(canControlAsset(channel, blueForce.uniqid, talnAsset.uniqid, blueCO.roleId)).toBeTruthy()
      expect(canControlAsset(channel, blueForce.uniqid, talnAsset.uniqid, blueNortRole.roleId)).toBeFalsy()
    }
  })
  it('I control remaining assets but not a claimed one', () => {
    if (channel && blueForce && nortAsset && blueCO && blueNortRole) {
      expect(canControlAsset(channel, blueForce.uniqid, nortAsset.uniqid, blueCO.roleId)).toBeFalsy()
      expect(canControlAsset(channel, blueForce.uniqid, nortAsset.uniqid, blueNortRole.roleId)).toBeTruthy()
    }
  })
  it('I control specific asset of controlled force', () => {
    if (channel && greenForce && greenAsset2 && whiteBlueHQ && whiteUmpire && whiteForce) {
      expect(canControlAsset(channel, greenForce.uniqid, greenAsset2.uniqid, whiteBlueHQ.roleId)).toBeTruthy()
      expect(canControlAsset(channel, greenForce.uniqid, greenAsset2.uniqid, whiteUmpire.roleId)).toBeFalsy()
    }
  })
  it('I control remaining asset of controlled force', () => {
    if (channel && greenForce && greenAsset1 && whiteUmpire && whiteBlueHQ && whiteForce) {
      expect(canControlAsset(channel, greenForce.uniqid, greenAsset1.uniqid, whiteUmpire.roleId)).toBeTruthy()
      expect(canControlAsset(channel, greenForce.uniqid, greenAsset1.uniqid, whiteBlueHQ.roleId)).toBeFalsy()
    }
  })
  it('Cannot control remaining asset of force I do not control', () => {
    if (channel && blueForce && talnAsset && whiteUmpire && whiteForce) {
      expect(canControlAsset(channel, blueForce.uniqid, talnAsset.uniqid, whiteUmpire.roleId)).toBeFalsy()
    }
  })
})

describe('can control asset - exteded:', () => {
  it('I control remaining asset of controlled force', () => {
    if (channel && greenForce && greenAsset1 && whiteUmpire && whiteBlueHQ && whiteForce) {
      if (blueForce && redForce && nortAsset && blueNortRole) {
        // game not init, in adjudicate phase
        const wargameInitated = false
        const phase = Phase.Adjudication

        const turnZero = 0

        // is game control, in umpire laydown
        expect(canControlAssetExtended(channel, whiteForce.uniqid, nortAsset.uniqid, whiteUmpire.roleId,
          wargameInitated, true, LaydownTypes.UmpireLaydown, phase, turnZero)).toBeTruthy()

        // is game control, in force laydown
        expect(canControlAssetExtended(channel, whiteForce.uniqid, nortAsset.uniqid, whiteUmpire.roleId,
          wargameInitated, true, LaydownTypes.ForceLaydown, phase, turnZero)).toBeFalsy()

        // not game control, in umpire laydown
        expect(canControlAssetExtended(channel, blueForce.uniqid, nortAsset.uniqid, blueNortRole.roleId,
          wargameInitated, false, LaydownTypes.UmpireLaydown, phase, turnZero)).toBeFalsy()

        // not game control, in force laydown
        expect(canControlAssetExtended(channel, blueForce.uniqid, nortAsset.uniqid, blueNortRole.roleId,
          wargameInitated, false, LaydownTypes.ForceLaydown, phase, turnZero)).toBeFalsy()
      }
      if (blueForce && redForce && nortAsset && blueNortRole) {
        // game initiated, in adjudicate phase
        const wargameInitated = true
        const phase = Phase.Adjudication

        const turnZero = 0
        const turnOne = 1

        // is game control, in umpire laydown
        expect(() => canControlAssetExtended(channel, whiteForce.uniqid, nortAsset.uniqid, whiteUmpire.roleId,
          wargameInitated, true, LaydownTypes.UmpireLaydown, phase, turnZero)).toThrowError()

        // is game control, in force laydown
        expect(canControlAssetExtended(channel, whiteForce.uniqid, nortAsset.uniqid, whiteUmpire.roleId,
          wargameInitated, true, LaydownTypes.ForceLaydown, phase, turnZero)).toBeFalsy()

        // is game control, in force laydown, asset position provided, in turn zero
        expect(canControlAssetExtended(channel, whiteForce.uniqid, nortAsset.uniqid, whiteUmpire.roleId,
          wargameInitated, true, undefined, phase, turnZero)).toBeFalsy()

        // is game control, in force laydown, asset position provided, in turn one
        expect(canControlAssetExtended(channel, whiteForce.uniqid, nortAsset.uniqid, whiteUmpire.roleId,
          wargameInitated, true, undefined, phase, turnOne)).toBeTruthy()

        // not game control, in umpire laydown
        expect(() => canControlAssetExtended(channel, blueForce.uniqid, nortAsset.uniqid, blueNortRole.roleId,
          wargameInitated, false, LaydownTypes.UmpireLaydown, phase, turnZero)).toThrowError()

        // is game control, in force laydown, looking at green asset
        expect(canControlAssetExtended(channel, greenForce.uniqid, greenAsset1.uniqid, whiteUmpire.roleId,
          wargameInitated, true, LaydownTypes.ForceLaydown, phase, turnZero)).toBeTruthy()

        // not game control, in force laydown
        expect(canControlAssetExtended(channel, blueForce.uniqid, nortAsset.uniqid, blueNortRole.roleId,
          wargameInitated, false, LaydownTypes.ForceLaydown, phase, turnZero)).toBeTruthy()
      }
    }
  })
})
