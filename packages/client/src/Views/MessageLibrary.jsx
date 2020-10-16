import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faClone, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import {
  CREATE_MESSAGE_ROUTE,
  EDIT_MESSAGE_ROUTE,
  MESSAGE_CREATOR_BASE_ROUTE,
  MESSAGE_LIBRARY_ROUTE
} from '../consts'
import { SearchList } from '@serge/components'
import Link from '../Components/Link'
import MessagePreview from '../Components/MessagePreview'
import SidebarAdmin from '../Components/SidebarAdmin'
import {
  getAllMessages,
  duplicateMessage as duplicateMessageAction,
  getSingleMessage
} from '../ActionsAndReducers/dbMessages/messages_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { setSelectedSchema } from '../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators'
import '@serge/themes/App.scss'

const MessageLibrary = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages)

  const setSelectedSchemaId = (item) => {
    dispatch(setSelectedSchema(item.schema._id))
    dispatch(getSingleMessage(item._id))
  }

  const duplicateMessage = () => {
    dispatch(duplicateMessageAction(messages.messagePreviewId))
  }

  const deleteMessage = () => {
    dispatch(modalAction.open('delete'))
  }

  const createSearchListSection = () => {
    return [
      <Link
        href={`${MESSAGE_CREATOR_BASE_ROUTE}${CREATE_MESSAGE_ROUTE}`}
        key="messages"
        class="link"
      >
        <FontAwesomeIcon icon={faPlus} />Create new Message
      </Link>,
      <SearchList
        key="searchlist"
        listData={messages.messages}
        selected={messages.messagePreviewId}
        setSelected={setSelectedSchemaId}
        placeholder="Select template"
      />
    ]
  }

  const createMessagesActions = () => {
    return messages.messagePreviewId.length > 0
      ? (
        <>
          <Link class="link link--secondary" href={`${MESSAGE_CREATOR_BASE_ROUTE}${EDIT_MESSAGE_ROUTE}`}>
            <FontAwesomeIcon icon={faPencilAlt} />Edit
          </Link>
          <Link class="link link--secondary" href="" onClickHandler={duplicateMessage}>
            <FontAwesomeIcon icon={faClone} />Duplicate
          </Link>
          <Link class="link link--secondary" href="" onClickHandler={deleteMessage}>
            <FontAwesomeIcon icon={faTrash} />Delete
          </Link>
        </>
      )
      : null
  }

  useEffect(() => {
    dispatch(getAllMessages())
    dispatch(setSelectedSchema(''))
  }, [])

  return (
    <div className="view-wrapper" id="umpire">
      <SidebarAdmin activeTab={MESSAGE_LIBRARY_ROUTE} />
      <div className="flex-content flex-content--big flex-content--last contain-message-library">
        <h1>Message Library</h1>
        <div className="flex-content-wrapper">
          <div id="selection" className="flex-content">
            {createSearchListSection()}
          </div>
          <div id="preview" className="flex-content flex-content--big">
            <p className="heading--sml">Preview</p>
            <div className="message-preview">
              <MessagePreview detail={messages.messagePreview.details}/>
            </div>
          </div>
          <div id="function" className="flex-content flex-content--sml">
            <p className="heading--sml">Actions</p>
            {createMessagesActions()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageLibrary
