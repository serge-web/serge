import React from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

// Import component files
import GameTitle from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px',
  color: '#fff'
})

export default {
  title: 'local/atoms/GameTitle',
  component: GameTitle,
  decorators: [(story: Function): React.ReactElement => (
    <BlueContainer>
      { story() }
    </BlueContainer>
  )],
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
  <GameTitle initiated={false} title="IMWARC-New" onClick={onTitleClick} />
)

export const Initiated: React.FC = () => (
  <GameTitle initiated={true} title="IMWARC-New" onClick={onTitleClick} />
)
