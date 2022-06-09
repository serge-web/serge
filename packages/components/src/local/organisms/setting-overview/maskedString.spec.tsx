/* global it expect */
import turnTimeToMaskedString from './helpers/turnTimeToYYMMDDHHMMSS'

describe('turn time to masked string:', () => {
  it('converts correctly', () => {
    expect(turnTimeToMaskedString({unit: 'millis', millis:20000})).toEqual     ('000000000020')
    expect(turnTimeToMaskedString({unit: 'millis', millis:20000 * 60})).toEqual('000000002000')
    expect(turnTimeToMaskedString({unit: 'millis', millis:20000 * 61})).toEqual('000000002020')
    expect(turnTimeToMaskedString({unit: 'months', months: 5})).toEqual('000500000000')
    expect(turnTimeToMaskedString({unit: 'months', months: 15})).toEqual('010300000000')
  })
})

