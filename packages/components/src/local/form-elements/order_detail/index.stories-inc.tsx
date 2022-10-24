import { planningMessages } from '@serge/mocks'
import React from 'react'

// Import component files
import OrderDetail from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/OrderDetail',
  component: OrderDetail,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const plan = planningMessages[1]

export const Default: React.FC = () => <OrderDetail plan={plan} />
