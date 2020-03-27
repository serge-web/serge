import L from 'leaflet'
import newStateFromPlannedTurns from './newStateFromPlannedTurns'

/* the umpire wishes to accept a planned route
  *
  */
export default function adjudicatingAcceptRoute (/* element */asset, /* number */ turnNumber, /* array */ allRoutes,
  /* layer */ layerMarkers, /* element */ grid) {
  if (asset.destroyed) {
    // don't bother accepting it
  } else {
    // find the data
    const thisAssetData = allRoutes.find(block => block.asset.uniqid === asset.uniqid)

    // capture current state into history
    thisAssetData.newHistory = { turn: turnNumber, status: asset.status, route: asset.route, position: asset.position }

    // update the status
    thisAssetData.newState = newStateFromPlannedTurns(thisAssetData.current, thisAssetData.asset.status, thisAssetData.asset.position)

    // only add a new marker if asset is moving
    if (asset.position !== thisAssetData.newState.position) {
      // get the coords for the current location
      const loc = grid.hexNamed(thisAssetData.newState.position).centrePos

      // create a marker for this platform
      const forceClass = asset.force.toLowerCase()
      const typeClass = asset.platformType.replace(/ /g, '-').toLowerCase()
      const iconClass = `platform-counter platform-force-${forceClass} platform-type-${typeClass}`
      const divIcon = L.divIcon({
        iconSize: [40, 40],
        className: iconClass
      })

      // make the original marker faint
      L.DomUtil.addClass(thisAssetData.marker._icon, 'platform-counter-planned')

      // ok, drop a new marker, on the new location
      // work out if the current state is mobile or not
      thisAssetData.planningMarker = L.marker(loc, {
        draggable: false,
        icon: divIcon,
        zIndexOffset: 1000
      })
      // special handling. Don't declutter the planning marker, we want it in the centre of the cell
      thisAssetData.planningMarker.do_not_declutter = true
      thisAssetData.planningMarker.asset = thisAssetData.asset
      layerMarkers.addLayer(thisAssetData.planningMarker)
    }
  }
}
