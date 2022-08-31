import { ChannelPlanning } from '@serge/custom-types'
import { P9Mock } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { noop } from 'lodash'
import React from 'react'
import SupportPanel from './index'
import docs from './README.md'
import SupportPanelProps from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SupportPanel',
  component: SupportPanel,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const blueRole = blueForce.roles[0]
const channel = P9Mock.data.channels.channels[0] as ChannelPlanning

const Template: Story<SupportPanelProps> = () => {
  return <SupportPanel
    forceIcons={[]}
    forceColors={[]}
    forceNames={[]}
    hideForcesInChannel={false}
    messages={[]}
    selectedForce={blueForce.uniqid}
    selectedRole={blueRole.roleId}
    channel={channel}
    forces={[]}
    onReadAll={noop}
    onUnread={noop}
    onRead={noop}
  />
}

export const Default = Template.bind({})
Default.args = {
}
