import { MessageDetails, TemplateBody } from 'src/custom-types'
import { watuWargame, MessageTemplatesMock } from 'src/mocks'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import NewMessage from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px', overflow: 'auto' }}>{storyFn()}</div>

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
  templates: TemplateBody[]
}

const Template: Story<StoryPropTypes> = (args) => {
  const { privateMessage, orderableChannel, confirmCancel, ...props } = args

  const postBack = (details: MessageDetails, message: any): void => {
    console.log('send message', details, message)
  }

  return (<NewMessage
    gameDate={watuWargame.data.overview.gameDate}
    privateMessage={privateMessage}
    orderableChannel={orderableChannel}
    channel={watuWargame.data.channels.channels[0]}
    confirmCancel={confirmCancel}
    currentTurn={0}
    selectedForce={watuWargame.data.forces.forces[1]}
    selectedRole={watuWargame.data.forces.forces[1].roles[0].roleId}
    selectedRoleName={watuWargame.data.forces.forces[1].roles[0].name}
    postBack={postBack}
    {...props}
  />)
}

export const AllTemplates = Template.bind({})
AllTemplates.args = {
  templates: MessageTemplatesMock
}

export const StateofWorldL = Template.bind({})
StateofWorldL.args = {
  templates: [MessageTemplatesMock[0]]
}

export const RFI = Template.bind({})
const landActivityTemplate = MessageTemplatesMock.find((template) => template._id === 'k16eedkj')
RFI.args = {
  templates: landActivityTemplate ? [landActivityTemplate] : MessageTemplatesMock
}
