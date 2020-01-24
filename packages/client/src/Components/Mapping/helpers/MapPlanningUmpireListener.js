
import createVisibilityButtonsFor from './createVisibilityButtonsFor'
import clearButtons from './clearButtons'

export default class MapPlanningUmpireListener {
  constructor (map, grid, changesCallback, forceNames) {
    this.grid = grid
    this.map = map
    this.forceNames = forceNames
    this.visibilityCallback = changesCallback
    this.btnListVisiblity = []
  }

  clearListeners (markers) {
    clearButtons(this.btnListVisiblity)

    // to support the callbacks, we do put this scope context into them. drop it
    if (markers) {
      markers.eachLayer(marker => {
        marker.off('click')
      })
    }
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    marker.on('click', e => {
      // start off with the vis buttons
      this.btnListVisiblity = createVisibilityButtonsFor(marker.asset, this.visibilityCallback, this.btnListVisiblity, this.forceNames, this.map)
    })
  }
}
