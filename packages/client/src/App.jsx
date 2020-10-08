import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider as ThemeProvider } from '@material-ui/core/styles'
import theme from '@serge/components/themes/serge'
import Notifications from './Components/Notifications'
import Version from './Views/Version'
import RouterMain from './Components/Router/RouterMain'
import Store from './Store/Store'
import '@serge/themes/App.scss'

class App extends Component {
  componentDidMount () {
    document.title = 'Serge'
  }

  render () {
    return (
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <RouterMain />
          <Notifications />
          <Version />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
