import { Feature, Geometry } from 'geojson'
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
