import {FeatureCollection, Feature, MultiPolygon} from 'geojson'
import L from 'leaflet'

/** uility function, to convert GeoJSON data to Leaflet
 * @param {FeatureCollection} data the Feature Collection in GeoJSON format
 * @returns Array of leaflet multipolygons
 */
const multiPolyFromGeoJSON = (data: FeatureCollection): L.LatLngExpression[][][][][] => {
  // drop zone 2 - open sea
  const interestingTerrains = data.features.filter((feature: Feature) => 
    feature.properties && feature.properties["type"] !== 2 && feature.properties["type"] !== 0)

  // now collapse & reconstruct tree, swapping lon & lat
  const terrains = interestingTerrains.map((feature: Feature) => {
    const multiPoly = feature.geometry as MultiPolygon
    return multiPoly.coordinates.map((level1: number[][][]) => {
      return level1.map((level2: number[][]) => {
        return level2.map((level3: number[]) => {
          return [level3[1], level3[0]]
        })
      })
    })
  })
  return terrains
}

export default multiPolyFromGeoJSON
