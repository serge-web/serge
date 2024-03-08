import jsonPath, { Operation } from 'fast-json-patch'
import { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import { MappingMessageDelta } from 'src/custom-types'

export const applyPatch = (featureCollection: FeatureCollection<Geometry, GeoJsonProperties>, deltaMessage: MappingMessageDelta): FeatureCollection<Geometry, GeoJsonProperties> => {
  return jsonPath.applyPatch(featureCollection, deltaMessage.delta).newDocument
}

export const generatePatch = (collectionOne: FeatureCollection<Geometry, GeoJsonProperties>, collectionTwo: FeatureCollection<Geometry, GeoJsonProperties>): Operation[] => {
  return jsonPath.compare(collectionOne, collectionTwo)
}

export const getAllFeatureIds = (features: FeatureCollection<Geometry, GeoJsonProperties>): string[] => features.features.reduce((acc, f) => {
  if (f.properties && f.properties.id) {
    acc.push('' + f.properties.id)
  }
  return acc
}, [] as string[])
