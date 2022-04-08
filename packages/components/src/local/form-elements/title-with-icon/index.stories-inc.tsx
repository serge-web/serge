import React from 'react'

// Import component files
import TitleWithIcon from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/TitleWithIcon',
  component: TitleWithIcon,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <TitleWithIcon icon="merchant-vessel.svg" platformType="merchant-vessel" forceColor="blue">Test</TitleWithIcon>
