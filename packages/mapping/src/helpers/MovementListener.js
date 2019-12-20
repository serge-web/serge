import L from 'leaflet'

export default class MovementListener {
    constructor(map, grid) {
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
        this.routeLats = []  // lad-lngs for route
        this.achievableCells = [] // hexes representing achievable area
        this.startHex = null // hex for start drag operation
        this.lastHex = null // most recent cell travelled through
    }
    /** listen to drag events on the supplied marker */
    listenTo(marker) {
        // we need to capture 'this' in this context, not in callback function
        const core = this
        marker.on('drag', function (e) {
            const cursorLoc = e.latlng

            const rangeStyle = {
                fill: true,
                color: "#ccc",
                opacity: 1.0
            }
            const routeStyle = {
                fill: true,
                color: "#249",
                opacity: 0.2
            }

            // hvae we calculated the achievable cells?
            if (core.achievableCells.length == 0) {
                // no, we must be starting a new line

                // is this a mobile element
                if(marker.mobile)
                {
                    core.planningLine.setLatLngs([cursorLoc, cursorLoc])
                }

                core.startHex = grid.cellFor(cursorLoc)

                // limit distance of travel
                if (marker.stepRemaining) {
                    core.achievableCells = grid.hexesInRange(core.startHex, marker.stepRemaining)
                } else {
                    // nope, allow travel to anywhere
                    core.achievableCells = grid.cells
                }

                // set the route-line color
                var hisColor
                if (marker.force == "Red") {
                    hisColor = "#f00"
                } else if (marker.force == "Blue") {
                    hisColor = "#00f"
                }
                core.planningLine.setStyle({
                    color: hisColor
                })
                core.historyLine.setStyle({
                    color: hisColor
                })

                //
                core.achievableCells = core.achievableCells.filter(function(cell)
                {
                    if (marker.travelMode == "Land") {
                        return cell.land
                    } else if (marker.travelMode == "Sea") {
                        return cell.sea
                    } else if (marker.travelMode = "Air") {
                        return true
                    }  
                })

                // apply styling to the achievable cells
                core.achievableCells.forEach(cell => cell.polygon.setStyle(rangeStyle))

                // is this an achievable cell?
                const curCell = grid.cellFor(cursorLoc)
                if(core.achievableCells.includes(curCell))
                {
                    // ok, remember it
                    core.lastHex = curCell
                }

                // and the track history
                if(marker.history)
                {
                    // ok, draw the history line
                    const historyLocs = []
                    marker.history.forEach(function(cell_name){
                        const cell = core.grid.hexNamed(cell_name)
                        historyLocs.push(cell.centrePos)
                    })

                    core.historyLine.setLatLngs(historyLocs)
                }

            } else {
                // retrieve the start point of the line

                // are we plotting a line?
                if(core.planningLine.length > 0)
                {
                    core.start = core.planningLine.getLatLngs()[0]
                    core.planningLine.setLatLngs([core.startHex.centrePos, cursorLoc])
                }

                // are we in a safe cell
                const curCell = grid.cellFor(cursorLoc)
                
                // is this an achievable cell?
                if(core.achievableCells.includes(curCell))
                {
                    // ok, remember it
                    core.lastHex =curCell
                }

                // clear the old cells
                core.routeHexes.forEach(function (cell) {
                    if (core.achievableCells.includes(cell)) {
                        cell.polygon.setStyle(rangeStyle)
                    } else {
                        cell.polygon.setStyle(defaultHexStyle)
                    }
                })

                // get the route
                var newRoute = grid.hexesBetween(core.startHex, core.lastHex )

                // if we have a restricted possible region,
                // trim to it
                if (core.achievableCells) {
                    newRoute = newRoute.filter(cell => core.achievableCells.includes(cell))
                }

                // and generate new cells
                core.routeLats = []
                core.routeHexes = newRoute
                if(marker.mobile)
                {
                    core.routeHexes.forEach(function (cell) {
                        cell.polygon.setStyle(routeStyle);
                        core.routeLats.push(cell.centrePos)
                    })
                }
                else
                {
                    // insert the current location twice,
                    // to give us a point marker
                    if(core.lastHex)
                    {
                        core.routeLats.push(core.lastHex.centrePos)
                        core.routeLats.push(core.lastHex.centrePos)
                    }
                }

                if(core.routeLats.length > 1)
                {
                    core.planningLine.setLatLngs(core.routeLats)
                }
            }
        })
        marker.on('dragend', function (e) {
            // ooh, see if it had restricted travel
            if (marker.allowance && core.routeHexes.length > 0) {
                // consume some of it

                // calculate distance
                const start = core.routeHexes[0]
                const end = core.routeHexes[core.routeHexes.length - 1]
                const distance = start.distance(end)

                marker.stepRemaining -= distance

                // cheat. if we've consumed distance, give it 
                // another allowance
                if (marker.stepRemaining == 0) {
                    marker.stepRemaining = marker.allowance
                }

                // add these new cells as history
                if(!marker.history)
                {
                    marker.history = []
                }
                core.routeHexes.forEach(cell => marker.history.push(cell.name))
            }

            // move the marker to the last valid location
            marker.setLatLng(core.lastHex.centrePos)

            // clear the line objects
            core.routeLats = []
            core.planningLine.setLatLngs([])
            core.historyLine.setLatLngs([])

            // clear the shaded cells
            core.routeHexes.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
            core.routeHexes = []
            core.achievableCells.forEach(cell => cell.polygon.setStyle(defaultHexStyle))
            core.achievableCells = []
        })
    }
}