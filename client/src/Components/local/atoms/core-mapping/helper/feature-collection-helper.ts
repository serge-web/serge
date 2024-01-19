import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { MappingMessageDelta } from 'src/custom-types'
import jsonPath, { Operation } from 'fast-json-patch'
import { uniqBy } from 'lodash'

export const applyPatch = (featureCollection: FeatureCollection<Geometry, GeoJsonProperties>, deltaMessage: MappingMessageDelta): FeatureCollection<Geometry, GeoJsonProperties> => {
  // TODO: need to investigate the duplicate issue of delta message
  const featureCollections = jsonPath.applyPatch(featureCollection, deltaMessage.delta).newDocument
  const features = uniqBy(featureCollections.features, 'properties.id')
  featureCollections.features = features
  return featureCollection
}

export const generatePatch = (collectionOne: FeatureCollection<Geometry, GeoJsonProperties>, collectionTwo: FeatureCollection<Geometry, GeoJsonProperties>): Operation[] => {
  return jsonPath.compare(collectionOne, collectionTwo)
}
