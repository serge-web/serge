import moment, { Moment } from 'moment'
import { MilliTurns, MonthTurns } from '@serge/custom-types'
import incrementGameTime from '../../Helpers/increment-game-time'

const startTime: Moment = moment('2013-02-08 09:30:26')
const formatStr = 'YYYY-MM-DDTHH:mm:ss'
const startStr: string = startTime.format(formatStr)

describe('increment turn time:', () => {
  it('default date is as expected', () => {
    expect(startStr).toEqual('2013-02-08T09:30:26')
  })

  it('increments using millis', () => {
    const turns: MilliTurns = {
      unit: 'millis',
      millis: 1000
    }
    expect(moment(incrementGameTime(startStr, turns)).format(formatStr)).toEqual('2013-02-08T09:30:27')
  })

  it('increments using months', () => {
    const turns: MonthTurns = {
      unit: 'months',
      months: 2
    }
    expect(moment(incrementGameTime(startStr, turns)).format(formatStr)).toEqual('2013-04-08T09:30:26')
  })
})
