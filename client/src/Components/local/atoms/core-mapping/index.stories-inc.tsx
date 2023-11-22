import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import CoreMapping from './index'
import docs from './README.md'
import { Phase } from 'src/config'
import { CHANNEL_CORE_MAPPING, CoreMappingChannel } from 'src/custom-types/core-mapping'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px', position: 'relative' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/CoreMapping',
  component: CoreMapping,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const channel: CoreMappingChannel = {
  uniqid: 'core',
  name: 'core-mapping',
  channelType: CHANNEL_CORE_MAPPING,
  participants: [],
  renderers: [],
  constraints: {
    bounds: [[1, 1], [2, 2]],
    minZoom: 5
  }
}
export const Default: React.FC = () => {
  return (
    <CoreMapping playerForce={'f-red'} messages={[]} channel={channel} playerRole={'mgr'} currentTurn={1} forces={[]} currentPhase={Phase.Planning}/>
  )
}
