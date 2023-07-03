/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import SearchList from './index'

describe('SearchList component:', () => {
  it('renders correctly', () => {
    const listData = [{
      completed: false,
      details: {
        title: 'State of World (laydown 2)'
      },
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'State of World L',
      _id: 'k16eedkp',
      _rev: '1-612d7dc5d10fc81bc7459b2801c66816'
    }, {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Daily intentions',
      details: {
        title: 'Daily Intent'
      },
      completed: false,
      _id: 'k16eedkn',
      _rev: '1-cc8e8cdb01447959c266761066448382'
    }, {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Link',
      details: {
        title: 'Link'
      },
      completed: false,
      _id: 'k16eedkm',
      _rev: '1-7fa1e6dd6b4ac5b6afc45b596ee7af61'
    }, {
      lastUpdated: '2019-09-30T12:37:26.705Z',
      title: 'Chat',
      details: {
        title: 'Chat'
      },
      completed: false,
      _id: 'k16eedkl',
      _rev: '1-09ab7a18ff677cec5d9a56f02a45788d'
    }]
    const tree = renderer
      .create(
        <SearchList
          placeholder="Select template"
          listData={listData}
          setSelected={(item): void => window.alert(item)}
          activeRow={(): boolean => true}
          rowLabel={(): string => 'Label'}
          rowFilter={(): boolean => true}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
