import React, { useState } from 'react'
import ImageDropzone from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px', position: 'relative' }}>{storyFn()}</div>

export default {
  title: 'local/atoms/ImageDropzone',
  component: ImageDropzone,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const handleChange = (newSrc: string): void => {
    console.log(newSrc)
  }
  return <ImageDropzone onChange={handleChange} limit={20000} />
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

export const ApiUpload8080: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('')
  const handleChange = (newSrc: string): void => {
    setImageSrc(newSrc)
  }
  return <>
    <div style={{ border: '1px solid #000' }}>
      <div>{imageSrc.match('data:image/png;base64') ? 'data:image/png;base64' : imageSrc}</div>
      {imageSrc ? <img aria-label='uploaded image' src={imageSrc} /> : 'waiting for image src'}
    </div>
    <ImageDropzone use64onApiEror={true} iconUploadUrl={'http://localhost:8080/saveIcon'} onChange={handleChange} limit={20000} />
  </>
}
