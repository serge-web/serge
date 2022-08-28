import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import { noop } from 'lodash'
import PlanningAssets from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'
import { P9Mock } from '@serge/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/PlanningAssets',
  component: PlanningAssets,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {}
}

const Template: Story<MessageListPropTypes> = (args) => {
  const { forces, playerForce, isUmpire, render } = args

  return <PlanningAssets
    forces={forces}
    playerForce={playerForce}
    isUmpire={isUmpire}
    render={render}
  />
}

export const Default = Template.bind({})
Default.args = {
  forces: P9Mock.data.forces.forces,
  playerForce: undefined,
  isUmpire: true,
  render: noop
}
