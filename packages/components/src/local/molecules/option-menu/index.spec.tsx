/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { faBath, faClone, faFileDownload, faTrash } from '@fortawesome/free-solid-svg-icons'

import OptionMenu from './index'

describe('OptionMenu component:', () => {
  it('renders correctly', () => {
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
    const tree = renderer
      .create(<OptionMenu menus={menus} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
