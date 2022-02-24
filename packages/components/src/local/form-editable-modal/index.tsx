import Button from '@material-ui/core/Button'
import { AttributeEditorData } from '@serge/custom-types'
import cloneDeep from 'lodash/cloneDeep'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import MoreInfo from '../molecules/more-info'
import styles from './styles.module.scss'
import { Props } from './types/props'

/* Render component */
export const FormEditableModal: React.FC<Props> = ({ isOpen, data, onClose, onSave }) => {
  const [localData, setLocalData] = useState<AttributeEditorData[]>([])

  useEffect(() => {
    if (isOpen) {
      setLocalData(cloneDeep(data))
    }
  }, [isOpen])

  const onValueChange = (newValue: any, idx: number): void => {
    localData[idx].valueWrite = newValue
    setLocalData([...localData])
  }

  const onSaveLocal = (): void => {
    onSave(localData)
    onClose()
  }

  const onCloseLocal = (): void => {
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseLocal}
      className={styles.modal}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
    >
      <div className={styles.header}>
        <span>Name</span><span>Value</span>
      </div>
      <div className={styles.body}>
        {localData.map((item: AttributeEditorData, idx: number) => {
          const elmName = item.description ? <MoreInfo description={item.description}>{item.nameRead}</MoreInfo> : item.nameRead
          return <div key={idx} className={styles.row}>
            <span>{elmName}</span>
            <input type='number' value={item.valueWrite} onChange={(e): void => onValueChange(e.target.value, idx)} />
          </div>
        })}
      </div>
      <div className={styles.footer}>
        <Button variant='contained' onClick={onCloseLocal}>Cancel</Button>
        <Button variant='contained' onClick={onSaveLocal}>Save</Button>
      </div>
    </Modal>
  )
}

export default React.memo(FormEditableModal)
