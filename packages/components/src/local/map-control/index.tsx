import AddIcon from '@material-ui/icons/Add'
import HomeIcon from '@material-ui/icons/Home'
import RemoveIcon from '@material-ui/icons/Remove'

/* Import proptypes */
import cx from 'classnames'
import { DomEvent, LatLngBounds } from 'leaflet'
import React, { useEffect, useState } from 'react'
import PropTypes from './types/props'

import { useMap } from 'react-leaflet-v4'
import Item from './helpers/item'

export const MapControl: React.FC<PropTypes> = ({
  /* main */
  map,
  children,
  /* home */
  showHome = true,
  bounds,
  /* zoom */
  showZoom = true,
  zoomStepSize = 0.5,
  mapVer = 'v2'
}) => {
  const [originalBounds, setOriginalBounds] = useState<LatLngBounds | undefined>(undefined)

  const localMap = mapVer === 'v4' ? useMap() : map

  /** the forces from props has changed */
  useEffect(() => {
    if (originalBounds === undefined) {
      setOriginalBounds(bounds)
    }
  }, [bounds])

  /*
   * disable map scroll and click events to allow
   * to use map control  as usual html
   */
  const disableMapClickAndScrolll = (ref: any): void => {
    if (ref) {
      DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref)
    }
  }
  /* change map zoom level */
  const handleZoomChange = (changeValue: number): void => {
    if (!localMap) {
      return
    }
    const currentZoom = localMap.getZoom()
    if (currentZoom) localMap.setZoom(currentZoom + changeValue)
  }

  /* set map to overall view */
  const handleHome = (): void => {
    if (!localMap || !originalBounds) {
      return
    }
    localMap.flyToBounds(originalBounds, { duration: 0.75 })
  }

  if (!localMap) return null

  return (
    <div className='leaflet-control-container' ref={disableMapClickAndScrolll}>
      <div className='leaflet-top leaflet-right'>
        <div className={cx('leaflet-control')} data-tour="zoom-control">
          {showZoom && <Item title="Zoom In" onClick={(): void => { handleZoomChange(zoomStepSize) }}><AddIcon /></Item>}
          {showHome && <Item title="Fit to window" onClick={(): void => { handleHome() }}><HomeIcon /></Item>}
          {showZoom && <Item title="Zoom Out" onClick={(): void => { handleZoomChange(-1 * zoomStepSize) }}><RemoveIcon /></Item>}
        </div>
        {children}
      </div>
    </div>
  )
}

export default MapControl
