import React from 'react'
import renderer from 'react-test-renderer'
import { CUSTOM_SIDC } from 'src/config'

import SIDCGenerator from './index'

const onSave = (originalNumber: string): void => console.log(originalNumber)
it('SIDCGenerator Component', () => {
  const tree = renderer.create(
    <SIDCGenerator onSave={onSave} sidcValue={CUSTOM_SIDC} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
