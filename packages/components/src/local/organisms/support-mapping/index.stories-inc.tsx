import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'
import SupportMapping from './index'
import docs from './README.md'
import SupportMappingProps from './types/props'
import { noop } from 'lodash'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/SupportMapping',
  component: SupportMapping,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // We have no addons enabled in this story, so the addon panel should be hidden
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {}
}

const Template: Story<SupportMappingProps> = () => {
  return <SupportMapping
    forces={[]}
    filterApplied={true}
    setFilterApplied={noop}
    position={[101.505, 20.09]}
    zoom={12}
  />
}

export const Default = Template.bind({})
Default.args = {}
