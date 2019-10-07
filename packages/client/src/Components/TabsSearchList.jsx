import React, { Component } from 'react';
import classNames from "classnames";
import {PropTypes} from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClone, faTrash} from "@fortawesome/free-solid-svg-icons";

import "@serge/themes/App.scss";

class TabsSearchList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTitle: false,
    }
  }

  setSelected = (item) => {
    this.props.setSelected(item);
  };

  duplicate = (uniqid, e) => {
    e.stopPropagation();
    this.props.duplicate(uniqid);
  };

  delete = (uniqid, e) => {
    e.stopPropagation();
    this.props.delete(uniqid);
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

  render() {
    let that = this;
    return (
      <div className="list">
        {this.props.filter ?
          <input type="text" className="list-input" key="search-templates" placeholder={this.props.placeholder} onChange={ this.props.filter } value={this.props.searchQuery} />
          : false
        }
        <div className={`list-list list-${this.props.name}`}>
          {this.props.listData.map(function(item) {
              let active = item.name === that.props.selected ? 'active' : '';

              return (
                <span
                  key={item.uniqid}
                  className={classNames({"list-title": true, active})}
                  onMouseOver={that.displayControls.bind(that, item.uniqid)}
                  onMouseLeave={that.hideControls}
                  onClick={that.setSelected.bind(that, item)}>
                  {item.name}
                  {that.state.activeTitle === item.uniqid &&
                  <>
                    {that.props.duplicate && <FontAwesomeIcon icon={faClone} title="Duplicate channel" onClick={that.duplicate.bind(that, item.uniqid)} />}
                    {that.props.delete && <FontAwesomeIcon icon={faTrash} title="Delete channel" onClick={that.delete.bind(that, item.uniqid)} />}
                  </>
                  }
                </span>
              )
            })
          }
        </div>
      </div>
    );
  }
}

TabsSearchList.propTypes = {
  listData: PropTypes.array.isRequired,
  filter: PropTypes.func,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TabsSearchList;
