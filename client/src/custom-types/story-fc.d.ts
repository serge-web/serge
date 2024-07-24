import React from 'react'

// Define a type that extends React.FC to include the 'story' property
interface StoryFC<P = Record<string, never>> extends React.FC<P> {
    story?: {
      parameters?: {
        options?: {
          showPanel?: boolean
        }
      }
    }
  }

export default StoryFC
