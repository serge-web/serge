// Import component files
import { AttributeEditorData } from '@serge/custom-types'
import React from 'react'
import FormEditableModal from './index'
import docs from './README.md'

export default {
  title: 'local/form-editable-modal',
  component: FormEditableModal,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
const data: AttributeEditorData[] = [
  {
    attrId: '1',
    nameRead: 'Fuel',
    nameWrite: 'Fuel',
    valueRead: '10',
    valueWrite: '10',
    valueType: '',
    description: 'The remaining fuel'
  },
  {
    attrId: '2',
    nameRead: 'Gun',
    nameWrite: 'Gun',
    valueRead: '12',
    valueWrite: '12',
    valueType: '',
    description: 'We have 12 guns'
  }
]

const onClose = (): void => {
  console.log('On Close button clicked')
}
const onSave = (): void => {
  console.log('On Save button clicked')
}

export const Default: React.FC = () => <FormEditableModal data={data} onClose={onClose} onSave={onSave} isOpen={true} />
