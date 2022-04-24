import { UMPIRE_FORCE } from '@serge/config'
import L, { DragEndEvent } from 'leaflet'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { Marker, Tooltip } from 'react-leaflet'
import AssetIcon, { getIconClassname } from '../asset-icon'
/* Import context */
import { MapContext } from '../mapping'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

// eslint-disable-next-line no-var
declare var SVGInject: any

/* Render component */
export const InfoMarker: React.FC<PropTypes> = ({
  marker,
  location
}) => {
  const [imageSrc] = useState<string | undefined>(marker.icon)
  const [markerIsDraggable, setMarkerIsDraggable] = useState<boolean>(false)

  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const {
    setShowMapBar, setSelectedMarker, selectedMarker, clearMapSelection,
    playerForce, canSubmitOrders
  } = props

  useEffect(() => {
    const isUmpire = playerForce === UMPIRE_FORCE
    setMarkerIsDraggable(isUmpire && canSubmitOrders && !!selectedMarker && selectedMarker === marker.uniqid)
  }, [selectedMarker, marker, playerForce, canSubmitOrders])

  const isSelected = marker.uniqid === selectedMarker
  const className = getIconClassname('', isSelected)

  setTimeout(() => {
    SVGInject(document.querySelectorAll('img.injectable'))
  })

  // only re-render <AssetIcon /> component when imageSrc changed
  const assetIconComponentAsString = useMemo(() => ReactDOMServer.renderToString(<AssetIcon allowCustomStyle imageSrc={imageSrc} destroyed={false} isSelected={isSelected} />), [imageSrc])

  const divIcon = L.divIcon({
    iconSize: [40, 40],
    html: `<div class='${className} ${styles['asset-icon-with-image']}' style="border: 2px solid ${marker.color}">${assetIconComponentAsString}</div>`
  })

  const clickEvent = (): void => {
    if (selectedMarker && selectedMarker === marker.uniqid) {
      // clear selected asset, since it has been clicked again
      // @ts-ignore
      clearMapSelection(undefined)
      setShowMapBar(false)
    } else {
      // select this marker
      setSelectedMarker(marker.uniqid)
      setShowMapBar(true)
    }
  }

  const dragEnd = (e: DragEndEvent): void => {
    const newPos: L.LatLng = e.target.getLatLng()
    console.log('marker dragged to:', newPos)
  }

  return <>
    <Marker draggable={markerIsDraggable} ondragend={dragEnd} key={marker.uniqid} position={location} icon={divIcon} onclick={clickEvent}>
      <Tooltip>{marker.description}</Tooltip>
    </Marker>
    <Marker
      key={'label_' + marker.uniqid}
      position={location}
      zIndexOffset={-1000}
      width="150"
      icon={L.divIcon({
        // html: '' + cell.x + ',' + cell.y,
        html: marker.label,
        className: styles['marker-label'],
        iconSize: [180, 100]
      })}
    />
  </>
}

export default InfoMarker
