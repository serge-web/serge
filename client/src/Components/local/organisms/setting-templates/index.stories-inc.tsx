import React, { useState } from 'react'

// Import component files
import SettingTemplate from './index'
import docs from './README.md'
import { withKnobs } from '@storybook/addon-knobs'
import { TemplateBody } from 'src/custom-types'
import { watuWargame } from 'src/mocks'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const TemplatesMock = watuWargame.data.templates.templates

export default {
  title: 'local/organisms/SettingForces',
  component: SettingTemplate,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // This story requires addons but other stories in this component do not
      showPanel: true
    }
  }
}

export const Default: React.FC = () => {
  const [data, setData] = useState(TemplatesMock)

  const onChange = (updates: { templates: Array<TemplateBody> }): void => {
    console.log('change', updates.templates[0])
  }
  const onSave = (templates: TemplateBody[]): void => {
    console.log('Save data', templates[0])
    setData(templates)
  }

  return <SettingTemplate templates={data} onChange={onChange} onSave={onSave} />
}
