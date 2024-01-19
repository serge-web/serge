import jsonPath, { Operation } from 'fast-json-patch'
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { MappingMessageDelta } from 'src/custom-types'

export const applyPatch = (featureCollection: FeatureCollection<Geometry, GeoJsonProperties>, deltaMessage: MappingMessageDelta): FeatureCollection<Geometry, GeoJsonProperties> => {
  return jsonPath.applyPatch(featureCollection, deltaMessage.delta).newDocument
}

export const generatePatch = (collectionOne: FeatureCollection<Geometry, GeoJsonProperties>, collectionTwo: FeatureCollection<Geometry, GeoJsonProperties>): Operation[] => {
  return jsonPath.compare(collectionOne, collectionTwo)
}
