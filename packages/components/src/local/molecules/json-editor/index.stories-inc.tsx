import React from 'react'

// Import component files
import JsonEditor from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

// Import mock
import { MessageTemplatesMockByKey, WargameMock, messageDataCollaborativeResponding, messageDataCollaborativeEditing } from '@serge/mocks'
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

const Template: Story<Props> = ({ messageTemplates, messageId, disabled, template, messageContent }) => {
  return (
    <JsonEditor template={template} messageId={messageId} messageContent={messageContent} messageTemplates={messageTemplates} disabled={disabled} gameDate={WargameMock.data.overview.gameDate} />
  )
}

export const Standard = Template.bind({})
Standard.args = {
  messageContent: messageDataCollaborativeEditing[0].message,
  messageTemplates: MessageTemplatesMockByKey,
  messageId: 'id_1',
  template: 'k16eedkk',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

export const Response = Template.bind({})
Response.args = {
  template: 'k16eedkj',
  messageContent: messageDataCollaborativeResponding[0].message,
  messageId: 'id_2ß',
  messageTemplates: MessageTemplatesMockByKey,
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}
