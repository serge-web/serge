import L from 'leaflet'
import planningRouteFor from './planningRouteFor'
import colorFor from './colorFor'
import createButton from './createDebugButton'
import clearButtons from './clearButtons'
import newStateFromPlannedTurns from './newStateFromPlannedTurns'
import turnNameFor from './turnNameFor'

export default class MapAdjudicatingListener {
  constructor (map, grid, planningFormCallback, turnNumber) {
    this.grid = grid
    this.map = map
    this.planningFormCallback = planningFormCallback
    this.turnNumber = turnNumber

    this.layerPriv = L.layerGroup().addTo(map) // for the planned routes

    this.allPlatforms = [] // list of platform data

    this.layerMarkers = L.layerGroup().addTo(this.layerPriv) // for the planned routes

    this.btnListAccept = []
    this.btnListSubmit = []

    // keep track of who we're listening to
    this.registeredListeners = []

    // don't show the submit buttons if we're on turn zero
    if (turnNumber > 0) {
      const context = this
      this.submitButton = createButton(true, 'Submit 0 of 0 states', () => {
        context.submitStates()
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
    this.acceptAllButton.remove()

    // produce the required state
    this.allPlatforms.forEach(data => {
      // has it been accepted yet?
      if (!data.newState) {
        // pull planned route forward to actual
        this.acceptRoute(data.asset)
      }
    })
  }

  submitStates () {
    const message = {}
    const newForceStates = []
    this.allPlatforms.forEach(data => {
      const entry = {}
      const asset = data.asset
      entry.uniqid = asset.uniqid
      entry.name = asset.name
      entry.history = data.newHistory
      entry.plannedTurns = data.currentPlans
      entry.newState = data.newState
      let force
      if (asset.force) {
        force = asset.force
      } else {
        console.error('can\' find force for:', asset.name)
        force = ''
      }
      let thisForce = newForceStates.find(entry => entry.name === force)
      if (!thisForce) {
        thisForce = { name: force }
        thisForce.assets = []
        newForceStates.push(thisForce)
      }
      thisForce.assets.push(entry)
    })

    message.turn = this.turnNumber + 1
    message.name = 'State of World ' + turnNameFor(message.turn)
    message.comment = ''
    message.detail = {
      type: 'StateOfWorld',
      data: newForceStates
    }

    // collate the message
    this.planningFormCallback(message)
  }

  clearListeners (markers) {
    this.btnListAccept = clearButtons(this.btnListAccept)
    this.btnListSubmit = clearButtons(this.btnListSubmit)
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

    return planningRouteFor(trimmedRoute, history, hisLocation, lightweight, this.grid, forceColor, null, this.turnNumber + 1, highlight, context)
  }

  updateSubmitButtonLabel () {
    // don't have buttons in turn zero
    if (this.turnNumber > 0) {
      const total = this.allPlatforms.length
      const count = this.allPlatforms.filter(data => data.newState).length
      this.submitButton.setText('Submit ' + count + ' of ' + total)
      this.acceptAllButton.setText('Accept remaining ' + (total - count) + '')  
    }
  }

  acceptRoute (asset) {
    // find the data
    const data = this.allPlatforms.find(block => block.asset.uniqid === asset.uniqid)

    // capture current state into history
    const history = data.history ? data.history : []
    const currentState = { turn: this.turnNumber, state: asset.state, speed: asset.speed, route: asset.route, position: asset.position }
    history.push(currentState)
    data.newHistory = history

    // update the status
    const newState = newStateFromPlannedTurns(data.currentPlans, data.asset.state, data.asset.position)

    // get the coords for the current location
    const loc = this.grid.hexNamed(newState.position).centrePos

    // create a marker for this platform
    const forceClass = data.asset.force.toLowerCase()
    const typeClass = data.asset.platformType.replace(/ /g, '-').toLowerCase()
    const iconClass = `platform-counter platform-force-${forceClass} platform-type-${typeClass}`
    const divIcon = L.divIcon({
      iconSize: [40, 40],
      className: iconClass
    })

    // make the original marker faint
    L.DomUtil.addClass(data.marker._icon, 'platform-counter-planned')

    // ok, drop a new marker, on the new location
    data.planningMarker = L.marker(loc, {
      draggable: false,
      icon: divIcon,
      zIndexOffset: 1000
    })
    // special handling. Don't declutter the planning marker, we want it in the centre of the cell
    data.planningMarker.do_not_declutter = true
    this.layerMarkers.addLayer(data.planningMarker)

    data.newState = newState
    this.updateSubmitButtonLabel()
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    // build up the data store for this asset
    const thisData = this.dataFor(marker)
    this.allPlatforms.push(thisData)

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
        const data = context.allPlatforms.find(data => data.asset.uniqid === context.currentAsset.uniqid)

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
        const data = context.allPlatforms.find(data => data.asset.uniqid === marker.asset.uniqid)
        data.lightPlanned.remove()

        // and replace it with heavyweight
        data.lightPlanned = context.createPlanningRouteFor(data.currentPlans, data.asset.history, data.asset, false, false, true)
        context.showLayer(data.lightPlanned, context)

        // ok, show the accept route button for this track
        const acceptTitle = createButton(false, 'Route for ' + marker.asset.name).addTo(context.map)
        this.btnListAccept.push(acceptTitle)
        // check it's not already sorted.
        const hasPlans = context.allPlatforms.find(data => data.asset.uniqid === marker.asset.uniqid && data.newState)
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
    })
  }
}
