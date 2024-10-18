import Button from '@material-ui/core/Button'
import React from 'react'
import Modal from 'react-modal'
import localStyles from './styles.module.scss'
import { Props } from './types/props'

/* Render component (dummy change) */
export const CustomDialog: React.FC<Props> = (props) => {
  const {
    isOpen,
    header,
    content,
    onClose,
    onSave,
    modalStyle,
    headerStyle,
    bodyStyle,
    footerStyle,
    cancelBtnText = 'Cancel',
    saveBtnText = 'Save'
  } = props

  return (
    <Modal
      style={modalStyle}
      portalClassName={localStyles.modalportal}
      isOpen={isOpen}
      onRequestClose={onClose}
      className={localStyles.modal}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
    >
      <div style={headerStyle} className={localStyles.header}>{header}</div>
      <div style={bodyStyle} className={localStyles.body} dangerouslySetInnerHTML={{ __html: content || '' }}></div>
      <div style={footerStyle} className={localStyles.footer}>
        {
          onClose &&
          <Button
            variant="contained"
            color="default"
            onClick={onClose}
          >
            {cancelBtnText}
          </Button>
        }
        {
          onSave &&
          <Button
            variant="contained"
            color="primary"
            onClick={onSave}
          >
            {saveBtnText}
          </Button>
        }
      </div>
    </Modal>
  )
}

export default React.memo(CustomDialog)
