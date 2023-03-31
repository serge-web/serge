import { noop } from 'lodash'
import React from 'react'
import DropdownInput from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/DropdownInput',
  component: DropdownInput,
  decorators: [],
  parameters: {
    readme: {
      content: docs
    }
  }
}

export const Default: React.FC = () => <DropdownInput className='' data='' placeholder='' selectOptions={[]} updateStore={noop} />
