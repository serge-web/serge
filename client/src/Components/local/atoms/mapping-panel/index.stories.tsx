import React from 'react'
import { MappingPanel } from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/MappingPanel',
  component: MappingPanel,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <MappingPanel />
