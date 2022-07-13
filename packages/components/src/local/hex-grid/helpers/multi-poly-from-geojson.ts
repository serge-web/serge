import { Terrain } from '@serge/config'
import { FeatureCollection, Feature, MultiPolygon } from 'geojson'
import L from 'leaflet'
import { isArray } from 'lodash'
import typeFor, { TerrainType } from '../../mapping/helpers/create-grid-from-geojson'

export interface TerrainPolygons {
  terrain: TerrainType
  data: L.LatLngExpression[][][]
}

/** uility function, to convert GeoJSON data to Leaflet
 * @param {FeatureCollection} data the Feature Collection in GeoJSON format
 * @returns Array of leaflet multipolygons
 */
const multiPolyFromGeoJSON = (data: FeatureCollection): TerrainPolygons[] => {
  // drop zone 2 - open sea
  const interestingTerrains = data.features.filter((feature: Feature) => {
    const type = feature.properties && feature.properties.type
    return type !== 0 && type !== 2
  })

  const nullTerrain: TerrainType = {
    terrain: Terrain.LAND,
    type: 'unkown',
    fillColor: '#f00'
  }

  // now collapse & reconstruct tree, swapping lon & lat
  const terrains = interestingTerrains.map((feature: Feature): TerrainPolygons => {
    const multiPoly = feature.geometry as MultiPolygon
    const terrain = (feature.properties && typeFor(feature.properties.type)) || nullTerrain
    return {
      terrain: terrain,
      data: multiPoly.coordinates.map((level1: number[][][]): L.LatLngTuple[][] => {
        return level1.map((level2: number[][]): L.LatLngTuple[] => {
          if (isArray(level2) && isArray(level2[0])) {
            return level2.map((level3: number[]): L.LatLngTuple => {
              // note: need to swap GeoJSON lon/lat to Leaflet lat/lon
              return [level3[1], level3[0]]
            })
          } else {
            // note: need to swap GeoJSON lon/lat to Leaflet lat/lon
            return [level2[1], level2[0]] as L.LatLngTuple[]
          }
        })
      })
    }
  })
  return terrains
}

export default multiPolyFromGeoJSON
