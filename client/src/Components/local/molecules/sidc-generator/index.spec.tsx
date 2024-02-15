import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@material-ui/core/styles'
import useStyles from './helpers/SidcGeneratorStyles'
import { CUSTOM_SIDC } from 'src/config'

import SIDCGenerator from './index'

const onSave = (originalNumber: string): void => console.log(originalNumber)
it('SIDCGenerator Component', () => {
  const tree = renderer.create(
    <ThemeProvider theme={useStyles}>
      <SIDCGenerator onSave={onSave} sidcValue={CUSTOM_SIDC} />
    </ThemeProvider>
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
