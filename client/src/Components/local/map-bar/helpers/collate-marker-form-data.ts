import { ForceOption, MarkerFormData, ForceData, MapAnnotation, AnnotationIcons, IconOption } from 'src/custom-types'
import availableForces from './available-forces'

/** determine which form to show on this click
 * @param {MapAnnotation} marker marker to edit
 * @param {AnnotationIcons} icons force for the current player
 * @param {ForceData[]} forces the currently selected asset
 * @return {MarkerFormData} data necessary for the marker form
 */
const collateMarkerFormData = (marker: MapAnnotation, icons: AnnotationIcons, forces: ForceData[]): MarkerFormData => {
  // get the actual asset
  const availableForceList: ForceOption[] = availableForces(forces, false, true, undefined)
  const selectedIcon = icons.find((p: IconOption) => p.uniqid === marker.iconId)
  const iconURL = (selectedIcon && selectedIcon.icon) || ''

  const formData: MarkerFormData = {
    populate: {
      forces: availableForceList,
      icons: icons,
      iconURL
    },
    value: marker
  }
  return formData
}

export default collateMarkerFormData
