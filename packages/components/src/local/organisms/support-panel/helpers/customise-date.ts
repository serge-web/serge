import { MessageStructure, MilliTurns, MonthTurns, TurnLengthType } from '@serge/custom-types'
import moment from 'moment'

export type TimeSlot = {
  value: string
  label: string
}

const twoHours = 7200000
const oneDay = 86400000
const shortFormat = 'DDHHmm[Z]'
const longFormat = 'MMM DD'

const getFinishTime = (gameTime: number, gameTurnTime: TurnLengthType): number => {
  const time = moment(gameTime)
  const isMillis = gameTurnTime.unit === 'millis'
  if (isMillis) {
    const millis = gameTurnTime as MilliTurns
    time.add(millis.millis, 'milliseconds')
    return time.valueOf()
  } else {
    const millis = gameTurnTime as MonthTurns
    time.add(millis.months, 'months')
    return time.valueOf()
  }
}

const isSmallSteps = (turnTime: TurnLengthType): boolean => {
  const oneWeek = 604800000
  if (turnTime.unit === 'millis') {
    const millis = turnTime as MilliTurns
    return millis.millis <= oneWeek
  }
  return false
}

export const getDateSlots = (gameTime: number, gameTurnTime: TurnLengthType): Array<TimeSlot> => {
  const smallSteps = isSmallSteps(gameTurnTime)
  const finishTime = getFinishTime(gameTime, gameTurnTime)
  const timeStep = smallSteps ? twoHours : oneDay
  const res: TimeSlot[] = []
  const formatStr = smallSteps ? shortFormat : longFormat
  for (let time = gameTime; time < finishTime; time += timeStep) {
    const tNow = moment.utc(time)
    res.push({ value: tNow.toISOString(), label: tNow.format(formatStr) })
  }
  return res
}

export const customiseDate = (_document: MessageStructure | undefined, schema: Record<string, any>,
  gameTime: number, gameTurnTime: TurnLengthType): Record<string, any> => {
  const res = { ...schema}
  if (schema) {
    const slots = getDateSlots(gameTime, gameTurnTime)
    const keys = Object.keys(res.properties)
    keys.forEach((key: string) => {
      if (key.endsWith('Date') && key !== 'Date') {
        // ok, update it
        res.properties[key].enum = slots.map((asset: TimeSlot) => asset.value)
        res.properties[key].options.enum_titles = slots.map((asset: TimeSlot) => asset.label)
      }
    })
  }
  return res
}
