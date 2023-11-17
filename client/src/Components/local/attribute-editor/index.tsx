import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Select } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { ATTRIBUTE_VALUE_ENUM, ATTRIBUTE_VALUE_NUMBER, ATTRIBUTE_VALUE_STRING } from 'src/config'
import { AttributeEditorData, AttributeType, AttributeTypes, AttributeValue, AttributeValues, EnumAttributeType, EnumAttributeValue, NumberAttributeValue, StringAttributeValue } from 'src/custom-types'
import cloneDeep from 'lodash/cloneDeep'
import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import MoreInfo from '../molecules/more-info'
import styles from './styles.module.scss'
import { Props } from './types/props'

/* Render component */
export const AttributeEditor: React.FC<Props> = ({ isOpen, data, attributeTypes: attributes, onClose, onSave, inAdjudication }) => {       
  const [localData, setLocalData] = useState<AttributeEditorData[]>([])
  const modalRef = useRef<Modal>(null)

  useEffect(() => {
    if (isOpen) {
      setLocalData(cloneDeep(data))
    }
  }, [isOpen])

  const onValueChange = (newValue: any, idx: number): void => {
    localData[idx].valueWrite = newValue
    setLocalData([...localData])
  }

  const enumChangeHandler = (e: any): void => {
    const attrId = e.target.name
    // we don't receive the index. So, find the attribute
    const ele = localData.find((attr: AttributeEditorData) => attr.attrId === attrId)
    if (ele) {
      ele.valueWrite = e.target.value
      ele.valueRead = e.target.value
    } else {
      throw new Error('Failed to fine attribute ' + attrId)
    }
    setLocalData([...localData])
  }

  const savedValue = (data: AttributeEditorData): AttributeValue => {
    switch (data.valueType) {
      case ATTRIBUTE_VALUE_NUMBER: {
        const res: NumberAttributeValue = {
          attrId: data.attrId,
          attrType: ATTRIBUTE_VALUE_NUMBER,
          value: Number(data.valueWrite)
        }
        return res
      }
      case ATTRIBUTE_VALUE_ENUM: {
        const res: EnumAttributeValue = {
          attrId: data.attrId,
          attrType: ATTRIBUTE_VALUE_ENUM,
          value: data.valueWrite
        }
        return res
      }
      case ATTRIBUTE_VALUE_STRING: {
        const res: StringAttributeValue = {
          attrId: data.attrId,
          attrType: ATTRIBUTE_VALUE_STRING,
          value: data.valueWrite
        }
        return res
      }
    }
  }

  const onSaveLocal = (): void => {
    // transform the data
    const res: AttributeValues = localData.map((data: AttributeEditorData): AttributeValue => {
      return savedValue(data)
    })
    onSave(res)
    onClose()
  }

  const editorFor = (item: AttributeEditorData, attributes: AttributeTypes, idx: number): any => {
    switch (item.valueType) {
      case ATTRIBUTE_VALUE_STRING: {
        return <input type='number' value={item.valueWrite} onChange={(e): void => onValueChange(e.target.value, idx)} />
      }
      case ATTRIBUTE_VALUE_NUMBER: {
        return <input type='number' value={item.valueWrite} onChange={(e): void => onValueChange(parseInt(e.target.value), idx)} />
      }
      case ATTRIBUTE_VALUE_ENUM: {
        const aType = attributes && attributes.find((value: AttributeType) => value.attrId === item.attrId) as EnumAttributeType
        if (aType === undefined) {
          throw new Error('Failed to find attribute type for:' + item.attrId)
        }
        return <Select
          value={item.valueRead}
          onChange={enumChangeHandler}
          name={item.attrId}
          className={styles.select}
          inputProps={{ style: { padding: '0 5px 0 5px' } }}
          native
        >
          {aType.values.map((s: any, index: number) => (
            <option key={index} value={s}>{s}</option>
          ))}
        </Select>
      }
    }
  }

  return (
    <Modal
      ref={modalRef}
      isOpen={isOpen}
      onRequestClose={onClose}
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
              : editorFor(item, attributes || [], idx)
            }
          </div>
        })}
      </div>
      <div className={styles.footer}>
        <Button variant='contained' onClick={onClose}>Cancel</Button>
        <Button variant='contained' color="primary" onClick={onSaveLocal}>Save</Button>
      </div>
    </Modal>
  )
}

export default AttributeEditor
