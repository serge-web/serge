/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessageHeader from './index'
import moment from 'moment-timezone'

describe('ChannelMessageHeader component:', () => {
  it('renders correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const tree = renderer
      .create(
        <ChannelMessageHeader
          isOpen={false}
          title="lorem ipsum do lor sit amet"
          timestamp="2020-09-18T05:41:17.349Z"
          role="CO"
          messageType="Chat"
          hasBeenRead={false}
          forceColor={'#000'}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
