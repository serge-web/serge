import React from 'react'
import { MappingPanel } from './index'
import docs from './README.md'
import { noop } from 'lodash'

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

export const Default: React.FC = () => <MappingPanel onClose={noop} extraFilterProps={[]} onSave={noop} selected={[]} onSelect={noop} />
