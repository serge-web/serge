import React, { useState } from 'react'

// Import component files
import Overview from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

import { WargameExportedMock } from '@serge/mocks'
import { WargameOverview } from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/GameAdmin/Overview',
  component: Overview,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const [overview, setOverview] = useState<WargameOverview>(WargameExportedMock.data.overview)

  const handleChange = (nextOverview: WargameOverview): void => {
    setOverview(nextOverview)
  }
  const handleSave = (): void => {
    console.log('Your save logick', overview)
  }
  return (
    <Overview
      overview={overview}
      onChange={handleChange}
      onSave={handleSave}
    />
  )
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
