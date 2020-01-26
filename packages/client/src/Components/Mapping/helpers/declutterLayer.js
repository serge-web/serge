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
    let hex
    if (marker.do_not_declutter) {
      // ok, special handling, we have an item that doesn't want to be decluttered
      if (marker.getLayers) {
        // ok, it's several items that shouldn't be separated, but clustered as one
        const firstChild = marker.getLayers()[0]
        hex = firstChild.hex
      } else {
        // single item that doesn't want to be decluttered, ignore it
        hex = null
      }
    } else {
      hex = marker.hex
    }
    if (hex) {
      let list = res[hex]
      if (!list) {
        list = []
        res[hex] = list
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
  declutterMarkers(clusters, grid.delta / 3, grid)
}
