import { MessageDetails, TemplateBody } from 'src/custom-types'
import { P9BMock, planningMessageTemplatesMock } from 'src/mocks'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import NewMessage from './index'
import docs from './README.md'

const p9templates = P9BMock.data.templates ? P9BMock.data.templates.templates : []

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
  templates: TemplateBody[]
}

const Template: Story<StoryPropTypes> = (args) => {
  const { privateMessage, orderableChannel, confirmCancel, ...props } = args

  const postBack = (details: MessageDetails, message: any): void => {
    console.log('send message', details, message)
  }

  return (<NewMessage
    gameDate={P9BMock.data.overview.gameDate}
    privateMessage={privateMessage}
    orderableChannel={orderableChannel}
    channel={P9BMock.data.channels.channels[0]}
    confirmCancel={confirmCancel}
    currentTurn={0}
    selectedForce={P9BMock.data.forces.forces[1]}
    selectedRole={P9BMock.data.forces.forces[1].roles[0].roleId}
    selectedRoleName={P9BMock.data.forces.forces[1].roles[0].name}
    postBack={postBack}
    {...props}
  />)
}

export const AllTemplates = Template.bind({})
AllTemplates.args = {
  templates: planningMessageTemplatesMock
}

export const JustAdjuducation = Template.bind({})
JustAdjuducation.args = {
  templates: [planningMessageTemplatesMock[0]]
}

export const JustLandActivity = Template.bind({})
const landActivityTemplate = planningMessageTemplatesMock.find((template) => template._id === 'k16e-land')
JustLandActivity.args = {
  templates: landActivityTemplate ? [landActivityTemplate] : planningMessageTemplatesMock
}

export const P9Templates = Template.bind({})
P9Templates.args = {
  templates: p9templates
}
