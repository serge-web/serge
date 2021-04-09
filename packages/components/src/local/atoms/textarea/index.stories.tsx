import React, { useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// Import component files
import Textarea, { TEXTAREA_DARK } from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/Textarea',
  component: Textarea,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const [value, setValue] = useState<string>('Text')

  return <Textarea value={value} onChange={(nextValue): void => setValue(nextValue)} label='Label'/>
}

export const FourRows: React.FC = () => {
  const [value, setValue] = useState<string>('Text')

  return <Textarea rows={4} value={value} onChange={(nextValue): void => setValue(nextValue)} label='Label'/>
}

export const WithFactory: React.FC = () => {
  const [value, setValue] = useState<string>('Text')

  const labelFactory = (id: string, label: string): React.ReactNode => (
    <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret} />{label}</label>
  )

  return <Textarea value={value} onChange={(nextValue): void => setValue(nextValue)} label='Private Message' labelFactory={labelFactory}/>
}

export const Dark: React.FC = () => {
  const [value, setValue] = useState<string>('Text')

  return (
    <div style={{ backgroundColor: '#000' }}>
      <Textarea value={value} onChange={(nextValue): void => setValue(nextValue)} label='Label' theme={TEXTAREA_DARK}/>
    </div>
  )
}
