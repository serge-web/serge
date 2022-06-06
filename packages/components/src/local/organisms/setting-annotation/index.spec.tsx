/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { annotationMarkerData } from '@serge/mocks'
import { AnnotationMarkerData } from '@serge/custom-types'
import SettingAnnotation from './index'

const onChange = (platformType: AnnotationMarkerData): void => {
  console.log(platformType)
}

describe('SettingMarkers component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SettingAnnotation
        annotation={annotationMarkerData}
        onChange={onChange}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
