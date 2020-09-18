import React from 'react'

// Import component files
import Badge from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/Badge',
  component: Badge,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Badge label="Default" />
export const Warning: React.FC = () => <Badge label="Warning" type="warning" />
export const Charcoal: React.FC = () => <Badge label="Charcoal" type="charcoal" />
