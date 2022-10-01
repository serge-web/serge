import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { noop } from 'lodash'
import React from 'react'

import MapPlanningOrders from './index'
import docs from './README.md'
import PlanningOrdersProps from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/PlanningOrders',
  component: MapPlanningOrders,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // We have no addons enabled in this story, so the addon panel should be hidden
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
  }
}

const Template: Story<PlanningOrdersProps> = () => {
  return <MapPlanningOrders activities={[]} setSelectedOrders={noop} orders={[]}/>
}

export const Default = Template.bind({})
Default.args = {}
