import L from 'leaflet'

// const defPlannedTurns = [
//   {
//     "turn": 1,
//     "route": [
//       "R22",
//       "Q22"
//     ],
//     "speed": 20,
//     "state": "Transitting"
//   },
//   {
//     "turn": 2,
//     "route": [
//       "P21",
//       "O21"
//     ],
//     "speed": 20,
//     "state": "Transitting"
//   }]

function lineFor (/* array */ plannedTurns, /* latLng */ start,
  /* boolean */ lightweight, /* grid */ grid) {
  const polyLine = L.polyline([], {
    dashArray: [1, 4]
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
  var d2r = L.LatLng.DEG_TO_RAD
  var r2d = L.LatLng.RAD_TO_DEG
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

function turnFor (/* latLng */ minus2, /* latLng */ minus1, /* latLng */ current) {
  if (!minus2) {
    // ok, just the angle to current from minus 1
    const bearing = bearingBetween(minus2, minus1)
  } else {
    // sort out the two directions
    const bearing1 = bearingBetween(minus2, minus1)
    const bearing2 = bearingBetween(minus1, current)
  }
}

function markersFor (/* array */ plannedTurns, /* latLng */ start,
  /* boolean */ lightweight, /* grid */ grid) {
  const result = L.layerGroup()
  let minus1 = null
  let minus2 = null
  let pendingTurn = null
  plannedTurns.forEach(turn => {
    pendingTurn = null
    // loop through the routes
    if (turn.route) {
      // loop through the steps in this route
      turn.route.forEach(step => {
        const ptHex = grid.hexNamed(step)
        if (ptHex) {
          // remember the coords
          const current = ptHex.centrePos

          // are we waiting to populate a marker?
          if (pendingTurn) {
            // have we got enough data?
            if (minus1) {
              const angle = turnFor(minus2, minus1, current)
            }
          }

          // move everyone down the bed
          minus2 = minus1
          minus1 = current
        }
      })
    } else {
      // ok, nothing happening. add a static marker
    }
  })
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
  const markers = markersFor(/* array */ plannedTurns, /* latLng */ start,
    /* boolean */ lightweight, /* grid */ grid, /* string */ color)
  thisLayer.addLayer(markers)

  return thisLayer
}
