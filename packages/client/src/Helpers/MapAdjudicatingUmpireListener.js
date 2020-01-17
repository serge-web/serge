import L from 'leaflet'
import defaultHexStyle from './data/default-hex-style'
import colorFor from './colorFor'
import declutterMarkers from './declutterMarkers'
import plannedStateFor from './plannedStateFor'
import turnLeft from './data/turn-left.png'
import turnRight from './data/turn-right.png'
import turnEnd from './data/turn-end.png'
import noTurn from './data/no-turn.png'

export default class MapAdjudicatingListener {
  constructor (map, grid) {
    this.grid = grid

    // create our two lines, one for planning, one for history
    this.planningLine = L.polyline([], {
      color: '#fff',
      dashArray: [1, 4]
    })
    this.map = map
    this.planningLine.addTo(map)
    this.historyLine = L.polyline([], {
      color: '#0f0'
    })
    this.historyLine.addTo(map)

    this.plannedRoutes = L.layerGroup().addTo(map) // for the planned routes

    this.routeHexes = [] // hexes representing route
    this.routeLats = [] // lad-lngs for route
    this.achievableCells = [] // hexes representing achievable area
    this.startHex = null // hex for start drag operation
    this.lastHex = null // most recent cell travelled through

    // keep track of who we're listening to
    this.registeredListeners = []
  }

  clearListeners () {
    this.registeredListeners.forEach(marker => {
      // next lines commented out, until we've refactored JS into functions
      // marker.off('drag', dragHandler)
      // marker.off('drag', dragEndHandler)

      marker.unbindPopup()
    })

    // and empty the array
    this.registeredListeners = []
  }

  handleVisClick (event) {
    console.log('Vis change for:', event)
  }

  assetPopupFpr (asset) {
    const descStr = 'Force:' + asset.force + ', Type:' + asset.platformType

    let perString = '<ul>'
    if (asset.perceptions) {
      for (const key in asset.perceptions) {
        const perception = asset.perceptions[key]
        const perType = perception.type ? perception.type : 'unknown'
        perString += '<li>' + key + ':' + perception.force + ', ' + perType
      }
    }
    perString += '</ul>'

    const forces = ['Red', 'Blue']
    let visString = '<ul>'
    forces.forEach((force) => {
      if (asset.force !== force) {
        const isVis = !!asset.perceptions[force]
        const visStr = isVis ? 'Checked' : ''
        // const event = { force: asset.force, asset: asset.name, visFor: force }
        // this.handleVisClick(event)
        // TODO: attach onclick handler in next line
        const controlStr = '<input type="checkbox" name="vehicle3" value="Boat"' + visStr + '>' + force + '</input>'
        visString += '<li>' + controlStr + '</li>'
      }
    })

    let conditionStr = '<ul>'
    const pType = asset.platformTypeDetail
    if (pType.conditions) {
      for (const key2 of pType.conditions) {
        const selected = asset.condition === key2 ? 'checked="checked"' : ''
        // TODO: attach onclick handler in next line
        const stateCtrl = '<input type="radio" name="vehicle3" ' + selected + ' value="' + key2 + '">' + key2 + '</input><br/>'
        conditionStr += stateCtrl
      }
    }
    conditionStr += '</ul>'

    return '<b>' + asset.name + '</b><br/>' + descStr + '<hr/>Perceived as:' + perString + '<hr/>Visible to:' + visString + '<hr/>Current Condition:' + conditionStr + '</p>'
  }

  /** calculate the angle at the centre point.
   * Note: if first or last element are missing, the angle
   * should be perpendicular to the leg that is present
   * */
  getTurnMarkerOrientationFor (turnName, pMinus1, p, pPlus1) {
    // error handling for the location array import
    if (p == null || p === undefined) {
      // this is because the top left green marker returns a null value (TODO: Work out where this is coming from)
      p = [13.430997652302832, 43.104098900000004]
    }
    if (pMinus1 === undefined || pMinus1 === null) {
      // console.log('pMinus1 has an undefined or null value')
      pMinus1 = p
      // console.log(pMinus1)
    }
    if (pPlus1 === undefined || pPlus1 === null) {
      console.log('pPlus1 has an undefined or null value')
      pPlus1 = p
      // console.log(pMinus1)
    } else {
      // console.log('No null values found')
    }

    var arr1 = Object.values(pMinus1)
    var arr2 = Object.values(pPlus1)

    var dLon = (arr1[1] - arr2[1])

    var lat1 = arr1[0]
    var lat2 = arr2[0]

    var y = Math.sin(dLon) * Math.cos(lat2)
    var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon)

    var brng = Math.atan2(y, x)

    brng = brng * 180 / Math.PI
    brng = (brng + 360) % 360
    brng = 360 - brng // count degrees clockwise - remove to make counter-clockwise

    console.log('in calculation:', turnName, Math.round(brng), brng)

    return brng
    // note: we may have some missing fields if it's at the start/end of the line (Maybe this is why null values appear)
  }

  getPlannedRoutesFor (asset, turnPlannedFor) {
    var res = null
    const planned = asset.plannedTurns
    if (planned) {
      const thisLinePts = [] // points up the current planned turn
      const futureLinePts = [] // points beyond the planned turn
      const turnMarkers = []
      let lastCoordInRoute = null
      let posMinus1 = null
      let posMinus2 = null
      let turnPending = false

      const context = this

      var extendLine = function (step, turnNumber, grid) {
        const ptHex = grid.hexNamed(step)
        if (ptHex) {
          const location = ptHex.centrePos

          // do we have a payload with a pending turn?
          if (turnPending) {
            // store the orientation in the payload object
            turnPending.orientation = context.getTurnMarkerOrientationFor(turnNumber, posMinus2, posMinus1, location)

            // clear the flag
            turnPending = null
          }
          if (turnNumber <= turnPlannedFor) {
            thisLinePts.push(location)
          } else {
            // is this the start of the future points?
            if (futureLinePts.length === 0) {
              // do we have a preceding line?
              if (thisLinePts.length > 0) {
                // ok, start off with a bit from the end of the previous leg
                futureLinePts.push(thisLinePts[thisLinePts.length - 1])
              }
            }
            futureLinePts.push(location)
          }
          // this _may_ be the last coord, remember it
          lastCoordInRoute = location

          // for the turn marker alignment we need the last few coords
          posMinus2 = posMinus1
          posMinus1 = location
        } else {
          console.log('failed to find hex cell for:', step)
        }
      }

      for (const [key, route] of Object.entries(planned)) {
        const steps = route.route
        const turnNumber = parseInt(key.substr(1))
        // is there a planned route?
        if (steps) {
          // create new line
          steps.forEach((step) => extendLine(step, turnNumber, this.grid))
        }
        // the data for the marker is common to both logic paths, declare it here
        const payload = {
          name: key,
          turn: turnNumber,
          state: route.state,
          speed: route.speed,
          asset: asset.name
        }
        if (lastCoordInRoute) {
          payload.coord = lastCoordInRoute
        } else {
          // special handling. if this a stationery, and the platform is
          // stationery, then we how a turn marker at the start point
          const ptHex = this.grid.hexNamed(asset.position)
          if (ptHex) {
            payload.coord = ptHex.centrePos
          }
        }
        if (payload.coord) {
          turnMarkers.push(payload)

          // we need to sort the alignment for this payload, remember it
          turnPending = payload
        }
      }

      // do we have still have a pending turn?
      if (turnPending) {
        // store the orientation in the payload object
        turnPending.orientation = context.getTurnMarkerOrientationFor('last', posMinus2, posMinus1, lastCoordInRoute)

        // clear the flag
        turnPending = null
      }

      // did we find any?
      if (thisLinePts.length > 0 || futureLinePts.length > 0) {
        // composite object to store line plus markers
        res = L.layerGroup()
        // ok, create line
        const line = L.polyline(thisLinePts, {
          color: colorFor(asset.force)
        })
        res.addLayer(line)

        if (futureLinePts.length > 0) {
          const futureLine = L.polyline(futureLinePts, {
            color: colorFor(asset.force),
            weight: '3',
            dashArray: '4, 16',
            dashOffset: '0'
          })
          res.addLayer(futureLine)
        }

        // try to do a bit of de-conflicting, if we have multiple markers in the same cell
        var lastMarker = null
        const clusters = {}
        turnMarkers.forEach((marker) => {
          if (lastMarker) {
            const thisPos = marker.coord
            const lastPos = lastMarker.coord
            if (thisPos === lastPos) {
              const index = thisPos.lat + ', ' + thisPos.lng
              // is this already a cluster?
              var existing = clusters[index]
              if (!existing) {
                existing = [lastMarker]
                clusters[index] = existing
              }
              existing.push(marker)
            }
          }
          lastMarker = marker
        })
        declutterMarkers(clusters, this.grid.delta / 3)

        
        var myFuncCalls = 0;

        turnMarkers.forEach((marker, index, arr) => {
          var prevSpeed;

          if(index > 0){
            prevSpeed = arr[index-1].speed
          }

          if(marker.speed === 0 && prevSpeed === 0){
            myFuncCalls++;
          }
          // getting the angle result
          const angleResult = Math.round(marker.orientation)
          // need to check if the value is between these values
          var iconName
          if (angleResult === 180 || angleResult === 360) {
            // for the 180 and 360, which are flat icons so end icon is used
            iconName = turnEnd
          } if(myFuncCalls >= 2){
            // as some angles are undefined just use the end icon until this can be figured out
            console.log("Using the No turn Icon")
            iconName = noTurn
          } else if (angleResult > 0 && angleResult < 90) {
            // North to East
            iconName = turnLeft
          } else if (angleResult < 180) {
            // East to South
            iconName = turnRight
          } else if (angleResult < 271) {
            // South to West
            iconName = turnLeft
          } else if (angleResult < 360) {
            // West to North
            iconName = turnRight
          } else if (angleResult === undefined || angleResult === null) {
            // as some angles are undefined just use the end icon until this can be figured out
            iconName = turnEnd
          } else {
            iconName = turnEnd
          } 

          // console.log('turn:' + marker.name + 'angle:' + Math.round(angleResult))

          var turnMarker
          if (iconName) {
            // creating the different icons
            const turnIcon = L.icon({
              iconUrl: iconName,
              iconSize: [15, 15]
            })
            // console.log('North to East')
            turnMarker = L.marker(marker.coord, {
              draggable: true,
              icon: turnIcon
            })
          }

          // collate the data ready to send on accept/clear
          const payload = {
            force: asset.force,
            asset: asset.name,
            turn: marker.name
          }
          let popup = '<b>' + marker.asset + ' ' + marker.name + '</b><ul>'
          popup += 'State:' + marker.state + ' Speed:' + marker.speed + 'kts'
          popup += '<hr/>'

          // put in the form to set the platform state
          if (marker.turn >= turnPlannedFor) {
            // TODO: do we have concept of current speed?  Maybe take from history
            popup += plannedStateFor(marker.state, 0, asset.platformTypeDetail, asset.platformSpeeds)
            popup += '<hr/>'
          }
          popup += '<ul>'
          if (marker.turn === turnPlannedFor) {
            // TODO: handler for this button operation
            // ok, we can accept the planned route up to here
            popup += '<li><input type="button" value="Accept to here"></li>'
            console.log('sending', payload)
          }
          if (marker.turn >= turnPlannedFor) {
            // TODO: handler for this button operation
            popup += '<li><input type="button" value="Clear from here"></li></ul>'
          }

          // TODO: create handler callbacks for these 'acceptTo' and 'clearFrom' events
          turnMarker.bindPopup(popup)
          turnMarker.bindTooltip(marker.name, {
            permanent: true,
            direction: 'right'
          })

          // store the force/asset name
          res.name = asset.force + '_' + asset.name

          res.addLayer(turnMarker)
          // console.log(turnMarkers)
        })
      }
    }
    return res
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker, currentTurn) {
    // remember we're listing to it
    this.registeredListeners.push(marker)

    const popupContent = this.assetPopupFpr(marker.asset)
    marker.bindPopup(popupContent).openPopup()

    marker.on('mouseover', e => {
      // create an id for this marker
      const myName = marker.asset.force + '_' + marker.asset.name

      // create a new route for this marker
      const thisRoute = this.getPlannedRoutesFor(marker.asset, currentTurn + 1)

      // we may not use the above route, but we only clear existing routes
      // if we have new one
      const clearRouteOnAnyHover = false

      // do we have a new route to display?
      if (thisRoute || clearRouteOnAnyHover) {
        // clear existing layers, if they're irrelevant
        var myRoutePresent = false
        const layers = this.plannedRoutes.getLayers()
        if (layers.length > 0) {
          const curRoute = layers[0]
          if (layers.length > 1) {
            console.error('too many layers' + layers.length)
          }
          // is it different to the current planned route?
          if (curRoute.name !== myName) {
            this.plannedRoutes.removeLayer(curRoute)
          } else {
            // don't worry, we're already displaying our layer
            myRoutePresent = true
          }
        }
        if (!myRoutePresent) {
          if (thisRoute) {
            // and put it on the map
            this.plannedRoutes.addLayer(thisRoute)
          }
        }
      }
    })

    marker.on('drag', e => {
      const cursorLoc = e.latlng

      const rangeStyle = {
        fill: true,
        color: '#ccc',
        opacity: 1.0
      }
      const routeStyle = {
        fill: true,
        color: '#249',
        opacity: 0.2
      }

      // hvae we calculated the achievable cells?
      if (this.achievableCells.length === 0) {
        // no, we must be starting a new line

        // is this a mobile element
        if (marker.mobile) {
          this.planningLine.setLatLngs([cursorLoc, cursorLoc])
        }

        this.startHex = this.grid.cellFor(cursorLoc)

        // limit distance of travel
        if (marker.stepRemaining) {
          this.achievableCells = this.grid.hexesInRange(this.startHex, marker.stepRemaining)
        } else {
          // nope, allow travel to anywhere
          this.achievableCells = this.grid.cells
        }

        // set the route-line color
        let hisColor
        if (marker.force === 'Red') {
          hisColor = '#ff0000'
        } else if (marker.force === 'Blue') {
          hisColor = '#000fff'
        } else if (marker.force === 'Green') {
          hisColor = '#19bd37'
        }
        this.planningLine.setStyle({
          color: hisColor
        })
        this.historyLine.setStyle({
          color: hisColor
        })

        //
        this.achievableCells = this.achievableCells.filter(cell => {
          if (marker.travelMode === 'land') {
            return cell.land
          } else if (marker.travelMode === 'sea') {
            return cell.sea
          } else if (marker.travelMode === 'air') {
            return true
          } else {
            return false
          }
        })

        // apply styling to the achievable cells
        this.achievableCells.forEach(cell => cell.polygon.setStyle(rangeStyle))

        // is this an achievable cell?
        const curCell = this.grid.cellFor(cursorLoc)

        if (this.achievableCells.includes(curCell)) {
          // ok, remember it
          this.lastHex = curCell
        }

        // and the track history
        if (marker.history) {
          // ok, draw the history line
          const historyLocs = []
          marker.history.forEach(cellName => {
            const cell = this.grid.hexNamed(cellName)
            historyLocs.push(cell.centrePos)
          })

          this.historyLine.setLatLngs(historyLocs)
        }
      } else {
        // retrieve the start point of the line

        // are we plotting a line?
        if (this.planningLine.length > 0) {
          this.start = this.planningLine.getLatLngs()[0]
          this.planningLine.setLatLngs([this.startHex.centrePos, cursorLoc])
        }

        // are we in a safe cell
        const curCell = this.grid.cellFor(cursorLoc)

        // is this an achievable cell?
        if (this.achievableCells.includes(curCell)) {
          // ok, remember it
          this.lastHex = curCell
        }

        // clear the old cells
        this.routeHexes.forEach(cell => {
          if (this.achievableCells.includes(cell)) {
            cell.polygon.setStyle(rangeStyle)
          } else {
            cell.polygon.setStyle(defaultHexStyle)
          }
        })

        // do we have a valid current cell?
        if (this.lastHex != null) {
          // get the route
          let newRoute = this.grid.hexesBetween(this.startHex, this.lastHex)

          // if we have a restricted possible region,
          // trim to it
          if (this.achievableCells) {
            newRoute = newRoute.filter(cell => this.achievableCells.includes(cell))
          }

          // and generate new cells
          this.routeLats = []
          this.routeHexes = newRoute
          if (marker.mobile) {
            this.routeHexes.forEach(cell => {
              cell.polygon.setStyle(routeStyle)
              this.routeLats.push(cell.centrePos)
            })
          } else {
            // insert the current location twice,
            // to give us a point marker
            if (this.lastHex) {
              this.routeLats.push(this.lastHex.centrePos)
              this.routeLats.push(this.lastHex.centrePos)
            }
          }

          if (this.routeLats.length > 1) {
            this.planningLine.setLatLngs(this.routeLats)
          }
        }
      }
    })
    marker.on('dragend', e => {
      // ooh, see if it had restricted travel
      if (marker.allowance && this.routeHexes.length > 0) {
        // consume some of it

        // calculate distance
        const start = this.routeHexes[0]
        const end = this.routeHexes[this.routeHexes.length - 1]
        const distance = start.distance(end)

        marker.stepRemaining -= distance

        // cheat. if we've consumed distance, give it
        // another allowance
        if (marker.stepRemaining === 0) {
          marker.stepRemaining = marker.allowance
        }

        // add these new cells as history
        if (!marker.history) {
          marker.history = []
        }
        this.routeHexes.forEach(cell => marker.history.push(cell.name))
      }

      // move the marker to the last valid location
      marker.setLatLng(this.lastHex.centrePos)

      // clear the line objects
      this.routeLats = []
      this.planningLine.setLatLngs([])
      this.historyLine.setLatLngs([])

      // clear the shaded cells
      this.routeHexes.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
      this.routeHexes = []
      this.achievableCells.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
      this.achievableCells = []
    })
  }
}
