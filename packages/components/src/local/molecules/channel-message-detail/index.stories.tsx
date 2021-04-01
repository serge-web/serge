import React from 'react'
import { withKnobs, radios } from '@storybook/addon-knobs'

// Import component files
import ChannelMessageDetail from './index'
import docs from './README.md'
import { GameMessagesMockRFI } from '@serge/mocks'

export default {
  title: 'local/molecules/ChannelMessageDetail',
  component: ChannelMessageDetail,
  decorators: [withKnobs],
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

const forces = {
  Blue: 'Blue',
  Umpire: 'umpire',
  Red: 'Red'
}

export const Chat: React.FC = () => (
  <ChannelMessageDetail
    message={GameMessagesMockRFI[0]}
    playerForce={radios('Player force', forces, 'Blue')}
  />
)

export const Link: React.FC = () => (
  <ChannelMessageDetail
  playerForce={radios('Player force', forces, 'Blue')}
  message={ { ...GameMessagesMockRFI[0],
      message: {
      title: 'lorem ipsum',
      URL: 'https://google.com'
    }}}
  />
)

export const DailyIntention: React.FC = () => (
  <ChannelMessageDetail
  playerForce={radios('Player force', forces, 'Blue')}
  message={ { ...GameMessagesMockRFI[0],
      message: {
      TurnNumber: '1',
      OverallIntentions: 'Some intentions',
      Orders: [{
        Unit: '1',
        Tasking: 'Some tasking',
        SearchPolicy: 'Some policy',
        ActionOnContact: 'Ignore',
        AnyOtherComments: 'other'
      }]
    }}}
  />
)

export const StateOfTheWorld: React.FC = () => (
  <ChannelMessageDetail
  playerForce={radios('Player force', forces, 'Blue')}
  message={ { ...GameMessagesMockRFI[0],
    message: {
    Forces: [{
        assets: [{
          location: 'loc',
          name: 'name',
          visibleTo: [{ Force: 'Blue' }]
        }, {
          location: 'lo2',
          name: 'name2',
          visibleTo: [{ Force: 'Red' }]
        }],
        force: 'Blue'
      }, {
        assets: [{
          location: 'loc',
          name: 'name3',
          visibleTo: []
        }],
        force: 'Red'
      }]
    }}}
  />
)

export const PrivateMessage: React.FC = () => (
  <ChannelMessageDetail
  playerForce={radios('Player force', forces, 'Blue')}
  message={ { ...GameMessagesMockRFI[0],
    message: { content: 'Lorem ipsum do lor sit amet' }}}
  />
)

export const WeatherForecast: React.FC = () => (
  <ChannelMessageDetail
  playerForce={radios('Player force', forces, 'Blue')}
  message={ { ...GameMessagesMockRFI[0],
    message: {
      title: 'Forecast',
      Location: { Lat: 19, 'Lat Hemi': 'N', Long: 33, 'Long Hemi': 'E' },
      'Valid from': '2020-09-03 12:00',
      'Valid until': '2020-09-25 12:00',
      Forecast: 'Clear'
    }}}
  />
)
