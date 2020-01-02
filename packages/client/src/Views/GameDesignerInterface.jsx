import React, { Component } from "react";
import {connect} from "react-redux";
import Link from "../Components/Link";
import SidebarAdmin from "../Components/SidebarAdmin";
import TextInput from "../Components/Inputs/TextInput";
import ImportWargame from "../Components/ImportWargame";
import WargameSearchList from "../Components/WargameSearchList";
import {
  ADMIN_ROUTE,
  GAME_SETUP_ROUTE,
} from "../consts";
import {
  createNewWargameDB,
  clearWargames,
  populateWargameStore,
  checkAdminAccess,
} from "../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import { populateMessageTypesDb } from "../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators";

import "@serge/themes/App.scss";

class GameDesignerInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    }
  }

  componentWillMount() {
    this.props.dispatch(populateMessageTypesDb());
    this.props.dispatch(populateWargameStore());
  }

  createWargame = () => {
    this.props.dispatch(createNewWargameDB());
  };

  clearWargames = () => {
    this.props.dispatch(clearWargames());
  };

  updatePassword = (password) => {
    this.setState({
      password,
    })
  };

  checkPassword = () => {
    this.props.dispatch(checkAdminAccess(this.state.password));
  };

  render() {

    let loading = Object.values(this.props.dbLoading).some((loading) => loading );

    if (loading) {
      return (
        <div id="loading">
          <div>
            <div id="loader"></div>
          </div>
        </div>
      )
    }

    if (this.props.wargame.adminNotLoggedIn) {
      return (
        <div id="umpire" className="flex-content-wrapper flex-landing-screen">
          <div className="flex-content flex-content--center" id="form-login-admin">
            <h2>Password</h2>
            <TextInput
              className="material-input"
              label="Password"
              data={this.state.password}
              updateStore={this.updatePassword}
              options={{numInput: false, password: true}}
            />
            <span className="link link--noIcon" onClick={this.checkPassword}>Enter</span>
          </div>
        </div>
      )
    }

    return (
      <div id="umpire" className="flex-content-wrapper flex-transparent flex-jc-center">
        <SidebarAdmin activeTab={ADMIN_ROUTE} />
        <div className="flex-content flex-content--big flex-content--last">
          <h2 id="page-title">Games</h2>
          <div className="btn-group game-designer-action">
            <div className="game-designer-action--item">

              <Link
                  href={GAME_SETUP_ROUTE}
                  class="link link--noIcon"
                  onClickHandler={this.createWargame}
              >Create</Link>
              <ImportWargame wargameList={this.props.wargame.wargameList}/>
            </div>
            <div className="game-designer-action--item">
              <Link
                  href={ADMIN_ROUTE}
                  class="link link--noIcon link--secondary"
                  onClickHandler={this.clearWargames}
              >Clear wargames</Link>
            </div>
          </div>
          <WargameSearchList key="searchlist"
            listData={this.props.wargame.wargameList}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({wargame, dbLoading}) => ({
  wargame,
  dbLoading
});


export default connect(mapStateToProps)(GameDesignerInterface);
