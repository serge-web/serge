import { WargameExportedMock, planningMessages } from '@serge/mocks'
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

const Template: Story<SupportPanelProps> = () => {
  return <SupportPanel
    forceIcons={[]}
    forceColors={[]}
    forceNames={[]}
    hideForcesInChannel={false}
    messages={planningMessages}
    selectedForce={WargameExportedMock.data.forces.forces[0]}
    selectedRole=''
    forces={[]}
    onReadAll={noop}
    onUnread={noop}
    onRead={noop}
  />
}

export const Default = Template.bind({})
Default.args = {
}
