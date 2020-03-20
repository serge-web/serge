import React from 'react'

// Import component files
import OrdersPanel from './index'
import docs from './README.md'

import { data } from './mocks'

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

export const Default: React.FunctionComponent = () => <OrdersPanel selectedForce={data.selectedForce} phase={data.phase} />
