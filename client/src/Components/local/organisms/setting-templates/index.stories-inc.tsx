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
  title: 'local/organisms/setting-templates',
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
    console.log('change', updates.templates)
    setData(updates.templates)
  }

  const onSave = (template: TemplateBody): void => {
    const selectedId = template._id
    const newTemplateData = TemplatesMock.findIndex(template => template._id === selectedId)
    TemplatesMock[newTemplateData] = template

    console.log('Save data', template)
    console.log('data', data)
    setData(TemplatesMock)
  }

  return <SettingTemplate templates={data} onChange={onChange} onSave={onSave} />
}
