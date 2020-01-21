import L from 'leaflet'
import planningRouteFor from './planningRouteFor'
import colorFor from './colorFor'
import createButton from './createDebugButton'
import clearButtons from './clearButtons'
import newStateFromPlannedTurns from './newStateFromPlannedTurns'

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
    // collate the message
    this.planningFormCallback(message)
  }

  clearListeners (markers) {
    this.btnListAccept = clearButtons(this.btnListAccept)
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
    res.originalPlans = res.asset.plannedTurns ? res.asset.plannedTurns : []
    res.currentPlans = JSON.parse(JSON.stringify(res.originalPlans))
    res.newState = null
    res.lightPlanned = this.createPlanningRouteFor(res.currentPlans, res.asset, true)
    return res
  }

  createPlanningRouteFor (/* array turns */ currentRoutes, /* object */ asset, /* boolean */ lightweight) {
    const forceColor = colorFor(asset.force)
    const hisLocation = this.grid.hexNamed(asset.position).centrePos
    const context = this
    return planningRouteFor(currentRoutes, hisLocation, lightweight, this.grid, forceColor, null, this.turnNumber + 1, context)
  }

  updateSubmitButtonLabel () {
    const total = this.allPlatforms.length
    const count = this.allPlatforms.filter(data => data.newState).length
    this.submitButton.setText('Submit ' + count + ' of ' + total)
    this.acceptAllButton.setText('Accept remaining ' + (total - count) + '')
  }

  acceptRoute (asset) {
    // find the data
    const data = this.allPlatforms.find(block => block.asset.uniqid === asset.uniqid)

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
    })
  }
}
