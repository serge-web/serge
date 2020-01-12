import L from 'leaflet'
import defaultHexStyle from './data/default-hex-style'
import plannedStateFor from './plannedStateFor'
import colorFor from './colorFor'

export default class MapPlanningPlayerListener {
  constructor (map, grid, force, turnCompleteCallback) {
    this.grid = grid
    this.force = force
    this.turnCompleteCallback = turnCompleteCallback

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

  plannedModePopupFor (asset) {
    var popup = '<b>' + asset.name + '</b><br/>'
    // states
    // TODO: do we have concept of current speed?  Maybe take from history
    popup += plannedStateFor(asset.state, 0, asset.platformTypeDetail, asset.platformSpeeds)

    // reset the route
    popup += '<input type="button" value="Reset Planned Route">'

    // TODO: handler for this planned mode changing
    popup += '<input type="button" value="Save">'

    return popup
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {

    // is it for the current force?
    if (marker.asset.force === this.force) {
      const popupContent = this.plannedModePopupFor(marker.asset)
      marker.bindPopup(popupContent).openPopup()

      // also give it some remaining allowance
      const speeds = marker.asset.platformSpeeds
      if (speeds && speeds.length > 0) {
        const maxSpeed = speeds[speeds.length - 1]
        const numCells = maxSpeed / 5
        marker.allowance = numCells
        marker.stepRemaining = numCells
      }
    }

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
        if ('stepRemaining' in marker) {
          console.log('calc range:', marker)
          this.achievableCells = this.grid.hexesInRange(this.startHex, marker.stepRemaining)
        } else {
          // nope, allow travel to anywhere
          console.log('unlimited range:', marker)
          this.achievableCells = this.grid.cells
        }

        // set the route-line color
        const hisColor = colorFor(marker.force)
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

          if (newRoute.length > 3) {
            console.log('here')
          }

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
      if (marker.allowance) {
        if (this.routeHexes.length > 0) {
          // consume some of it

          // calculate distance
          const start = this.routeHexes[0]
          const end = this.routeHexes[this.routeHexes.length - 1]
          const distance = start.distance(end)

          marker.stepRemaining -= distance

          // cheat. if we've consumed distance, give it
          // another allowance
          // if (marker.stepRemaining === 0) {
          //  marker.stepRemaining = marker.allowance
          // }
        }

        // still some more steps to do.
        if (!marker.priorLegs) {
          marker.priorLegs = []
        }
        this.routeHexes.forEach(cell => {
          // if the prior legs don't already contain this, add it
          if (marker.priorLegs.indexOf(cell) === -1) {
            marker.priorLegs.push(cell)
          }
        })
      }

      // is this the end of this turn?
      if (marker.stepRemaining === 0) {
        if (marker.allowance >= 0) {
          // ok, fire the callback
          const payload = { force: marker.asset.force, asset: marker.asset.name, route: marker.priorLegs }
          this.turnCompleteCallback(payload)

          // and do some tidying up
          delete marker.priorLegs

          // and tell leaflet it's no longer draggable in this turn
          marker.dragging.disable()
        }

        // clear the line objects
        this.routeLats = []
        this.planningLine.setLatLngs([])
        this.historyLine.setLatLngs([])

        // clear the shaded cells
        this.routeHexes.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
        this.routeHexes = []
      }

      // clear the achievable cells. if it's an incomplete leg, this list will be shorter
      this.achievableCells.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
      this.achievableCells = []

      // move the marker to the last valid location
      marker.setLatLng(this.lastHex.centrePos)

    })
  }
}
