/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ImageDropzone from './index'

describe('Image Dropzone component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ImageDropzone limit={20000} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
