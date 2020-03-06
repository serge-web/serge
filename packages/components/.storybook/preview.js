import React from 'react'
import { addParameters, addDecorator } from '@storybook/react'; 
import { addReadme, configureReadme } from 'storybook-readme';

configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * React: React.ReactNode
   */
  StoryPreview: ({ children }) => <div style={{ margin: '2rem 1rem' }}>{children}</div>,
 
  /**
   * Wrapper for content and sidebar docs. Usually used to set some styles
   * React: React.ReactNode
   * Vue: Vue component
   */
  DocPreview: ({ children }) => (
    <div style={{ backgroundColor: '#fff', padding: '1rem'  }}> {children}</div>
  )
});

addParameters({
  options: {
    showSearchBox: true
  },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#000' },
    { name: 'grey', value: '#ddd' },
    { name: 'splash', value: '#013c5d' },
    { name: 'channel', value: '#0e5680' },
    { name: 'message', value: '#00274b' },
    { name: 'sea', value: '#8ec7e8' },
    { name: 'land', value: '#d9b86c' },
  ], 
  readme: {
    info: { inline: true },
    codeTheme: 'atom-dark',
  }
});

addDecorator(addReadme);