import L from 'leaflet'
import defaultHexStyle from './data/default-hex-style'
import colorFor from './colorFor'

export default class MapAdjudicationPendingListener {
  constructor(map, grid, callback) {
    this.grid = grid
    this.callback = callback

    this.planningLine = L.polyline([], {
      color: '#fff',
      dashArray: [1, 4]
    })
    this.planningLine.addTo(map)

    this.achievableCells = [] // hexes representing achievable area
    this.startHex = null // hex for start drag operation
    this.lastHex = null // most recent cell travelled through

    // keep track of who we're listening to
    this.registeredListeners = []
  }

  clearListeners() {
    this.registeredListeners.forEach(marker => {
      // next lines commented out, until we've refactored JS into functions
      // marker.off('drag', dragHandler)
      // marker.off('drag', dragEndHandler)
    })

    // and empty the array
    this.registeredListeners = []
  }

  /** listen to drag events on the supplied marker */
  listenTo(marker) {

    // remember we're listing to it
    this.registeredListeners.push(marker)

    // TODO: refactor these two handler into named methods so that they can be registered using
    // marker.on('drag', dragHandler)
    // this allows us to subsequently call marker.off('drag', dragHandler), etc
    marker.on('drag', e => {
      const cursorLoc = e.latlng

      const rangeStyle = {
        fill: true,
        color: '#ccc',
        opacity: 1.0
      }

      // is this a mobile element
      this.planningLine.setLatLngs([cursorLoc, cursorLoc])

      this.startHex = this.grid.cellFor(cursorLoc)

      // set the route-line color
      this.planningLine.setStyle({
        color: colorFor(marker.force)
      })

      // do we need to generate the achievable cells?
      if (!this.achievableCells.length) {
        this.achievableCells = this.achievableCells.filter(cell => {
          if (marker.travelMode === 'land') {
            return cell.land
          } else if (marker.travelMode === 'sea') {
            return cell.sea
          } else if (marker.travelMode === 'air') {
            return true
          } else {
            console.error('Unexpected terrain type')
            return false
          }
        })
      }

      // apply styling to the achievable cells
      this.achievableCells.forEach(cell => cell.polygon.setStyle(rangeStyle))

      // is this an achievable cell?
      const curCell = this.grid.cellFor(cursorLoc)

      if (this.achievableCells.includes(curCell)) {
        // ok, remember it
        this.lastHex = curCell
      }

      // and the track history
      // retrieve the start point of the line

      // are we plotting a line?
      if (this.planningLine.length > 0) {
        this.start = this.planningLine.getLatLngs()[0]
        this.planningLine.setLatLngs([this.startHex.centrePos, cursorLoc])
      }

      // is this an achievable cell?
      if (this.achievableCells.includes(curCell)) {
        // ok, remember it
        this.lastHex = curCell
      }

      // do we have a valid current cell?
      if (this.lastHex != null) {
        // and generate new cells
        this.routeLats = []
        // insert the current location twice,
        // to give us a point marker
        if (this.lastHex) {
          this.routeLats.push(this.lastHex.centrePos)
          this.routeLats.push(this.lastHex.centrePos)
          this.planningLine.setLatLngs(this.routeLats)
        }
      }
    })
    marker.on('dragend', e => {
      // did we end up with a location?
      if (this.lastHex == null) {
        console.log('Warning, failed to find a suitable drop location for ' + marker.name)
      } else {
        // move the marker to the last valid location
        marker.setLatLng(this.lastHex.centrePos)

        // and fire the callback
        this.callback({
          force: marker.force,
          name: marker.name,
          pos: this.lastHex.name
        })
      }

      // clear the line objects
      this.routeLats = []
      this.planningLine.setLatLngs([])

      // clear the shaded cells
      this.achievableCells.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
      this.achievableCells = []

      this.startHex = null
      this.lastHex = null
    })
  }
}
