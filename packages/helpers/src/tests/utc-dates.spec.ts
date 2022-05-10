import moment from 'moment-timezone'
import formatDate, { formatTime } from '../format-date'
import newDate from '../new-date'

describe('sort out UTC dates', () => {
  it('creates dates as expected', () => {
    const dateVal = new Date()
    const theDate = dateVal.toISOString()
    const newD = newDate(dateVal)
    expect(newD).toEqual(theDate)
    // check the time zoen
    expect(newD.charAt(10)).toEqual('T')
  })

  it('formats dates as expected', () => {
    const theDate = '2022-03-23T16:13:56.623Z'
    // check steps first
    const m = moment(theDate)
    const t = m.tz('UTC')
    const text = t.format('HH:mm')
    expect(text).toEqual('16:13')

    // now check automated version
    expect(formatDate(theDate, 'HH:mm')).toEqual('16:13')
    expect(formatTime(theDate)).toEqual('16:13')
  })
})
