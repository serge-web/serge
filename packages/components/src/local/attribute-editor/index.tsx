import Button from '@material-ui/core/Button'
import { AttributeEditorData, AttributeValue, AttributeValues, NumberAttributeValue } from '@serge/custom-types'
import cloneDeep from 'lodash/cloneDeep'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import MoreInfo from '../molecules/more-info'
import styles from './styles.module.scss'
import { Props } from './types/props'
import { ATTRIBUTE_VALUE_NUMBER } from '@serge/config'

/* Render component */
export const AttributeEditor: React.FC<Props> = ({ isOpen, data, onClose, onSave, inAdjudication }) => {
  const [localData, setLocalData] = useState<AttributeEditorData[]>([])
  const modalRef = useRef<ReactModal>(null)

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
    // transform the data
    const res: AttributeValues = localData.map((data: AttributeEditorData): AttributeValue => {
      const value: NumberAttributeValue = {
        attrId: data.attrId,
        attrType: ATTRIBUTE_VALUE_NUMBER,
        value: Number(data.valueWrite)
      }
      return value
    })
    onSave(res)
    onClose()
  }

  const onCloseLocal = (): void => {
    onClose()
  }

  return (
    <Modal
      ref={modalRef}
      isOpen={isOpen}
      onRequestClose={onCloseLocal}
      className={styles.modal}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
      style={{ overlay: { zIndex: 100 } }}
    >
      <div className={styles.header}>
        <span>Name</span><span>Value</span>
      </div>
      <div className={styles.body}>
        {localData.map((item: AttributeEditorData, idx: number) => {
          const locked = !(inAdjudication || item.playerCanEdit)
          const tooltip = (!locked && 'Value only editable by umpire in adjudication') || ''
          const elmName = item.description ? <MoreInfo container={modalRef.current} description={item.description}>{item.nameWrite}</MoreInfo> : item.nameWrite
          return <div key={idx} className={styles.row}>
            <span>{elmName}</span>
            {locked
              ? <span><FontAwesomeIcon icon={faLock} title="Attribute locked" /><input disabled={true} title={tooltip} value={item.valueWrite} /></span>
              : <input type='number' value={item.valueWrite} onChange={(e): void => onValueChange(e.target.value, idx)} />
            }
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

export default AttributeEditor
