import L from 'leaflet'
import defaultHexStyle from '../data/default-hex-style'
import colorFor from './colorFor'

// Import helpers
import createButton from './createDebugButton'
import clearButtons from './clearButtons'
import resetCurrentLeg from './resetLegsFrom'
import getClearedRoute from './getClearedRoute'
import routeLinesFor from './routeLinesFor'
import turnNameFor from './turnNameFor'
import createStateButtonsFor from './createStateButtonsFor'
import roundToNearest from './roundToNearest'
import findPlatformTypeFor from './findPlatformTypeFor'
import canControlThisForce from './canControlThisForce'

import findLastRouteWithLocation from './findLastRouteLocation'
import { PLANNING_PHASE, UMPIRE_FORCE } from '../../../consts'

export default class MapPlanningPlayerListener {
  constructor (layer, map, grid, force, turn, submitPlansCallback, platformTypes, allForces, declutterCallback, perceivedStateCallback, /* array string */ forceNames, /* string */ phase) {
    this.grid = grid
    this.force = force
    this.allForces = allForces
    this.layerPriv = L.layerGroup().addTo(layer) // the layer we add our items to
    this.map = map // the underlying base-map (required to add/remove toolbar controls)
    this.inPlanningPhase = phase === PLANNING_PHASE
    this.submitPlansCallback = submitPlansCallback
    this.turnNumber = turn
    this.platformTypes = platformTypes
    this.declutterCallback = declutterCallback
    this.perceivedStateCallbackPriv = perceivedStateCallback
    this.forceNames = forceNames // used in updating perceived force

    this.drag = { hexes: [], lats: [] } // data for current drag
    this.turn = { hexes: [], lats: [] } // data for planned turn

    this.plannedLegs = [] // collated set of data, ready for transmission

    this.achievableCells = [] // hexes representing achievable area this turn
    this.startHex = null // hex for start drag operation
    this.lastHex = null // most recent cell travelled through

    this.currentMarker = null // the selected marker // TODO: it's only for development
    this.currentTurn = null // for dev, the turn that was clicked on

    this.allRoutes = [] // collection of routes for this turn

    this.btnListStates = [] // keep track of the state buttons, so we can clear them
    this.btnListPerceived = []
    this.btnListPlanningMarker = []
    this.btnListWaypoints = []
    this.btnListSubmit = []

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
      color: '#ff0',
      dashArray: [1, 4]
    })

    // put them on the map
    this.routeLine.addTo(layer)
    this.plannedLine.addTo(layer)

    // command to submit whole planned route
    if (this.inPlanningPhase) {
      this.btnSubmitAll = createButton(true, 'Submit all plans', () => {
        // clear the currently selected route
        this.updatePlannedRoute(false)

        // disconnect the planning marker
        if (this.planningMarker) {
          this.planningMarker.off('click')
        }

        // clear the plot
        this.clearOnNewLeg()

        // and drop the marker
        if (this.planningMarker) {
          this.planningMarker.remove()
        }

        // collate the data
        const payload = this.collatePlanningOrders(this.allRoutes)
        this.submitPlansCallback(payload)
        clearButtons(this.btnListSubmit)
      }).addTo(map)
      this.btnListSubmit.push(this.btnSubmitAll)

      // intiialise the button label
      this.updateSubmitRoutesCounter(this.allRoutes)
    }
  }

  clearAllButtons () {
    this.clearCommandButtons(this.btnListWaypoints)
    this.clearCommandButtons(this.btnListPlanningMarker)
    this.clearCommandButtons(this.btnListStates)
    this.clearCommandButtons(this.btnListPerceived)
  }

  collatePlanningOrders (/* array */routes) {
    const firstAsset = routes.find(route => route.asset != null).asset
    const detail = []
    const planningFor = this.turnNumber + 1
    routes.forEach(route => {
      const thisRoute = {}
      thisRoute.uniqid = route.marker.asset.uniqid
      const plannedTurns = []
      if (route.current && route.current.length > 0) {
        route.current.forEach(step => {
          // check the plans are in the future. Note: game logic
          // should prevent this problem arising in the future
          if (step.turn >= planningFor) {
            const thisStep = {}
            thisStep.turn = step.turn
            thisStep.status = step.status
            if (step.route && step.route.length > 0) {
              thisStep.route = step.route.slice() // take copy of array, just in case
            }
            plannedTurns.push(thisStep)
          }
        })
      }
      thisRoute.plannedTurns = plannedTurns

      detail.push(thisRoute)
    })
    const res = {}
    res.comment = ''
    res.turn = this.turnNumber + 1
    res.name = firstAsset.force + ' Plans for ' + turnNameFor(res.turn)
    res.force = firstAsset.force
    res.plannedRoutes = detail
    return res
  }

  /** add the layer to the map, and perform a declutter operation */
  storeLayer (/* object */ layer, /* scope */ context) {
    // check we have layer
    if (layer) {
      context.layerPriv.addLayer(layer)
      context.declutterCallback()
    }
  }

  /** ditch the data for this listener
   */
  clearListeners (markers) {
    // ditch the listeners
    markers.eachLayer(marker => {
      marker.off('click')
      marker.off('drag')
      marker.off('dragend')
    })

    // clear the achievable cells. Note: these weren't added
    // to our private map layer, so they don't disappear when
    // we `remove` that layer
    this.clearAchievableCells()

    // also drop any command/perceived state buttons
    this.clearAllButtons()

    // and the submut button
    this.clearCommandButtons(this.btnListSubmit)

    // detach the map
    this.layerPriv.remove()
    this.layerPriv.clearLayers()
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

  /** create a storage object for this object */
  dataFor (/* marker */ marker, /* array platform types */ platformTypes) {
    const plannedTurns = marker.asset.plannedTurns ? marker.asset.plannedTurns : []
    // clone the planned routes, in case we wish to reset it
    const currentRoutes = JSON.parse(JSON.stringify(plannedTurns))
    const asset = marker.asset
    const platformType = findPlatformTypeFor(platformTypes, asset.platformType)
    const lightRoutes = this.createPlanningRouteFor(currentRoutes, marker.asset.history, asset, true, false)
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

  updatePlanningStateOnReset (context) {
    // get the latest route
    const routes = context.currentRoute.current
    if (routes.length > 0) {
      // ok, let's just use the last state we have
      const lastR = routes[routes.length - 1]

      // find the platform-type that matches this state
      const assetState = lastR.status // current asset state
      const platformType = context.currentRoute.marker.asset.platformType // platform state of this asset
      const pType = findPlatformTypeFor(context.platformTypes, platformType) // matching platform type defn
      const pState = pType.states.find(state => state.name === assetState.state) // state type for current route
      if (!pState) {
        console.error('Invalid platform state found:', assetState, ' available:', pType)
      }

      // construct the state object
      const newState = { state: pState.name }

      // if it's a mobile state, use the last speed
      if (pState.mobile) {
        newState.speedKts = lastR.status.speedKts
      }

      // store the state - we'll use it for all legs, until the player changes their mind
      context.currentRoute.status = newState
      context.platformStateAssigned(context.currentRoute.marker, newState)
    } else if (context.currentRoute.status != null) {
      // we don't have any routes, but the user has set a state
      const marker = context.currentRoute.marker
      // no routes, do we know state?
      context.platformStateAssigned(marker, context.currentRoute.status)
    } else {
      // we will have to get state from the player
      const marker = context.currentRoute.marker

      // clear any existing buttons
      context.clearAllButtons()

      // no routes, do we know state?
      // nope, we'll have to get it from the player
      // sort out the state commands for this asset
      const pType = findPlatformTypeFor(context.platformTypes, marker.asset.platformType)
      context.btnListStates = createStateButtonsFor(pType, marker.asset.name,
        context, context.stateSelectedCallback, context.btnListStates)
    }
  }

  resetFromWaypointCallback (e) {
    const context = e.target.context

    // clear any state buttons
    context.clearAllButtons()

    const turnName = turnNameFor(e.target.turnId)
    // create the reset button
    const btnResetFromWaypoint = createButton(true, 'Clear from ' + turnName, () => {
      const route = context.currentRoute
      route.lightRoutes.remove()
      route.lightRoutes.clearLayers()
      // clear route
      route.current = resetCurrentLeg(route.current, e.target.turnId)

      // rebuild route
      context.updatePlannedRoute(true)

      context.updatePlanningStateOnReset(context)

      // lastly, remove the button
      context.clearAllButtons()
    }).addTo(context.map)
    context.btnListWaypoints.push(btnResetFromWaypoint)
  }

  createPlanningRouteFor (/* array turns */ currentRoutes, /* array turns */ history, /* object */ asset, /* boolean */ lightweight, /* boolean */ highlight) {
    const forceColor = colorFor(asset.force)
    const hisLocation = this.grid.hexNamed(asset.position).centrePos
    const context = this
    return routeLinesFor(currentRoutes, history, hisLocation, lightweight, this.grid, forceColor, this.resetFromWaypointCallback, null, highlight, context)
  }

  /** user has used either the command buttons, or the popup dialog to choose a new platform state */
  stateSelectedCallback (/* object */ pState, /* number */ speedKts, /* object */ context) {
    // store the state - we'll use it for all legs, until the player changes their mind
    context.currentRoute.state = { state: pState.name, speedKts: speedKts }

    // now update the planning rings
    context.platformStateAssigned(context.currentRoute.marker, context.currentRoute.state)

    // note: if it was a non-mobile state, we don't need to drag legs, we can just pop
    // up the state planning buttons again
    if (!pState.mobile) {
      // we will have to get state from the player
      const marker = context.currentRoute.marker

      // clear any existing buttons
      context.clearAllButtons()

      // no routes, do we know state?
      // nope, we'll have to get it from the player
      // sort out the state commands for this asset
      const pType = findPlatformTypeFor(context.platformTypes, marker.asset.platformType)
      context.btnListStates = createStateButtonsFor(pType, marker.asset.name,
        context, context.stateSelectedCallback, context.btnListStates)
    }
  }

  clearCommandButtons (/* array */ buttons) {
    if (buttons) {
      buttons.forEach(button => button.remove())
      buttons = []
    }
  }

  perceivedStateCallback (/* object */ asset, /* string */ force, /* array */ perceivedState, /* object */ context) {
    // and fire it into the system
    context.perceivedStateCallbackPriv(asset, force, perceivedState)
  }

  updatePlannedRoute (/* boolean */ detailed) {
    if (this.currentRoute && this.currentRoute.lightRoutes) {
      this.currentRoute.lightRoutes.remove()
      this.currentRoute.lightRoutes.clearLayers()
      this.currentRoute.lightRoutes = this.createPlanningRouteFor(this.currentRoute.current, this.currentRoute.marker.asset.history, this.currentRoute.marker.asset, !detailed, detailed)
      this.storeLayer(this.currentRoute.lightRoutes, this)
    }
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    // can we control this force?
    if (!canControlThisForce(this.allForces, marker.asset.force, this.force)) {
      // nope - don't bother then
      // ok, this is a quickie. Assign a click listener so
      // we can change the perceived state
      marker.on('click', e => {
        // clear up any state planning
        this.clearAllButtons()
      })
    } else {
      // store the details for this force
      const thisData = this.dataFor(marker, this.platformTypes)
      this.allRoutes.push(thisData)

      // and add to the map
      this.storeLayer(thisData.lightRoutes, this)

      if (this.inPlanningPhase) {
        // also update the planned routes
        this.updateSubmitRoutesCounter(this.allRoutes)

        marker.on('click', e => {
          this.startHex = null

          // and drop any planning lines
          this.clearOnNewLeg()

          if (this.currentRoute) {
            // do any cleaning up necessary

            // we have a selected route. Drop the current detailed one, and
            // replace it with a lightweight one
            this.updatePlannedRoute(false)

            // clear any currently shaded cells
            this.clearAchievableCells()

            if (this.planningMarker) {
              this.planningMarker.remove()
            }

            // clear all buttons
            this.clearAllButtons()
          }

          // now get the route for the new marker
          this.currentRoute = this.allRoutes.find(route => route.marker === marker)

          // create the detailed route
          this.updatePlannedRoute(true)

          if (this.currentRoute.status) {
            // ok, we can plan the next leg
            this.platformStateAssigned(this.currentRoute.marker, this.currentRoute.status)
          } else {
            // sort out the state commands for this asset
            const pType = findPlatformTypeFor(this.platformTypes, marker.asset.platformType)

            // clear all buttons
            this.clearAllButtons()

            this.btnListStates = createStateButtonsFor(pType, marker.asset.name, this, this.stateSelectedCallback, this.btnListStates)
          }
        })

        // ok, the popup will eventually manage state
        marker.options.draggable = false
      }
    }
  }

  clearAchievableCells () {
    if (this.achievableCells) {
      this.achievableCells.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
      this.achievableCells = []
    }
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

  /** as we build up lists of cells (for a route), they will typically
   * be full hex grid cell structures.  Here we switch them to just
   * their names, ready to be sent off around the wargame
   */
  simplifyHexes (/* array<hex cell */cells) {
    return cells.map(cell => cell.name)
  }

  updateRouteLineForForce (/* string */ force, /* Line */ line) {
    const hisColor = colorFor(force)
    line.setStyle({
      color: hisColor
    })
  }

  clearOnNewLeg () {
    this.clearAchievableCells()
    this.drag.lats = []
    this.drag.hexes = []
    this.turn.hexes = []
    this.turn.lats = []
    this.plannedLine.setLatLngs([])
    this.routeLine.setLatLngs([])
  }

  /** the user has clicked on the planning marker, give options */
  showPlanningMarkerMenu () {
    const btns = this.btnListPlanningMarker
    const context = this
    const clearButtons = function () {
      // clear any existing buttons
      context.clearAllButtons()
    }
    const updatePlans = function () {
      // rebuild route
      context.updatePlannedRoute(false)

      // ok, we can plan the next leg
      context.updatePlanningStateOnReset(context)
    }
    // drop any exisitng buttons
    clearButtons()

    // now create the new buttons
    btns.push(createButton(false, '[' + this.currentRoute.marker.asset.name + ']').addTo(this.map))
    btns.push(createButton(true, 'Clear all legs', () => {
      clearButtons()
      this.currentRoute.current = getClearedRoute(this.currentRoute.current)
      updatePlans()
    }).addTo(this.map))
    btns.push(createButton(true, 'Revert to original route', () => {
      clearButtons()
      this.currentRoute.current = getClearedRoute(this.currentRoute.current)
      // replace with original
      context.currentRoute.current = JSON.parse(JSON.stringify(context.currentRoute.original))
      updatePlans()
    }).addTo(this.map))
    btns.push(createButton(true, 'Select new state', () => {
      clearButtons()
      const marker = context.currentRoute.marker
      // sort out the state commands for this asset
      const pType = findPlatformTypeFor(context.platformTypes, marker.asset.platformType)
      context.btnListStates = createStateButtonsFor(pType, marker.asset.name,
        context, context.stateSelectedCallback, context.btnListStates)
    }).addTo(this.map))
  }

  storeNewPlanningRoute (/* object */ status, /* array */ hexList) {
    const route = this.currentRoute.current
    let lastNum = this.turnNumber + 1
    if (route.length) {
      // ok, we can override the turn number with the most recently planned one
      lastNum = route[route.length - 1].turn + 1
    }

    // note: when we send a planned turn, we only need the state name, not the whole
    // state element
    const newRoute = { status: { state: status.state }, turn: lastNum }

    // store speed, if it's a mobile state
    if (status.speedKts) {
      newRoute.status.speedKts = status.speedKts
    }
    // store route, if there is one
    if (hexList) {
      newRoute.route = hexList
    }
    this.currentRoute.current.push(newRoute)

    // trigger an update of the planning line
    this.updatePlannedRoute(true)

    // lastly, update how many planned routes we have
    this.updateSubmitRoutesCounter(this.allRoutes)
  }

  updateSubmitRoutesCounter (routes) {
    const routesWithPoints = routes.filter(route => route.current && route.current.length > 0)
    this.btnSubmitAll.setText('Submit ' + routesWithPoints.length + ' planned routes')
  }

  /** get the current location of this asset, either at the
   * end of the planned routes, or where it currently is
   */
  getPlannedAssetLocation (asset) {
    // sort out where to put the planning marker
    const lastHex = findLastRouteWithLocation(this.currentRoute.current, asset.position)
    return this.grid.hexNamed(lastHex)
  }

  /** player has indicated the planned state for a platform. Update the
   * UI accordingly
   */
  platformStateAssigned (/* object */marker, /* object */newState) {
    // do we have nay planning to clear up?
    if (this.planningMarker) {
      this.planningMarker.remove()
      this.routeLine.setLatLngs([])
      this.clearAchievableCells()
    }

    this.startHex = this.getPlannedAssetLocation(marker.asset, this.currentRoute.current)
    const startPos = this.startHex.centrePos

    // also create a new marker, used to plot the path
    this.planningMarker = L.marker(startPos, {
      draggable: newState.speedKts,
      zIndexOffset: 1000
    })

    // special handling. Don't declutter the planning marker, we want it in the centre of the cell
    this.planningMarker.do_not_declutter = true
    this.storeLayer(this.planningMarker, this)

    // clicks on the planning marker should trigger some commands
    this.planningMarker.on('click', e => {
      // clear up any existing planning
      this.clearOnNewLeg()

      // and generate the planning menu
      this.showPlanningMarkerMenu()
    })

    // put the next turn in the planning marker
    this.planningMarker.planningFor = this.currentTurn + 1

    if (!newState.speedKts) {
      // static state assigned, just do update
      this.storeNewPlanningRoute(newState, null)
    } else {
      // do some initialisation
      this.clearOnNewLeg()

      // calculate the steps remaining
      let range
      if (newState.speedKts) {
        const speedKts = newState.speedKts
        const stepSize = 30
        const stepsPerHour = (60 / stepSize)
        const gridDelta = 5
        const roughRange = speedKts / gridDelta / stepsPerHour // work out how many NM in 30 minutes

        // check range is in 10s
        range = roundToNearest(roughRange, 1)
      } else {
        // unlimited range
        range = 100
      }

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

      // set the route-line color
      this.updateRouteLineForForce(marker.force, this.routeLine)
      this.updateRouteLineForForce(marker.force, this.plannedLine)

      // handle movement of the planning marker
      this.planningMarker.on('drag', e => {
        const rawCursor = e.latlng
        const cursorHex = this.grid.cellFor(rawCursor)
        const cursorLoc = cursorHex.centrePos

        // is this location safe?
        if (!this.achievableCells.includes(cursorHex)) {
          // drop out, we can't handle it - so we
          // won't be changing any data based on it
          return
        }

        // note: the dragEnd event doesn't get a location, we'll need to store it from here
        // note: to get to here, the cursor must be on an available cell
        this.lastCursorLoc = cursorLoc

        // ok, we have a valid location. clear the existing route
        this.drag.lats = [cursorLoc, cursorLoc]

        // clear the old cells
        this.drag.hexes.forEach(cell => {
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
        this.drag.lats = []
        this.drag.hexes = newRoute
        this.drag.hexes.forEach(cell => {
          cell.polygon.setStyle(this.routeStyle)
          this.drag.lats.push(cell.centrePos)
        })

        this.routeLine.setLatLngs(this.drag.lats)
      })
      this.planningMarker.on('dragend', e => {
        const cursorHex = this.lastHex
        const cursorLoc = cursorHex.centrePos

        // put the planning marker into the centre of the cell, even though
        // it may have been dropped at the edge
        this.planningMarker.setLatLng(cursorLoc)

        // clear that lastCursorLoc, to be sure we don't abuse it
        delete this.lastCursorLoc

        // drop the first hex from the list, since that was the start point
        this.drag.hexes.shift()

        this.startHex = this.lastHex

        this.turn.hexes = this.turn.hexes.concat(this.drag.hexes)

        // extend the planned line
        this.turn.lats = this.turn.lats.concat(this.drag.lats)
        this.plannedLine.setLatLngs(this.turn.lats)

        // ok, determine if we are at the end of a leg
        const len = this.drag.hexes.length

        // reduce the marker allowance
        // note: we reduce the length by one, so we don't count the starting cell
        marker.planning.remaining -= len

        let stillCellsRemaining = false

        // if we have no more leg, push this one, and give us a fresh allowance
        if (marker.planning.remaining === 0 || marker.planning.allowance >= 100) {
          // capture this planned leg
          const hexList = this.simplifyHexes(this.turn.hexes)
          this.storeNewPlanningRoute(newState, hexList)

          this.plannedLine.setLatLngs([])
          this.routeLine.setLatLngs([])

          // update the marker allowance
          marker.planning.remaining = marker.planning.allowance

          // clean up
          this.startHex = null
          this.endHex = null
          this.drag.hexes = []
          this.drag.lats = []
          this.turn.lats = []
          this.turn.hexes = []
        } else {
          stillCellsRemaining = true
        }

        // we've finished with these range rings
        this.clearAchievableCells()

        // plot the achievable cells for this distance
        this.updateAchievableCellsFor(cursorHex, marker.planning.remaining, marker.travelMode)

        if (stillCellsRemaining) {
          // The line isn't complete. Display the route so far.
          // Create temporary structure, comprising the start hex, plus the route so far
          const plannedRouteCells = [this.startHex].concat(this.turn.hexes)

          // style the cells in the planned route
          plannedRouteCells.forEach(cell => {
            cell.polygon.setStyle(this.routeStyle)
          })
        }
      })
    }
  }
}
