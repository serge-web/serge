import React from 'react'

// Import component files
import Paragraph from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/Paragraph',
  component: Paragraph,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const SingleLine: React.FC = () => <Paragraph content={'Lorem ipsum'} />
export const MultiLines: React.FC = () => <Paragraph content={'line 1\nline2'} />
