/* global it expect */
import { toMasked, fromMasked} from './helpers/turnTimeToYYMMDDHHMMSS'

describe('turn time to masked string:', () => {
  it('converts correctly', () => {
    expect(toMasked({unit: 'millis', millis:20000})).toEqual('000000000020')
    expect(toMasked({unit: 'millis', millis:20000 * 60})).toEqual('000000002000')
    expect(toMasked({unit: 'millis', millis:20000 * 61})).toEqual('000000002020')
    expect(toMasked({unit: 'months', months: 5})).toEqual('000500000000')
    expect(toMasked({unit: 'months', months: 15})).toEqual('010300000000')
  })
})

describe('turn time from masked string:', () => {
  it('converts correctly', () => {
    expect(fromMasked('011122151617')).toEqual({unit: 'millis', millis:20000})
    // expect(fromMasked({unit: 'millis', millis:20000 * 60})).toEqual('000000002000')
    // expect(fromMasked({unit: 'millis', millis:20000 * 61})).toEqual('000000002020')
    // expect(fromMasked({unit: 'months', months: 5})).toEqual('000500000000')
    // expect(fromMasked({unit: 'months', months: 15})).toEqual('010300000000')
  })
})


