import { UNKNOWN_TYPE } from '@serge/config'
import { SelectedAsset } from '@serge/custom-types'
import L from 'leaflet'
import { capitalize } from 'lodash'
import React, { useContext, useMemo } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { LayerGroup, Marker, Polygon, Tooltip } from 'react-leaflet'
import AssetIcon, { getIconClassname } from '../asset-icon'
import { OrientationData } from '../assets/types/asset_info'
/* Import context */
import { MapContext } from '../mapping'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const MapIcon: React.FC<PropTypes> = ({
  uniqid,
  name,
  contactId,
  position,
  typeId,
  force,
  perceivedForceColor,
  visibleTo,
  controlledBy,
  condition,
  status,
  tooltip,
  selected,
  locationPending,
  imageSrc,
  attributes,
  orientationData,
  map
}) => {
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const { setShowMapBar, setSelectedAsset, selectedAsset, clearMapSelection } = props

  const isDestroyed: boolean = !!condition && (condition.toLowerCase() === 'destroyed' || condition.toLowerCase() === 'mission kill')
  const className = getIconClassname('', isDestroyed, selected)

  const clickEvent = (): void => {
    if (selectedAsset && selectedAsset.uniqid === uniqid) {
      // clear selected asset, since it has been clicked again
      // @ts-ignore
      clearMapSelection(undefined)
      setShowMapBar(false)
    } else {
      // select this asset
      const selection: SelectedAsset = {
        uniqid: uniqid,
        contactId: contactId,
        name: name,
        typeId: typeId,
        forceId: force,
        controlledBy: controlledBy,
        condition: condition || UNKNOWN_TYPE,
        visibleTo: visibleTo,
        status: status,
        locationPending: locationPending,
        attributes: attributes
      }
      setSelectedAsset(selection)
      setShowMapBar(true)
    }
  }

  // only re-render <AssetIcon /> component when imageSrc changed
  const assetIconCompAsString = useMemo(() => {
    const AssetIconComponent = (): React.ReactElement => <AssetIcon imageSrc={imageSrc} destroyed={isDestroyed} isSelected={selected} onClick={clickEvent} />
    return ReactDOMServer.renderToString(<AssetIconComponent />)
  }, [imageSrc])

  // get top orient marker in the list
  const lastOrientation = orientationData?.length ? (orientationData[orientationData.length - 1] as OrientationData).orientation : 0
  const divIcon = L.divIcon({
    iconSize: [40, 40],
    html: `<div class='${className}' style="transform: rotate(${lastOrientation - 80}deg) translate(5px) rotate(-${lastOrientation - 80}deg); background-color: ${perceivedForceColor}">${assetIconCompAsString}</div>`
  })

  return <>
    <LayerGroup key={'hex_polygons3'} >{
      /* not too many cells visible, show hex outlines */
      map && orientationData && orientationData.map((cell: OrientationData, index: number) => {
        const orientRads = (90 - cell.orientation) * Math.PI / 180.0
        //     const orientRads = 190.0 * Math.PI / 180.0
        const cells: L.LatLng[] = []
        const origin = map.latLngToLayerPoint(position)
        const wid = 20
        const len = 40
        // precalculate cos/sin, since it's reused
        const cosR = Math.sin(orientRads)
        const sinR = Math.cos(orientRads)

        // method to rotate point around origin
        const rotatePoint = (x: number, y: number, sinTheta: number, cosTheta: number): L.Point => {
          const xd = x * cosTheta - y * sinTheta
          const yd = y * cosTheta + x * sinTheta
          return L.point(xd, yd)
        }

        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(-wid, 5, sinR, cosR))))
        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(0, -len, sinR, cosR))))
        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(wid, 5, sinR, cosR))))
        cells.push(map.layerPointToLatLng(origin.add(rotatePoint(-wid, 5, sinR, cosR))))

        // use dark shade if told to shade it, else perceived color
        const color = cell.shadeOrientation ? '#222' : perceivedForceColor
        return <Polygon
          key={'hex_poly3_' + index}
          fillColor={color}
          fill={true}
          positions={cells}
          stroke={false}
          className={styles.triangle}
        />
      })}
    </LayerGroup>

    <Marker key='asset-icon' position={position} icon={divIcon} onclick={clickEvent}>
      <Tooltip>{capitalize(tooltip)}</Tooltip>
    </Marker>
  </>
}

export default MapIcon
