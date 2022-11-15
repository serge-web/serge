import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Confirm } from '@serge/components'
import {
  CHANNEL_COLLAB,
  CollaborativeMessageStates,
  InitialStates,
  UNSENT_CHAT_MESSAGE_TYPE,
  UNSENT_PRIVATE_MESSAGE_TYPE,
  UNSENT_SELECT_BY_DEFAULT_VALUE
} from '@serge/config'
import {
  ChannelCollab,
  MessageDetails
} from '@serge/custom-types'
import React, { createRef, MouseEvent, useEffect, useRef, useState } from 'react'
import JsonEditor from '../../molecules/json-editor'

import flatpickr from 'flatpickr'
import PropTypes from './types/props'
flatpickr('.calendar')

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
  createCachedCreatorMessage,
  getcachedCreatorMessageValue,
  clearCachedCreatorMessage,
  draftMessage,
  modifyForEdit,
  modifyForSave,
  editCallback
}) => {
  const privateMessageRef = createRef<HTMLTextAreaElement>()
  const [formMessage, setFormMessage] = useState<any>()
  const [selectedSchema, setSelectedSchema] = useState<any>(schema)
  const [clearName, setClearName] = useState<string>(messageOption)
  const [privateValue, setPrivateValue] = useState<string | undefined>('')
  const [formValue, setFormValue] = useState<Record<string, any> | undefined>(undefined)
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false)
  const [messageContent, setMessageContent] = useState<Record<string, unknown> | undefined>(undefined)
  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }
  const privatMessageOption = `${messageOption}-${UNSENT_PRIVATE_MESSAGE_TYPE}`
  const mainMessageOption = `${messageOption}-${UNSENT_CHAT_MESSAGE_TYPE}`

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
    setFormValue(undefined)
    postBack && postBack(details, formMessage)
    setClearName(messageOption)
    clearCachedCreatorMessage && clearCachedCreatorMessage([privatMessageOption, messageOption])
    clearCachedCreatorMessage && clearCachedCreatorMessage([mainMessageOption, messageOption])
    onMessageSend && onMessageSend(e)
  }

  useEffect(() => {
    const privateValues: string | undefined = getcachedCreatorMessageValue && getcachedCreatorMessageValue(privatMessageOption)
    setPrivateValue(privateValues)

    const mainAny: any = getcachedCreatorMessageValue && getcachedCreatorMessageValue(mainMessageOption)
    const mainForm = mainAny ? mainAny as Record<string, any> : undefined
    setFormValue(mainForm)

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
    setClearName(messageOption)
    clearCachedCreatorMessage && clearCachedCreatorMessage([mainMessageOption, messageOption, UNSENT_CHAT_MESSAGE_TYPE])
    clearCachedCreatorMessage && clearCachedCreatorMessage([privatMessageOption, messageOption, UNSENT_SELECT_BY_DEFAULT_VALUE])
    onCancel && onCancel(event)
  }

  const onChangePrivate = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setPrivateValue(e.target.value)
    createCachedCreatorMessage && createCachedCreatorMessage(e.target.value, privatMessageOption)
  }

  const responseHandler = (val: { [property: string]: any }): void => {
    console.log('response handler', val)
    setFormMessage(val)
    messageBeingEdited.current = val
    createCachedCreatorMessage && createCachedCreatorMessage(val, mainMessageOption)
  }

  const localEditCallback = (): void => {
    console.log('edit button for', messageBeingEdited.current)
    const current = messageBeingEdited.current
    if (typeof (current) === 'string') {
      console.warn('message edits contains string, not form contents')
    } else {
      const records = current as Record<string, any>
      const ref = records.Reference
      console.log('editing', ref, records.location)
      editCallback && editCallback(ref, records.location)
    }
  }

  useEffect(() => {
    console.log('draft message', draftMessage, formValue)
    if (draftMessage) {
      const anyDraft = draftMessage as any
      if (anyDraft.message) {
        // see if we have any cached content
        if (formValue) {
          setMessageContent(formValue)
        } else {
          setMessageContent(anyDraft.message)
        }
      } else {
        setMessageContent(undefined)
      }
    }
  }, [draftMessage, formValue])

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
        clearCachedName={setClearName}
        customiseTemplate={customiseTemplate}
        messageId={messageOption}
        formClassName={'form-group message-creator'}
        title={messageOption}
        cachedName={clearName}
        storeNewValue={responseHandler}
        disabled={false}
        gameDate={gameDate}
        messageContent={messageContent}
        modifyForEdit={modifyForEdit}
        modifyForSave={modifyForSave}
        editCallback={localEditCallback}
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
