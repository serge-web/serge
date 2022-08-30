import React from 'react'
import { Story } from '@storybook/react/types-6-0'

/* Import mock data */
import { platformTypes, preInitialisedForces, localMappingConstraints } from '@serge/mocks'

import { deepCopy } from '@serge/helpers'

// Import component files
import Mapping from './index'
import MappingPropTypes from './types/props'
import docs from './README.md'

// import data types
import { Phase } from '@serge/config'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

export default {
  title: 'local/Mapping/PreInit',
  component: Mapping,
  decorators: [wrapper],
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
      name: 'View as',
      control: {
        type: 'radio',
        defaultValue: 'Blue',
        options: [
          'White',
          'Blue',
          'Red'
        ]
      }
    },
    phase: {
      name: 'Game phase',
      control: {
        type: 'radio',
        defaultValue: Phase.Planning,
        options: [
          Phase.Planning,
          Phase.Adjudication
        ]
      }
    },
    wargameInitiated: {
      name: 'Wargame has been initiated',
      control: {
        type: 'boolean'
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  }
}

interface StoryPropTypes extends MappingPropTypes {
  showAllowableCells?: boolean
  allowableOrigin?: string
  allowableTerrain?: string
}

const Template: Story<StoryPropTypes> = (args) => {
  const {
    playerForce,
    showAllowableCells,
    allowableOrigin = '',
    allowableTerrain = '',
    ...props
  } = args
  const forceNames = {
    White: 'umpire',
    Blue: 'Blue',
    Red: 'Red'
  }
  if (showAllowableCells) {
    props.planningConstraintsProp = {
      origin: allowableOrigin,
      travelMode: allowableTerrain,
      status: 'Transiting',
      speed: 20
    }
  }

  return (
    <Mapping
      playerForce={forceNames[playerForce]}
      {...props}
    />
  )
}

// give an asset a position, so it gets plotted
const newForces = deepCopy(preInitialisedForces)
newForces[1].assets[0].position = 'G12'

/**
 * DEFAULT VIEW
 */
export const Default = Template
Default.args = {
  forces: newForces,
  gameTurnTime: { unit: 'millis', millis: 72000 },
  mappingConstraints: localMappingConstraints,
  playerForce: 'Blue',
  markerIcons: [],
  isGameControl: false,
  isUmpire: false,
  platforms: platformTypes,
  phase: Phase.Adjudication,
  turnNumber: 5,
  mapBar: true
}
