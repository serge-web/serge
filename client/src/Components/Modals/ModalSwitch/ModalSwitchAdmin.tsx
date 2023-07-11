import React, { Component } from 'react'
import { connect } from 'react-redux'
import DeleteModal from '../DeleteModal'
import DeleteWargameModal from '../DeleteWargameModal'
import UnsavedForceModal from '../UnsavedForceModal'
import UnsavedChannelModal from '../UnsavedChannelModal'
import AddIconModal from '../AddIconModal'
import ColorPickerModal from '../ColorPickerModal'
import AddLogoModal from '../AddLogoModal'
import DeleteConfirmation from '../DeleteConfirmation'
import 'src/themes/App.scss'
import { CurrentModal } from 'src/custom-types'

class ModalSwitchAdmin extends Component<{ currentModal: CurrentModal }> {
  render () {
    let modal
    switch (this.props.currentModal.modal) {
      case 'delete':
        modal = <DeleteModal />
        break

      case 'deleteWargame':
        modal = <DeleteWargameModal />
        break

      case 'unsavedForce':
        modal = <UnsavedForceModal />
        break

      case 'unsavedChannel':
        modal = <UnsavedChannelModal />
        break

      case 'addIcon':
        modal = <AddIconModal />
        break

      case 'colorpicker':
        modal = <ColorPickerModal />
        break

      case 'uploadLogo':
        modal = <AddLogoModal />
        break

      case 'confirmDelete':
        modal = <DeleteConfirmation />
        break

      default:
        modal = false
        break
    }

    return (
      <>
        {modal}
      </>
    )
  }
}

const mapStateToProps = ({ currentModal }: { currentModal: CurrentModal }) => ({
  currentModal
})

export default connect(mapStateToProps)(ModalSwitchAdmin)
