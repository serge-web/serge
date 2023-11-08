import React from 'react'

// Import component files
import GameTitle from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/GameTitle',
  component: GameTitle,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onTitleClick = (title: string): void => {
  window.alert(title)
}

export const Default: React.FC = () => (
  <GameTitle
    initiated={false}
    name="http://localhost/imwarc"
    shortName="imwarc"
    title="IMWARC-New"
    onClick={onTitleClick}
  />
)

export const Initiated: React.FC = () => (
  <GameTitle
    initiated={true}
    name="http://localhost/imwarc"
    shortName="imwarc"
    title="IMWARC-New"
    onClick={onTitleClick}
  />
)
