/* global it expect */
import collateMarkerFormData from './collate-marker-form-data'

import { watuWargame } from '@serge/mocks'
import { MarkerFormData, MarkerFormPopulate, MapAnnotation } from 'src/custom-types'

it('contains relevant population results', () => {
  const marker = watuWargame.data.annotations && watuWargame.data.annotations.annotations[0]
  const icons = watuWargame.data.annotationIcons && watuWargame.data.annotationIcons.markers
  const forces = watuWargame.data.forces.forces
  const data: MarkerFormData | undefined = marker && icons && collateMarkerFormData(marker, icons, forces)
  if (data) {
    const res: MarkerFormPopulate = data.populate
    expect(res).toBeTruthy()
    const resM: MapAnnotation = data.value
    expect(resM).toBeTruthy()
  } else {
    expect(false).toBeTruthy()
  }
})
