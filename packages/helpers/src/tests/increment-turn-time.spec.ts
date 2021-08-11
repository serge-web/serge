import { MilliTurns, MonthTurns, YearTurns } from '../../../custom-types'
import incrementGameTime from '../increment-game-time'

describe('increment turn time:', () => {
  it('increments using legacy millis', () => {
    expect(incrementGameTime('1000', 1000)).toBe(2000)
  })

  it('increments using millis', () => {
    const oneSec: MilliTurns = {
      unit: 'millis',
      millis: 1000
    }
    expect(incrementGameTime('1000', oneSec)).toBe(2000)
  })

  it('increments using months', () => {
    const twoM: MonthTurns = {
      unit: 'months',
      months: 2
    }
    expect(incrementGameTime('1000', twoM)).toBe(2000)
  })

  it('increments using years', () => {
    const threeY: YearTurns = {
      unit: 'years',
      years: 2
    }
    expect(incrementGameTime('1000', threeY)).toBe(2000)
  })
})
