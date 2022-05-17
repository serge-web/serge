import { watuWargame } from '@serge/mocks'
import deepCopy from '../deep-copy'
import canControlAsset from '../can-control-asset'
import { ForceData, Role, Wargame } from '@serge/custom-types'


const game: Wargame = deepCopy(watuWargame)
const blueForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'Blue-1')
const redForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'Red-1')
const whiteForce: ForceData | undefined = game.data.forces.forces.find((force: ForceData) => force.uniqid === 'umpire')
const blueCO: Role | undefined = blueForce && blueForce.roles.find((role: Role) => role.roleId === 'blueCO')
const blueNortRole: Role | undefined = blueForce && blueForce.roles.find((role: Role) => role.roleId === 'nortCO')

// note: we need to handle cases where force assets are controlled by another force

describe('can control asset:', () => {
  it('configured as expected', () => {
    expect(game).toBeTruthy()
    expect(canControlAsset).toBeTruthy()
    // check blue CO has control all
    expect(!!blueForce).toBeTruthy()
    expect(!!redForce).toBeTruthy()
    expect(!!whiteForce).toBeTruthy()
    expect(!!blueCO).toBeTruthy()
    expect(!!blueNortRole).toBeTruthy()
  }
  // it('I not named as controlling asset', () => {
  //   expect(canControlAsset(channel, BlueForce, blueAsset1, BlueForce, BlueComms)).toBeFalsy()
  // })
  // it('I not named as controlling asset', () => {
  //   expect(canControlAsset(channel, BlueForce, blueAsset1, RedForce, RedCO)).toBeFalsy()
  // })
  // it('I am named as controlling asset', () => {
  //   expect(canControlAsset(channel, BlueForce, blueAsset3, BlueForce, BlueComms)).toBeTruthy()
  // })
  // it('I cannnot control an asset assigned to someone else', () => {
  //   expect(canControlAsset(channel, BlueForce, blueAsset1, BlueForce, BlueCO)).toBeFalsy()
  // })
  // it('I control remaining asset', () => {
  //   expect(canControlAsset(channel, BlueForce, blueAsset1, BlueForce, BlueCO)).toBeTruthy()
  // })
  // it('I control remaining asset', () => {
  //   expect(canControlAsset(channel, BlueForce, blueAsset2, BlueForce, BlueCO)).toBeTruthy()
  // })
  // it('I not named as controlling asset', () => {
  //   expect(canControlAsset(channel, BlueForce, blueAsset1, RedForce, RedCO)).toBeFalsy()
  // })
})
