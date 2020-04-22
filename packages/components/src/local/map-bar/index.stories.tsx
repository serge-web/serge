import React from 'react'

// Import component files
import MapBar from './index'
import docs from './README.md'


export default {
  title: 'local/MapBar',
  component: MapBar,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <MapBar />

