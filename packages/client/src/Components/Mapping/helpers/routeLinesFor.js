import L from 'leaflet'

// the images we use to annotate planning legs
import turnLeft from '../images/turn-left.png'
import turnRight from '../images/turn-right.png'
import turnEnd from '../images/turn-end.png'
import noTurn from '../images/no-turn.png'
import lightTurn from '../images/light-turn.png'

import turnNameFor from './turnNameFor'

function lineFor (/* array */ turns, /* latLng */ start,
  /* boolean */ lightweight, /* grid */ grid, /* string */ color, /* int */ planningFor, /* boolean */ highlight, /* boolean */ historyTrack) {
  // note - we will actually start with a layer group, in case we're showing
  // a bold line and a feint line
  const res = L.layerGroup()

  let weight
  if (highlight) {
    // just make it a bold track
    weight = 4
  } else {
    weight = lightweight && !planningFor ? 1 : 2
  }
  const dashArray = historyTrack ? [] : lightweight ? [1, 7] : [4, 8]
  const boldLine = L.polyline([], {
    dashArray: dashArray,
    weight: weight,
    color: color
  })
  const feintLine = L.polyline([], {
    dashArray: dashArray,
    weight: 2,
    color: color
  })

  if (turns) {
    const boldLatLongs = [start]
    const feintLatLongs = []
    let lastPos = null
    turns.forEach(turn => {
      const list = (!planningFor) || planningFor >= turn.turn ? boldLatLongs : feintLatLongs
      // loop through the routes
      if (turn.route && turn.route.length > 0) {
        // loop through the steps in this route
        turn.route.forEach(step => {
          const ptHex = grid.hexNamed(step)
          if (ptHex) {
            const location = ptHex.centrePos
            // is this the first feint line?
            if (list.length === 0) {
              if (lastPos) {
                list.push(lastPos)
              } else {
                list.push(start)
              }
            }
            list.push(location)
            lastPos = location
          }
        })
      } else {
        // just see if we have a position
        if (turn.position) {
          const ptHex = grid.hexNamed(turn.position)
          if (ptHex) {
            // special case - this is the first location, before we have a route
            list.shift() // clear the start point
            const location = ptHex.centrePos
            list.push(location)
          }
        }
      }
    })
    if (boldLatLongs.length > 0) {
      // if we're not doing planningFor, it's history - so append current position
      // see of we're only one item long. If so, we should append the start
      if (historyTrack) {
        boldLatLongs.push(start)
      }
      boldLine.setLatLngs(boldLatLongs)
      res.addLayer(boldLine)
    }
    boldLine.setLatLngs(boldLatLongs)
    if (feintLatLongs.length > 0) {
      feintLine.setLatLngs(feintLatLongs)
      res.addLayer(feintLine)
    }
  }

  return res
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
function bearingMarkerFor (/* number */ angle) {
  let icon

  if (angle === 180 || angle === 360 || angle === 0) {
    // for the 180 and 360, which are flat icons so end icon is used
    icon = turnEnd
  } else if (angle > 0 && angle < 90) {
    // North to East
    icon = turnLeft
  } else if (angle < 180) {
    // East to South
    icon = turnRight
  } else if (angle < 260) {
    // South to West
    icon = turnLeft
  } else if (angle < 271) {
    // South
    icon = turnEnd
  } else if (angle < 360) {
    // West to North
    icon = turnRight
  } else if (angle === undefined || angle === null) {
    // as some angles are undefined just use the end icon until this can be figured out
    icon = turnEnd
  } else {
    icon = turnEnd
  }
  return icon
}

function turnFor (/* latLng */ minus2, /* latLng */ minus1, /* latLng */ current, /* string */ comment) {
  let bearing = null
  if (!minus2) {
    // ok, just the angle to current from minus 1
    bearing = bearingBetween(minus1, current)
    if (comment) {
      console.log(comment, 'type 1', minus1, current, bearing)
    }
  } else if (!current) {
    // ok, for the previous 2 legs
    bearing = bearingBetween(minus1, minus2)
    if (comment) {
      console.log(comment, 'type 2', minus1, minus2, bearing)
    }
  } else {
    // sort out the two directions
    const bearing1 = bearingBetween(minus2, minus1)
    const bearing2 = bearingBetween(minus1, current)
    bearing = (bearing1 + bearing2) / 2
    if (comment) {
      console.log(comment, 'type 3', bearing1, bearing2, bearing)
    }
  }
  return bearing
}

function createMarker (/* string */ icon, /* latLng */ location, /* boolean */ lightweight,
  /* string */ title, /* function */ waypointCallback, /* object */ context, /* int */ turnId, /* int */ planningFor) {
  // actually, we're adding two items, so put them into a layer group
  const res = L.layerGroup()

  // we use a flag to prevent these items being de-cluttered - since we want the
  // marker and the label stay next to each other
  res.do_not_declutter = true

  const iconToUse = lightweight ? lightTurn : icon
  const turnIcon = L.icon({
    iconUrl: iconToUse,
    iconSize: [15, 15]
  })
  const marker = L.marker(location, {
    icon: turnIcon,
    title: title,
    zIndexOffset: 1000
  })

  // do we register the click handler?
  if (!lightweight) {
    // do we even have a click handler?
    if (waypointCallback) {
      marker.on('click', waypointCallback)
    }
  }

  // do we want to show markers?
  if (!lightweight || planningFor === turnId) {
    // also create the divIcon, with the name
    const label = L.divIcon({ html: title, className: 'map-turn-marker', iconSize: [200, 20], iconAnchor: [0, 10] })
    const divMarker = L.marker(location, { icon: label })
    res.addLayer(divMarker)
  }

  // TODO we probably should be passing the context (scope) like this
  marker.context = context
  marker.turnId = turnId

  res.addLayer(marker)

  return res
}

function markersFor (/* array */ turns, /* latLng */ start,
  /* boolean */ lightweight, /* grid */ grid, /* function */ waypointCallback, /* int */ planningFor, /* object */ context) {
  const result = L.layerGroup()
  if (turns) {
    let minus1 = start // the start point of the track is used as the 'last point'
    let minus2 = null
    let pendingTurnLocation = null
    let pendingTurnName = null
    let current = start
    let turnId = 0

    turns.forEach(turn => {
      const stateSuffix = turn.status.speedKts ? ' @ ' + turn.status.speedKts + 'kts' : ''
      const turnName = turnNameFor(turn.turn) + ': ' + turn.status.state + stateSuffix
      turnId = turn.turn

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
                const angle = turnFor(minus2, minus1, current)//, turnNameFor(turn.turn - 1))
                const iconName = bearingMarkerFor(angle)
                result.addLayer(createMarker(iconName, pendingTurnLocation, lightweight, pendingTurnName, waypointCallback, context, turnId - 1, planningFor))
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
        let location
        let thisTurnName
        if (turn.position) {
          // we're at the start of the data
          thisTurnName = turnNameFor(turn.turn + 1) + ': ' + turn.status.state + stateSuffix
          const ptHex = grid.hexNamed(turn.position)
          if (ptHex) {
            location = ptHex.centrePos
          }
        } else {
          location = minus1
          thisTurnName = turnNameFor(turn.turn) + ': ' + turn.state + stateSuffix
        }
        minus2 = minus1
        minus1 = current
        // ok, nothing happening. add a static marker
        result.addLayer(createMarker(noTurn, location, lightweight, thisTurnName, waypointCallback, context, turnId, planningFor))
      }
    })
    // are we waiting to populate a marker?
    // do we have a trailing pending turn?
    if (pendingTurnLocation) {
      // have we got enough data?
      if (minus1) {
        const angle = turnFor(minus2, minus1, null)
        const icon = bearingMarkerFor(angle)
        result.addLayer(createMarker(icon, current, lightweight, pendingTurnName, waypointCallback, context, turnId - 1, planningFor))
        pendingTurnLocation = null
      }
    }
  }

  return result
}

/** create a Leaflet elememt for this set of routes
  */
export default function routeLinesFor (/* array */ plannedTurns, /* history */ history, /* latLng */ start,
  /* boolean */ lightweight, /* grid */ grid, /* string */ color, /* function */ waypointCallback, /* int */ planningFor, /* boolean */ highlight, /* object */ context) {
  const thisLayer = L.layerGroup()

  // past history
  const historyLine = lineFor(history, start, lightweight, grid, color, planningFor, highlight, true)
  historyLine.color = color
  thisLayer.addLayer(historyLine)

  //  planned routes
  const plannedLine = lineFor(plannedTurns, start, lightweight, grid, color, planningFor, highlight, false)
  plannedLine.color = color
  thisLayer.addLayer(plannedLine)

  // also sort out the markers
  const turnWayInTheFuture = 1000
  const historyMarkers = markersFor(history, start, false, grid, null, turnWayInTheFuture, context)
  thisLayer.addLayer(historyMarkers)

  // also sort out the markers
  const futureMarkers = markersFor(plannedTurns, start, lightweight, grid, waypointCallback, planningFor, context)
  thisLayer.addLayer(futureMarkers)

  return thisLayer
}
