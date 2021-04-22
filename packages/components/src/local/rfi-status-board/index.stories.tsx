import React from 'react'

// Import component files
import RfiStatusBoard from './index'
import docs from './README.md'


export default {
  title: 'local/RfiStatusBoard',
  component: RfiStatusBoard,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <RfiStatusBoard name="test" colour="green"/>

