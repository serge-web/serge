import { GameTurnLength } from "@serge/custom-types"


export const fromMasked = (turnTime: string): GameTurnLength => {
  const time: Array<number> = [parseInt(turnTime.slice(0, 2)), parseInt(turnTime.slice(3, 5)), parseInt(turnTime.slice(6, 8)), 
    parseInt(turnTime.slice(9, 11)), parseInt(turnTime.slice(12, 14)), parseInt(turnTime.slice(15, 17))]
  const [years, months, days, hrs, mins, secs] = time
  console.log('from masked', turnTime, years, months,days, hrs, mins, secs)

  if (days + hrs + mins + secs > 0) {
    // ok, calc in millis
    const val = secs * 1000 +
      mins * 60 * 1000 +
      hrs * 60 * 60 * 1000 +
      days * 24 * 60 * 60 * 1000
    return { unit: 'millis', millis: val}
  } else if (years + months > 0) {
    // ok, calc in months
    const val = years * 12 + months
    return { unit: 'months', months: val}
  } else {
    console.warn('failed to recognise string', turnTime)
    return { unit: 'millis', millis: 10000}
  }
}

export const toMasked = (turnTime: GameTurnLength): string => {
  if (turnTime) {
    switch (turnTime.unit) {
      case 'millis': {
        const milliseconds = turnTime.millis
        let hours, minutes, seconds
        seconds = Math.floor(milliseconds / 1000)
        minutes = Math.floor(seconds / 60)
        seconds = seconds % 60
        hours = Math.floor(minutes / 60)
        minutes = minutes % 60
        hours = hours % 24
      
        hours = hours < 10 ? '0' + hours : hours.toString()
        minutes = minutes < 10 ? '0' + minutes : minutes.toString()
        seconds = seconds < 10 ? '0' + seconds : seconds.toString()
        console.log('to masked millis', '000000' + hours + minutes + seconds )
        return '000000' + hours + minutes + seconds    
      }
      case 'months': {
        const monthVal = turnTime.months
        let years, months
        years = Math.floor(monthVal / 12)
        months = monthVal % 12
        years = years < 10 ? '0' + years : years.toString()
        months = months < 10 ? '0' + months : months.toString()
        console.log('to masked months', years + months + '00000000')
        return years + months + '00000000'
      }
      default: 
        return 'unknown'
    }  
  } else {
    return 'missing'
  }
}
