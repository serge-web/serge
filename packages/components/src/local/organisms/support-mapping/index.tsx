import 'leaflet/dist/leaflet.css'
import React, { useEffect } from 'react'
import { LayerGroup, ScaleControl, TileLayer, useMap } from 'react-leaflet-v4'
import MapControl from '../../map-control'
import PlanningForces from '../planning-force'
import { MapConstants } from './helper/MapConstants'
import PropTypes from './types/props'

export const SupportMapping: React.FC<PropTypes> = ({
  position, bounds, ownAssets,
  opAssets, filterApplied, setFilterApplied, setSelectedAssets, selectedAssets, forces,
  viewAsCallback, viewAsForce, actionItems, actionCallback
}) => {
  const TileLayerProps = MapConstants.TileLayer

  const map = useMap()

  useEffect(() => {
    if ((bounds !== undefined) && map) {
      map.flyToBounds(bounds, { duration: 0.6 })
    }
  }, [bounds])

  useEffect(() => {
    if (position !== undefined) {
      const defaultZoom = 10
      map.flyTo(position, defaultZoom, { duration: 0.6 })
    }
  }, [position])

  return (
    <>
      <MapControl
        bounds={bounds}
        filterApplied={filterApplied}
        forces={forces || undefined}
        viewAsCallback={viewAsCallback}
        viewAsForce={viewAsForce}
        zoomStepSize={1}
        actionItems={actionItems}
        actionCallback={actionCallback}
        setFilterApplied={setFilterApplied}
        mapVer='v4'
      />
      <TileLayer {...TileLayerProps} />
      <ScaleControl position='topright' />
      <LayerGroup key={'own-forces'}>
        <PlanningForces opFor={false} assets={ownAssets} setSelectedAssets={setSelectedAssets} selectedAssets={selectedAssets} />
      </LayerGroup>
      <LayerGroup key={'opp-forces'}>
        <PlanningForces opFor={true} assets={opAssets} setSelectedAssets={setSelectedAssets} selectedAssets={selectedAssets} />
      </LayerGroup>
    </>
  )
}

export default SupportMapping
