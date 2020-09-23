import React from 'react'
import Box from '@material-ui/core/Box'
import { styled } from '@material-ui/core/styles'

// Import component files
import MessageListDetail from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px',
  color: '#fff'
})

export default {
  title: 'local/molecules/MessageListDetail',
  component: MessageListDetail,
  decorators: [(story: Function): React.ReactElement => (
    <BlueContainer>{ story() }</BlueContainer>
  )],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Chat: React.FC = () => (
  <MessageListDetail
    detail={{ content: 'common chat' }}
  />
)

export const Link: React.FC = () => (
  <MessageListDetail
    detail={{
      title: 'lorem ipsum',
      URL: 'https://google.com'
    }}
  />
)

export const DailyIntention: React.FC = () => (
  <MessageListDetail
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
  <MessageListDetail
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
  <MessageListDetail
    privateMessage="Private message"
    isUmpire={true}
    detail={{ content: 'Lorem ipsum do lor sit amet' }}
  />
)

export const WeatherForecast: React.FC = () => (
  <MessageListDetail
    detail={{
      title: 'Forecast',
      Location: { Lat: 19, 'Lat Hemi': 'N', Long: 33, 'Long Hemi': 'E' },
      'Valid from': '2020-09-03 12:00',
      'Valid until': '2020-09-25 12:00',
      Forecast: 'Clear'
    }}
  />
)
