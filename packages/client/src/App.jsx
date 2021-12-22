import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider as ThemeProvider } from '@material-ui/core/styles'
import theme from '@serge/components/themes/serge'
import Notifications from './Components/Notifications'
import Version from './Views/Version'
import RouterMain from './Components/Router/RouterMain'
import Store from './Store/Store'
import '@serge/themes/App.scss'

/** placeholder. We need to find another way to find the current role */
const roleId = 'role_' + Math.floor(Math.random() * 100)
const wargameId = 'wargame_' + Math.floor(Math.random() * 100)

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
          <Version wargameId={wargameId} roleId={roleId} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default App
