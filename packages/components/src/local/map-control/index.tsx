import AddIcon from '@material-ui/icons/Add'
import HomeIcon from '@material-ui/icons/Home'
import RemoveIcon from '@material-ui/icons/Remove'

/* Import proptypes */
import cx from 'classnames'
import L, { DomEvent, LatLngBounds } from 'leaflet'
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

  useEffect(() => {
    if (localMap) {
      const items = [
        {
          label: 'group 1',
          value: 'g11',
          items: [
            { label: 'option 1', value: 'g11' },
            { label: 'option 2', value: 'g12' },
            { label: 'option 3', value: 'g13' },
            {
              label: 'group 3',
              value: 'g132',
              items: [
                { label: 'option 1', value: 'g131' },
                { label: 'option 2', value: 'g132' },
                { label: 'option 3', value: 'g133' }
              ]
            }
          ]
        },
        { label: 'option 5', value: 'g5' },
        {
          label: 'group 2',
          value: 'g21',
          items: [
            { label: 'option 6', value: 'g21' },
            { label: 'option 7', value: 'g22' }
          ]
        }
      ]
      L.control.select({
        position: 'topleft',
        items: items,
        onSelect: (item: any) => {
          console.log('select: ', item)
        }
      }).addTo(localMap)
    }
  }, [localMap])

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
