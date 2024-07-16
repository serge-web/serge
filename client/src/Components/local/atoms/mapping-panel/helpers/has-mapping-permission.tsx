import { Feature, Geometry } from 'geojson'
import _ from 'lodash'
import { ParticipantMapping, CoreProperties, MappingPermissions } from 'src/custom-types'

/** decide if the current set of permissions allows the specified permission  */
export const hasMappingPermission = (feature: Feature<Geometry, any>, permission: MappingPermissions, 
  thePermissions: ParticipantMapping[]): boolean => {
  const hisProps = feature.properties as CoreProperties
  const hisForce = hisProps.force || ''
  const canSeeSpatial = thePermissions.some((part: ParticipantMapping) => part.permissionTo[hisForce] && 
    part.permissionTo[hisForce].includes(permission))
  return canSeeSpatial
}

/** decide if the current set of permissions allows any of the specified permissions  */
export const hasMappingPermissions = (feature: Feature<Geometry, any>, permissions: MappingPermissions[], 
  thePermissions: ParticipantMapping[]): boolean => {
  const hisProps = feature.properties as CoreProperties
  const hisForce = hisProps.force || ''
  const hasPermission = thePermissions.some((part: ParticipantMapping) => part.permissionTo[hisForce] && 
    _.intersection(part.permissionTo[hisForce], permissions).length)
  return hasPermission
}

export const canSeeProps = (feature: Feature<Geometry, any>, permissions: ParticipantMapping[]): boolean => {
  return hasMappingPermissions(feature, [MappingPermissions.ViewProps, MappingPermissions.EditAllProps,
    MappingPermissions.EditOwnProps], permissions)
}

export const canEditProps = (feature: Feature<Geometry, any>, permissions: ParticipantMapping[]): boolean => {
  return hasMappingPermissions(feature, [MappingPermissions.EditAllProps,
    MappingPermissions.EditOwnProps], permissions)
}

export const canOnlyEditOwnProps = (feature: Feature<Geometry, any>, permissions: ParticipantMapping[]): boolean => {
  return hasMappingPermissions(feature, [MappingPermissions.EditOwnProps], permissions)
}

export const canMoveResize = (feature: Feature<Geometry, any>, permissions: ParticipantMapping[]): boolean => {
  return hasMappingPermissions(feature, [MappingPermissions.MoveResize], permissions)
}

export const canAddRemove = (feature: Feature<Geometry, any>, permissions: ParticipantMapping[]): boolean => {
  return hasMappingPermissions(feature, [MappingPermissions.AddRemove], permissions)
}

export const permissionError = (): void => alert('You do not have permission on this action')
