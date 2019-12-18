

const defaultHexStyle = {
    fill: false,
    color: "#fff",
    opacity: 0.2,
    weight: 3
}

class GridImpl {
    constructor(origin, delta, width, height) {
        this.origin = origin
        this.delta = delta
        this.grid = Honeycomb.defineGrid()
        this.grid_cells = this.grid.rectangle({
            width: width,
            height: height,
            direction: 'E'
        })

        // the hexes all have the same corners object, so just use the first one
        const hexOne = this.grid_cells[0]
        this.corners = hexOne.corners();

        // get the coordinates of the centre of the hex, relative
        // to the top-left origin
        this.centreH = hexOne.center()

        // and the coords of the top-left origin
        const cellOrigin = hexOne.coordinates()

        // capture the offset between a cell centre, and the cell origin
        this.centreOffset = L.point(this.centreH).subtract(L.point(cellOrigin))

    }
    /** get the array of cells */
    get cells() {
        return this.grid_cells
    }
    /** convert this point in cell coordinates to lat/long */
    toWorld(point) {
        return this.toWorld2(this.origin, point)
    }
    /** calculate the position from the supplied offset */
    toWorld2(origin, point) {
        return L.latLng(origin.lat - point.x * this.delta, origin.lng + point.y * this.delta)
    }
    /** convert this lat/long to Hex coordinates */
    toHex(point) {
        var latVal = (this.origin.lat - point.lat) / this.delta
        var lngVal = (point.lng - this.origin.lng) / this.delta
        return L.point(latVal, lngVal)
    }
    /** get the cells at the indicated distance from the origin */
    hexesInRange(startHex, range) {
        return this.grid_cells.hexesInRange(startHex, range, true)
    }
    /** get the cells on the path between these points */
    hexesBetween(startHex, endHex) {
        return this.grid_cells.hexesBetween(startHex, endHex)
    }
    /** retrive the cell at the supplied human-readable coords ("A01") */
    hexNamed(name)
    {
        return this.grid_cells.find(cell => cell.name == name)
    }
    /** get the hex cell for a location
     */
    cellFor(latLng) {
        // convert to hex coordinates
        var hexCoords = this.toHex(latLng)

        // apply the offset, since the cell origin is at the top left
        cellCoords = L.point(hexCoords.x + this.centreOffset.x, hexCoords.y + this.centreOffset.y)

        // find the nearest hex cell reference to this location
        var cellCoords = this.grid.pointToHex(cellCoords.x, cellCoords.y)

        // and now retrieve the cell at these coords
        return this.cells.get(cellCoords)
    }
    /** generate the hexagons, and add them to thie supplied layer */
    addShapesTo(gridLayer) {
        // add the grid to the map
        this.grid_cells.forEach(hex => {
            // get the coordinates of the cell
            const point = hex.toPoint()

            // safely store the coords of the centre of the cell
            hex.centrePos = grid.toWorld(point)

            /** function to zero-pad the integer counter
             */
            function pad(num) {
                var s = "" + num;
                return s.padStart(2, '0')
            }
            hex.name = String.fromCharCode(65 + hex.y) + pad(hex.x)

            // sort out the cell attributes
            const cell_chars = cell_types[hex.name]
            if(cell_chars)
            {
                hex.sea = cell_chars[0]
                hex.land = cell_chars[1]
            }
            else
            {
             //   console.log("Warning,cell chars not found for:" + hex.name)
            }

            // add a marker
            var myIcon = L.divIcon({
                className: 'cell-label',
                html: hex.name
            });
            // you can set .my-div-icon styles in CSS
            const cellLabel = L.marker(hex.centrePos, {
                icon: myIcon, 
                keyboard: false,  // prevent it taking keyboard focus
                zIndexOffset:-100  // ensure it's rendered behind routes
            });
            markerLayer.addLayer(cellLabel);

            // add the shape
            // build up an array of correctly mapped corners
            var cornerArr = []

            // function to scale the corner to our map scale
            const centreH = this.centreH

            function scalePoint(value) {
                var centreP = hex.centrePos
                // the corners are relative to the origin (TL). So, offset them to the centre
                var point = {
                    x: value.x - centreH.x,
                    y: value.y - centreH.y
                }
                var newP = grid.toWorld2(centreP, point)
                cornerArr.push(newP)
            }

            // apply the scaling function to each corner
            this.corners.forEach(scalePoint)

            // now create the polygon
            var polygon = L.polygon(cornerArr, defaultHexStyle)

            // store the polyline in the cell
            hex.polygon = polygon

            // add this polygon to the relevant layer
            gridLayer.addLayer(polygon)
        })
    }
}

class MovementListener {
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

/** create a marker for the supplied set of details */
function markerFor(spec)
{
    var res = L.marker(
        spec.loc, {
            draggable: spec.draggable
        }
    )
    res.bindTooltip(spec.name)
    res.travelMode = spec.travelMode
    res.force = spec.force
    res.stepRemaining = spec.allowance
    res.allowance = spec.allowance
    res.mobile = spec.mobile
    res.history = spec.history
    return res
}
/*
 * START OF LEAFLET MAPPING
 */

var image_top = 14.194809302;
var image_left = 42.3558566271;
var image_right = 43.7417816271;
var image_bottom = 12.401259302;

const map = L.map('map', {
    minZoom: 8,
    maxZoom: 12,
    center: [(image_top + image_bottom) / 2, (image_left + image_right) / 2],
    zoom: 9,
    attributionControl: false,
    zoomAnimation: false
});
map.zoomControl.setPosition('topleft');

var tiledBackdrop = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>'
});

var imageBounds = [[image_top, image_left], [image_bottom, image_right]];
var tileLayer =L.tileLayer('tiles/{z}/{x}/{y}.png', {
    minZoom: 8,
    maxZoom: 12,
    tms: false,
    bounds: imageBounds,
    attribution: 'Generated by QTiles'
}).addTo(map);

L.control.mousePosition().addTo(map);

var gridLayer = L.layerGroup()
gridLayer.addTo(map)
var markerLayer = L.layerGroup()
// note: we don't show the marker layer by default - only when zoomed in
var platformLayer = L.layerGroup();
platformLayer.addTo(map);


var baseLayers = {
    "OpenStreetMap": tiledBackdrop,
    "Tiled image": tileLayer
}
var overlays = {
    "Grid": gridLayer,
    "Tooltips": markerLayer,
    "Platforms": platformLayer
}
L.control.layers(baseLayers, overlays, {
    collapsed: false
}).addTo(map);

// only show the markers when zoomed in
map.on('zoomend', function () {
    const loaded = map.hasLayer(markerLayer)
    if (map.getZoom() < 11) {
        if (loaded) {
            map.removeLayer(markerLayer);
        }
    } else if (!loaded) {
        map.addLayer(markerLayer);
    }
});

/*
 *  CREATE THE GRID
 */
var delta = 0.0416666
var origin = L.latLng(14.1166, 42.4166)
var grid = new GridImpl(origin, delta, 24, 21)

// add hexagons to this map
grid.addShapesTo(gridLayer)

/* 
 * CREATE SOME SAMPLE PLATFORMS
 */

// experiment with back-history
const trial_history = ["C05", "C04", "C03", "C02", "C01"]

// give us a couple of platforms
const platforms = []
platforms.push({loc:grid.hexNamed("C01").centrePos, draggable:true, name:"Frigate", travelMode:"Sea", force:"Blue", allowance:5, mobile:true, history:trial_history})
platforms.push({loc:grid.hexNamed("P02").centrePos, draggable:true, name:"Coastal Battery", travelMode:"Land", force:"Red", mobile:false})
platforms.push({loc:grid.hexNamed("P03").centrePos, draggable:true, name:"Fisherman", travelMode:"Sea", force:"Red", allowance:3, mobile:true})
platforms.push({loc:grid.hexNamed("C17").centrePos, draggable:true, name:"MPA", travelMode:"Air", force:"Blue", mobile:true})

// create class to listen for movement
const listener = new MovementListener(map, grid)

// listen to the platorm markers
platforms.forEach(function(spec)
{
    marker = markerFor(spec)
    listener.listenTo(marker)
    platformLayer.addLayer(marker)
})
