import { ChannelUI, MessageDetails } from '@serge/custom-types'
import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import NewMessage from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

export default {
  title: 'local/form-elements/NewMessage',
  component: NewMessage,
  decorators: [wrapper],
  parameters: {
    readme: {
      content: docs
    },
    options: {
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    privateMessage: {
      description: 'Provide private message (umpire force)',
      control: {
        type: 'boolean'
      }
    },
    orderableChannel: {
      description: 'Whether messages are shown in order',
      control: {
        type: 'boolean'
      }
    },
    confirmCancel: {
      description: 'Whether player has to confirm cancelling a message',
      control: {
        type: 'boolean'
      }
    }
  }
}

interface StoryPropTypes {
  privateMessage: boolean
  orderableChannel: boolean
  confirmCancel: boolean
}

const Template: Story<StoryPropTypes> = (args) => {
  const { privateMessage, orderableChannel, confirmCancel } = args
  const channels = {}
  P9Mock.data.channels.channels.forEach(c => {
    channels[c.name] = {
      cData: c,
      name: c.name,
      uniqid: c.uniqid
    } as ChannelUI
  })
  const postBack = (details: MessageDetails, message: any) => {
    console.log('send message', details, message)
  }

  return (<NewMessage
    templates={planningMessageTemplatesMock}
    gameDate={P9Mock.data.overview.gameDate}
    privateMessage={privateMessage}
    orderableChannel={orderableChannel}
    channel={P9Mock.data.channels.channels[0]}
    confirmCancel={confirmCancel}
    currentTurn={0}
    selectedForce={P9Mock.data.forces.forces[0]}
    selectedRole={P9Mock.data.forces.forces[0].roles[0].roleId}
    selectedRoleName={P9Mock.data.forces.forces[0].roles[0].name}
    postBack={postBack}
  />)
}

export const Default = Template.bind({})
