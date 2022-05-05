import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CREATE_MESSAGE_ROUTE,
  EDIT_MESSAGE_ROUTE,
  MESSAGE_CREATOR_BASE_ROUTE,
  MESSAGE_LIBRARY_ROUTE
} from '../consts'
import { SearchList, Button, ButtonList } from '@serge/components'
import MessagePreview from '../Components/MessagePreview'
import SidebarAdmin from '../Components/SidebarAdmin'
import {
  getAllMessages,
  duplicateMessage as duplicateMessageAction,
  getSingleMessage
} from '../ActionsAndReducers/dbMessages/messages_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import { setSelectedSchema } from '../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators'
import { formatShortDate } from '@serge/helpers'
import '@serge/themes/App.scss'

const MessageLibrary = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages)

  const setView = route => {
    dispatch(setCurrentViewFromURI(route))
  }

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

  const activeRow = item => {
    return item._id === messages.messagePreviewId
  }

  const rowLabel = item => {
    const title = item.details.title ? item.details.title : '[Title missing]'
    const date = formatShortDate(item.lastUpdated)
    return `${title} - ${date}`
  }

  const rowFilter = (item, query) => {
    const { details } = item
    return (
      details.title === '' ||
      typeof details.title === 'undefined') ||
      (details.title || '').toLowerCase().includes(query.toLowerCase()
      )
  }

  const createSearchListSection = () => {
    return [
      <Button
        onClick={() => setView(`${MESSAGE_CREATOR_BASE_ROUTE}${CREATE_MESSAGE_ROUTE}`)}
        color='secondary'
        icon='add'
        key='templates'
        fullWidth
      >
        Create new message
      </Button>,
      <SearchList
        key='searchlist'
        listData={messages.messages}
        setSelected={setSelectedSchemaId}
        placeholder='Select template'
        activeRow={activeRow}
        rowLabel={rowLabel}
        rowFilter={rowFilter}
      />
    ]
  }

  const createMessagesActions = () => {
    const actions = [{
      onClick: () => setView(`${MESSAGE_CREATOR_BASE_ROUTE}${EDIT_MESSAGE_ROUTE}`),
      color: 'secondary',
      fullWidth: true,
      icon: 'edit',
      children: 'Edit'
    }, {
      onClick: duplicateMessage,
      color: 'secondary',
      fullWidth: true,
      icon: 'copy',
      children: 'Duplicate'
    }, {
      onClick: deleteMessage,
      color: 'secondary',
      fullWidth: true,
      icon: 'delete',
      children: 'Delete'
    }]
    return messages.messagePreviewId.length > 0
      ? <ButtonList buttons={actions} />
      : null
  }

  useEffect(() => {
    dispatch(getAllMessages())
    dispatch(setSelectedSchema(''))
  }, [])

  return (
    <div className='view-wrapper' id='umpire'>
      <SidebarAdmin activeTab={MESSAGE_LIBRARY_ROUTE} />
      <div className='flex-content flex-content--big flex-content--last contain-message-library'>
        <h1>Message Library</h1>
        <div className='flex-content-wrapper'>
          <div id='selection' className='flex-content'>
            {createSearchListSection()}
          </div>
          <div id='preview' className='flex-content flex-content--big'>
            <p className='heading--sml'>Preview</p>
            <div className='message-preview'>
              <MessagePreview detail={messages.messagePreview.details}/>
            </div>
          </div>
          <div id='function' className='flex-content flex-content--sml'>
            <p className='heading--sml'>Actions</p>
            <div className='template-actions'>
              {createMessagesActions()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageLibrary
