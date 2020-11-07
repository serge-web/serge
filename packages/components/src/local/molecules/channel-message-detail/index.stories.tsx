import React from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

// Import component files
import ChannelMessageDetail from './index'
import docs from './README.md'

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

export const Chat: React.FC = () => (
  <ChannelMessageDetail
    detail={{ content: 'common chat' }}
  />
)

export const Link: React.FC = () => (
  <ChannelMessageDetail
    detail={{
      title: 'lorem ipsum',
      URL: 'https://google.com'
    }}
  />
)

export const DailyIntention: React.FC = () => (
  <ChannelMessageDetail
    detail={{
      TurnNumber: '1',
      OverallIntentions: 'Some intentions',
      Orders: [{
        Unit: '1',
        Tasking: 'Some tasking',
        SearchPolicy: 'Some policy',
        ActionOnContact: 'Ignore',
        AnyOtherComments: 'other'
      }]
    }}
  />
)

export const StateOfTheWorld: React.FC = () => (
  <ChannelMessageDetail
    detail={{
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
    }}
  />
)

export const PrivateMessage: React.FC = () => (
  <ChannelMessageDetail
    privateMessage="Private message"
    isUmpire={boolean('Player from umpire force', true)}
    detail={{ content: 'Lorem ipsum do lor sit amet' }}
  />
)

export const WeatherForecast: React.FC = () => (
  <ChannelMessageDetail
    privateMessage="Private weather message"
    isUmpire={boolean('Player from umpire force', true)}
    detail={{
      title: 'Forecast',
      Location: { Lat: 19, 'Lat Hemi': 'N', Long: 33, 'Long Hemi': 'E' },
      'Valid from': '2020-09-03 12:00',
      'Valid until': '2020-09-25 12:00',
      Forecast: 'Clear'
    }}
  />
)
