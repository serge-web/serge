import React from 'react'
import { CUSTOM_SIDC } from 'src/config'
import renderer from 'react-test-renderer'

import SIDCGenerator from './index'
const onSave = (originalNumber: string): void => console.log(originalNumber)
const onClose = (): void => console.log('close') 

it('SIDCGenerator Component', () => {
  const tree = renderer
    .create(<SIDCGenerator 
      onSave={onSave} 
      onClose={onClose} 
      sidcValue={CUSTOM_SIDC} 
    />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
