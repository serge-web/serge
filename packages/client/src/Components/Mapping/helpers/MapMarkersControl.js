const MapMarkersControl = (markers, grid, allForces) => {
  markers.eachLayer(function (marker) {
    const force = allForces.find(force => marker.force === force.name)
    if (force && marker.asset) {
      const asset = force.assets.find(({ name }) => name === marker.asset.name)
      if (asset) {
        // check the positions match
        if (marker.asset.position !== asset.position) {
          // update marker
          marker.setLatLng(grid.hexNamed(asset.position).centrePos)
        }

        // check that this force should be able to see this marker
        // TODO: implementations
      } else {
        // asset not found
      }
    }
  })
}

export default MapMarkersControl
