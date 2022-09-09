import { MessageDetails } from '@serge/custom-types'
import { P9Mock, planningMessageTemplatesMock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import NewMessage2 from './index'
import docs from './README.md'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '700px' }}>{storyFn()}</div>

export default {
  title: 'local/form-elements/NewMessage2',
  component: NewMessage2,
  decorators: [wrapper],
  parameters: {
    readme: {
      content: docs
    },
    options: {
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    privateMessage: {
      description: 'Provide private message (umpire force)',
      control: {
        type: 'boolean'
      }
    },
    orderableChannel: {
      description: 'Whether messages are shown in order',
      control: {
        type: 'boolean'
      }
    },
    confirmCancel: {
      description: 'Whether player has to confirm cancelling a message',
      control: {
        type: 'boolean'
      }
    }
  }
}

export const saveMessage = (dbName: string, details: MessageDetails, message: object): Function => () => {
  return async (): Promise<void> => {
    console.log('new message', dbName, details, message)
  }
}

export const Default: React.FC = () => <NewMessage2
  role=''
  templates={planningMessageTemplatesMock}
  privateMessage={false}
  orderableChannel={false}
  curChannel=''
  confirmCancel={false}
  activityTimeChanel={noop}
  channels={[]}
  currentTurn={0}
  currentWargame=''
  gameDate=''
  // saveMessage={saveMessage}
  saveMessage={() => () => { }}
  saveNewActivityTimeMessage={() => () => { }}
  selectedForce={P9Mock.data.forces.forces[0]}
  selectedRole={''}
  selectedRoleName={''}
  dispatch={noop}
/>
