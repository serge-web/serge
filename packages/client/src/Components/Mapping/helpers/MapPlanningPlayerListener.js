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
import roundToNearest from './roundToNearest'
import findPlatformTypeFor from './findPlatformTypeFor'
import findAssetNameFor from './findAssetNameFor'
import canControlThisForce from './canControlThisForce'
import collateNewStatesMessage from './collateNewStatesMessage'
import getVisibilityButtonsFor from './createVisibilityButtonsFor'
import newStateFromPlannedTurns from './newStateFromPlannedTurns'
import MapPopupHelper from './mapPopupHelper'
import findPerceivedAsClassName from './findPerceivedAsClassName'
import removeClassNamesFrom from './removeClassNamesFrom'

// eslint-disable-next-line no-unused-vars
import { easyBar, easyButton } from 'leaflet-easybutton'

import MappingForm from '../components/FormContainer'

import findLastRouteWithLocation from './findLastRouteLocation'
import { PLANNING_PHASE, UMPIRE_FORCE, ADJUDICATION_PHASE, PLAN_ACCEPTED } from '../../../consts'

export default class MapPlanningPlayerListener {
  constructor (layer, map, grid, force, turn, submitPlansCallback, updatePlansCallback, platformTypes, allForces, declutterCallback,
    perceivedStateCallback, /* array string */ forceNames, /* string */ phase, /* function */ stateOfWorldCallback,
    /* function */ visibilityCallback, /* array */ allRoutes, /* array */ reactForms, /* layer */ allMarkers) {
    this.grid = grid
    this.force = force
    this.phase = phase
    this.allForces = allForces
    this.layerPriv = L.layerGroup().addTo(layer) // the layer we add our items to
    this.map = map // the underlying base-map (required to add/remove toolbar controls)
    this.inPlanningPhase = phase === PLANNING_PHASE
    this.submitPlansCallback = submitPlansCallback
    this.updatePlansCallback = updatePlansCallback
    this.turnNumber = turn
    this.platformTypes = platformTypes
    this.declutterCallback = declutterCallback
    this.perceivedStateCallbackPriv = perceivedStateCallback
    this.forceNames = forceNames // used in updating perceived force
    this.visibilityCallback = visibilityCallback
    this.allRoutes = allRoutes
    this.reactForms = reactForms
    this.allMarkers = allMarkers

    this.performingAdjudication = phase === ADJUDICATION_PHASE && force === UMPIRE_FORCE

    this.drag = { hexes: [], lats: [], startHex: null, lastHex: null } // data for current drag
    this.turn = { hexes: [], lats: [] } // data for planned turn

    this.achievableCells = [] // hexes representing achievable area this turn

    this.currentMarker = null // the selected marker // TODO: it's only for development

    this.btnListStates = [] // keep track of the state buttons, so we can clear them
    this.btnListPerceived = []
    this.btnListPlanningMarker = []
    this.btnListWaypoints = []
    this.btnListSubmit = []
    this.btnListAccept = []
    this.btnListSubmit = []
    this.btnListVisiblity = []
    this.viewAsBar = null

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

    // some per-mode setup
    this.assetCallback = null
    this.planningMarkerCallback = null
    this.waypointCallback = null
    this.prepareDataFor = null

    // if we're umpire force, introduce 'view as' buttons
    if (this.force === UMPIRE_FORCE) {
      const context = this
      const btns = []
      forceNames.forEach(name => {
        const color = colorFor(name)
        const title = 'View as ' + name
        const button = L.easyButton('<span title="' + title + '" style="font-size:16px;color:' + color + ';" class="fa fa-eye"/>', () => {
          // update the UI
          context.viewAs(name, allMarkers)
          // clear any other selected states
          btns.forEach(btn => {
            btn.enable()
          })
          button.disable()
        })
        // if this is the first one, mark it as selected
        if (!btns.length) {
          button.disable()
        }
        btns.push(button)
      })
      this.viewAsBar = L.easyBar(btns).addTo(this.map)
    }

    if (this.performingAdjudication) {
      // extra data types
      this.allRoutes = []
      this.currentRoute = null
      this.layerMarkers = L.layerGroup().addTo(this.layerPriv) // for the planned routes
      this.stateOfWorldCallback = stateOfWorldCallback
      // setup the adjudication callbacks
      this.assetCallback = this.showAdjudicationAssetMenu
      this.prepareDataFor = this.prepareAdjucationDataFor
      // and initial config
      this.setupAdjudicationButtons()
    } else {
      // data for this mode
      // callbacks
      this.assetCallback = this.showPlanningAssetMenu
      this.planningMarkerCallback = this.showPlanningMarkerMenu
      this.waypointCallback = this.resetFromWaypointCallback
      this.prepareDataFor = this.preparePlanningDataFor
      // command to submit whole planned route
      if (this.inPlanningPhase) {
        // and initial config
        this.setupPlanningButtons()
      }
    }
  }

  setupPlanningButtons () {
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
    }).addTo(this.map)
    this.btnListSubmit.push(this.btnSubmitAll)

    // intiialise the button label
    this.updateSubmitRoutesCounter(this.allRoutes)
  }

  showLayer (layer, context) {
    if (layer) {
      context.layerPriv.addLayer(layer)
    }
  }

  viewAs (/* string */ force, /* layer */ allMarkers) {
    const viewAsUmpire = force === UMPIRE_FORCE
    // loop through markers, updating their styling
    allMarkers.eachLayer(marker => {
      // can we see this asset?
      const asset = marker.asset
      const perceptionClassName = findPerceivedAsClassName(force, marker.force, asset.platformType, asset.perceptions, viewAsUmpire)
      if (perceptionClassName) {
        // remove existing class names
        removeClassNamesFrom(marker, ['platform-force-', 'platform-type-'])

        // set the new class names
        L.DomUtil.addClass(marker._icon, perceptionClassName)

        // reveal it
        L.DomUtil.removeClass(marker._icon, 'marker-hidden')
      } else {
        // hide it
        L.DomUtil.addClass(marker._icon, 'marker-hidden')
      }
    })
  }

  setupAdjudicationButtons () {
    // don't show the submit buttons if we're on turn zero
    if (this.turnNumber > 0) {
      const context = this
      this.submitButton = createButton(true, 'Submit 0 of 0 states', () => {
        // collate the message
        const newStatesMessage = collateNewStatesMessage(context.allRoutes)

        // and send the new states
        context.stateOfWorldCallback(newStatesMessage, context.turnNumber)

        // and drop the submit button
        context.btnListAccept = clearButtons(context.btnListAccept)
        context.btnListSubmit = clearButtons(context.btnListSubmit)
      }).addTo(this.map)
      this.btnListSubmit.push(this.submitButton)
      this.acceptAllButton = createButton(true, 'Accept remaining 0 states', () => {
        context.adjudicatingAcceptAllStates()
      }).addTo(this.map)
      this.btnListSubmit.push(this.acceptAllButton)
    }
  }

  clearAllButtons () {
    this.clearCommandButtons(this.btnListWaypoints)
    this.clearCommandButtons(this.btnListPlanningMarker)
    this.clearCommandButtons(this.btnListStates)
    this.clearCommandButtons(this.btnListPerceived)
    if (this.viewAsBar) {
      this.viewAsBar.remove()
    }
  }

  showPlatformStatePopup (/* object */ marker) {
    // now get the route for the new marker

    // find the most recent state
    let status = null
    if (this.currentRoute.current && this.currentRoute.current.length) {
      const lastLeg = this.currentRoute.current[this.currentRoute.current.length - 1]
      status = lastLeg.status
    } else {
      // use the asset status
      status = { state: marker.asset.status.state, speedKts: marker.asset.status.speedKts }
    }

    // is it missing the mobile attribute?
    if (status.mobile === undefined) {
      // ok, we have to find it
      const pType = marker.asset.platformTypeDetail.states.find(ptype => ptype.name === status.state)
      status.mobile = pType.mobile
    }

    // listen to this marker
    const popup = new MapPopupHelper(this.map, marker)
    const allForces = this.allForces
    const allPlatforms = this.platformTypes
    const asset = marker.asset
    popup.setStore({
      currentForce: this.force,
      currentMarker: asset,
      currentMarkerName: asset.name,
      currentMarkerForce: asset.force,
      currentMarkerStatus: status.state,
      currentMarkerIsMobile: status.mobile,
      currentMarkerSpeed: status.speedKts,
      turnsInThisState: 1,
      perception: asset.perceptions[this.force] || null,
      allForces,
      allPlatforms
    })
    popup.onUpdate(data => {
      if (data) {
        popup.setStore(data)
        const numberSubmissions = data.turnsInThisState ? data.turnsInThisState : 1
        for (let ctr = 0; ctr < numberSubmissions; ctr++) {
          this.stateSelectedCallback(data.currentMarkerStatus, data.currentMarkerSpeed)
        }
      }
      popup.closePopup(() => {
        console.log('popup closed')
      })
    })
    popup.useComponent(MappingForm, this.reactForms.plannedStatus)
    popup.openPopup()
    popup.renderListener()
  }

  showPlanningAssetMenu (marker) {
    if (this.inPlanningPhase) {
      this.drag.startHex = null

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
        // clear all buttons
        this.clearAllButtons()

        // show the popup
        this.showPlatformStatePopup(marker)
      }

      // if there are any planned route turns, invite to clear them
      if (this.currentRoute.current && this.currentRoute.current.length) {
        const clearTurns = createButton(true, 'Clear planned turns', () => {
          this.currentRoute.current = []
          if (this.planningMarker) {
            this.planningMarker.remove()
          }
          this.clearAchievableCells()
          this.updatePlannedRoute(false)
          clearTurns.remove()

          // call on update callback
          this.updatePlansCallback(this.collatePlanningOrders(this.allRoutes))
        }).addTo(this.map)
        this.btnListStates.push(clearTurns)
      }

      // ok, the popup will eventually manage state
      marker.options.draggable = false
    }
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
    this.clearCommandButtons(this.btnListStates)
    this.clearCommandButtons(this.btnListPerceived)
    this.clearCommandButtons(this.btnListPlanningMarker)
    this.clearCommandButtons(this.btnListWaypoints)
    this.clearCommandButtons(this.btnListSubmit)
    this.clearCommandButtons(this.btnListAccept)
    this.clearCommandButtons(this.btnListSubmit)
    this.clearCommandButtons(this.btnListVisiblity)

    // detach the map
    this.layerPriv.remove()
    this.layerPriv.clearLayers()
  }

  /** create a new list of cells, that have been filtered to those
   * that are applicable to the provided domain
   */
  cellsValidForThisDomain (/* array */ cells, /* string */ domain) {
    console.log('checking for', domain)
    return cells.filter(cell => {
      switch (domain) {
        case 'land':
          return cell.land || cell.organic
        case 'sea':
          return cell.sea || cell.organic
        case 'air':
          return true
        default:
          return true
      }
    })
  }

  /** build up our working dataset for this asset */
  adjudicationDataFor (marker) {
    const asset = marker.asset
    const plannedTurns = asset.plannedTurns ? asset.plannedTurns : []
    const clonedTurns = JSON.parse(JSON.stringify(plannedTurns))
    return {
      marker: marker,
      asset: asset,
      history: asset.history,
      original: plannedTurns,
      current: clonedTurns,
      newState: null, // it's the presence of a 'newState' that indicates this asset is resolved
      original_perceptions: asset.perceptions,
      current_perceptions: JSON.parse(JSON.stringify(asset.perceptions)),
      original_condition: asset.condition,
      current_condition: JSON.parse(JSON.stringify(asset.condition)),
      lightRoutes: this.createPlanningRouteFor(clonedTurns, asset.history, asset, true, true, false)
    }
  }

  /** create a storage object for this object */
  planningDataFor (/* marker */ marker, /* array platform types */ platformTypes) {
    const asset = marker.asset
    const plannedTurns = asset.plannedTurns ? asset.plannedTurns : []
    const clonedTurns = JSON.parse(JSON.stringify(plannedTurns))
    return {
      marker: marker,
      asset: marker.asset,
      // clone the planned routes, in case we wish to reset it
      original: plannedTurns,
      current: clonedTurns,
      platformType: findPlatformTypeFor(platformTypes, asset.platformType),
      lightRoutes: this.createPlanningRouteFor(clonedTurns, asset.history, asset, true, false, false)
    }
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
      // clear any existing buttons
      context.clearAllButtons()

      // no routes, do we know state?
      // nope, we'll have to get it from the player
      // sort out the state commands for this asset
      // NO. Let the player use the popup dialog again
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

  createPlanningRouteFor (/* array turns */ currentRoutes, /* array turns */ history, /* object */ asset, /* boolean */ lightweight, /* boolean */short, /* boolean */ highlight) {
    const forceColor = colorFor(asset.force)
    const hisLocation = this.grid.hexNamed(asset.position).centrePos
    const context = this

    // ok, special handling. we will only show the planned route for the next turn
    // if we're in adjucation mode
    let trimmedRoute = null
    if (this.performingAdjudication) {
      const justNextStep = currentRoutes && currentRoutes.length ? [currentRoutes[0]] : []
      trimmedRoute = short ? justNextStep : currentRoutes
    } else {
      trimmedRoute = currentRoutes
    }

    return routeLinesFor(trimmedRoute, history, hisLocation, asset.position, lightweight, this.grid, forceColor, this.waypointCallback, null, highlight, context)
  }

  /** user has used either the command buttons, or the popup dialog to choose a new platform state */
  stateSelectedCallback (/* object */ stateName, /* number */ speedKts) {
    // store the state - we'll use it for all legs, until the player changes their mind
    this.currentRoute.state = { state: stateName }
    // inject speed, if necessary
    if (speedKts) {
      this.currentRoute.state.speedKts = speedKts
    }

    // now update the planning rings
    this.platformStateAssigned(this.currentRoute.marker, this.currentRoute.state)
  }

  clearCommandButtons (/* array */ buttons) {
    if (buttons) {
      buttons.forEach(button => button.remove())
      buttons = []
    }
  }

  perceivedStateCallback (/* object */ asset, /* string */ force, /* array */ perceivedState, /* object */ context) {
    // and fire it into the system
    this.perceivedStateCallbackPriv(asset, force, perceivedState)
  }

  updatePlannedRoute (/* boolean */ detailed, context) {
    // allow for the context to be supplied (if it's a leaflet callback)
    if (!context) {
      context = this
    }
    if (context.currentRoute && context.currentRoute.lightRoutes) {
      context.currentRoute.lightRoutes.remove()
      context.currentRoute.lightRoutes.clearLayers()
      context.currentRoute.lightRoutes = context.createPlanningRouteFor(context.currentRoute.current, context.currentRoute.marker.asset.history,
        context.currentRoute.marker.asset, !detailed, false, detailed)
      context.storeLayer(context.currentRoute.lightRoutes, context)
    }
  }

  preparePlanningDataFor (marker, platformTypes) {
    // store the details for this force
    const thisData = this.planningDataFor(marker, platformTypes)
    this.allRoutes.push(thisData)

    // and add to the map
    this.storeLayer(thisData.lightRoutes, this)

    if (this.inPlanningPhase) {
      // also update the planned routes
      this.updateSubmitRoutesCounter(this.allRoutes)
    }
  }

  prepareAdjucationDataFor (marker, platformTypes) {
    // build up the data store for this asset
    const thisData = this.adjudicationDataFor(marker)
    this.allRoutes.push(thisData)

    // ok, now show this route
    this.showLayer(thisData.lightRoutes, this)

    // update the submit button
    this.updateSubmitButtonLabel()
  }

  updateSubmitButtonLabel () {
    // don't have buttons in turn zero
    if (this.turnNumber > 0) {
      const total = this.allRoutes.length
      const count = this.allRoutes.filter(data => data.newState).length
      this.submitButton.setText('Submit ' + count + ' of ' + total)
      this.acceptAllButton.setText('Accept remaining ' + (total - count) + '')
    }
  }

  /** attach the perception popup form to this marker */
  attachPerceptionPopup (marker) {
    const asset = marker.asset
    // listen to this marker
    const popup = new MapPopupHelper(this.map, marker)
    const allForces = this.allForces
    const allPlatforms = this.platformTypes
    const perceivedType = asset.perceptions && asset.perceptions[this.force]
    const assetLabel = findAssetNameFor(asset.name, null, asset.force, this.force, perceivedType, asset.contactId)
    popup.setStore({
      currentForce: this.force,
      currentMarker: asset,
      currentMarkerName: assetLabel,
      currentMarkerForce: asset.force,
      perception: perceivedType || null,
      allForces,
      allPlatforms
    })
    popup.onUpdate(data => {
      if (data) {
        popup.setStore(data)

        // ok, extract the new perception:
        const perception = data.perception

        // callback expects: (/* string */ assetid, /* string */ perceivedBy, /* object */ perception) => {
        this.perceivedStateCallback(asset.uniqid, this.force, perception)
      }
      popup.closePopup(() => {
        console.log('popup closed')
      })
    })
    popup.useComponent(MappingForm, this.reactForms.perception)
    popup.openPopup()
    popup.renderListener()
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    // can we control this force?
    if (canControlThisForce(this.allForces, marker.asset.force, this.force) || this.performingAdjudication) {
      this.prepareDataFor(marker, this.platformTypes)

      marker.on('click', e => {
        this.assetCallback(marker)

        // if we're umpire, and in the planning phase, show the vis buttons too
        if (this.force === UMPIRE_FORCE && this.phase === PLANNING_PHASE) {
          // throw in quick vis listener, in case umpire realises they need to correct something
          // it's umpire. let him manage visibiltiy
          this.btnListVisiblity = getVisibilityButtonsFor(marker.asset, this.visibilityCallback,
            this.btnListVisiblity, this.forceNames, this.map)
        }
      })
    } else {
      // are we a non-umpire?
      if (this.force !== UMPIRE_FORCE) {
        // ok, attach the perception popup
        this.attachPerceptionPopup(marker)

        // also, show a single step of history for the track
        const route = marker.asset.route
        if (route && route.length) {
          if (route && route.length) {
            const pts = []
            route.forEach(step => {
              const cell = this.grid.hexNamed(step)
              if (cell) {
                pts.push(cell.centrePos)
              }
            })
            if (pts.length) {
              const color = colorFor(marker.asset.force)
              const line = L.polyline(pts, { color: color, weight: 1 })
              this.storeLayer(line, this)
            }
          }
        }
      } else {
        // we're umpire, see if we're in planning mode - so we can popup vis markers
        marker.on('click', e => {
          // if we're umpire, and in the planning phase, just do the vis buttons too
          if (this.phase === PLANNING_PHASE) {
            // throw in quick vis listener, in case umpire realises they need to correct something
            // it's umpire. let him manage visibiltiy
            this.btnListVisiblity = getVisibilityButtonsFor(marker.asset, this.visibilityCallback,
              this.btnListVisiblity, this.forceNames, this.map)
          }
        })
      }
    }
  }

  clearAchievableCells () {
    if (this.achievableCells) {
      this.achievableCells.forEach(cell => {
        if (!cell.organic) {
          cell.polygon.setStyle(defaultHexStyle)
        }
      })
      this.achievableCells = []
    }
  }

  /** we're entering a new planning step - calculate which cells are
   * achievable given the range remaining
   */
  updateAchievableCellsFor (/* hex */location, /* int */rangeRemaining, /* string */travelMode) {
    // work out the cells in range
    if (rangeRemaining === 0) {
      this.achievableCells = []
    } else if (rangeRemaining < 100) {
      this.achievableCells = this.grid.hexesInRange(location, rangeRemaining)
    } else {
      // just give him the whole area
      this.achievableCells = this.grid.cells
    }

    // filter the achievable cells for his domain
    this.achievableCells = this.cellsValidForThisDomain(this.achievableCells, travelMode)

    // plot the available range
    this.achievableCells.forEach(cell => {
      if (!cell.organic) {
        cell.polygon.setStyle(this.rangeStyle)
      }
    })
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

  adjudicatingStateSelected (/* string */ stateName, /* number */ speedKts, /* object */ context) {
    const thisAssetData = context.allRoutes.find(block => block.asset.uniqid === context.currentRoute.asset.uniqid)

    const pState = context.currentRoute.asset.platformTypeDetail.states.find(type => type.name === stateName)

    // ok, is it mobile
    if (!pState.mobile) {
      // just store it
      thisAssetData.current = [{ status: { state: pState.name }, turn: context.turnNumber + 1 }]

      // update the route line
      context.updatePlannedRoute(true, context)

      context.showAdjudicationAssetMenu(context.currentRoute.marker)
    } else {
      // ok, do planning legs
      const newState = { state: pState.name, speedKts: speedKts }

      // store the new status
      context.currentRoute.status = newState

      // let the dragging begin
      context.platformStateAssigned(thisAssetData.marker, newState)
    }
  }

  adjudicatingPlanRoute (/* element */asset, /* element */ pState, /* number */ speedKts, /* scope */ context) {
    // find the data
    const thisAssetData = this.allRoutes.find(block => block.asset.uniqid === asset.uniqid)

    // clear his current plans
    thisAssetData.current = []

    // update the planned route
    this.updatePlannedRoute(true)

    // ok, do planning legs
    const newState = { state: pState.name, speedKts: speedKts }

    // store the new status
    context.currentRoute.status = newState

    // let the dragging begin
    context.platformStateAssigned(thisAssetData.marker, newState)
  }

  adjudicatingAcceptRoute (asset) {
    // find the data
    const thisAssetData = this.allRoutes.find(block => block.asset.uniqid === asset.uniqid)

    // capture current state into history
    thisAssetData.newHistory = { turn: this.turnNumber, status: asset.status, route: asset.route, position: asset.position }

    // update the status
    thisAssetData.newState = newStateFromPlannedTurns(thisAssetData.current, thisAssetData.asset.status, thisAssetData.asset.position)

    // get the coords for the current location
    const loc = this.grid.hexNamed(thisAssetData.newState.position).centrePos

    // create a marker for this platform
    const forceClass = thisAssetData.asset.force.toLowerCase()
    const typeClass = thisAssetData.asset.platformType.replace(/ /g, '-').toLowerCase()
    const iconClass = `platform-counter platform-force-${forceClass} platform-type-${typeClass}`
    const divIcon = L.divIcon({
      iconSize: [40, 40],
      className: iconClass
    })

    // make the original marker faint
    L.DomUtil.addClass(thisAssetData.marker._icon, 'platform-counter-planned')

    // ok, drop a new marker, on the new location
    thisAssetData.planningMarker = L.marker(loc, {
      draggable: false,
      icon: divIcon,
      zIndexOffset: 1000
    })
    // special handling. Don't declutter the planning marker, we want it in the centre of the cell
    thisAssetData.planningMarker.do_not_declutter = true
    thisAssetData.planningMarker.asset = thisAssetData.asset
    this.layerMarkers.addLayer(thisAssetData.planningMarker)

    this.updateSubmitButtonLabel()
  }

  /** accept the planned state for all remaining platforms */
  adjudicatingAcceptAllStates () {
    // produce the required state
    this.allRoutes.forEach(data => {
      // has it been accepted yet?
      if (!data.newState) {
        // pull planned route forward to actual
        this.adjudicatingAcceptRoute(data.asset)
      }
    })
    this.btnListAccept = clearButtons(this.btnListAccept)
  }

  showAdjudicationAssetMenu (marker) {
    clearButtons(this.btnListAccept, this)

    // do we have current?
    if (this.currentRoute) {
      // get the construct
      const data = this.allRoutes.find(data => data.asset.uniqid === this.currentRoute.asset.uniqid)

      // swap heavy line for light
      // drop the heavy planned route line
      data.lightRoutes.remove()

      // and create a light weight one
      data.lightRoutes = this.createPlanningRouteFor(data.current, data.asset.history, data.asset, true, true, false)
      this.showLayer(data.lightRoutes, this)

      // we may also need to clear up
      this.clearAchievableCells()

      if (this.planningMarker) {
        this.planningMarker.off('click')
        this.planningMarker.remove()
      }
    }
    // ok, show the detailed route for this asset
    const data = this.allRoutes.find(data => data.asset.uniqid === marker.asset.uniqid)
    data.lightRoutes.remove()

    // store quick access to this set of routes
    this.currentRoute = data

    // and replace it with heavyweight
    data.lightRoutes = this.createPlanningRouteFor(data.current, data.asset.history, data.asset, false, false, true)
    this.showLayer(data.lightRoutes, this)

    // special handling for turn zero
    if (this.turnNumber === 0) {
      // we don't do full adjudication, just visility
      this.btnListVisiblity = getVisibilityButtonsFor(marker.asset, this.visibilityCallback, this.btnListVisiblity, this.forceNames, this.map)
    } else {
      // popup the adjudication menu

      // Get a list of the current forces who can see the current marker
      const currentMarkerVisibleTo = Object.entries(this.currentRoute.current_perceptions).map(([key]) => key)

      // sort out the planned state, if there is one
      let newStatus = null
      if (this.currentRoute.current.length > 0) {
        const firstPlannedTurn = this.currentRoute.current[0]
        newStatus = { state: firstPlannedTurn.status.state, speedKts: firstPlannedTurn.status.speedKts }
      } else {
        newStatus = { state: data.asset.status.state, speedKts: data.asset.status.speedKts }
      }

      // work out if the current state is mobile or not
      const isMobile = marker.asset.platformTypeDetail.states.find(state => state.name === newStatus.state).mobile

      const planReviewed = data.newState ? PLAN_ACCEPTED : null

      // Show a form on popup
      const popup = new MapPopupHelper(this.map, marker)
      popup.setStore({
        currentForce: this.force,
        planStatus: planReviewed,
        currentMarker: marker.asset,
        currentMarkerName: marker.asset.name,
        currentMarkerForce: marker.asset.force,
        currentMarkerStatus: newStatus.state,
        currentMarkerIsMobile: isMobile,
        currentMarkerSpeed: newStatus.speedKts,
        currentMarkerCondition: this.currentRoute.current_condition,
        currentMarkerVisibleTo,
        turnsInThisState: 1,
        allForces: this.allForces,
        allPlatforms: this.platformTypes
      })
      const context = this
      popup.onUpdate(data => {
        if (data) {
          popup.setStore(data)

          // start off with the planned state
          context.adjudicationStorePlan(data, marker.asset)

          // condition
          this.currentRoute.current_condition = data.currentMarkerCondition

          // and finally visibility
          context.adjudicationUpdatePerception(data.currentMarkerVisibleTo, this.currentRoute.current_perceptions)
        }
        popup.closePopup(() => {
          console.log('popup closed')
        })
      })
      popup.useComponent(MappingForm, this.reactForms.adjudicate)
      popup.openPopup()
      popup.renderListener()
    }
  }

  adjudicationUpdatePerception (/* array */visibleTo, /* indexed array */ perceptions) {
    // check the necessary items are present
    if (visibleTo.length) {
      visibleTo.forEach(thisForce => {
        if (!perceptions[thisForce]) {
          perceptions[thisForce] = { force: null, type: null }
        }
      })
    }
    // check that we don't have too many perceptions
    const toDelete = []
    for (var thisForce in perceptions) {
      if (!visibleTo.find(name => name === thisForce)) {
        // ok, delete it
        toDelete.push(thisForce)
      }
    }
    // ditch the ones we don't want
    toDelete.forEach(thisForce => {
      delete perceptions[thisForce]
    })
  }

  adjudicationStorePlan (data, asset) {
    if (data.planStatus === PLAN_ACCEPTED) {
      // just check that we haven't already accepted it
      if (!this.currentRoute.newState) {
        // ok, just store the new state
        this.adjudicatingAcceptRoute(asset, this)
      }
    } else {
      const newStatus = { status: data.currentMarkerStatus, position: asset.position }
      // is it a mobile state?
      const pState = asset.platformTypeDetail.states.find(status => status.name === data.currentMarkerStatus)

      // ok, it got rejected. remove the planning marker, if there is one
      if (this.currentRoute.planningMarker) {
        this.currentRoute.planningMarker.remove()
      }

      if (pState.mobile) {
        // ok, start planning cycle
        this.adjudicatingPlanRoute(asset, pState, data.currentMarkerSpeed, this)
      } else {
        // store the new planned turn. It's a non-mobile status,
        // so we re-use the current position
        this.currentRoute.current = [newStatus]

        // and now store it
        this.adjudicatingAcceptRoute(asset, this)
      }
    }
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
      // also drop the planning marker
      this.planningMarker.remove()
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

    // call on update callback
    this.updatePlansCallback(this.collatePlanningOrders(this.allRoutes))

    if (this.performingAdjudication) {
      // we only allow one step to be planned in adjudication, so we're done
      // disconnect the planning marker
      if (this.planningMarker) {
        this.planningMarker.off('click')
        this.planningMarker.remove()
      }

      // clear the plot
      this.clearOnNewLeg()

      // also offer the accept/reject buttons
      this.showAdjudicationAssetMenu(this.currentRoute.marker)
    } else {
      // update how many planned routes we have, if we're doing planning
      this.updateSubmitRoutesCounter(this.allRoutes)
    }
  }

  updateSubmitRoutesCounter (routes) {
    const routesWithPoints = routes.filter(route => route.current && route.current.length > 0)
    this.btnSubmitAll.setText('Submit ' + routesWithPoints.length + ' planned routes')
  }

  /** get the current location of this asset, either at the
   * end of the planned routes, or where it currently is
   */
  getPlannedAssetLocation (asset) {
    let cell
    if (this.performingAdjudication) {
      //  - we always start from current location
      cell = asset.position
    } else {
      // sort out where to put the planning marker
      cell = findLastRouteWithLocation(this.currentRoute.current, asset.position)
    }
    return this.grid.hexNamed(cell)
  }

  /** player has indicated the planned state for a platform. Update the
   * UI accordingly
   */
  platformStateAssigned (/* object */marker, /* object */newState) {
    // do we have any planning to clear up?
    if (this.planningMarker) {
      this.planningMarker.remove()
      this.routeLine.setLatLngs([])
      this.clearAchievableCells()
    }

    this.drag.startHex = this.getPlannedAssetLocation(marker.asset, this.currentRoute.current)
    const startPos = this.drag.startHex.centrePos

    // find out if this state is mobile
    const pType = marker.asset.platformTypeDetail.states.find(state => state.name === newState.state)
    const isMobile = pType.mobile
    const isDeploying = pType.deploying // this is a special mode where we let a platform move to `any` suitable square

    if (!isMobile && !isDeploying) {
      // static state assigned, just do update
      this.storeNewPlanningRoute(newState, null)
    } else {
      // also create a new marker, used to plot the path
      this.planningMarker = L.marker(startPos, {
        draggable: true,
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
        this.planningMarkerCallback()
      })

      // put the next turn in the planning marker
      this.planningMarker.planningFor = this.turnNumber + 1

      // do some initialisation
      this.clearOnNewLeg()

      // calculate the steps remaining
      let range
      if (newState.speedKts && !isDeploying) {
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
      this.updateAchievableCellsFor(this.drag.startHex, marker.planning.remaining, marker.travelMode)

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
        if (!this.drag.startHex) {
          // drag operation just started
          this.drag.startHex = cursorHex
        } else {
          // mid-drag
          this.drag.lastHex = cursorHex
        }

        // calculate the route
        let newRoute = this.grid.hexesBetween(this.drag.startHex, this.drag.lastHex)

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
        const cursorHex = this.drag.lastHex
        const cursorLoc = cursorHex.centrePos

        // put the planning marker into the centre of the cell, even though
        // it may have been dropped at the edge
        this.planningMarker.setLatLng(cursorLoc)

        // clear that lastCursorLoc, to be sure we don't abuse it
        delete this.lastCursorLoc

        // drop the first hex from the list, since that was the start point
        this.drag.hexes.shift()

        this.drag.startHex = this.drag.lastHex

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

          // update the marker allowance, if we're in planning mode
          if (this.performingAdjudication) {
            // Only accept one step in adjudication. Finished.
            stillCellsRemaining = false
          } else {
            marker.planning.remaining = marker.planning.allowance
          }

          // clean up
          this.drag.startHex = null
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
          const plannedRouteCells = [this.drag.startHex].concat(this.turn.hexes)

          // style the cells in the planned route
          plannedRouteCells.forEach(cell => {
            cell.polygon.setStyle(this.routeStyle)
          })
        }

        // call on update callback
        this.updatePlansCallback(this.collatePlanningOrders(this.allRoutes))
      })
    }
  }
}
