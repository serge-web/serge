import React from 'react'

// Import component files
import ButtonList from './index'
import docs from './README.md'
import { Props as ButtonProps } from '../../atoms/button/types/props'

export default {
  title: 'local/molecules/ButtonList',
  component: ButtonList,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const buttons = [{
  color: 'secondary' as ButtonProps['color'],
  children: 'First Button',
  onClick: (): void => window.alert('First Button clicked')
}, {
  color: 'primary' as ButtonProps['color'],
  children: 'Second Button',
  icon: 'delete' as ButtonProps['icon'],
  onClick: (): void => window.alert('Second Button clicked')
}]
export const Default: React.FC = () => <ButtonList buttons={buttons} />
export const FullWidth: React.FC = () => <ButtonList buttons={buttons.map(button => ({ ...button, fullWidth: true }))} />
