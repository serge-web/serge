import React from 'react'

// Import component files
import Button from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/Button',
  component: Button,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Button>Default</Button>
export const Primary: React.FC = () => <Button color="primary">Primary</Button>
export const Secondary: React.FC = () => <Button color="secondary">Secondary</Button>
export const Warning: React.FC = () => <Button customColor="warning">Warning</Button>
export const Charcoal: React.FC = () => <Button customColor="charcoal">Charcoal</Button>
export const AddButton: React.FC = () => <Button color="secondary" icon="add">Add Button</Button>
export const SaveButton: React.FC = () => <Button color="secondary" icon="save">Save Button</Button>
export const DeleteButton: React.FC = () => <Button color="secondary" icon="delete">Delete Button</Button>
export const EditButton: React.FC = () => <Button color="secondary" icon="edit">Edit Button</Button>
export const CopyButton: React.FC = () => <Button color="secondary" icon="copy">Copy Button</Button>
export const CustomVariant: React.FC = () => <Button size="small" customVariant="form-action">Form Action</Button>
export const Adjacent: React.FC = () => (
  <>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
  </>
)
