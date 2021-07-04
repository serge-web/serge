/* eslint-disable @typescript-eslint/camelcase */
import React, { createRef, useEffect } from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Paragraph from '../../atoms/paragraph'
import { UMPIRE_FORCE } from '@serge/config'
// @ts-ignore
import JSONEditor from '@json-editor/json-editor'
import MessageLabel from '../../atoms/message-label'

const DetailLabel = ({ label }: any): React.ReactElement => (
  <span className={styles.detail}><MessageLabel label={label} /></span>
)

/* Render component */
export const ChannelMessageDetail: React.FC<Props> = ({ message, playerForce, collapsed }: Props) => {
  const leftEditorRef = createRef<HTMLDivElement>()
  const middleEditorRef = createRef<HTMLDivElement>()
  const rightEditorRef = createRef<HTMLDivElement>()

  const privateMessage = message.details.privateMessage
  const PrivateBadge = (): React.ReactElement => (
    <span>
      <span className={styles['icon-private']}>
        <FontAwesomeIcon size='1x' icon={faUserSecret} />
      </span>
      Private:
    </span>
  )

  const buildMsgByKeys = (keys: string[], msg: any): any => {
    const buildMsg = {}
    keys.forEach(key => {
      buildMsg[key] = msg[key]
    })
    return buildMsg
  }

  const splitMsg = (message: any): any => {
    const keys = Object.keys(message)
    const steps = keys.length / 3
    const leftKeys = keys.slice(0, steps)
    const middleKeys = keys.slice(steps, 2 * steps)
    const rightKeys = keys.slice(2 * steps)
    const leftMsg = buildMsgByKeys(leftKeys, message)
    const middleMsg = buildMsgByKeys(middleKeys, message)
    const rightMsg = buildMsgByKeys(rightKeys, message)
    return [leftMsg, middleMsg, rightMsg]
  }

  const isEmptyObject = (obj: any): boolean => !Object.keys(obj).length

  useEffect(() => {
    const [leftMsg, middleMsg, rightMsg] = splitMsg(message.message)
    if (isEmptyObject(leftMsg)) {
      if (isEmptyObject(middleMsg)) { // if this json message has only 1 key
        createEditor(rightMsg, leftEditorRef)
      } else { // if this json message has only 2 keys
        createEditor(middleMsg, leftEditorRef)
        createEditor(rightMsg, middleEditorRef)
      }
    } else { // if this json message has more than 2 keys
      createEditor(leftMsg, leftEditorRef)
      createEditor(middleMsg, middleEditorRef)
      createEditor(rightMsg, rightEditorRef)
    }
  }, [message])

  const createEditor = (message: any, editorRef: React.RefObject<HTMLDivElement>): void => {
    if (!editorRef.current) return
    const editor = new JSONEditor(editorRef.current, {
      schema: {},
      theme: 'bootstrap4',
      disable_collapse: true,
      disable_edit_json: true,
      disable_properties: true,
      disable_array_delete_all_rows: true,
      disable_array_add: true,
      disable_array_delete: true,
      disable_array_reorder: true,
      array_controls_top: true
    })
    const rootElm = editorRef.current.childNodes[0]
    const childNodes = rootElm.childNodes
    rootElm.removeChild(childNodes[1])
    rootElm.removeChild(childNodes[0])
    editor.setValue(message)
    editor.disable()
  }

  return (
    <div className={
      `${styles['wrap-detail']} ${!collapsed ? styles['wrap-detail-opened'] : ''}`
    }>
      {!collapsed && <>
        <div className={styles['group-editor']}>
          <div className={styles['form-group']} ref={leftEditorRef} />
          <div className={styles['form-group']} ref={middleEditorRef} />
          <div className={styles['form-group']} ref={rightEditorRef} />
        </div>
        {
          privateMessage &&
          playerForce === UMPIRE_FORCE && (
            <div className={styles['wrap-private']}>
              <DetailLabel label={<PrivateBadge />} />
              <span className={styles.private}>
                <Paragraph content={privateMessage} />
              </span>
            </div>
          )
        }
      </>}
    </div >
  )
}

export default ChannelMessageDetail
