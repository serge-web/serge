import React from 'react'

// Import component files
import OrdersPanelContent from './index'
import docs from './README.md'

export default {
  title: 'local/OrdersPanelContent',
  component: OrdersPanelContent,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <OrdersPanelContent name="temp" colour="blue" />
