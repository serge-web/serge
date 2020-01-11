import L from 'leaflet'
import defaultHexStyle from './data/default-hex-style'

export default class MapAdjudicationPendingListener {
  constructor (map, grid, callback) {
    this.grid = grid
    this.callback = callback

    // create our two lines, one for planning, one for history
    this.planningLine = L.polyline([], {
      color: '#fff',
      dashArray: [1, 4]
    })
    this.planningLine.addTo(map)
    this.historyLine = L.polyline([], {
      color: '#0f0'
    })
    this.historyLine.addTo(map)

    this.routeHexes = [] // hexes representing route
    this.routeLats = [] // lad-lngs for route
    this.achievableCells = [] // hexes representing achievable area
    this.startHex = null // hex for start drag operation
    this.lastHex = null // most recent cell travelled through
  }

  /** listen to drag events on the supplied marker */
  listenTo(marker, myForce) {
    marker.on('drag', e => {
      const cursorLoc = e.latlng

      const rangeStyle = {
        fill: true,
        color: '#ccc',
        opacity: 1.0
      }
      const routeStyle = {
        fill: true,
        color: '#249',
        opacity: 0.2
      }

      // hvae we calculated the achievable cells?

      // no, we must be starting a new line

      // is this a mobile element
      if (marker.mobile) {
        this.planningLine.setLatLngs([cursorLoc, cursorLoc])
      }

      this.startHex = this.grid.cellFor(cursorLoc)

      // limit distance of travel
      this.achievableCells = this.grid.cells

      // set the route-line color
      let hisColor
      if (marker.force === 'Red') {
        hisColor = '#ff0000'
      } else if (marker.force === 'Blue') {
        hisColor = '#000fff'
      } else if (marker.force === 'Green') {
        hisColor = '#19bd37'
      }
      this.planningLine.setStyle({
        color: hisColor
      })
      this.historyLine.setStyle({
        color: hisColor
      })

      //
      this.achievableCells = this.achievableCells.filter(cell => {
        if (marker.travelMode === 'land') {
          return cell.land
        } else if (marker.travelMode === 'sea') {
          return cell.sea
        } else if (marker.travelMode === 'air') {
          return true
        }
      })

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
        this.callback({ force: marker.force, name: marker.name, pos: this.lastHex })
      }

      // clear the line objects
      this.routeLats = []
      this.planningLine.setLatLngs([])
      this.historyLine.setLatLngs([])

      // clear the shaded cells
      this.routeHexes.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
      this.routeHexes = []
      this.achievableCells.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
      this.achievableCells = []

      this.startHex = null
      this.lastHex = null
    })
  }
}
