import L from 'leaflet'
import defaultHexStyle from './data/default-hex-style'
import plannedStateFor from './plannedStateFor'
import colorFor from './colorFor'
// eslint-disable-next-line no-unused-vars
import easyButton from 'leaflet-easybutton'

// eslint-disable-next-line no-unused-vars
import glyph from 'leaflet.icon.glyph'

export default class MapPlanningPlayerListener {
  constructor (map, grid, force, turnCompleteCallback) {
    this.grid = grid
    this.force = force
    this.map = map
    this.turnCompleteCallback = turnCompleteCallback

    // create our two lines, one for planning, one for history
    this.routeLine = L.polyline([], {
      color: '#fff',
      dashArray: [1, 4]
    })
    this.routeLine.addTo(map)
    this.plannedLine = L.polyline([], {
      color: '#0f0'
    })
    this.plannedLine.addTo(map)

    this.plannedLats = [] // lad-lngs for route
    this.plannedHexes = [] // hexes for route

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
    this.createEasyButtonFor(map, 'fa-dice-one', 'immobile state selected', function (btn, map) {
      context.platformStateAssigned(context.currentMarker, {
        mobile: false
      })
    })
    this.createEasyButtonFor(map, 'fa-dice-two', 'mobile state & speed selected', function (btn, map) {
      context.platformStateAssigned(context.currentMarker, {
        mobile: true
      })
    })
    this.createEasyButtonFor(map, 'fa-dice-three', 'reset leg', function (btn, map) {
      context.resetCurrentLeg()
    })
    this.createEasyButtonFor(map, 'fa-dice-four', 'submit leg so far', function (btn, map) {
      context.submitLegComplete()
    })
  }

  createEasyButtonFor (map, icon, title, callback) {
    L.easyButton({
      states: [
        {
          icon: icon,
          title: title,
          onClick: callback
        }]
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

  simplifyHexes (/* array<hex cell */cells) {
    const res = []
    cells.forEach(cell => { res.push(cell.name) })
    return res
  }

  clearOnNewLeg () {
    this.plannedLats = []
    this.routeLats = []
    this.routeHexes = []
  }

  /** player has indicated the planned state for a platform. Update the
   * UI accordingly
   */
  platformStateAssigned (/* object */marker, /* object */newState) {

    if (newState.mobile) {
      // ok, get ready for step planning & dragging
      this.startHex = this.grid.cellFor(marker.asset.loc)

      // do some initialisation
      this.clearOnNewLeg()

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
      // Creates a red marker with the coffee icon
      const redMarker = L.icon.glyph({
        prefix: 'fa',
        glyph: 'compass'
      })

      const planningMarker = L.marker(marker.asset.loc, { icon: redMarker, draggable: 'true' })
      planningMarker.addTo(this.map)

      // set the route-line color
      this.updateRouteLinesForForce(marker.force, [this.routeLine, this.plannedLine])

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
        this.routeLats = [cursorLoc, cursorLoc]
        this.routeLine.setLatLngs(this.routeLats)

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
          this.routeLine.setLatLngs(this.routeLats)
        }
      })
      planningMarker.on('dragend', e => {
        const tmpCursorLoc = this.lastCursorLoc
        const cursorHex = this.grid.cellFor(tmpCursorLoc)
        const cursorLoc = cursorHex.centrePos

        // put the planning marker into the centre of the cell, even though
        // it may have been dropped at the edge
        planningMarker.setLatLng(cursorLoc)

        // clear that lastCursorLoc, to be sure we don't abuse it
        delete this.lastCursorLoc

        // drop the first hex from the list, since that was the start point
        this.routeHexes.shift()

        // ok, determine if we are at the end of a leg
        const len = this.routeHexes.length

        // reduce the marker allowance
        // note: we reduce the length by one, so we don't count the starting cell
        marker.planning.remaining -= len

        // the planning hexes now become the planned lats
        this.plannedLats = this.plannedLats.concat(this.routeLats)
        this.plannedLine.setLatLngs(this.plannedLats)

        // build up a fill list of steps
        this.plannedHexes = this.plannedHexes.concat(this.routeHexes)

        // if we have no more leg, push this one, and give us a fresh allowance
        if (marker.planning.remaining === 0) {
          const hexList = this.simplifyHexes(this.plannedHexes)
          this.turnCompleteCallback({
            force: marker.force,
            asset: marker.asset.name,
            turn: 'T02',
            route: hexList
          })
          marker.planning.remaining = marker.planning.allowance

          // show a waypoint marker, for the end of turn
          const turnIcon = L.icon.glyph({
            prefix: 'fa',
            glyph: 'pause'
          })

          const turnMarker = L.marker(cursorLoc, { icon: turnIcon, draggable: 'false' })
//          const turnMarker = L.marker(cursorLoc, { draggable: 'false' })
          console.log('Planning marker:', turnMarker)
          turnMarker.addTo(this.map)
          turnMarker.dragging.disable()

          // give it a form to clear from this point
          const popupContent = '<b>Turn T02</b><ul><li>[Reset from there]</li></ul>'
          turnMarker.bindPopup(popupContent)

          // remove and replace the planning marker, to put it at the front
          planningMarker.remove(this.map)
          planningMarker.addTo(this.map)
        }

        // we've finished with these range rings
        this.clearAchievableCells()

        // plot the achievable cells for this distance
        this.updateAchievableCellsFor(cursorHex, marker.planning.remaining, marker.travelMode)

        // clean up
        this.startHex = null
        this.endHex = null
        this.routeHexes = []
        this.routeLats = []
      })
    }
  }
}
