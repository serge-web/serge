import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import { ForceData } from '@serge/custom-types'
import { forceColors, platformIcons } from '@serge/helpers'
import { P9Mock } from '@serge/mocks'
import { noop } from 'lodash'
import PlanningAssets from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const game = P9Mock.data

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]

const forceIds = forces.map((force: ForceData): string => force.uniqid)

const platformTypes = game.platformTypes ? game.platformTypes.platformTypes : []

export default {
  title: 'local/organisms/PlanningAssets',
  component: PlanningAssets,
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
    playerForce: {
      name: 'Player force',
      defaultValue: forceIds[1],
      control: {
        type: 'select',
        options: forceIds
      }
    }
  }
}

const forceCols = forceColors(forces)
const platformStyles = (P9Mock.data.platformTypes && platformIcons(P9Mock.data.platformTypes.platformTypes)) || []

const Template: Story<MessageListPropTypes> = (args) => {
  const { forces, playerForce, render, opFor } = args
  return <PlanningAssets
    forces={forces}
    assets={[]}
    forceColors={forceCols}
    platformStyles={platformStyles}
    playerForce={playerForce}
    platformTypes={platformTypes}
    render={render}
    opFor={opFor}
  />
}

export const Default = Template.bind({})
Default.args = {
  forces: forces,
  playerForce: forces[0],
  render: noop,
  opFor: false
}

export const OpFor = Template.bind({})
OpFor.args = {
  forces: P9Mock.data.forces.forces,
  playerForce: blueForce,
  render: noop,
  opFor: true
}
