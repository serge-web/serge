import React, { Component } from 'react'
import { connect } from 'react-redux'

import JsonCreator from '../Components/JsonCreator'

import { getAllMessageTypes } from '../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
import { resetMessagePreview } from '../ActionsAndReducers/dbMessages/messages_ActionCreators'

import Link from '../Components/Link'
import SearchList from '../Components/SearchList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { setSelectedSchema } from '../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators'
import { ADMIN_ROUTE } from '../consts'

import '@serge/themes/App.scss'
class EditMessage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      messageList: this.props.messageTypes.messages, // set to state for filter, without filter don't set props to state to avoid bugs
      searchQuery: ''
    }
  }

  componentWillMount () {
    this.props.dispatch(resetMessagePreview())
    this.props.dispatch(getAllMessageTypes())
  };

  componentWillReceiveProps (nextProps, nextContext) {
    if (this.props.messageTypes.messages.length !== nextProps.messageTypes.messages.length) {
      this.setState({
        messageList: nextProps.messageTypes.messages
      })
    }
  }

  filterMessages = (input) => {
    const value = input.target.value

    const newState = this.props.messageTypes.messages.filter(function (mes) {
      return mes.details.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    })

    this.setState({
      messageList: newState,
      searchQuery: value
    })
  };

  setSelectedSchemaId = (item) => {
    this.props.dispatch(setSelectedSchema(item._id))
  };

  render () {
    return (
      <div className='view-wrapper'>
        <div id='sidebar'>
          <Link href={ADMIN_ROUTE} id='home-btn'><FontAwesomeIcon icon={faArrowLeft} size='2x' /></Link>
        </div>
        <h1>Message library</h1>
        <div className='flex-content-wrapper'>
          <div id='selection' className='flex-content'>
            <SearchList key='search-templates'
              listData={this.state.messageList}
              searchQuery={this.state.searchQuery}
              filter={this.filterMessages}
              selected={this.props.umpireMenu.selectedSchemaID}
              setSelected={this.setSelectedSchemaId}
              placeholder={'Select message'}
            />
          </div>
          <div id='preview' className='flex-content flex-content--big'>
            <JsonCreator id='preview' disabled={false} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ messages, messageTypes, umpireMenu, currentViewURI }) => ({
  messages,
  messageTypes,
  umpireMenu,
  currentViewURI
})

export default connect(mapStateToProps)(EditMessage)
