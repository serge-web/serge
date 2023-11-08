import React from 'react'
import menus from './mocks/menus'

// Import component files
import OptionMenu from './index'
import docs from './README.md'

export default {
  title: 'local/molecules/OptionMenu',
  component: OptionMenu,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  return (
    <OptionMenu menus={menus} gameName="http://localhost/IMWARC-New" />
  )
}
