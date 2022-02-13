import React from 'react'
import MoreInfo from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/MoreInfo',
  component: MoreInfo,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <MoreInfo description="The percentage fuel remaining">Fuel</MoreInfo>
