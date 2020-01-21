
export default class MapAdjudicatingPlayerListener {
  constructor (map, grid, selectedForce) {
    this.grid = grid
    this.selectedForce = selectedForce

    // create our two lines, one for planning, one for history
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    // is it another force?
    if (marker.asset.force !== this.selectedForce) {
      // how do we currently perceive him
      const perception = marker.asset.perceptions[this.selectedForce]

      console.log('marker perceived as', perception)
      // ok, popup the dialog

      // if there is a perception, we can pre-select some options
    }
  }
}
