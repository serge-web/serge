import React from 'react'

// Import component files
import Radio from '@material-ui/core/Radio'
import docs from './README.md'

export default {
  title: 'vendor/Radio',
  component: Radio,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <><Radio color="default" value="checked"/><Radio color="default" value="checked" checked/></>
export const Primary: React.FunctionComponent = () => <><Radio color="primary" value="checked"/><Radio color="primary" value="checked" checked/></>
export const Secondary: React.FunctionComponent = () => <><Radio color="secondary" value="checked"/><Radio color="secondary" value="checked" checked/></>
export const Disabled: React.FunctionComponent = () => <><Radio color="default" value="checked" disabled/><Radio color="default" value="checked" checked disabled/></>
