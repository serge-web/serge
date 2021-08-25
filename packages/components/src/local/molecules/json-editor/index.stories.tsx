import React from 'react'

// Import component files
import JsonEditor from "./index";
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'

// Import mock
import {MessageTemplatesMock, messageDataCollaborativeEditing} from '@serge/mocks'

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
  }
}

export const Default: React.FC = () => {
  return (
    <JsonEditor message={messageDataCollaborativeEditing[2]} messageTemplates={MessageTemplatesMock} disabled={true} />
  )
}

// @ts-ignore TS believes the 'story' property doesn't exist but it does.
Default.story = {
  parameters: {
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}
