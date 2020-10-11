import React, { useState } from 'react'

// Import component files
import Forces from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { forces as forcesMock } from '@serge/mocks'
import { ForceData } from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/GameAdmin/Forces',
  component: Forces,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
export const Default: React.FC = () => {
  const [forces, setForces] = useState<Array<ForceData>>(forcesMock)

  const onChange = (forces: Array<ForceData>): void => {
    setForces(forces)
  }
  const onSave = (): void => {
    console.log('Your save logick', forces)
  }

  return <Forces forces={forces} onChange={onChange} onSave={onSave} />
}

// @ts-ignore TS belives the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
