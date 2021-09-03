import React from 'react'

// Import component files
import JsonEditor from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

// Import mock
import { MessageTemplatesMockByKey, messageDataCollaborativeEditing } from '@serge/mocks'
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
      control: { type: 'boolean' },
    },
  },
}

const Template: Story<Props> = ({ message, messageTemplates, disabled }) => <JsonEditor message={message} messageTemplates={messageTemplates} disabled={disabled} />
export const Default = Template.bind({})

const defArgs: Props = {
  message: messageDataCollaborativeEditing[1],
  messageTemplates: MessageTemplatesMockByKey,
  disabled: false
}

Default.args = defArgs
