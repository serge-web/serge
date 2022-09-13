// /* global it expect */

import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import DropdownInput from './index'

it('DropdownInput renders correctly', () => {
  const tree = renderer
    .create(<DropdownInput className='' data='' placeholder='' selectOptions={[]} updateStore={noop} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
