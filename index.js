var map;
        
var image_top = 14.3763382069
var image_left = 42.1865566389
var image_right = 43.8814566389
var image_bottom = 12.1829382069

// zoomDelta: 0.5,
//     zoomSnap: 0,

map = L.map('map', {
    minZoom: 8,
    maxZoom: 12,
    center: [(image_top + image_bottom)/2, (image_left + image_right)/2],
    zoom: 9,
    attributionControl: true
});
map.zoomControl.setPosition('topleft');

var tiledBackdrop = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
    attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
    //maxZoom: 18
});

var land_cells = ["A15", "A16", "A17", "A18", "A19", "A20", "A21", "A22", "A23", "A24", "A25", "A26", "A27"]
var sea_cells = ["A00", "A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", 
"B00", "B01", "B02", "B03", "B04", "B05", "B06", "B07", "B08", "B09", 
"C00", "C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08", "C09", 
"D00", "D01", "D02", "D03", "D04", "D05", "D06", "D07", "D08", "D09", 
"E00", "E01", "E02", "E03", "E04", "E05", "E06", "E07", "E08", "E09", 
"F00", "F02", "F03", "F04", "F05", "F06", "F07", "F08", "F09",
"G00", "G01", "G02", "G03", "G04", "G05", "G06", "G07", "G08", "G09", 
"H00", "H01", "H02", "H03", "H04", "H05", "H06", "H07", "H08", "H09", 
"I00", "I01", "I02", "I03", "I04", "I05", "I06", "I07", "I08", "I09", 
"J00", "J01", "J02", "J03", "J04", "J05", "J06", "J07", "J08", "J09",
"K00", "K01", "K02", "K03", "K04", "K05", "K06", "K07", "K08", "K09", 
"L00", "L01", "L02", "L03", "L04", "L05", "L06", "L07", "L08", "L09", 
"M00", "M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", 
"N00", "N01", "N02", "N03", "N04", "N05", "N06", "N07", "N08", "N09", 
"O02", "O03", "O04", "O05", "O06", "O07", "O08", "O09", 
"P03", "P04", "P05", "P06", "P07", "P08", "P09", 
"Q07", "Q08", "Q09"]

var imageUrl = 'images/new_map.jpg',
imageBounds = [[image_top, image_left], [image_bottom, image_right]];
var overlay = L.imageOverlay(imageUrl, imageBounds, {opacity: 0.8}).addTo(map);

L.control.mousePosition().addTo(map);

const Grid = Honeycomb.defineGrid()

var delta = 0.0416666
var origin =  L.latLng(14.1166 + 3 * delta, 42.4166 - 2 * delta)

var grid2 = Grid.rectangle({ width: 28, height: 24, direction: 'E'})


var gridLayer = L.layerGroup()
gridLayer.addTo(map)
var mapLayer = L.layerGroup()
mapLayer.addLayer(overlay)
mapLayer.addTo(map)
var markerLayer = L.layerGroup()
// note: we don't show the marker layer by default - only when zoomed in

var baseLayers = {"Image":mapLayer, "OpenStreetMap": tiledBackdrop}
var overlays = {"Grid":gridLayer, "Tooltips":markerLayer}
L.control.layers(baseLayers, overlays, {collapsed:false}).addTo(map);

// only show the markers when zoomed in
map.on('zoomend', function() {
    const loaded = map.hasLayer(markerLayer)
    if (map.getZoom() < 11){
        if(loaded)
        {
            map.removeLayer(markerLayer);
        }
    }
    else if(!loaded)
    {
            map.addLayer(markerLayer);
        }
});

// the hexes all have the same corners object, so just use the first one
var hexOne = grid2[0]
var corners = hexOne.corners();

// get the coordinates of the centre of the hex, relative
// to the top-left origin
var centreH = hexOne.center()

const cellOrigin = hexOne.coordinates()

// capture the offset between a cell centre, and the cell origin
const centreOffset = L.point(centreH).subtract(L.point(cellOrigin))

/** convert the honeycomb coords to degrees
 */
function toWorld(origin, delta, point)
{
    return L.latLng(origin.lat - point.x * delta, origin.lng + point.y * delta)
}

/** convert the honeycomb coords to degrees
 */
 function toHex(origin, delta, point)
{
    var latVal = (origin.lat - point.lat) / delta
    var lngVal = (point.lng - origin.lng) / delta
    return L.point(latVal, lngVal)
}

// add the grid to the map
grid2.forEach(hex => {
    // get the coordinates of the cell
    const point = hex.toPoint()

    // since we have A0 at the top-left, we need to move south through the
    // data coords
    hex.centrePos = toWorld(origin, delta, point)

    /** function to zero-pad the integer counter
     */
    function pad(num) {
        var s = "" + num;
        return s.padStart(2, '0')
    }
    hex.name = String.fromCharCode(65 + hex.y) + pad(hex.x)
    
     // add a marker
     var myIcon = L.divIcon({className: 'cell-label', html:hex.name});
    // you can set .my-div-icon styles in CSS
    const cellLabel = L.marker(hex.centrePos, {icon: myIcon});
    markerLayer.addLayer(cellLabel);

    // add the shape

    // build up an array of correctly mapped corners
    var cornerArr = []

    // function to scale the corner to our map scale
    function scalePoint(value)
    {
        var centreP = hex.centrePos
        // the corners are relative to the origin (TL). So, offset them to the centre
        var point = {x: value.x - centreH.x, y: value.y - centreH.y}
        var newP = toWorld(centreP, delta, point)
        cornerArr.push(newP)
    }

    // apply the scaling function to each corner
    corners.forEach(scalePoint)

    // now create the polygon
    var polygon = L.polygon(cornerArr, { color: '#fff', opacity:0.2, weight:3})

    // store the polyline in the cell
    hex.polygon = polygon

    // add this polygon to the relevant layer
    gridLayer.addLayer(polygon)
})



/** get the hex cell for a location
 */
function cellFor(latLng)
{
    // convert to hex coordinates
    var hexCoords = toHex(origin, delta, latLng)

    // apply the offset, since the cell origin is at the top left
    cellCoords = L.point(hexCoords.x + centreOffset.x, hexCoords.y + centreOffset.y)

    // find the nearest hex cell reference to this location
    var cellCoords = Grid.pointToHex(cellCoords.x, cellCoords.y)

    // and now retrieve the cell at these coords
    return grid2.get(cellCoords)
}

var routeLine = L.polyline([],{color: '#249'})
routeLine.addTo(map)

var routeHexes = []
var rangeRingHexes = []




const defaultStyle = {fill:false, color:"#fff", opacity:0.2}
var startHex

function listenTo(marker)
{

    marker.on('drag', function (e) {
        now = e.latlng

        const rangeStyle = {fill:true, color:"#ccc", opacity:1.0}
        const routeStyle = {fill:true, color:"#249", opacity:0.2}

        // does route have contents
        if(routeLine.isEmpty())
        {
            // ok, start drag
            routeLine.setLatLngs([now, now])
            startHex = cellFor(now)

            // double-check the route highlighters are empty
            routeHexes = []

            // mark up the range rings
            var centre = cellFor(now)
            rangeRingHexes = grid2.hexesInRange(centre, 4, true)


            //
            var canTravelTo
            if(marker.travelMode == "Land")
            {
                canTravelTo = land_cells
            }
            else if(marker.travelMode == "Sea")
            {
                canTravelTo = sea_cells
            }

            if(canTravelTo)
            {
                rangeRingHexes = rangeRingHexes.filter(cell => canTravelTo.includes(cell.name))
            }

            rangeRingHexes.forEach(cell => cell.polygon.setStyle(rangeStyle))
        }
        else
        {
            // retrieve the start point of the line
            start = routeLine.getLatLngs()[0]

            routeLine.setLatLngs([start, now])

            var endHex = cellFor(now)

            // clear the old cells
            routeHexes.forEach(function(cell)
            { 
                if(rangeRingHexes.includes(cell))
                {
                    cell.polygon.setStyle(rangeStyle)
                }
                else
                {
                    cell.polygon.setStyle(defaultStyle)
                }
            })
            
            // get the route
            var newRoute = grid2.hexesBetween(startHex, endHex)

            // if we have a restricted possible region,
            // trim to it
            if(rangeRingHexes)
            {
                newRoute = newRoute.filter(cell => rangeRingHexes.includes(cell))
            }

            // and set the new cells
            const routeLats = []
            routeHexes = newRoute
            routeHexes.forEach(function(cell)
            {
                cell.polygon.setStyle(routeStyle); 
                routeLats.push(cell.centrePos)
            })

            routeLine.setLatLngs(routeLats)
        }
    })
    marker.on('dragend', function (e) {
        // put the marker at the centre of a cell
        lastCell = routeHexes.pop()
        marker.setLatLng(lastCell.centrePos)

        routeLine.setLatLngs([])
        // clear the old cells
        routeHexes.forEach(cell => cell.polygon.setStyle(defaultStyle))
        routeHexes = []
        rangeRingHexes.forEach(cell => cell.polygon.setStyle(defaultStyle))
        rangeRingHexes = []
        routeLats = []


    })
}


// give us a couple of platforms
var marker1 = L.marker(
            L.latLng(14.1, 42.5),
            {
                draggable: true
            }
        )
marker1.travelMode = "Sea"
marker1.addTo(map)

var marker2 = L.marker(
            L.latLng(13, 42.4),
            {
                draggable: true
            }
        )
marker2.travelMode = "Land"
marker2.addTo(map)

listenTo(marker1)
listenTo(marker2)