import React, { Component } from 'react'
import { connect } from 'react-redux'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WELCOME_SCREEN_EDIT_ROUTE } from '../consts'
import { Button } from '@serge/components'
import splitNewLineBreak from '../Helpers/splitNewLineBreak'
import TextArea from '../Components/Inputs/TextArea'
import TextInput from '../Components/Inputs/TextInput'
import SidebarAdmin from '../Components/SidebarAdmin'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import {
  saveSergeGameInformation,
  getSergeGameInformation
} from '../ActionsAndReducers/sergeInfo/sergeInfo_ActionCreators'

import '@serge/themes/App.scss'

class EditWelcomeScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: this.props.gameInfo.title,
      description: this.props.gameInfo.description,
      showTitleEditIcon: false,
      showDescriptionEditIcon: false,
      editDescriptionMode: false
    }

    this.props.dispatch(getSergeGameInformation())
  }

  componentDidUpdate (prevProps) {
    if (this.props.gameInfo.title !== prevProps.gameInfo.title) {
      this.setState({
        title: this.props.gameInfo.title
      })
    }
    if (this.props.gameInfo.description !== prevProps.gameInfo.description) {
      this.setState({
        description: this.props.gameInfo.description
      })
    }
  }

  updateSergeTitle = (title) => {
    this.setState({
      title
    })
  }

  updateDescription = (description) => {
    this.setState({
      description
    })
  }

  mouseOverTitle = () => {
    this.setState({
      showTitleEditIcon: true
    })
  }

  mouseOutTitle = () => {
    this.setState({
      showTitleEditIcon: false
    })
  }

  editDescription = (e) => {
    e.stopPropagation()
    this.setState({
      editDescriptionMode: true
    })
  }

  hideEditDescription = (e) => {
    e.stopPropagation()
    this.setState({
      editDescriptionMode: false
    })
  }

  mouseOverDescription = () => {
    this.setState({
      showDescriptionEditIcon: true
    })
  }

  mouseOutDescription = () => {
    this.setState({
      showDescriptionEditIcon: false
    })
  }

  uploadImage = () => {
    this.props.dispatch(modalAction.open('uploadLogo'))
  }

  saveWelcomeScreen = () => {
    const info = {
      title: this.state.title,
      description: this.state.description,
      imageUrl: this.props.gameInfo.imageUrl
    }
    this.props.dispatch(saveSergeGameInformation(info))
  }

  render () {
    return (
      <div className='flex-content-wrapper flex-transparent'>
        <SidebarAdmin activeTab={WELCOME_SCREEN_EDIT_ROUTE}/>
        <div className='flex-content flex-content--big flex-content--last welcome-page'>
          <h1>Welcome Screen</h1>

          <div className='flex-content flex-content--row'>
            <div className='welcome-action-primary'>
              <h5>Image</h5>
              <span className='image-upload-link' onClick={this.uploadImage}>Upload new image</span>
            </div>
            <Button
              color='secondary'
              onClick={this.saveWelcomeScreen}
              className='welcome-screen-save align-self-center'
            >
              Save changes
            </Button>
          </div>
          <img alt='Serge logo' className='serge-custom-logo' src={this.props.gameInfo.imageUrl} />
          <div className='section'>
            <h5>Title</h5>
            <TextInput
              id='setup-title-editable'
              updateStore={this.updateSergeTitle}
              options={{ numInput: false }}
              data={this.state.title}
              onMouseOver={this.mouseOverTitle}
              onMouseOut={this.mouseOutTitle}
              title='Click to edit'
            />
            {this.state.showTitleEditIcon && <FontAwesomeIcon onMouseOver={this.mouseOverTitle} className='edit-hover-icon' icon={faPencilAlt} title='Edit Title' />}
          </div>
          <div className='description'
            onMouseOver={this.mouseOverDescription}
            onMouseOut={this.mouseOutDescription}
            onClick={this.editDescription}
            title='Click to edit'
          >
            {!this.state.editDescriptionMode &&
              <>
                <h5>Text</h5>
                {splitNewLineBreak(this.state.description)}
                {this.state.showDescriptionEditIcon && <FontAwesomeIcon onMouseOver={this.mouseOverDescription} className='edit-hover-icon' icon={faPencilAlt} title='Edit Title' />}
              </>
            }

            {this.state.editDescriptionMode &&
              <>
                <h5>Text</h5>
                <TextArea
                  className='description-edit'
                  updateStore={this.updateDescription}
                  data={this.state.description}
                />
                <span
                  className='link link--noIcon'
                  onClick={this.hideEditDescription}
                >Done</span>
              </>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ gameInfo }) => ({
  gameInfo
})

export default connect(mapStateToProps)(EditWelcomeScreen)
