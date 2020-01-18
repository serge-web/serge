import L from 'leaflet'

// the images we use to annotate planning legs
import turnLeft from '../images/turn-left.png'
import turnRight from '../images/turn-right.png'
import turnEnd from '../images/turn-end.png'
import noTurn from '../images/no-turn.png'
import lightTurn from '../images/light-turn.png'

import turnNameFor from './turnNameFor'

function lineFor (/* array */ plannedTurns, /* latLng */ start,
  /* boolean */ lightweight, /* grid */ grid) {
  const weight = lightweight ? 2 : 4
  const dashArray = lightweight ? [1, 4] : [4, 8]
  const polyLine = L.polyline([], {
    dashArray: dashArray,
    weight: weight
  })
  const latLongs = [start]
  plannedTurns.forEach(turn => {
    // loop through the routes
    if (turn.route) {
      // loop through the steps in this route
      turn.route.forEach(step => {
        const ptHex = grid.hexNamed(step)
        if (ptHex) {
          const location = ptHex.centrePos
          latLongs.push(location)
        }
      })
    }
  })
  polyLine.setLatLngs(latLongs)

  return polyLine
}

function bearingBetween (/* latLng */ p1, /* latLng */ p2) {
  var d2r = Math.PI / 180
  var r2d = 180 / Math.PI
  var lat1 = p1.lat * d2r
  var lat2 = p2.lat * d2r
  var dLon = (p2.lng - p1.lng) * d2r
  var y = Math.sin(dLon) * Math.cos(lat2)
  var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon)
  var brng = Math.atan2(y, x)
  brng = parseInt(brng * r2d)
  brng = (brng + 360) % 360
  return brng
};

/** we plot a line marker perpendicular to the direction
 * of travel at route waypoints.  Determine the marker to use for this bearing
 */
function bearingMarkerFor (/* number */ angleResult) {
  let icon

  if (angleResult === 180 || angleResult === 360 || angleResult === 0) {
    // for the 180 and 360, which are flat icons so end icon is used
    icon = turnEnd
  } else if (angleResult > 0 && angleResult < 90) {
    // North to East
    icon = turnLeft
  } else if (angleResult < 180) {
    // East to South
    icon = turnRight
  } else if (angleResult < 271) {
    // South to West
    icon = turnLeft
  } else if (angleResult < 360) {
    // West to North
    icon = turnRight
  } else if (angleResult === undefined || angleResult === null) {
    // as some angles are undefined just use the end icon until this can be figured out
    icon = turnEnd
  } else {
    icon = turnEnd
  }
  return icon
}

function turnFor (/* latLng */ minus2, /* latLng */ minus1, /* latLng */ current) {
  let bearing = null
  if (!minus2) {
    // ok, just the angle to current from minus 1
    bearing = bearingBetween(minus1, current)
  } else if (!current) {
    // ok, for the previous 2 legs
    bearing = bearingBetween(minus2, minus2)
  } else {
    // sort out the two directions
    const bearing1 = bearingBetween(minus2, minus1)
    const bearing2 = bearingBetween(minus1, current)
    bearing = (bearing1 + bearing2) / 2
  }
  console.log(minus2, minus1, current)
  return bearing
}

function createMarker (/* string */ icon, /* latLng */ location, /* boolean */ lightweight, /* string */ title) {
  const iconToUse = lightweight ? lightTurn : icon
  const turnIcon = L.icon({
    iconUrl: iconToUse,
    iconSize: [15, 15]
  })
  // console.log('North to East')
  const marker = L.marker(location, {
    icon: turnIcon, title: title, zIndexOffset: 1000
  })
  marker.bindPopup(title).openPopup()

  return marker
}

function markersFor (/* array */ plannedTurns, /* latLng */ start,
  /* boolean */ lightweight, /* grid */ grid) {
  const result = L.layerGroup()
  let minus1 = null
  let minus2 = null
  let pendingTurnLocation = null
  let pendingTurnName = null
  let current = start
  plannedTurns.forEach(turn => {
    const stateSuffix = turn.speed ? ' at ' + turn.speed + 'kts' : ''
    const turnName = turnNameFor(turn.turn) + ' - ' + turn.state + stateSuffix

    // loop through the routes
    if (turn.route) {
      // loop through the steps in this route
      turn.route.forEach(step => {
        const ptHex = grid.hexNamed(step)
        if (ptHex) {
          // remember the coords
          current = ptHex.centrePos

          // are we waiting to populate a marker?
          if (pendingTurnLocation) {
            // have we got enough data?
            if (minus1) {
              const angle = turnFor(minus2, minus1, current)
              const iconName = bearingMarkerFor(angle)
              result.addLayer(createMarker(iconName, pendingTurnLocation, lightweight, pendingTurnName))
              pendingTurnLocation = false
            }
          }

          // move everyone down the bed
          minus2 = minus1
          minus1 = current
        }
      })
      pendingTurnLocation = current
      pendingTurnName = turnName
    } else {
      // ok, nothing happening. add a static marker
      result.addLayer(createMarker(noTurn, current, lightweight, turnName))

      // forget about waiting for more coords
      pendingTurnLocation = null
    }
  })
  // are we waiting to populate a marker?
  // do we have a trailing pending turn?
  if (pendingTurnLocation) {
    // have we got enough data?
    if (minus1) {
      const angle = turnFor(minus2, minus1, null)
      const icon = bearingMarkerFor(angle)
      result.addLayer(createMarker(icon, current, lightweight, pendingTurnName))
      pendingTurnLocation = false
    }
  }
  return result
}

/** create a Leaflet elememt for this set of routes
  */
export default function planningRouteFor (/* array */ plannedTurns, /* latLng */ start,
  /* boolean */ lightweight, /* grid */ grid, /* string */ color) {
  const thisLayer = L.layerGroup()

  // start with the line
  const theLine = lineFor(plannedTurns, start, lightweight, grid)

  // set the styling
  theLine.color = color

  thisLayer.addLayer(theLine)

  // also sort out the markers
  const markers = markersFor(plannedTurns, start, lightweight, grid, color)

  // also declutter the markers

  thisLayer.addLayer(markers)

  return thisLayer
}
