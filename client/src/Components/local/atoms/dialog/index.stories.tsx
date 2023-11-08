import React from 'react'
import DialogModal from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/DialogModal',
  component: DialogModal,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <DialogModal open={false} title="" />
