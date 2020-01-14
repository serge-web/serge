import L from 'leaflet'
import defaultHexStyle from './data/default-hex-style'
import plannedStateFor from './plannedStateFor'
import colorFor from './colorFor'
// eslint-disable-next-line no-unused-vars
import easyButton from 'leaflet-easybutton'

export default class MapPlanningPlayerListener {
  constructor (map, grid, force, turnCompleteCallback) {
    this.grid = grid
    this.force = force
    this.map = map
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
    this.achievableCells = [] // hexes representing achievable area this turn
    this.startHex = null // hex for start drag operation
    this.lastHex = null // most recent cell travelled through

    this.currentMarker = null // the selected marker // TODO: it's only for development

    // store some styling details, once, centrally

    this.rangeStyle = {
      fill: true,
      color: '#ccc',
      opacity: 1.0
    }
    this.routeStyle = {
      fill: true,
      color: '#249',
      opacity: 0.2
    }

    // try to create a button
    const context = this
    L.easyButton('fa-dice-one', function (btn, map) {
      console.log('immobile state selected')
      context.platformStateAssigned(context.currentMarker, {
        mobile: false
      })
    }).addTo(map)
    L.easyButton('fa-dice-two', function (btn, map) {
      console.log('mobile state & speed selected')
      context.platformStateAssigned(context.currentMarker, {
        mobile: true
      })
    }).addTo(map)
    L.easyButton('fa-dice-three', function (btn, map) {
      console.log('submit leg clicked')
    }).addTo(map)
  }

  /** create a new list of cells, that have been filtered to those
   * that are applicable to the provided domain
   */
  cellsValidForThisDomain (/* array */ cells, /* string */ domain) {
    return cells.filter(cell => {
      switch (domain) {
        case 'land':
          return cell.land
        case 'sea':
          return cell.sea
        case 'air':
          return true
        default:
          return true
      }
    })
  }

  plannedModePopupFor (asset) {
    var popup = '<b>' + asset.name + '</b><br/>'
    // states
    // TODO: do we have concept of current speed? Maybe take from history
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

      marker.on('click', e => {
        if (this.currentMarker) {
          // do any cleaning up necessary
        }
        // we have to trick module by pushing capturing marker - so we know
        // who to advance.
        this.currentMarker = marker
      })

      // ok, the popup will eventually manage state
      console.log(marker)
      marker.options.draggable = false
    }
  }

  clearAchievableCells () {
    this.achievableCells.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
    this.achievableCells = []
  }

  /** we're entering a new planning step - calculate which cells are 
   * achievable given the range remaining
   */
  updateAchievableCellsFor (/* hex */location, /* int */rangeRemaining, /* string */travelMode) {
    // work out the cells in range
    if (rangeRemaining < 100) {
      this.achievableCells = this.grid.hexesInRange(location, rangeRemaining)
    } else {
      // just give him the whole area
      this.achievableCells = this.grid.cells
    }

    // filter the achievable cells for his domain
    this.achievableCells = this.cellsValidForThisDomain(this.achievableCells, travelMode)

    // plot the available range
    this.achievableCells.forEach(cell => cell.polygon.setStyle(this.rangeStyle))
  }

  updateRouteLinesForForce (/* string */ force, /* array<Line> */ lines) {
    const hisColor = colorFor(force)
    lines.forEach((line) => {
      line.setStyle({
        color: hisColor
      })
    })
  }

  /** player has indicated the planned state for a platform. Update the
   * UI accordingly
   */
  platformStateAssigned (/* object */marker, /* object */newState) {

    if (newState.mobile) {
      // ok, get ready for step planning & dragging
      this.startHex = this.grid.cellFor(marker.asset.loc)

      // calculate the steps remaining
      const range = 4
      const allowance = range

      // store the steps remaining
      marker.planning = {
        allowance: range,
        remaining: allowance
      }

      // do we already have achievable cells?
      // TODO: our logic _Should_ clear these at the end of a leg
      this.clearAchievableCells()

      // plot the achievable cells for this distance
      this.updateAchievableCellsFor(this.startHex, marker.planning.remaining, marker.travelMode)

      // also create a new marker, used to plot the path
      const planningMarker = L.marker(marker.asset.loc, { draggable: 'true' })
      planningMarker.addTo(this.map)

      // set the route-line color
      this.updateRouteLinesForForce(marker.force, [this.planningLine, this.historyLine])

      // handle movement of the planning marker
      planningMarker.on('drag', e => {
        const cursorLoc = e.latlng
        const cursorHex = this.grid.cellFor(cursorLoc)

        // note: the dragEnd event doesn't get a location, we'll need to store it from here
        this.lastCursorLoc = cursorLoc

        // is this location safe?
        if (!this.achievableCells.includes(cursorHex)) {
          // drop out, we can't handle it - so we
          // won't be changing any data based on it
          return
        }

        // ok, we have a valid location. clear the existing route
        this.routeLats = []
        this.planningLine.setLatLngs([cursorLoc, cursorLoc])

        // clear the old cells
        this.routeHexes.forEach(cell => {
          if (this.achievableCells.includes(cell)) {
            cell.polygon.setStyle(this.rangeStyle)
          } else {
            cell.polygon.setStyle(defaultHexStyle)
          }
        })

        // do we know the drag start?
        if (!this.startHex) {
          // drag operation just started
          this.startHex = cursorHex
        } else {
          // mid-drag
          this.lastHex = cursorHex
        }

        // calculate the route
        let newRoute = this.grid.hexesBetween(this.startHex, this.lastHex)

        // if we have a restricted possible region,
        // trim to it
        if (this.achievableCells) {
          newRoute = newRoute.filter(cell => this.achievableCells.includes(cell))
        }

        // and generate new cells
        this.routeLats = []
        this.routeHexes = newRoute
        this.routeHexes.forEach(cell => {
          cell.polygon.setStyle(this.routeStyle)
          this.routeLats.push(cell.centrePos)
        })

        if (this.routeLats.length > 1) {
          this.planningLine.setLatLngs(this.routeLats)
        }
      })
      planningMarker.on('dragend', e => {
        const cursorLoc = this.lastCursorLoc
        const cursorHex = this.grid.cellFor(cursorLoc)

        // clear that lastCursorLoc, to be sure we don't abuse it
        delete this.lastCursorLoc

        // ok, determine if we are at the end of a leg
        const len = this.routeHexes.length

        // reduce the marker allowance
        // note: we reduce the length by one, so we don't count the starting cell
        marker.planning.remaining -= len - 1

        // we've finished with these range rings
        this.clearAchievableCells()

        // are we down to zero?
        if (marker.planning.remaining === 0) {
          // ok, submit this new turn
          console.log(cursorHex)
        } else {
          // plot the achievable cells for this distance
          this.updateAchievableCellsFor(cursorHex, marker.planning.remaining, marker.travelMode)

          // also move the start and end hex to this point
          this.startHex = null
          this.endHex = null
        }




      })
    }
  }

  oldHandler (marker) {
    const cursorLoc = 1
    const rangeStyle = 3
    const routeStyle = {}
    marker.on('dragend', e => {
      // hvae we calculated the achievable cells?
      if (this.achievableCells.length === 0) {
        // no, we must be starting a new line

        // is this a mobile element
        if (marker.mobile) {
          this.planningLine.setLatLngs([cursorLoc, cursorLoc])
        }

        // limit distance of travel
        if ('stepRemaining' in marker) {
          console.log('calc range:', marker)
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
          } else {
            console.error('Unexpected terrain type')
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
          // marker.stepRemaining = marker.allowance
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
          const payload = {
            force: marker.asset.force,
            asset: marker.asset.name,
            route: marker.priorLegs
          }
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
