import L from 'leaflet'
import planningRouteFor from './planningRouteFor'
import colorFor from './colorFor'

export default class MapAdjudicatingListener {
  constructor (map, grid, planningFormCallback, turnNumber) {
    this.grid = grid
    this.planningFormCallback = planningFormCallback
    this.turnNumber = turnNumber

    this.layerPriv = L.layerGroup().addTo(map) // for the planned routes

    this.allPlatforms = [] // list of platform data

    // keep track of who we're listening to
    this.registeredListeners = []
  }

  clearListeners () {

  }

  showLayer (layer, context) {
    context.layerPriv.addLayer(layer)
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
    res.lightPlanned = this.createPlanningRouteFor(res.currentPlans, res.asset, false)
    return res
  }

  createPlanningRouteFor (/* array turns */ currentRoutes, /* object */ asset, /* boolean */ lightweight) {
    const forceColor = colorFor(asset.force)
    const hisLocation = this.grid.hexNamed(asset.position).centrePos
    const context = this
    return planningRouteFor(currentRoutes, hisLocation, lightweight, this.grid, forceColor, null, this.turnNumber + 1, context)
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker, currentTurn) {

    // build up the data store for this asset
    const thisData = this.dataFor(marker)
    this.allPlatforms.push(thisData)

    // ok, now show this route
    this.showLayer(thisData.lightPlanned, this)

    marker.on('click', e => {
      const orig = e.originalEvent
      const screenPos = { x: orig.screenX, y: orig.screenY }
      this.planningFormCallback('AssetPopup', { screenPos })
    })
  }
}
