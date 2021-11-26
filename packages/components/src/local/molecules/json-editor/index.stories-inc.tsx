import React from 'react'

// Import component files
import JsonEditor from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

// Import mock
import { MessageTemplatesMockByKey, WargameMock, messageDataCollaborativeResponding } from '@serge/mocks'
import { Story } from '@storybook/react/types-6-0'

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
const storeNewValue = (value: { [property: string]: any }) => {
  console.log('store data', value)
}

const Template: Story<Props> = ({ messageTemplates, disabled, template, messageContent, messageId }) => {
  return (
    <JsonEditor messageId={messageId} template={template} messageContent={messageContent} 
      messageTemplates={messageTemplates} disabled={disabled} gameDate={WargameMock.data.overview.gameDate}
      storeNewValue={storeNewValue} />
  )
}

const testMessage = messageDataCollaborativeResponding[0]

export const Standard = Template.bind({})
Standard.args = {
  messageContent: testMessage.message,
  messageId: `${testMessage._id}_${testMessage.message.Reference}`,
  template: messageDataCollaborativeResponding[0].details.messageType,
  messageTemplates: MessageTemplatesMockByKey,
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

export const Response = Template.bind({})
Response.args = {
  template: 'Chat',
  messageContent: {
    content: 'Last message. turn 2 started!'
  },
  messageId: Date(),
  messageTemplates: MessageTemplatesMockByKey,
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}
