/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { faBath, faClone, faFileDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
import WargameList from './index'

const menus = [
  {
    onClick: (): void => window.alert('Click on menu #1'),
    icon: faBath,
    title: 'Save clean copy of wargame (no messages)',
    label: 'Clean copy'
  },
  {
    onClick: (): void => window.alert('Click on menu #2'),
    icon: faClone,
    title: 'Duplicate wargame',
    label: 'Duplicate'
  },
  {
    onClick: (): void => window.alert('Click on menu #3'),
    icon: faFileDownload,
    title: 'Export wargame',
    label: 'Export'
  },
  {
    onClick: (): void => window.alert('Click on menu #4'),
    icon: faTrash,
    title: 'Delete wargame',
    label: 'Delete'
  }
]

const wargames = [{
  title: 'Wargame A',
  name: 'http://localhost/wargame-a',
  shortName: 'wargame-a',
  initiated: true
}, {
  title: 'Wargame B',
  name: 'http://localhost/wargame-b',
  shortName: 'wargame-b',
  initiated: false
}, {
  title: 'Wargame C',
  shortName: 'wargame-c',
  name: 'http://localhost/wargame-c',
  initiated: true
}]

const onGameClick = (title: string): void => {
  window.alert(`Click on ${title}`)
}

const toggleClick = (title: string): void => {
  window.alert(`Toggle on ${title}`)
}

describe('WargameList component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <WargameList
          wargames={wargames}
          menuConfig={menus}
          onGameClick={onGameClick}
          toggleAction={toggleClick}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
