import React, { useState } from 'react'

// Import component files
import IconUploader from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px', position: 'relative' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/IconUploader',
  component: IconUploader,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const [src, setSrc] = useState<string>('')
  const handleChange = (newSrc: string): void => {
    console.log(newSrc)
    setSrc(newSrc)
  }
  return <IconUploader classname='main' onChange={handleChange} limit={20000} icon={src} background={'red'}>change icon</IconUploader>
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

export const APILoad8080: React.FC = () => {
  const [src, setSrc] = useState<string>('')
  const handleChange = (newSrc: string): void => {
    console.log(newSrc)
    setSrc(newSrc)
  }
  return <IconUploader iconUploadUrl={'http://localhost:8080/saveIcon'} onChange={handleChange} limit={20000} icon={src} background={'red'}>change icon</IconUploader>
}
