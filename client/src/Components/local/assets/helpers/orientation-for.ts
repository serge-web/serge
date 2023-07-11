import { OrientationMarker } from 'src/custom-types/platform-type-data'
import { brgBetweenTwoHex } from '../../mapping/helpers/h3-helpers'
import { AttributeValue, AttributeValues, EnumAttributeValue, NumberAttributeValue, RouteTurn } from 'src/custom-types'
import { ATTRIBUTE_VALUE_ENUM, ATTRIBUTE_VALUE_NUMBER } from 'src/config'

/** Determine the orientation direction for this aset
 * @param {string} current - hex cell for current asset location
 * @param {Array<RouteTurn>} history - past cells for this asset
 * @param {Array<RouteTurn>} planned - planned steps for this asset
 * @param {AttributeValues} attributes - current attributes for this asset
 * @param {OrientationMarker} orientation - the marker orientation details
 * @returns {number | undefined} - either the orientation to use, or undefined if there is no orientation
*/
const orientationFor = (current: string, history: Array<RouteTurn>, planned: Array<RouteTurn>,
  attributes: AttributeValues, orientation?: OrientationMarker): number | undefined => {
  const getAttribute = (attributes: AttributeValues, id: string): number | undefined => {
    const attr = attributes.find((aValue: AttributeValue) => aValue.attrId === id)
    if (attr && attr.attrType === ATTRIBUTE_VALUE_NUMBER) {
      const numAtt = attr as NumberAttributeValue
      return numAtt.value
    } else if (attr && attr.attrType === ATTRIBUTE_VALUE_ENUM) {
      const numAtt = attr as EnumAttributeValue
      return parseFloat(numAtt.value)
    } else {
      return undefined
    }
  }
  const cleanAngle = (angle: number): number => {
    let res = angle
    while (res < 0) {
      res += 360
    }
    while (res > 360) {
      res -= 360
    }
    return res
  }

  if (orientation) {
    if (orientation.attribute && orientation.origin === 'absolute') {
      // don't worry about the direction
      return getAttribute(attributes, orientation.attribute)
    } else {
      let dest
      let start
      if (planned && planned.length) {
        // direction to first step
        const turn = planned[0]
        if (turn.route && turn.route.length) {
          dest = turn.route[0]
          start = current
        }
      } else if (history && history.length) {
        // direction from last history step
        const turn = history[history.length - 1]
        if (turn && turn.route && turn.route.length) {
          const routeSteps = turn.route.length
          start = turn.route[routeSteps - 1]
          dest = current
        }
      }
      if (dest && start) {
        // special case. If start & end are same, return undefined
        if (start !== dest) {
          const angle = brgBetweenTwoHex(start, dest)
          if (orientation.attribute && orientation.origin === 'relative') {
            const offset = getAttribute(attributes, orientation.attribute) || 0
            return cleanAngle(offset + angle)
          } else {
            return cleanAngle(angle)
          }
        } else {
          return undefined
        }
      } else {
        return undefined
      }
    }
  } else {
    return undefined
  }
}

export default orientationFor
