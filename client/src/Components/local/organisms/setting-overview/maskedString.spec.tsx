/* global it expect */
import { GameTurnLength } from 'src/custom-types'
import { toMasked, fromMasked } from './helpers/turnTimeToYYMMDDHHMMSS'

describe('turn time to masked string:', () => {
  it('converts correctly', () => {
    expect(toMasked({ unit: 'millis', millis: 20000 })).toEqual('00 00 00 00 00 20')
    expect(toMasked({ unit: 'millis', millis: 20000 * 60 })).toEqual('00 00 00 00 20 00')
    expect(toMasked({ unit: 'millis', millis: 20000 * 61 })).toEqual('00 00 00 00 20 20')
    expect(toMasked({ unit: 'millis', millis: 20000 * 20000 })).toEqual('00 00 04 15 06 40')
    expect(toMasked({ unit: 'months', months: 5 })).toEqual('00 05 00 00 00 00')
    expect(toMasked({ unit: 'months', months: 15 })).toEqual('01 03 00 00 00 00')
    // special case - just in case method receives legacy value in millis
    expect(toMasked(20000 as unknown as GameTurnLength)).toEqual('00 00 00 00 00 20')
  })
})

describe('turn time from masked string:', () => {
  it('converts correctly', () => {
    expect(fromMasked('00 00 00 00 00 20')).toEqual({ unit: 'millis', millis: 20000 })
    expect(fromMasked('00 00 00 00 02 02')).toEqual({ unit: 'millis', millis: 122000 })
    expect(fromMasked('00 00 04 15 06 40')).toEqual({ unit: 'millis', millis: 20000 * 20000 })
    expect(fromMasked('00 03 00 00 00 00')).toEqual({ unit: 'months', months: 3 })
    expect(fromMasked('01 03 00 00 00 00')).toEqual({ unit: 'months', months: 15 })
    expect(fromMasked('00 00 00 00 00 00')).toEqual(undefined)
  })
})
