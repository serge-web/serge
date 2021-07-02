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
  const jsonEditorRef = createRef<HTMLDivElement>()
  const privateMessage = message.details.privateMessage
  const PrivateBadge = (): React.ReactElement => (
    <span>
      <span className={styles['icon-private']}>
        <FontAwesomeIcon size='1x' icon={faUserSecret} />
      </span>
      Private:
    </span>
  )

  useEffect(() => {
    createEditor(message.message)
  }, [message])

  const createEditor = (message: any): void => {
    if (!jsonEditorRef.current) return
    const editor = new JSONEditor(jsonEditorRef.current, {
      schema: {},
      theme: 'bootstrap4',
      disable_collapse: true,
      disable_edit_json: true,
      disable_properties: true
    })
    const rootElm = jsonEditorRef.current.childNodes[0]
    const childNodes = rootElm.childNodes
    rootElm.removeChild(childNodes[0])
    rootElm.removeChild(childNodes[0])
    editor.setValue(message)
    editor.disable()
  }

  return (
    <div className={
      `${styles['wrap-detail']} ${!collapsed ? styles['wrap-detail-opened'] : ''}`
    }>
      {!collapsed && <>
        <div className={styles['form-group']} ref={jsonEditorRef} />
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
