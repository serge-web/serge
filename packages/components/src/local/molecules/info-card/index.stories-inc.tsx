import React from 'react'
import InfoCard from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/InfoCard',
  component: InfoCard,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <InfoCard content='' />
