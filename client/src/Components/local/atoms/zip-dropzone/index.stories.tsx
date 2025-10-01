import React from 'react'
import ZipFileUploader from './index'
import docs from './README.md'
import Button from '../button'

import { Wargame, Message } from 'src/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px', position: 'relative' }}>{storyFn()}</div>

export default {
  title: 'local/atoms/ZipDropzone',
  component: ZipFileUploader,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const handleChange = (data: Array<Wargame | Message>, filename: string): void => {
    console.log('data:', data)
    console.log('filename:', filename)
  }
  return (
    <ZipFileUploader onChange={handleChange} >
      <Button
        color='secondary'>
        Upload Zip
      </Button>
    </ZipFileUploader>
  )
}
