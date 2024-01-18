import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { MappingMessageDelta } from 'src/custom-types'
import jsonPath, { Operation } from 'fast-json-patch'

export const applyPatch = (featureCollection: FeatureCollection<Geometry, GeoJsonProperties>, deltaMessage: MappingMessageDelta): FeatureCollection<Geometry, GeoJsonProperties> => {
  return jsonPath.applyPatch(featureCollection, deltaMessage.delta).newDocument
}

export const generatePatch = (collectionOne: FeatureCollection<Geometry, GeoJsonProperties>, collectionTwo: FeatureCollection<Geometry, GeoJsonProperties>): Operation[] => {
  return jsonPath.compare(collectionOne, collectionTwo)
}
