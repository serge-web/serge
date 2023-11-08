import React from 'react'
import { addReadme, configureReadme } from 'storybook-readme';
import { MuiThemeProvider as ThemeProvider, styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import theme from '../themes/serge';
import theme from '../src/themes/serge';

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px',
  color: '#fff',
  position: 'relative'
})

configureReadme({
  /**
   * Wrapper for story. Usually used to set some styles
   * React: React.ReactNode
   */
  StoryPreview: ({ children }) => {
    const component = children.props.children.type.displayName;
    const withBlueBackground = [
      'AdminLogin',
      'ChannelMessage',
      'ChannelMessageDetail',
      'ChannelMessageHeader',
      'ChannelMessagesList',
      'ChatMessagesList',
      'ChatMessage',
      'ChannelRFIMessagesList',
      'ForcesInChannel',
      'GameTitle',
      'InsightForm',
      'MessageLabel',
      'TextInput',
      'ChatInputText',
      'PrivateChatInputToggle',
      'ChatEntryForm',
      'WargameList',
      'WrapForceObjective',
      'ChatMessageSetup'
    ]
    const WrappedComponent = () => {
      return withBlueBackground.includes(component)
        ? <BlueContainer>{ children }</BlueContainer>
        : children
    }
    return (
      <ThemeProvider theme={theme}>
        <div style={{ margin: '2rem 1rem' }}>
          <WrappedComponent />
        </div>
      </ThemeProvider>
    )
  },

  /**
   * Wrapper for content and sidebar docs. Usually used to set some styles
   * React: React.ReactNode
   */
  DocPreview: ({ children }) => (
    <div style={{ backgroundColor: '#fff', padding: '1rem'  }}> {children}</div>
  )
});

export const parameters = {
  options: {
    showSearchBox: true
  },
  backgrounds: {
    default: 'white',
    values: [{ name: 'white', value: '#fff', default: true },
      { name: 'black', value: '#000' },
      { name: 'grey', value: '#ddd' },
      { name: 'splash', value: '#013c5d' },
      { name: 'channel', value: '#0e5680' },
      { name: 'message', value: '#00274b' },
      { name: 'sea', value: '#8ec7e8' },
      { name: 'land', value: '#d9b86c' },]
  },
  readme: {
    info: { inline: true },
    codeTheme: 'atom-dark',
  },
  actions: {
    argTypesRegex: "^on[A-Z].*"
  }
};

export const decorators = [
  addReadme
];
