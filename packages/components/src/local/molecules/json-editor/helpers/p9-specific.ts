import { numberObject, textObject } from './p9-helpers'

let order = 300
export const transit = {
  transitSpeed: numberObject('Transit Speed', 3, order++),
  transitDuration: textObject('Transit Duration', 3, order++)
}
