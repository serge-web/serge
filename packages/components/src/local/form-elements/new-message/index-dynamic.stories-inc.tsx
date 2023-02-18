import { ChannelPlanning, ForceData, MessageDetails, TemplateBody } from '@serge/custom-types'
import {  } from '@serge/mocks'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { generateAllTemplates } from '../../molecules/json-editor/helpers/generate-p9-templates'
import NewMessage from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

export default {
  title: 'local/form-elements/DynamicNewMessage',
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
    gameDate={'some date'}
    privateMessage={privateMessage}
    orderableChannel={orderableChannel}
    channel={{} as ChannelPlanning}
    confirmCancel={confirmCancel}
    currentTurn={0}
    selectedForce={{} as ForceData}
    selectedRole={'role-1'}
    selectedRoleName={'role-name'}
    postBack={postBack}
    {...props}
  />)
}

const templates = generateAllTemplates().templates

export const P9Dynamic = Template.bind({})
P9Dynamic.args = {
  templates: templates || []
}

const marIstarTemplate = templates.find((template) => template._id === 'Maritime--ISTAR')
export const MaritimeIstar = Template.bind({})
MaritimeIstar.args = {
  templates: marIstarTemplate ? [marIstarTemplate] : []
}

console.log('mar a2', marIstarTemplate)
if (marIstarTemplate) {
  const fields = marIstarTemplate.details['properties']
  const fieldArr = Object.values(fields)
  console.table(fieldArr.map((field: any) => {
    return {
      title: field.title,
      order: field.propertyOrder,
      cols: field.options ? field.options.grid_columns : 'n/a'
    }
  }))
}
