import React, { Component } from 'react';
import {connect} from 'react-redux';

import '../scss/App.scss';
import _ from "lodash";

import {
  editWargame,
  cleanWargame,
  exportWargame, duplicateWargame
} from "../ActionsAndReducers/dbWargames/wargames_ActionCreators";

import {setCurrentViewFromURI} from "../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators";

import {
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {modalAction} from "../ActionsAndReducers/Modal/Modal_ActionCreators";
import {EXPORT_ROUTE, GAME_SETUP_ROUTE} from "../consts";
import WargameOptionMenu from "./WargameOptionMenu";

class WargameSearchList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messageList: this.props.listData,
      searchQuery: this.props.listData,
      searchInput: "",
      wargameMenuOpen: false,
    };
  }


  componentWillUpdate(nextProps, nextState, nextContext) {

    let sameMessagesQuantity = _.difference(nextProps.listData, this.state.messageList).length;

    if (
      nextProps.listData.length !== this.state.messageList.length ||
      (sameMessagesQuantity !== 0 && this.state.searchInput.length === 0)
    ) {
      this.setState({
        messageList: nextProps.listData
      });
    }

    if (
      this.state.searchInput.length > 0 &&
      sameMessagesQuantity !== 0
    ) {
      this.filterMessages();
    }
  }

  setSelectedWargame(name, event) {
    event.stopPropagation();
    this.props.dispatch(editWargame(name));
    this.props.dispatch(setCurrentViewFromURI(GAME_SETUP_ROUTE));
  }

  exportWargame = (name) => {
    this.props.dispatch(exportWargame(name));
    this.props.dispatch(setCurrentViewFromURI(EXPORT_ROUTE));
  };

  cleanWargame = (name) => {
    this.props.dispatch(cleanWargame(name));
  };

  duplicateWargame = (name) => {
    this.props.dispatch(duplicateWargame(name));
  };

  deleteWargame = (name) => {
    this.props.dispatch(modalAction.open("deleteWargame", name));
  };

  filterMessages = (input) => {

    let value = input ? input.target.value : this.state.searchInput;

    let searchQuery = this.props.listData.filter(function(db) {
      return db.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });

    this.setState({
      searchQuery,
      searchInput: input ? value : this.state.searchInput
    });
  };

  displayControls = (activeTitle) => {
    this.setState({
      activeTitle,
    });
  };

  hideControls = () => {
    this.setState({
      activeTitle: false,
    });
  };

  showWargameMenu = (title, event) => {
    event.stopPropagation();
    this.setState({
      wargameMenuOpen: title,
    });
  };

  hideWargameMenu = () => {
    this.setState({
      wargameMenuOpen: false,
    });
  };

  render() {

    var that = this;

    var list = this.state.searchInput ? this.state.searchQuery : this.state.messageList;

    return (
      <div className="wargame-searchlist">
        <input type="text" className="searchlist-input" key="search-templates" placeholder="Search games" onChange={ this.filterMessages } value={this.state.searchInput} />
        <div className="searchlist-list">
          { list.map(function(db) {
            // let active
            return (
              <span
                className="searchlist-title"
                key={db.title}
                onMouseOver={that.displayControls.bind(that, db.title)}
                onMouseLeave={that.hideControls}
              >
                {db.initiated ?
                  <div className="wargame-started-highlight"></div>
                  :
                  <div className="wargame-unstarted-highlight"></div>
                }
                <span onClick={that.setSelectedWargame.bind(that, db.name)}>{db.title}</span>
                {that.state.activeTitle === db.title &&
                <FontAwesomeIcon icon={faEllipsisH} className="wargame-option-menu-btn" title="Wargame menu" onClick={that.showWargameMenu.bind(that, db.title)} />
                }
                { that.state.wargameMenuOpen === db.title &&
                  <WargameOptionMenu
                    hideMenu={that.hideWargameMenu}
                    dbName={db.name}
                    cleanWargame={that.cleanWargame}
                    duplicateWargame={that.duplicateWargame}
                    exportWargame={that.exportWargame}
                    deleteWargame={that.deleteWargame}
                  />
                }
              </span>
            )
          })}
        </div>
      </div>
    );
  }
}

// empty mapStateToProps is here for react-redux to wire up the dispatch function to props so firing actions is possible.
const mapStateToProps = () => ({});


export default connect(mapStateToProps)(WargameSearchList);
