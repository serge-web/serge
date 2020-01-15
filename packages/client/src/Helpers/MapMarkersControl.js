const MapMarkersControl = (markers, grid, allForces) => {
  markers.eachLayer(function (marker) {
    const force = allForces.find(force => marker.force === force.name)
    if (force && marker.asset) {
      const asset = force.assets.find(({ name }) => name === marker.asset.name)
      if (asset) {
        if (marker.asset.position !== asset.position) {
          // update marker
          marker.setLatLng(grid.hexNamed(asset.position).centrePos)
        }
      } else {
        // asset not found
      }
    }
  })
}

export default MapMarkersControl
