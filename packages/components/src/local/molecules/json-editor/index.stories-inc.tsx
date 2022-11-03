import React from 'react'

// Import component files
import { withKnobs } from '@storybook/addon-knobs'
import JsonEditor from './index'
import docs from './README.md'

// Import mock
import { messageDataCollaborativeEditing, messageDataCollaborativeResponding, MessageTemplatesMoskByTitle, P9Mock, planningMessages, planningMessageTemplatesMock, WargameMock } from '@serge/mocks'
import { Story } from '@storybook/react/types-6-0'

import { Asset } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'
import Props from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/molecules/JsonEditor',
  component: JsonEditor,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      defaultValue: false,
      control: { type: 'boolean' }
    }
  }
}
const storeNewValue = (value: { [property: string]: any }): void => {
  console.log('store data', value)
}


const template = MessageTemplatesMoskByTitle[messageDataCollaborativeEditing[0].details.messageType]
const channel = P9Mock.data.channels.channels[0]
const templateMessageCreator = {
  details: MessageTemplatesMoskByTitle[messageDataCollaborativeEditing[0].details.messageType].details,
  _id: channel.uniqid
}

const Template: Story<Props> = ({ messageId, disabled, template, messageContent, modifyForEdit, customiseTemplate }) => {
  return (
    <JsonEditor
      storeNewValue={storeNewValue}
      template={template}
      messageId={messageId}
      disabled={disabled}
      gameDate={WargameMock.data.overview.gameDate}
      messageContent={messageContent}
      modifyForEdit = {modifyForEdit}
      customiseTemplate =  {customiseTemplate}
    />
  )
}

export const Standard = Template.bind({})
Standard.args = {
  messageContent: messageDataCollaborativeEditing[0].message,
  messageId: 'id_1',
  template: template,
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

export const Response = Template.bind({})
Response.args = {
  template: templateMessageCreator,
  messageContent: messageDataCollaborativeResponding[0].message,
  messageId: 'id_2ß',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

export const MessageCreator = Template.bind({})
MessageCreator.args = {
  template: templateMessageCreator,
  messageId: 'id_2ß',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

const landActivityTemplate = planningMessageTemplatesMock.find((template) => template.title === planningMessages[0].details.messageType)
const landMessage = planningMessages[0]

const modifyForEdit = (document: Record<string, any>): Record<string, any> => {
  const res = deepCopy(document)
  if (res.message && res.message.location) {
    res.message.location = JSON.stringify(res.message.location)
  }
  return res
}

const customiseTemplate = (schema: Record<string, any>): Record<string, any> => {
  const forces = P9Mock.data.forces.forces
  const blueAssets = forces[1].assets ? forces[1].assets : []
  const redAssets = forces[2].assets ? forces[2].assets : []
  if (schema) {
    const oldOwnAssets = schema.properties?.ownAssets?.items?.enum
    if (oldOwnAssets) {
      schema.properties.ownAssets.items.enum = blueAssets.map((asset: Asset) => asset.name)
    }
    const oldOwnTargets = schema.properties?.otherAssets?.items?.enum
    if (oldOwnTargets) {
      schema.properties.otherAssets.items.enum = redAssets.map((asset: Asset) => asset.name)
    }
  }
  return schema
}


export const PlanningMessage = Template.bind({})
PlanningMessage.args = {
  template: landActivityTemplate,
  messageContent: landMessage.message,
  messageId: 'id_2c',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate,
  modifyForEdit: modifyForEdit,
  customiseTemplate: customiseTemplate
}
