import { PerForcePlanningActivitySet } from '@serge/custom-types'
import { ForceStyle } from '@serge/helpers'
import { Position } from '@turf/turf'
import { Feature, LineString, Point, Polygon } from 'geojson'
import L, { latLng, LatLng, Layer } from 'leaflet'
import React from 'react'
import { CircleMarker, Marker, Polygon as RPolygon, Tooltip } from 'react-leaflet-v4'
import PolylineDecorator from '../../support-mapping/helper/PolylineDecorator'
import { findPlanningGeometry, GeomWithOrders } from '../../support-panel/helpers/gen-order-data'
import styles from '../styles.module.scss'

/** produce a shape for this feature */
export const shapeFor = (feature: Feature, color: string, label: string, storeRef: { (polyline: Layer): void }, index: number): React.ReactElement => {
  let res: React.ReactElement | undefined
  switch (feature.geometry.type) {
    case 'LineString': {
      const ls = feature.geometry as LineString
      const coords: LatLng[] = ls.coordinates.map((pos: Position) => latLng(pos[1], pos[0]))
      res = <PolylineDecorator key={index} storeRef={storeRef} message={label} latlngs={coords} color={(color) || ''} />
      break
    }
    case 'Polygon': {
      const poly = feature.geometry as Polygon
      const coords: LatLng[] = poly.coordinates[0].map((pos: Position) => latLng(pos[1], pos[0]))
      const center = L.polygon(coords).getBounds().getCenter()
      const polygonNameIcon = L.divIcon({ html: `<div style="transform: translateX(-50%);padding-top:15px;font-size: 16px;">${label}</div>`, className: styles['polygon-name'] })

      res = <RPolygon key={index} color={(color) || ''} positions={coords}>
        <>
          {label && <Tooltip>{label}</Tooltip>}
          <Marker position={center} icon={polygonNameIcon} />
        </>
      </RPolygon>
      break
    }
    case 'Point': {
      const poly = feature.geometry as Point
      const centre: LatLng = latLng(poly.coordinates[1], poly.coordinates[0])
      res = <CircleMarker key={index} radius={30} color={(color) || ''} center={centre}>
        {label &&
          <Tooltip>{label}</Tooltip>
        }
      </CircleMarker>
      break
    }
  }
  return res || <></>
}

export const shapeForGeomWithOrders = (geom: GeomWithOrders, forceCols: ForceStyle[],
  activities: PerForcePlanningActivitySet[], storeRef: { (polyline: Layer): void }, index: number): React.ReactElement => {
  const geometry = geom.geometry
  const force = geom.activity.details.from.forceId
  const activity = findPlanningGeometry(geom.uniqid, force || '', activities)
  const color = forceCols.find((value: ForceStyle) => value.forceId === force)
  console.log('force', force, color)
  return shapeFor(geometry, (color && color.color) || '', activity, storeRef, index)
}
