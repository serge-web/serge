import React from 'react'

// Import component files
import MappingGridLayer from './index'
import docs from './README.md'


export default {
  title: 'local/MappingGridLayer',
  component: MappingGridLayer,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <MappingGridLayer />

