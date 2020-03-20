import React from 'react'

// Import component files
import OrdersPanel from './index'
import docs from './README.md'

export default {
  title: 'local/OrdersPanel',
  component: OrdersPanel,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <OrdersPanel selectedForce="" phase="" turn="" />
