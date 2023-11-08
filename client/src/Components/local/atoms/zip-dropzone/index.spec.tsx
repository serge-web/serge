/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ZipFileUploader from './index'
import { Wargame, Message } from 'src/custom-types'

describe('Zip Dropzone component:', () => {
  // Defining a function to be passed as a prop to the ZipFileUploader component
  const onChange = (data: Array<Wargame | Message>, filename: string) => {
    console.log('data:', data)
    console.log('filename:', filename)
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<ZipFileUploader onChange={onChange} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
