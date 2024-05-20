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
