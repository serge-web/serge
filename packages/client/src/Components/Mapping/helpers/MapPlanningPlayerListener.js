import L from 'leaflet'
import defaultHexStyle from '../data/default-hex-style'
import plannedModePopupFor from './plannedModePopupFor'
import colorFor from './colorFor'

// Import helpers
import padInteger from '../../../Helpers/padInteger'
import createButton from './createDebugButton'
import resetCurrentLeg from './resetCurrentLeg'
import submitClearLastLeg from './submitClearLastLeg'
import submitClearWholeRoute from './submitClearWholeRoute'
import planningRouteFor from './planningRouteFor'

// eslint-disable-next-line no-unused-vars
import glyph from 'leaflet.icon.glyph'

export default class MapPlanningPlayerListener {
  constructor (map, grid, force, turn, routeCompleteCallback, platformTypes) {
    this.grid = grid
    this.force = force
    // note - don't store the map, work with a layerGroup inside the map
    this.map = L.layerGroup().addTo(map)
    this.routeCompleteCallback = routeCompleteCallback
    this.turn = turn
    this.platformTypes = platformTypes

    this.plannedLats = [] // lad-lngs for route
    this.plannedHexes = [] // hexes for route

    this.routeHexes = [] // hexes representing route
    this.routeLats = [] // lad-lngs for route

    this.plannedLegs = [] // collated set of data, ready for transmission

    this.achievableCells = [] // hexes representing achievable area this turn
    this.startHex = null // hex for start drag operation
    this.lastHex = null // most recent cell travelled through

    this.currentMarker = null // the selected marker // TODO: it's only for development
    this.currentTurn = null // for dev, the turn that was clicked on

    this.allRoutes = [] // collection of routes for this turn

    // store some styling details, once, centrally
    this.rangeStyle = {
      fill: true,
      color: '#ccc',
      opacity: 1.0
    }
    this.routeStyle = {
      fill: true,
      color: '#249',
      opacity: 0.2
    }

    // create our two lines, one for planning, one for history
    this.routeLine = L.polyline([], {
      color: '#fff',
      dashArray: [1, 4]
    })
    this.plannedLine = L.polyline([], {
      color: '#0f0'
    })

    // put them on the map
    this.routeLine.addTo(map)
    this.plannedLine.addTo(map)

    // use layer groups to store data - so we can confidently remove them
    this.waypointMarkers = L.layerGroup().addTo(map)

    // TODO: drop these fake state change triggers
    this.btn1aImmobile = createButton(false, '1a. immobile state', () => {
      this.platformStateAssigned(this.currentMarker, {
        mobile: false
      })
    }).addTo(map)
    this.btn1bMobile10 = createButton(false, '1b. mobile 10kts', () => {
      this.platformStateAssigned(this.currentMarker, {
        speed: 10,
        mobile: true
      })
    }).addTo(map)
    this.btn1cMobile30 = createButton(false, '1c. mobile 30kts', () => {
      this.platformStateAssigned(this.currentMarker, {
        speed: 30,
        mobile: true
      })
    }).addTo(map)
    this.btn2aResetLeg = createButton(false, '2a. reset leg', () => {
      this.plannedLegs = resetCurrentLeg(this.plannedLegs, this.debugWaypointName)
    }).addTo(map)
    this.btn3aClearLastLeg = createButton(false, '3a. clear last leg', () => {
      this.plannedLegs = submitClearLastLeg(this.plannedLegs)
      // TODO: shouldn't need to do this once we have state
      this.btn3cSubitWholeRoute.disable()
      this.btn3aClearLastLeg.disable()

      this.btn3bClearWholeRoute.disable()
    }).addTo(map)
    this.btn3bClearWholeRoute = createButton(false, '3b. clear route', () => {
      this.plannedLegs = submitClearWholeRoute()

      // TODO: shouldn't need to do this once we have state
      this.btn3cSubitWholeRoute.disable()
      this.btn3aClearLastLeg.disable()
      this.btn3bClearWholeRoute.disable()
    }).addTo(map)
    this.btn3cSubitWholeRoute = createButton(false, '3c. Submit route', () => {
      this.submitWholeRoute(this.currentMarker.asset, this.plannedLegs)
      // TODO: drop these buttons
      // and reset the buttons
      this.btn1aImmobile.disable()
      this.btn1bMobile10.disable()
      this.btn1cMobile30.disable()
      this.btn2aResetLeg.disable()
      this.btn3aClearLastLeg.disable()
      this.btn3bClearWholeRoute.disable()
      this.btn3cSubitWholeRoute.disable()
    }).addTo(map)
  }

  /** ditch the data for this listener
   */
  clearListeners () {
    // ditch the listeners
    
    // clear the map layer

    // detach the map
  }

  /** the user has finished planning the route for this platform
   * send the data to the callback, and prepare for the next planned route
   */
  submitWholeRoute (/* object */ asset, /* array<routes */ routes) {
    // send the callback
    this.routeCompleteCallback(asset.force, asset.name, this.plannedLegs)

    // remove the planning leg & markers

    // clear the marker
    this.currentMarker = null
    this.clearOnNewLeg()
  }

  /** create a new list of cells, that have been filtered to those
   * that are applicable to the provided domain
   */
  cellsValidForThisDomain (/* array */ cells, /* string */ domain) {
    return cells.filter(cell => {
      switch (domain) {
        case 'land':
          return cell.land
        case 'sea':
          return cell.sea
        case 'air':
          return true
        default:
          return true
      }
    })
  }

  planningRouteFor (/* array */ plannedRoutes) {

  }

  /** create a storage object for this object */
  dataFor (/* marker */ marker, /* array platform types */ platformTypes) {
    const plannedTurns = marker.asset.plannedTurns ? marker.asset.plannedTurns : []
    const asset = marker.asset
    const platformType = platformTypes.find(type => type.name === asset.platformType)
    const forceColor = colorFor(asset.force)
    const hisLocation = this.grid.hexNamed(asset.position).centrePos
    const lightRoutes = planningRouteFor(plannedTurns, hisLocation, true, this.grid, forceColor)
    // clone the planned routes, in case we wish to reset it
    const currentRoutes = JSON.parse(JSON.stringify(plannedTurns))
    const res = {
      marker: marker,
      original: plannedTurns,
      current: currentRoutes,
      platformType: platformType,
      lightRoutes: lightRoutes
    }
    return res
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    // is it for the current force?
    if (marker.asset.force === this.force) {
      // store the details for this force
      const thisData = this.dataFor(marker, this.platformTypes)
      this.allRoutes.push(thisData)

      // and add to the map
      this.map.addLayer(thisData.lightRoutes)

      // listen for it being clicked

      const popupContent = plannedModePopupFor(marker.asset)
      marker.bindPopup(popupContent).openPopup()

      marker.on('click', e => {
        if (this.currentMarker) {
          // do any cleaning up necessary
        }
        // we have to trick module by pushing capturing marker - so we know
        // who to advance.
        this.currentMarker = marker

        // TODO: we should also take a deep copy of the planned legs, since we're going to be modifying them
        // this will be easier to do once we're submitting planned legs

        // TODO: drop these dev steps
        this.btn1aImmobile.enable()
        this.btn1bMobile10.enable()
        this.btn1cMobile30.enable()
      })

      // ok, the popup will eventually manage state
      console.log(marker)
      marker.options.draggable = false
    }
  }

  clearAchievableCells () {
    this.achievableCells.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
    this.achievableCells = []
  }

  /** we're entering a new planning step - calculate which cells are
   * achievable given the range remaining
   */
  updateAchievableCellsFor (/* hex */location, /* int */rangeRemaining, /* string */travelMode) {
    // work out the cells in range
    if (rangeRemaining < 100) {
      this.achievableCells = this.grid.hexesInRange(location, rangeRemaining)
    } else {
      // just give him the whole area
      this.achievableCells = this.grid.cells
    }

    // filter the achievable cells for his domain
    this.achievableCells = this.cellsValidForThisDomain(this.achievableCells, travelMode)

    // plot the available range
    this.achievableCells.forEach(cell => cell.polygon.setStyle(this.rangeStyle))
  }

  updateRouteLinesForForce (/* string */ force, /* array<Line> */ lines) {
    const hisColor = colorFor(force)
    lines.forEach((line) => {
      line.setStyle({
        color: hisColor
      })
    })
  }

  simplifyHexes (/* array<hex cell */cells) {
    const res = []
    cells.forEach(cell => { res.push(cell.name) })
    return res
  }

  clearOnNewLeg () {
    this.plannedLats = []
    this.routeLats = []
    this.routeHexes = []
    this.plannedLegs = []
  }

  /** player has indicated the planned state for a platform. Update the
   * UI accordingly
   */
  platformStateAssigned (/* object */marker, /* object */newState) {
    if (newState.mobile) {
      // ok, get ready for step planning & dragging
      this.startHex = this.grid.cellFor(marker.asset.loc)

      // do some initialisation
      this.clearOnNewLeg()

      // calculate the steps remaining
      const speed = newState.speed
      const stepSize = 30
      const stepsPerHour = (60 / stepSize)
      const gridDelta = 5
      const range = speed / gridDelta / stepsPerHour // work out how many NM in 30 minutes
      const allowance = range

      // store the steps remaining
      marker.planning = {
        allowance: range,
        remaining: allowance
      }

      // do we already have achievable cells?
      // TODO: our logic _Should_ clear these at the end of a leg
      this.clearAchievableCells()

      // plot the achievable cells for this distance
      this.updateAchievableCellsFor(this.startHex, marker.planning.remaining, marker.travelMode)

      // also create a new marker, used to plot the path
      // Creates a red marker with the coffee icon
      const redMarker = L.icon.glyph({
        prefix: 'fa',
        glyph: 'location-arrow',
        glyphSize: '13px'
      })

      const planningMarker = L.marker(marker.asset.loc, {
        icon: redMarker,
        draggable: 'true',
        zIndexOffset: 1000
      })
      planningMarker.addTo(this.waypointMarkers)

      // put the next turn in the planning marker
      planningMarker.planningFor = this.currentTurn + 1

      // set the route-line color
      this.updateRouteLinesForForce(marker.force, [this.routeLine, this.plannedLine])

      // handle movement of the planning marker
      planningMarker.on('drag', e => {
        const cursorLoc = e.latlng
        const cursorHex = this.grid.cellFor(cursorLoc)

        // note: the dragEnd event doesn't get a location, we'll need to store it from here
        this.lastCursorLoc = cursorLoc

        // is this location safe?
        if (!this.achievableCells.includes(cursorHex)) {
          // drop out, we can't handle it - so we
          // won't be changing any data based on it
          return
        }

        // ok, we have a valid location. clear the existing route
        this.routeLats = [cursorLoc, cursorLoc]
        this.routeLine.setLatLngs(this.routeLats)

        // clear the old cells
        this.routeHexes.forEach(cell => {
          if (this.achievableCells.includes(cell)) {
            cell.polygon.setStyle(this.rangeStyle)
          } else {
            cell.polygon.setStyle(defaultHexStyle)
          }
        })

        // do we know the drag start?
        if (!this.startHex) {
          // drag operation just started
          this.startHex = cursorHex
        } else {
          // mid-drag
          this.lastHex = cursorHex
        }

        // calculate the route
        let newRoute = this.grid.hexesBetween(this.startHex, this.lastHex)

        // if we have a restricted possible region,
        // trim to it
        if (this.achievableCells) {
          newRoute = newRoute.filter(cell => this.achievableCells.includes(cell))
        }

        // and generate new cells
        this.routeLats = []
        this.routeHexes = newRoute
        this.routeHexes.forEach(cell => {
          cell.polygon.setStyle(this.routeStyle)
          this.routeLats.push(cell.centrePos)
        })

        if (this.routeLats.length > 1) {
          this.routeLine.setLatLngs(this.routeLats)
        }
      })
      planningMarker.on('dragend', e => {
        const tmpCursorLoc = this.lastCursorLoc
        const cursorHex = this.grid.cellFor(tmpCursorLoc)
        const cursorLoc = cursorHex.centrePos

        // put the planning marker into the centre of the cell, even though
        // it may have been dropped at the edge
        planningMarker.setLatLng(cursorLoc)

        // clear that lastCursorLoc, to be sure we don't abuse it
        delete this.lastCursorLoc

        // drop the first hex from the list, since that was the start point
        this.routeHexes.shift()

        // ok, determine if we are at the end of a leg
        const len = this.routeHexes.length

        // reduce the marker allowance
        // note: we reduce the length by one, so we don't count the starting cell
        marker.planning.remaining -= len

        // the planning hexes now become the planned lats
        this.plannedLats = this.plannedLats.concat(this.routeLats)
        this.plannedLine.setLatLngs(this.plannedLats)

        // build up a fill list of steps
        this.plannedHexes = this.plannedHexes.concat(this.routeHexes)

        // if we have no more leg, push this one, and give us a fresh allowance
        if (marker.planning.remaining === 0) {
          const turnString = this.turnNameFor(planningMarker.planningFor)
          // capture this planned leg
          const hexList = this.simplifyHexes(this.routeHexes)
          this.plannedLegs.push({ turn: turnString, route: hexList })
          marker.planning.remaining = marker.planning.allowance

          // show a waypoint marker, for the end of turn
          const waypointIcon = L.icon.glyph({
            prefix: 'fa',
            glyph: 'pause'
          })

          const waypointMarker = L.marker(cursorLoc, {
            icon: waypointIcon,
            draggable: 'false',
            title: turnString
          })
          console.log('Planning marker:', waypointMarker)
          waypointMarker.addTo(this.waypointMarkers)
          waypointMarker.dragging.disable()

          // give it a form to clear from this point
          const waypointPopupContent = '<b>Turn T02</b><ul><li>[Reset from here]</li></ul>'
          waypointMarker.bindPopup(waypointPopupContent)

          // TODO: delete these button interactions
          waypointMarker.on('click', e => {
            // for debug, we should use this waypoint marker
            this.debugWaypointName = turnString
            this.btn2aResetLeg.enable()
          })

          // put the next turn in the planning marker
          planningMarker.planningFor += 1

          // we should listen for the planning marker to be clicked, so we can send the legs
          const endOfRoutePopup = '<b>Route for' + marker.asset.name + '</b><ul><li>[Submit]</li><li>[Clear this leg]</li><li>[Clear all]</li></ul>'
          planningMarker.bindPopup(endOfRoutePopup)

          // TODO: delete these button interactions
          // TODO: only bind if it's not already bound
          planningMarker.on('click', e => {
            this.btn3aClearLastLeg.enable()
            this.btn3bClearWholeRoute.enable()
            this.btn3cSubitWholeRoute.enable()
          })
        }

        // we've finished with these range rings
        this.clearAchievableCells()

        // plot the achievable cells for this distance
        this.updateAchievableCellsFor(cursorHex, marker.planning.remaining, marker.travelMode)

        // clean up
        this.startHex = null
        this.endHex = null
        this.routeHexes = []
        this.routeLats = []
      })
    }
  }
}
