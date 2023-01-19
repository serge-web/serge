import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import { ChannelPlanning, ForceData } from '@serge/custom-types'
import { deepCopy, forceColors, platformIcons } from '@serge/helpers'
import { P9BMock } from '@serge/mocks'
import { noop } from 'lodash'
import { generateTestData2 } from '../../mapping/helpers/gen-test-mapping-data'
import { getOwnAssets } from './helpers/collate-assets'
import PlanningAssets from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const game = P9BMock.data

const forces = game.forces.forces
const blueForce = forces[1]

const forceIds = forces.map((force: ForceData): string => force.uniqid)

const platformTypes = game.platformTypes ? game.platformTypes.platformTypes : []
const attributeTypes = P9BMock.data.attributeTypes ? P9BMock.data.attributeTypes.attributes : []

const channels = game.channels.channels
const planningChannelTmp = channels.find((channel) => channel.channelType === 'ChannelPlanning') as ChannelPlanning
const planningChannel = deepCopy(planningChannelTmp) as ChannelPlanning

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
const platformStyles = (game.platformTypes && platformIcons(game.platformTypes.platformTypes)) || []
const bulkData = generateTestData2(2000, planningChannel.constraints, forces, platformTypes, attributeTypes || [])
const platIcons = platformIcons(platformTypes)

const Template: Story<MessageListPropTypes> = (args) => {
  const { forces, playerForce, render, opFor, assets } = args

  let assetsToUse
  if (assets.length) {
    assetsToUse = assets
  } else {
    assetsToUse =  getOwnAssets(bulkData, forceCols, platIcons, bulkData[1], platformTypes, attributeTypes)
  }

  return <PlanningAssets
    forces={forces}
    assets={assetsToUse}
    forceColors={forceCols}
    platformStyles={platformStyles}
    playerForce={playerForce}
    platformTypes={platformTypes}
    render={render}
    attributeTypes={attributeTypes}
    opFor={opFor}
  />
}

export const Default = Template.bind({})
Default.args = {
  forces: forces,
  assets:  getOwnAssets(forces, forceCols, platIcons, forces[1], platformTypes, attributeTypes),
  playerForce: forces[0],
  render: noop,
  opFor: false
}


export const OpFor = Template.bind({})
OpFor.args = {
  forces: forces,
  assets:  getOwnAssets(forces, forceCols, platIcons, forces[1], platformTypes, attributeTypes),
  playerForce: forces[0],
  render: noop,
  opFor: true
}

export const Bulk = Template.bind({})
Bulk.args = {
  forces: bulkData,
  assets: [],
  playerForce: forces[1],
  render: noop,
  opFor: false
}
