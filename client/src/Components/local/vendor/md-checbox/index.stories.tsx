import React from 'react'

// Import component files
import Checkbox from '@material-ui/core/Checkbox'
import docs from './README.md'

export default {
  title: 'md-checkbox/vendor/Checkbox',
  component: Checkbox,
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <><Checkbox color="default" value="checked"/><Checkbox color="default" value="checked" checked/></>
export const Primary: React.FunctionComponent = () => <><Checkbox color="primary" value="checked"/><Checkbox color="primary" value="checked" checked/></>
export const Secondary: React.FunctionComponent = () => <><Checkbox color="secondary" value="checked"/><Checkbox color="secondary" value="checked" checked/></>
export const Disabled: React.FunctionComponent = () => <><Checkbox color="default" value="checked" disabled/><Checkbox color="default" value="checked" checked disabled/></>
