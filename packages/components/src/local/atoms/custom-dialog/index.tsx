import Button from '@material-ui/core/Button'
import React from 'react'
import Modal from 'react-modal'
import localStyles from './styles.module.scss'
import { Props } from './types/props'

/* Render component */
export const CustomDialog: React.FC<Props> = (props) => {
  const {
    isOpen,
    header,
    onClose,
    onSave,
    modalStyle,
    headerStyle,
    bodyStyle,
    footerStyle,
    cancelBtnText = 'Cancel',
    saveBtnText = 'Save',
    children,
    errors
  } = props
  console.log('errors', errors)
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
      <div style={bodyStyle} className={localStyles.body} >
        {children}
      </div>
      {errors && errors.length > 0 &&
      <div style={bodyStyle} className={localStyles.errors} >
        <ul>
          { errors.map((str: string, index:number) =>
            <li key={index}>{str}</li>
          )}
        </ul>
      </div>
      }
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
            disabled={!!(errors && errors.length)}
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
