import declutterMarkers from './declutterMarkers'

function descendTree (/* layer */ layer, /* array */ markers) {
  if (layer.options.icon) {
    // ok, it's a marker
    markers.push(layer)
  } else {
    if (layer.eachLayer) {
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

function clusterMarkers (/* array marker */ markers) {
  const res = []
  markers.forEach(marker => {
    const pos = marker.getLatLng()
    if (pos) {
      const index = pos.lat + ',' + pos.long
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

export default function declutterLayer (/* LayerGroup */ layer) {
  // get all the markers in the layer(s) first
  const markers = findAllMarkers(layer)

  // now cluster the markers
  const clusters = clusterMarkers(markers)

  // sort markers out into clusters
  declutterMarkers(clusters, 0.0833333)
}
