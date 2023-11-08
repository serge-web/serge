import { GameTurnLength } from 'src/custom-types'
import { isInteger } from 'lodash'

export const fromMasked = (turnTime: string): GameTurnLength | undefined => {
  const time: Array<number> = [parseInt(turnTime.slice(0, 2)), parseInt(turnTime.slice(3, 5)), parseInt(turnTime.slice(6, 8)),
    parseInt(turnTime.slice(9, 11)), parseInt(turnTime.slice(12, 14)), parseInt(turnTime.slice(15, 17))]
  const [years, months, days, hrs, mins, secs] = time

  const hasMonths = years + months > 0
  const hasMillis = days + hrs + mins + secs > 0

  if (hasMillis) {
    // ok, calc in millis
    const val = secs * 1000 +
      mins * 60 * 1000 +
      hrs * 60 * 60 * 1000 +
      days * 24 * 60 * 60 * 1000
    return { unit: 'millis', millis: val }
  } else if (hasMonths) {
    // ok, calc in months
    const val = years * 12 + months
    return { unit: 'months', months: val }
  } else {
    // dont't throw error for unit tests, unit tests deliberately provide duff data
    const jestWorkerId = process.env.JEST_WORKER_ID
    const inProduction = !jestWorkerId
    inProduction && console.warn('Cannot process all zeroes', turnTime)
    // end
    return undefined
  }
}

export const toMasked = (turnTime: GameTurnLength): string => {
  if (turnTime) {
    // we need to do this twice, so refactor to function
    const fromMillis = (millis: number): string => {
      let days, hours, minutes, seconds
      seconds = Math.floor(millis / 1000)
      minutes = Math.floor(seconds / 60)
      seconds = seconds % 60
      hours = Math.floor(minutes / 60)
      minutes = minutes % 60
      days = Math.floor(hours / 24)
      hours = hours % 24
      // pad integers
      days = days < 10 ? '0' + days : days.toString()
      hours = hours < 10 ? '0' + hours : hours.toString()
      minutes = minutes < 10 ? '0' + minutes : minutes.toString()
      seconds = seconds < 10 ? '0' + seconds : seconds.toString()
      return '00 00 ' + days + ' ' + hours + ' ' + minutes + ' ' + seconds
    }

    // SPECIAL HANDLING: just in case we have integer turn time
    // in legacy wargame, that doesn't match current type spec
    const legacyType = turnTime as unknown
    if (isInteger(legacyType)) {
      const millis = legacyType as number
      return fromMillis(millis)
    }
    switch (turnTime.unit) {
      case 'millis': {
        const milliseconds = turnTime.millis
        return fromMillis(milliseconds)
      }
      case 'months': {
        const monthVal = turnTime.months
        let years, months
        years = Math.floor(monthVal / 12)
        months = monthVal % 12
        years = years < 10 ? '0' + years : years.toString()
        months = months < 10 ? '0' + months : months.toString()
        return years + ' ' + months + ' 00 00 00 00'
      }
      default:
        return 'unknown'
    }
  } else {
    return 'missing'
  }
}
