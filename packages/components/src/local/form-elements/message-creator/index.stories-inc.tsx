import { ChannelUI, MessageDetails } from '@serge/custom-types'
import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import React from 'react'
import MessageCreator from './index'
import { Story } from '@storybook/react/types-6-0'
import docs from './README.md'

export default {
  title: 'local/form-elements/MessageCreator',
  component: MessageCreator,
  decorators: [],
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
  const { privateMessage, confirmCancel } = args
  const channel = P9Mock.data.channels.channels[0]
  const channels = {}
  P9Mock.data.channels.channels.forEach(c => {
    channels[c.name] = {
      cData: c,
      name: c.name,
      uniqid: c.uniqid
    } as ChannelUI
  })
  const postBack = (details: MessageDetails, message: any): void => {
    console.log('send message', details, message)
  }

  return (<MessageCreator
    channel={channel}
    messageOption='Chat'
    currentTurn={0}
    confirmCancel={confirmCancel}
    gameDate=''
    privateMessage={privateMessage}
    schema={planningMessageTemplatesMock[0].details}
    selectedForce={P9Mock.data.forces.forces[0]}
    selectedRole={P9Mock.data.forces.forces[0].roles[0].roleId}
    selectedRoleName={P9Mock.data.forces.forces[0].roles[0].name}
    postBack={postBack}
  />)
}
export const NewMessage = Template.bind({})
