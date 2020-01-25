import L from 'leaflet'
import routeLinesFor from './routeLinesFor'
import colorFor from './colorFor'
import createButton from './createDebugButton'
import clearButtons from './clearButtons'
import newStateFromPlannedTurns from './newStateFromPlannedTurns'
import getVisibilityButtonsFor from './createVisibilityButtonsFor'
import collateNewStatesMessage from './collateNewStatesMessage'

export default class MapAdjudicatingListener {
  constructor (map, grid, planningFormCallback, turnNumber, forceNames, visibilityCallback) {
    this.grid = grid
    this.map = map
    this.planningFormCallback = planningFormCallback
    this.turnNumber = turnNumber
    this.forceNames = forceNames
    this.visibilityCallback = visibilityCallback

    this.layerPriv = L.layerGroup().addTo(map) // for the planned routes

    this.allAssets = [] // list of platform data

    this.layerMarkers = L.layerGroup().addTo(this.layerPriv) // for the planned routes

    this.btnListAccept = []
    this.btnListSubmit = []
    this.btnListVisiblity = []

    // keep track of who we're listening to
    this.registeredListeners = []

    // don't show the submit buttons if we're on turn zero
    if (turnNumber > 0) {
      const context = this
      this.submitButton = createButton(true, 'Submit 0 of 0 states', () => {
        // collate the message
        const newStatesMessage = collateNewStatesMessage(context.allAssets)

        // and send the new states
        context.planningFormCallback(newStatesMessage, context.turnNumber)

        // and drop the submit button
        context.btnListAccept = clearButtons(context.btnListAccept)
        context.btnListSubmit = clearButtons(context.btnListSubmit)
      }).addTo(this.map)
      this.btnListSubmit.push(this.submitButton)
      this.acceptAllButton = createButton(true, 'Accept remaining 0 states', () => {
        context.acceptAllStates()
      }).addTo(this.map)
      this.btnListSubmit.push(this.acceptAllButton)
    }
  }

  /** accept the planned state for all remaining platforms */
  acceptAllStates () {
    // produce the required state
    this.allAssets.forEach(data => {
      // has it been accepted yet?
      if (!data.newState) {
        // pull planned route forward to actual
        this.acceptRoute(data.asset)
      }
    })
    this.btnListAccept = clearButtons(this.btnListAccept)
  }

  clearListeners (markers) {
    this.btnListAccept = clearButtons(this.btnListAccept)
    this.btnListSubmit = clearButtons(this.btnListSubmit)
    this.btnListVisiblity = clearButtons(this.btnListVisiblity)

    // drop any markers we've created
    this.layerMarkers.clearLayers()
    // and the top level layer
    this.layerPriv.clearLayers()
  }

  showLayer (layer, context) {
    if (layer) {
      context.layerPriv.addLayer(layer)
    }
  }

  handleVisClick (event) {
    console.log('Vis change for:', event)
  }

  /** build up our working dataset for this asset */
  dataFor (marker) {
    const res = {}
    res.marker = marker
    res.asset = marker.asset
    res.history = res.asset.history
    res.originalPlans = res.asset.plannedTurns ? res.asset.plannedTurns : []
    res.currentPlans = JSON.parse(JSON.stringify(res.originalPlans))
    res.newState = null
    res.lightPlanned = this.createPlanningRouteFor(res.currentPlans, res.history, res.asset, true, true, false)
    return res
  }

  createPlanningRouteFor (/* array turns */ currentRoutes, /* array turns */ history, /* object */ asset, /* boolean */ lightweight, /* short */short, /* boolean */ highlight) {
    const forceColor = colorFor(asset.force)
    const hisLocation = this.grid.hexNamed(asset.position).centrePos
    const context = this

    // ok, special handling. we will only show the planned route for the next turn
    // take clone
    const justNextStep = currentRoutes.length ? [currentRoutes[0]] : []
    const trimmedRoute = short ? justNextStep : currentRoutes

    return routeLinesFor(trimmedRoute, history, hisLocation, lightweight, this.grid, forceColor, null, this.turnNumber + 1, highlight, context)
  }

  updateSubmitButtonLabel () {
    // don't have buttons in turn zero
    if (this.turnNumber > 0) {
      const total = this.allAssets.length
      const count = this.allAssets.filter(data => data.newState).length
      this.submitButton.setText('Submit ' + count + ' of ' + total)
      this.acceptAllButton.setText('Accept remaining ' + (total - count) + '')  
    }
  }

  acceptRoute (asset) {
    // find the data
    const thisAssetData = this.allAssets.find(block => block.asset.uniqid === asset.uniqid)

    // capture current state into history
    thisAssetData.newHistory = { turn: this.turnNumber, status: asset.status, route: asset.route, position: asset.position }
    
    // update the status
    thisAssetData.newState = newStateFromPlannedTurns(thisAssetData.currentPlans, thisAssetData.asset.status, thisAssetData.asset.position)

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

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    // build up the data store for this asset
    const thisData = this.dataFor(marker)
    this.allAssets.push(thisData)

    // ok, now show this route
    this.showLayer(thisData.lightPlanned, this)

    // update the submit button
    this.updateSubmitButtonLabel()

    const context = this
    marker.on('click', e => {
      clearButtons(context.btnListAccept, context)

      // do we have current?
      if (context.currentAsset) {
        // get the construct
        const data = context.allAssets.find(data => data.asset.uniqid === context.currentAsset.uniqid)

        // swap heavy line for light
        // drop the heavy planned route line
        data.lightPlanned.remove()

        // and create a light weight one
        data.lightPlanned = context.createPlanningRouteFor(data.currentPlans, data.asset.history, data.asset, true, true, false)
        context.showLayer(data.lightPlanned, context)
      }

      // are we already looking at this marker?
      if (context.currentAsset && context.currentAsset.uniqid === marker.asset.uniqid) {
        // ok, clear the flag
        context.currentAsset = null
      } else {
        // remember the current entry
        context.currentAsset = marker.asset

        // ok, show the detailed route for this asset
        const data = context.allAssets.find(data => data.asset.uniqid === marker.asset.uniqid)
        data.lightPlanned.remove()

        // and replace it with heavyweight
        data.lightPlanned = context.createPlanningRouteFor(data.currentPlans, data.asset.history, data.asset, false, false, true)
        context.showLayer(data.lightPlanned, context)

        // start off with the vis buttons
        this.btnListVisiblity = getVisibilityButtonsFor(marker.asset, this.visibilityCallback, this.btnListVisiblity, this.forceNames, this.map)        

        // check we're not in turn zero
        if (context.turnNumber > 0) {
          // ok, show the accept route button for this track
          const acceptTitle = createButton(false, 'Route for ' + marker.asset.name).addTo(context.map)
          this.btnListAccept.push(acceptTitle)
          // check it's not already sorted.
          const hasPlans = context.allAssets.find(data => data.asset.uniqid === marker.asset.uniqid && data.newState)
          if (hasPlans) {
            const acceptButton = createButton(true, 'Plans already submitted', () => {
              clearButtons(context.btnListAccept, context)
            }).addTo(context.map)
            this.btnListAccept.push(acceptButton)
          } else {
            const acceptButton = createButton(true, 'Accept Route', () => {
              context.acceptRoute(marker.asset)
              clearButtons(context.btnListAccept, context)
            }).addTo(context.map)
            this.btnListAccept.push(acceptButton)
          }
        }
      }
    })
  }
}
