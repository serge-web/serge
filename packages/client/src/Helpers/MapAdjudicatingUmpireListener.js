import L from 'leaflet'
import defaultHexStyle from './data/default-hex-style'

export default class MapAdjudicatingListener {
  constructor (map, grid) {
    this.grid = grid

    // create our two lines, one for planning, one for history
    this.planningLine = L.polyline([], {
      color: '#fff',
      dashArray: [1, 4]
    })
    this.map = map
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

    // keep track of who we're listening to
    this.registeredListeners = []
  }

  clearListeners () {
    this.registeredListeners.forEach(marker => {
      // next lines commented out, until we've refactored JS into functions
      // marker.off('drag', dragHandler)
      // marker.off('drag', dragEndHandler)

      marker.unbindPopup()
    })

    // and empty the array
    this.registeredListeners = []
  }

  handleVisClick (event) {
    console.log('Vis change for:', event)
  }

  popupFor (asset) {
    const descStr = 'Force:' + asset.force + ', Type:' + asset.platformType

    var perString = '<ul>'
    if (asset.perceptions) {
      for (var key in asset.perceptions) {
        const perception = asset.perceptions[key]
        const perType = perception.type ? perception.type : 'unknown'
        perString += '<li>' + key + ':' + perception.force + ', ' + perType
      }
    }
    perString += '</ul>'

    const forces = ['Red', 'Blue']
    var visString = '<ul>'
    forces.forEach((force) => {
      if (asset.force !== force) {
        const isVis = !!asset.perceptions[force]
        const visStr = isVis ? 'Checked' : ''
        // const event = { force: asset.force, asset: asset.name, visFor: force }
        // this.handleVisClick(event)
        // TODO: attach onclick handler in next line
        const controlStr = '<input type="checkbox" name="vehicle3" value="Boat"' + visStr + '>' + force + '</input>'
        visString += '<li>' + controlStr + '</li>'
      }
    })

    var conditionStr = '<ul>'
    const pType = asset.platformTypeDetail
    console.log(asset)
    if (pType.conditions) {
      for (var key2 of pType.conditions) {
        const selected = asset.condition === key2 ? 'checked="checked"' : ''
        // TODO: attach onclick handler in next line
        const stateCtrl = '<input type="radio" name="vehicle3" ' + selected + ' value="' + key2 + '">' + key2 + '</input><br/>'
        conditionStr += stateCtrl
      }
    }
    conditionStr += '</ul>'

    return '<b>' + asset.name + '</b><br/>' + descStr + '<hr/>Perceived as:' + perString + '<hr/>Visible to:' + visString + '<hr/>Current Condition:' + conditionStr + '</p>'
  }

  /** listen to drag events on the supplied marker */
  listenTo (marker) {
    // remember we're listing to it
    this.registeredListeners.push(marker)

    const popupContent = this.popupFor(marker.asset)
    marker.bindPopup(popupContent).openPopup()

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
          if (marker.travelMode === 'land') {
            return cell.land
          } else if (marker.travelMode === 'sea') {
            return cell.sea
          } else if (marker.travelMode === 'air') {
            return true
          } else {
            return false
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
