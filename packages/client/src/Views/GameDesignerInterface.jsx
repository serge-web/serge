import React, { Component } from 'react'
import { connect } from 'react-redux'
import SidebarAdmin from '../Components/SidebarAdmin'
import WargameSearchList from '../Components/WargameSearchList'
import Loader from '../Components/Loader'
import { ADMIN_ROUTE, GAME_SETUP_ROUTE } from '../consts'
import { Button, AdminLogin } from '@serge/components'
import {
  createNewWargameDB,
  clearWargames,
  populateWargameStore,
  checkAdminAccess
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { populateMessageTypesDb } from '../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import '@serge/themes/App.scss'

class GameDesignerInterface extends Component {
  componentWillMount () {
    this.props.dispatch(populateMessageTypesDb())
    this.props.dispatch(populateWargameStore())
  }

  createWargame = () => {
    this.props.dispatch(createNewWargameDB())
  };

  clearWargames = () => {
    this.props.dispatch(clearWargames())
  };

  checkPassword = (password) => {
    this.props.dispatch(checkAdminAccess(password))
  };

  onButtonClick = (onClick) => (route) => {
    onClick && onClick()
    route && this.props.dispatch(setCurrentViewFromURI(route))
  };

  render () {
    const loading = Object.values(this.props.dbLoading).some(
      (loading) => loading
    )

    if (loading) {
      return <Loader />
    }

    if (this.props.wargame.adminNotLoggedIn) {
      return (
        <div id="umpire" className="flex-content-wrapper flex-landing-screen">
          <div
            className="flex-content flex-content--center"
            id="form-login-admin"
          >
            <AdminLogin onSubmit={this.checkPassword} />
          </div>
        </div>
      )
    }

    return (
      <div
        id="umpire"
        className="flex-content-wrapper flex-transparent flex-jc-center"
      >
        <SidebarAdmin activeTab={ADMIN_ROUTE} />
        <div className="flex-content flex-content--big flex-content--last">
          <h2 id="page-title">Games</h2>
          <div className="btn-group game-designer-action">
            <Button
              onClick={() =>
                this.onButtonClick(this.createWargame)(GAME_SETUP_ROUTE)
              }
            >
              Create
            </Button>
            <Button
              onClick={() =>
                this.onButtonClick(this.clearWargames)(ADMIN_ROUTE)
              }
              color="primary"
            >
              Clear wargames
            </Button>
          </div>
          <WargameSearchList
            key="searchlist"
            listData={this.props.wargame.wargameList}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ wargame, dbLoading }) => ({
  wargame,
  dbLoading
})

export default connect(mapStateToProps)(GameDesignerInterface)
