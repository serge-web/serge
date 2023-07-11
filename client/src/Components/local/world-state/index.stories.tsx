import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import WorldState from './index'
import WorldStatePropTypes from './types/props'
import docs from './README.md'
import { routeCreateStore } from 'src/Helpers'
import { cmdWkWargame } from '@serge/mocks'
import { CHANNEL_MAPPING, Phase } from 'src/config'

import { WorldStatePanels } from './helpers/enums'
import { ChannelMapping, ForceData, Role } from 'src/custom-types'

// console.clear()

const forces = cmdWkWargame.data.forces.forces
const platformTypes = cmdWkWargame.data.platformTypes ? cmdWkWargame.data.platformTypes.platformTypes : []
const mappingChannel = cmdWkWargame.data.channels.channels[9] as ChannelMapping

if (mappingChannel.channelType !== CHANNEL_MAPPING) {
  console.error('No, this isnt a mapping channel', mappingChannel)
}

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const separator = ' ~ '

const allRoles: string[] = []
forces.forEach((force: ForceData) => {
  force.roles.forEach((role: Role) => {
    allRoles.push(force.uniqid + separator + role.roleId + separator + role.name)
  })
})

export default {
  title: 'local/WorldState',
  component: WorldState,
  decorators: [wrapper],
  parameters: {
    readme: {
      content: docs
    },
    controls: {
      expanded: true
    },
    actions: {
      handles: [
        'click .MuiButton-root'
      ]
    }
  },
  argTypes: {
    phase: {
      description: 'Game phase',
      control: {
        type: 'radio',
        options: [
          Phase.Planning,
          Phase.Adjudication
        ]
      }
    },
    panel: {
      description: 'Panel Tab',
      control: {
        type: 'radio',
        options: [
          WorldStatePanels.Control,
          WorldStatePanels.Visibility,
          WorldStatePanels.ControlledBy,
          WorldStatePanels.Markers
        ]
      }
    },
    playerRole: {
      name: 'View as',
      defaultValue: allRoles[1],
      control: {
        type: 'select',
        options: allRoles
      }
    }
  }
}

const Template: Story<WorldStatePropTypes> = (args) => {
  const {
    // eslint-disable-next-line
    playerRole,
    // eslint-disable-next-line
    store,
    // eslint-disable-next-line
    isUmpire,
    ...props
  } = args
  const roleStr: string = playerRole || ''
  // separate out the two elements of the combined rocale
  const sep1 = roleStr.indexOf(separator)
  const sep2 = roleStr.indexOf(separator, sep1 + separator.length)
  const forceId = roleStr.substring(0, sep1)
  const roleId = roleStr.substring(sep1 + separator.length, sep2)
  const isGameControlRole = roleStr === allRoles[0]
  const storeProp = routeCreateStore(undefined, Phase.Adjudication, forces, forceId, roleId, isGameControlRole, platformTypes, false, false,
    true, undefined, mappingChannel, 3)
  const isUmpireVal = forceId === forces[0].uniqid
  return <WorldState isUmpire={isUmpireVal} store={{ ...storeProp }} {...props} />
}

export const WithPhases = Template
WithPhases.args = {
  panel: WorldStatePanels.Control,
  plansSubmitted: false,
  platforms: platformTypes,
  turnNumber: 1,
  phase: Phase.Planning,
  submitTitle: 'Submit',
  name: 'World State'
}
