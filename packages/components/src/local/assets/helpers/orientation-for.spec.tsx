import { Asset, AttributeValue, AttributeValues, ForceData, PlatformTypeData, RouteTurn } from "@serge/custom-types"
import orientationFor2 from "./orientation-for"
import { brgBetweenTwoHex } from "../../mapping/helpers/h3-helpers"

import { smallScaleForces, platformTypes } from '@serge/mocks'
import { OrientationMarker } from "@serge/custom-types/platform-type-data"

const getAsset = (forces: ForceData[]): Asset | undefined => {
  if(forces && forces[1] && forces[1].assets) {
    return forces[1].assets[0]
  } else {
    return undefined
  }
}

const asset = getAsset(smallScaleForces)
const pType = asset && platformTypes.find((value: PlatformTypeData) => value.name === asset.platformType)

/** retrive the cell at the supplied human-readable coords ("A01") */
const orientationFor = (current: string, history: Array<RouteTurn>,   planned: Array<RouteTurn>, 
  attributes: AttributeValues, orientation?: OrientationMarker): number | undefined => {

  const getAttribute = (attributes: AttributeValues, id: string): number | undefined => {
    const attr = attributes.find((aValue: AttributeValue) => aValue.attrId === id)
    return attr && attr.value
  }

  if(orientation) {
    if(orientation.attribute && orientation.origin === "absolute") {
      // don't worry about the direction
      return getAttribute(attributes, orientation.attribute)
    } else {
      let dest = undefined
      if (planned && planned.length) {
        // direction to first step
        const turn = planned[0]
        if (turn.route && turn.route.length) {
          dest = turn.route[0]
        }
      } else if (history && history.length) {
        // direction from last history step
        const turn = history[history.length-1]
        if(turn && turn.route && turn.route.length) {
          const routeSteps = turn.route.length
          if (routeSteps) {
            dest = turn.route[routeSteps-1]
          }  
        }
      }
      if (dest) {
        const angle = brgBetweenTwoHex(current, dest)
        if(orientation.attribute && orientation.attribute === 'relative') {
          const offset = getAttribute(attributes, orientation.attribute) || 0
          return offset + angle
        } else {
          return angle
        }
      } else {
        return undefined
      }
    }
  } else {
    return undefined
  }
}

if (!orientationFor2) {
  console.log('break me')
}

it('Calculates correct orientation', () => {
  if (asset) {
    const orientation = pType?.orientation
    const history: RouteTurn[] = asset.history || []
    const planned: RouteTurn[] = asset.plannedTurns || []
    const attributes: AttributeValues = []
    const current = 'C12'
    expect(orientationFor(current, history, planned, attributes, orientation)).toEqual(undefined)
    test permutations of orientation!
  }
})

it('Maths works as expected', () => {
  const pos1 = '8718a84daffffff'
  const pos2 = '8718a84d8ffffff'
  expect(brgBetweenTwoHex(pos1, pos2)).toBeCloseTo(78,0)
})


