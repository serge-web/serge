import { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@serge/components'
import {
  getAllMessageTypes,
  updateMessageType 
} from '../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
import { resetMessagePreview } from '../ActionsAndReducers/dbMessages/messages_ActionCreators'
import Link from '../Components/Link'
import SchemaEditor from '../Components/jsonSchemaEditor/index'
import { ADMIN_ROUTE } from '../consts'

import '@serge/themes/App.scss'

class EditMessage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      messageList: this.props.messageTypes.messages, // set to state for filter, without filter don't set props to state to avoid bugs
      searchInput: ''
    }
  }

  UNSAFE_componentDidMount () {
    this.props.dispatch(resetMessagePreview())
    this.props.dispatch(getAllMessageTypes())
  }

  UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
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
      searchInput: value.toLowerCase()
    })
  }

  updateSchema = () => {
    this.props.dispatch(updateMessageType(this.props.umpireMenu.previewSchema, this.props.umpireMenu.selectedSchemaID))
  }

  render () {
    const SaveMessageButton = () => (
      <div className='button-wrap'>
        <Button color='secondary' onClick={this.updateSchema} icon='save'>Save Message</Button>
      </div>
    )
    return (
      <div className='view-wrapper'>
        <div id='sidebar'>
          <Link href={ADMIN_ROUTE} id='home-btn'><FontAwesomeIcon icon={faArrowLeft} size='2x' /></Link>
        </div>
        <h1>Message template</h1>
        <SaveMessageButton />
        <div className='flex-content-wrapper'>
          <SchemaEditor
            schemaId={this.props.umpireMenu.selectedSchemaID}
            messageTypes={this.props.messageTypes}
          />
        </div>
        <SaveMessageButton />
      </div>
    )
  }
}

const mapStateToProps = ({ messages, messageTypes, currentViewURI, umpireMenu }) => ({
  messages,
  messageTypes,
  currentViewURI,
  umpireMenu
})

export default connect(mapStateToProps)(EditMessage)
