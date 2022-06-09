import { GameTurnLength } from "@serge/custom-types"

export default (turnTime: GameTurnLength): string => {
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
    
      return '000000' + hours + minutes + seconds    
    }
    case 'months': {
      const monthVal = turnTime.months
      let years, months
      years = Math.floor(monthVal / 12)
      months = monthVal % 12
      years = years < 10 ? '0' + years : years.toString()
      months = months < 10 ? '0' + months : months.toString()
      return years + months + '00000000'
    }
    default: 
      return 'unknown'
  }
}
