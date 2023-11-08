import React from 'react'
// Import component files
import SettingAnnotation from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { annotationMarkerData } from 'src/mocks'
import { AnnotationMarkerData } from 'src/custom-types'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px', position: 'relative' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SettingAnnotation',
  component: SettingAnnotation,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const onChange = (netAnnotationIcons: AnnotationMarkerData): void => {
    console.log(netAnnotationIcons)
  }

  const onSave = (netAnnotationIcons: AnnotationMarkerData): void => {
    console.log(netAnnotationIcons)
  }

  return <SettingAnnotation annotation={annotationMarkerData} onChange={onChange} onSave={onSave} />
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
