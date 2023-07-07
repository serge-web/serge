import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Confirm } from '@serge/components'
import {
  CHANNEL_COLLAB,
  CollaborativeMessageStates,
  InitialStates,
  UNSENT_SELECT_BY_DEFAULT_VALUE
} from '@serge/config'
import {
  ChannelCollab,
  MessageDetails
} from 'src/custom-types'
import React, { createRef, MouseEvent, useEffect, useRef, useState } from 'react'
import JsonEditor from '../../molecules/json-editor'

import PropTypes from './types/props'

const MessageCreator: React.FC<PropTypes> = ({
  schema,
  privateMessage,
  onMessageSend,
  onCancel,
  confirmCancel,
  selectedForce,
  selectedRole,
  selectedRoleName,
  currentTurn,
  channel,
  gameDate,
  postBack,
  customiseTemplate,
  messageOption,
  clearCachedCreatorMessage,
  draftMessage,
  modifyForEdit,
  modifyForSave,
  editCallback
}) => {
  const privateMessageRef = createRef<HTMLTextAreaElement>()
  const [formMessage, setFormMessage] = useState<any>()
  const [clearForm, setClearForm] = useState(false)
  const [selectedSchema, setSelectedSchema] = useState<any>(schema)
  const [privateValue, setPrivateValue] = useState<string | undefined>('')
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false)
  const [messageContent, setMessageContent] = useState<Record<string, unknown> | undefined>(undefined)
  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }

  const messageBeingEdited = useRef<Record<string, any> | string>('')

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.persist()
    const details: MessageDetails = {
      channel: channel.uniqid,
      from: {
        force: selectedForce.name,
        forceId: selectedForce.uniqid,
        forceColor: selectedForce.color,
        roleName: selectedRoleName,
        roleId: selectedRole,
        iconURL: selectedForce.iconURL || selectedForce.icon || ''
      },
      messageType: selectedSchema.title,
      timestamp: new Date().toISOString(),
      turnNumber: currentTurn
    }

    // special handling if this is a collab-channel
    if (channel.channelType === CHANNEL_COLLAB) {
      // populate the metadata
      const channelCollab = channel as ChannelCollab

      // ok, brand new message
      const initial =
        channelCollab.initialState === InitialStates.PENDING_REVIEW
          ? CollaborativeMessageStates.PendingReview
          : CollaborativeMessageStates.Unallocated
      details.collaboration = {
        status: initial,
        lastUpdated: details.timestamp
      }
    }

    if (privateMessage && privateMessageRef.current) {
      details.privateMessage = privateMessageRef.current.value
      privateMessageRef.current.value = ''
    }

    if (formMessage.content === '') return

    // send the data
    setPrivateValue('')
    setClearForm(!clearForm)
    postBack && postBack(details, formMessage)
    clearCachedCreatorMessage && clearCachedCreatorMessage([messageOption])
    onMessageSend && onMessageSend(e)
  }

  useEffect(() => {
    if (schema && (!selectedSchema || selectedSchema.title !== schema.title)) {
      setSelectedSchema(schema)
    }
  }, [schema, messageOption])

  const openConfirmPopup = (event: MouseEvent<HTMLButtonElement>): void => {
    if (confirmCancel) {
      setConfirmIsOpen(true)
    } else {
      onCancel && onCancel(event)
    }
  }

  const onPopupCancel = (): void => {
    setConfirmIsOpen(false)
  }

  const onPopupConfirm = (event: MouseEvent<HTMLButtonElement>): void => {
    setConfirmIsOpen(false)
    setPrivateValue('')
    clearCachedCreatorMessage && clearCachedCreatorMessage([messageOption, UNSENT_SELECT_BY_DEFAULT_VALUE])
    setClearForm(!clearForm)
    onCancel && onCancel(event)
  }

  const onChangePrivate = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setPrivateValue(e.target.value)
  }

  const responseHandler = (val: { [property: string]: any }): void => {
    setFormMessage(val)
    messageBeingEdited.current = val
  }

  useEffect(() => {
    if (draftMessage) {
      const anyDraft = draftMessage as any
      if (anyDraft.message) {
        // store cached content, if we have any
        setMessageContent(anyDraft.message)
      } else {
        setMessageContent(undefined)
      }
    }
  }, [draftMessage])

  return (
    <>
      <Confirm
        isOpen={confirmIsOpen}
        message="Are you sure you wish to cancel this message?"
        onCancel={onPopupCancel}
        onConfirm={onPopupConfirm}
      />
      <JsonEditor
        template={{
          details: selectedSchema,
          _id: channel.uniqid
        }}
        customiseTemplate={customiseTemplate}
        messageId={messageOption}
        formClassName={'form-group message-creator'}
        title={messageOption}
        storeNewValue={responseHandler}
        disabled={false}
        gameDate={gameDate}
        clearForm={clearForm}
        messageContent={messageContent}
        modifyForEdit={modifyForEdit}
        modifyForSave={modifyForSave}
        editCallback={editCallback}
      />
      {privateMessage && (
        <div className="flex-content form-group">
          <label
            htmlFor=""
            className="material-label"
            id="private-message-input-label"
          >
            <FontAwesomeIcon size="2x" icon={faUserSecret} />
            Private message
          </label>
          <textarea
            onChange={onChangePrivate}
            id="private-message-input"
            className="form-control"
            ref={privateMessageRef}
            value={privateValue}
          />
        </div>
      )}
      <div className="form-group">
        <button
          name="cancel"
          className="btn btn-action btn-action--form btn-action--cancel"
          onClick={openConfirmPopup}
        >
          <span>Cancel</span>
        </button>
        <button
          name="send"
          className="btn btn-action btn-action--form btn-action--send-message"
          onClick={sendMessage}
        >
          <span>Send Message</span>
        </button>
      </div>
    </>
  )
}

export default MessageCreator
