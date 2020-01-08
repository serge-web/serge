import L from 'leaflet'
import defaultHexStyle from './data/default-hex-style'

export default class MovementListener {
  constructor (map, grid) {
    this.grid = grid

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
  listenTo (marker) {
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
      if (this.achievableCells.length === 0) {
        // no, we must be starting a new line

        // is this a mobile element
        if (marker.mobile) {
          this.planningLine.setLatLngs([cursorLoc, cursorLoc])
        }

        this.startHex = this.grid.cellFor(cursorLoc)

        // limit distance of travel
        if (marker.stepRemaining) {
          this.achievableCells = this.grid.hexesInRange(this.startHex, marker.stepRemaining)
        } else {
          // nope, allow travel to anywhere
          this.achievableCells = this.grid.cells
        }

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
          if (marker.travelMode === 'Land') {
            return cell.land
          } else if (marker.travelMode === 'Sea') {
            return cell.sea
          } else if (marker.travelMode === 'Air') {
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
        if (marker.history) {
          // ok, draw the history line
          const historyLocs = []
          marker.history.forEach(cellName => {
            const cell = this.grid.hexNamed(cellName)
            historyLocs.push(cell.centrePos)
          })

          this.historyLine.setLatLngs(historyLocs)
        }
      } else {
        // retrieve the start point of the line

        // are we plotting a line?
        if (this.planningLine.length > 0) {
          this.start = this.planningLine.getLatLngs()[0]
          this.planningLine.setLatLngs([this.startHex.centrePos, cursorLoc])
        }

        // are we in a safe cell
        const curCell = this.grid.cellFor(cursorLoc)

        // is this an achievable cell?
        if (this.achievableCells.includes(curCell)) {
          // ok, remember it
          this.lastHex = curCell
        }

        // clear the old cells
        this.routeHexes.forEach(cell => {
          if (this.achievableCells.includes(cell)) {
            cell.polygon.setStyle(rangeStyle)
          } else {
            cell.polygon.setStyle(defaultHexStyle)
          }
        })

        // do we have a valid current cell?
        if (this.lastHex != null) {
          // get the route
          let newRoute = this.grid.hexesBetween(this.startHex, this.lastHex)

          // if we have a restricted possible region,
          // trim to it
          if (this.achievableCells) {
            newRoute = newRoute.filter(cell => this.achievableCells.includes(cell))
          }

          // and generate new cells
          this.routeLats = []
          this.routeHexes = newRoute
          if (marker.mobile) {
            this.routeHexes.forEach(cell => {
              cell.polygon.setStyle(routeStyle)
              this.routeLats.push(cell.centrePos)
            })
          } else {
            // insert the current location twice,
            // to give us a point marker
            if (this.lastHex) {
              this.routeLats.push(this.lastHex.centrePos)
              this.routeLats.push(this.lastHex.centrePos)
            }
          }

          if (this.routeLats.length > 1) {
            this.planningLine.setLatLngs(this.routeLats)
          }
        }
      }
    })
    marker.on('dragend', e => {
      // ooh, see if it had restricted travel
      if (marker.allowance && this.routeHexes.length > 0) {
        // consume some of it

        // calculate distance
        const start = this.routeHexes[0]
        const end = this.routeHexes[this.routeHexes.length - 1]
        const distance = start.distance(end)

        marker.stepRemaining -= distance

        // cheat. if we've consumed distance, give it
        // another allowance
        if (marker.stepRemaining === 0) {
          marker.stepRemaining = marker.allowance
        }

        // add these new cells as history
        if (!marker.history) {
          marker.history = []
        }
        this.routeHexes.forEach(cell => marker.history.push(cell.name))
      }

      // move the marker to the last valid location
      marker.setLatLng(this.lastHex.centrePos)

      // clear the line objects
      this.routeLats = []
      this.planningLine.setLatLngs([])
      this.historyLine.setLatLngs([])

      // clear the shaded cells
      this.routeHexes.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
      this.routeHexes = []
      this.achievableCells.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
      this.achievableCells = []
    })
  }
}
