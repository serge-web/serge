import { P9Mock } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { noop } from 'lodash'
import React from 'react'

import ViewAs from './index'
import docs from './README.md'
import ViewAsProps from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const forces = P9Mock.data.forces.forces

export default {
  title: 'local/organisms/ViewAs',
  component: ViewAs,
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
  argTypes: {
  }
}

const Template: Story<ViewAsProps> = (props) => {
  const isUmpire = props.isUmpire
  return <ViewAs isUmpire={isUmpire} forces={forces} viewAsForce={forces[1].uniqid} viewAsCallback={noop} />
}

export const NotUmpire = Template.bind({})
NotUmpire.args = {
  isUmpire: false
}

export const Umpire = Template.bind({})
Umpire.args = {
  isUmpire: true
}
