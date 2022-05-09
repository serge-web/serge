import React, { Component } from 'react'
import { connect } from 'react-redux'

import JsonEditor from '../Components/JsonEditor'

import { getAllMessageTypes } from '../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
// import { resetMessagePreview } from '../ActionsAndReducers/dbMessages/messages_ActionCreators';

import Link from '../Components/Link'
// import SearchList from '../Components/SearchList';
// import {setCurrentViewFromURI} from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ADMIN_ROUTE } from '../consts'

import '@serge/themes/App.scss'
class EditMessage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      messageToEdit: this.props.messages.messagePreviewId,
      messageList: this.props.messages.messages, // set to state for filter, without filter don't set props to state to avoid bugs
      searchInput: ''
    }
  }

  componentWillMount () {
    this.props.dispatch(getAllMessageTypes())
  }

  componentWillReceiveProps (nextProps, nextContext) {
    if (this.props.messages.messages.length !== nextProps.messages.messages.length) {
      this.setState({
        messageToEdit: nextProps.messages.messagePreviewId,
        messageList: nextProps.messages.messages
      })
    }
  }

  filterMessages = (input) => {
    const value = input.target.value

    const newState = this.props.messages.messages.filter(function (mes) {
      return mes.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    })

    this.setState({
      messageList: newState,
      searchInput: value.toLowerCase()
    })
  };

  render () {
    return (
      <div className='view-wrapper'>
        <div id='sidebar'>
          <Link href={ADMIN_ROUTE} id='home-btn'><FontAwesomeIcon icon={faArrowLeft} size='2x' /></Link>
        </div>
        <h1>Message library</h1>
        <div className='flex-content-wrapper'>
          <div id='preview' className='flex-content flex-content--solo-item'>
            <JsonEditor id='preview'
              disabled={ false }
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ messages, messageTypes }) => ({
  messages,
  messageTypes
})

export default connect(mapStateToProps)(EditMessage)
