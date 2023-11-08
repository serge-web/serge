import { noop } from 'lodash'
import React from 'react'
import Confirm from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/confirm',
  component: Confirm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Confirm isOpen={false} message="" onCancel={noop} onConfirm={noop} />
