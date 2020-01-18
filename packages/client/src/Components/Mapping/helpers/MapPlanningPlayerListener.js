import L from 'leaflet'
import defaultHexStyle from '../data/default-hex-style'
import plannedModePopupFor from './plannedModePopupFor'
import colorFor from './colorFor'

// Import helpers
import createButton from './createDebugButton'
import resetCurrentLeg from './resetCurrentLeg'
import submitClearLastLeg from './submitClearLastLeg'
import submitClearWholeRoute from './submitClearWholeRoute'
import planningRouteFor from './planningRouteFor'
import turnNameFor from './turnNameFor'
import createStateButtonsFor from './createStateButtonsFor'
import roundToNearest from './roundToNearest'

// eslint-disable-next-line no-unused-vars
import glyph from 'leaflet.icon.glyph'

export default class MapPlanningPlayerListener {
  constructor (layer, map, grid, force, turn, routeCompleteCallback, platformTypes) {
    this.grid = grid
    this.force = force
    this.layer = L.layerGroup().addTo(layer) // the layer we add our items to
    this.map = map // the underlying base-map (required to add/remove toolbar controls)
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
    this.routeLine.addTo(layer)
    this.plannedLine.addTo(layer)

    // use layer groups to store data - so we can confidently remove them
    this.waypointMarkers = L.layerGroup().addTo(layer)
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
    // clone the planned routes, in case we wish to reset it
    const currentRoutes = JSON.parse(JSON.stringify(plannedTurns))
    const asset = marker.asset
    const platformType = platformTypes.find(type => type.name === asset.platformType)
    const lightRoutes = this.createPlanningRouteFor(currentRoutes, asset, true)
    const res = {
      marker: marker,
      asset: asset,
      original: plannedTurns,
      current: currentRoutes,
      platformType: platformType,
      lightRoutes: lightRoutes
    }
    return res
  }

  resetFromWaypointCallback (e) {
    const context = e.target.context
    const turnName = turnNameFor(e.target.turnId)
    // create the reset button
    context.btnResetFromWaypoint = createButton(true, 'Reset from ' + turnName, () => {
      context.currentRoute.lightRoutes.remove()
      context.currentRoute.lightRoutes.clearLayers()
      // clear route
      context.currentRoute.current = resetCurrentLeg(context.currentRoute.current, e.target.turnId)

      // rebuild route
      context.currentRoute.lightRoutes = context.createPlanningRouteFor(context.currentRoute.current, context.currentRoute.marker.asset, false).addTo(context.layer)

      // get the latest route
      console.log('current route:', context.currentRoute.current)
      const routes = context.currentRoute.current
      if (routes.length > 0) {
        // ok, we can start off with last state
        const lastR = routes[routes.length - 1]
        const newState = { state: lastR.state, speed: lastR.speed }

        // store the state - we'll use it for all legs, until the player changes their mind
        context.currentRoute.state = newState
        context.platformStateAssigned(context.currentRoute.marker, newState)
      }

      // lastly, remove the button
      context.btnResetFromWaypoint.remove()
    }).addTo(context.map)
  }

  createPlanningRouteFor (/* array turns */ currentRoutes, /* object */ asset, /* boolean */ lightweight) {
    const forceColor = colorFor(asset.force)
    const hisLocation = this.grid.hexNamed(asset.position).centrePos
    const context = this
    return planningRouteFor(currentRoutes, hisLocation, lightweight, this.grid, forceColor, this.resetFromWaypointCallback, context)
  }

  /** user has used either the command buttons, or the popup dialog to choose a new platform state */
  stateSelectedCallback (/* object */ state, /* number */ speed, /* object */ context) {
    // ok, set the current state
    console.log('new state selected:', state, speed)

    // store the state - we'll use it for all legs, until the player changes their mind
    context.currentRoute.state = { state: state, speed: speed }

    // now update the planning rings
    context.platformStateAssigned(context.currentRoute.marker, context.currentRoute.state)
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    // is it for the current force?
    if (marker.asset.force === this.force) {
      // store the details for this force
      const thisData = this.dataFor(marker, this.platformTypes)
      this.allRoutes.push(thisData)

      // and add to the map
      this.layer.addLayer(thisData.lightRoutes)

      // listen for it being clicked

      // const popupContent = plannedModePopupFor(marker.asset)
      //  marker.bindPopup(popupContent).openPopup()

      marker.on('click', e => {
        if (this.currentRoute) {
          // do any cleaning up necessary

          this.currentRoute.lightRoutes.remove()
          this.currentRoute.lightRoutes.clearLayers()
          this.currentRoute.lightRoutes = this.createPlanningRouteFor(this.currentRoute.current, this.currentRoute.marker.asset, true).addTo(this.layer)

          // and the planning bits
          this.clearAchievableCells()
          this.planningMarker.remove()
        }

        // now get the route for the new marker
        this.currentRoute = this.allRoutes.find(route => route.marker === marker)

        // drop the lightweight route
        this.currentRoute.lightRoutes.remove()
        this.currentRoute.lightRoutes.clearLayers()
        this.currentRoute.lightRoutes = this.createPlanningRouteFor(this.currentRoute.current, this.currentRoute.marker.asset, false).addTo(this.layer)

        if (this.currentRoute.state) {
          // ok, we can plan the next leg
          this.platformStateAssigned(this.currentRoute.marker, this.currentRoute.state)
        } else {
          // sort out the state commands for this asset
          const pType = this.platformTypes.find(pType => pType.name === marker.asset.platformType)
          console.log(pType)
          createStateButtonsFor(pType, this, this.stateSelectedCallback)
        }
      })

      // ok, the popup will eventually manage state
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
    if (newState.speed) {
      // sort out where to put the planning marker
      const route = this.currentRoute.current
      if (route && route.length > 0) {
        const points = route[route.length - 1]
        const cell = points.route[points.route.length - 1]
        this.startHex = this.grid.hexNamed(cell)
      } else {
        // use use the asset location
        const position = marker.asset.loc
        // ok, get ready for step planning & dragging
        this.startHex = this.grid.cellFor(position)
      }
      const startPos = this.startHex.centrePos

      // do some initialisation
      this.clearOnNewLeg()

      // calculate the steps remaining
      const speed = newState.speed
      const stepSize = 30
      const stepsPerHour = (60 / stepSize)
      const gridDelta = 5
      const roughRange = speed / gridDelta / stepsPerHour // work out how many NM in 30 minutes

      // check range is in 10s
      const range = roundToNearest(roughRange, 1)

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

      this.planningMarker = L.marker(startPos, {
        icon: redMarker,
        draggable: 'true',
        zIndexOffset: 1000
      })
      this.planningMarker.addTo(this.waypointMarkers)

      // put the next turn in the planning marker
      this.planningMarker.planningFor = this.currentTurn + 1

      // set the route-line color
      this.updateRouteLinesForForce(marker.force, [this.routeLine, this.plannedLine])

      // handle movement of the planning marker
      this.planningMarker.on('drag', e => {
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
      this.planningMarker.on('dragend', e => {
        const tmpCursorLoc = this.lastCursorLoc
        const cursorHex = this.grid.cellFor(tmpCursorLoc)
        const cursorLoc = cursorHex.centrePos

        // put the planning marker into the centre of the cell, even though
        // it may have been dropped at the edge
        this.planningMarker.setLatLng(cursorLoc)

        // clear that lastCursorLoc, to be sure we don't abuse it
        delete this.lastCursorLoc

        // drop the first hex from the list, since that was the start point
        this.routeHexes.shift()

        // ok, determine if we are at the end of a leg
        const len = this.routeHexes.length

        // reduce the marker allowance
        // note: we reduce the length by one, so we don't count the starting cell
        marker.planning.remaining -= len

        // build up a fill list of steps
        this.plannedHexes = this.plannedHexes.concat(this.routeHexes)

        // if we have no more leg, push this one, and give us a fresh allowance
        if (marker.planning.remaining === 0) {
          // capture this planned leg
          const hexList = this.simplifyHexes(this.routeHexes)
          const route = this.currentRoute.current
          let lastNum = 0
          if (route.length) {
            lastNum = route[route.length - 1].turn
          }
          this.currentRoute.current.push({ route: hexList, speed: newState.speed, turn: lastNum + 1, state: newState.state })
          marker.planning.remaining = marker.planning.allowance

          // trigger an update of the planning line
          this.currentRoute.lightRoutes.remove()
          this.currentRoute.lightRoutes.clearLayers()
          this.currentRoute.lightRoutes = this.createPlanningRouteFor(this.currentRoute.current, this.currentRoute.marker.asset, false).addTo(this.layer)
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
