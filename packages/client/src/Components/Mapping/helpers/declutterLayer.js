import declutterMarkers from './declutterMarkers'

function descendTree (/* layer */ layer, /* array */ markers) {
  if (layer.options.icon) {
    // ok, it's a marker
    markers.push(layer)
  } else {
    if (layer.do_not_declutter) {
      // ok, keep this one as it is
      markers.push(layer)
    } else if (layer.eachLayer) {
      layer.eachLayer(layer => {
        descendTree(layer, markers)
      })
    }
  }
}

function findAllMarkers (/* LayerGroup */ layer) {
  const markers = []

  descendTree(layer, markers)

  return markers
}

function clusterMarkers (/* array marker */ markers, /* grid */ grid) {
  const res = []
  markers.forEach(marker => {
    let pos
    if (marker.do_not_declutter) {
      // ok, special handling, we have an item that doesn't want to be decluttered
      if (marker.getLayers) {
        // ok, it's several items that shouldn't be separated, but clustered as one
        const firstChild = marker.getLayers()[0]
        pos = firstChild.getLatLng()
      } else {
        // single item that doesn't want to be decluttered, ignore it
        pos = null
      }
    } else {
      pos = marker.getLatLng()
    }
    if (pos) {
      let index
      // NOTE: 1. We may not have the grid, if it's a unit test
      // NOTE: 2. Also, on occasion, the decluttering may push
      // an item beyond the edge of the map, in which case
      // cellFor will return null
      if (grid.cellFor && grid.cellFor(pos)) {
        const thisCell = grid.cellFor(pos)
        index = thisCell.name
      } else {
        index = pos.lat + ',' + pos.lng
      }
      let list = res[index]
      if (!list) {
        list = []
        res[index] = list
      }
      list.push(marker)
    }
  })
  return res
}

export default function declutterLayer (/* LayerGroup */ layer, /* object */ grid) {
  // get all the markers in the layer(s) first
  const markers = findAllMarkers(layer)

  // now cluster the markers
  const clusters = clusterMarkers(markers, grid)

  // sort markers out into clusters
  declutterMarkers(clusters, grid.delta / 3)
}
