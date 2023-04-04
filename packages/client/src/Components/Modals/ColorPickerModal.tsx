import React, { Component } from 'react'
import ModalWrapper from './ModalWrapper'
import { connect } from 'react-redux'
import { modalAction, ModalActionInterface } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'
import { SketchPicker } from 'react-color'

import '@serge/themes/App.scss'

import { setForceColor, setTabUnsaved } from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { ForceData, Wargame } from '@serge/custom-types'
import { Dispatch } from 'redux'

class ColorPickerModal extends Component<{ dispatch: Dispatch, currentModal: ModalActionInterface, wargame: Wargame }> {
  hideModal = () => {
    this.props.dispatch(modalAction.close())
  }

  handleChange = (color: { hex: string }) => {
    this.props.dispatch(setForceColor(color.hex))
    this.props.dispatch(setTabUnsaved())
  }

  render () {
    if (!this.props.currentModal.open) return false

    const selectedForceId = this.props.wargame.data.forces.selectedForce
    const currentForce = this.props.wargame.data.forces.forces.find((force: ForceData) => force.uniqid === selectedForceId)

    return (
      <ModalWrapper>
        <SketchPicker
          color={currentForce && currentForce.color}
          onChangeComplete={this.handleChange}
          presetColors={['#ff4141', '#66ff66', '#ff5ffd', '#3dd0ff', '#b56917', '#fff03f', '#fcfbed']}
        />
        <div className='buttons'>
          <button name='cancel' className='btn btn-action btn-action--secondary' onClick={this.hideModal}>Close</button>
        </div>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = ({ wargame, currentModal }: { wargame: Wargame, currentModal: ModalActionInterface }): { wargame: Wargame, currentModal: ModalActionInterface } => ({
  wargame,
  currentModal
})

export default connect(mapStateToProps)(ColorPickerModal)
