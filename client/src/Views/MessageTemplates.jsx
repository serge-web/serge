import { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CREATE_TEMPLATE_ROUTE,
  EDIT_TEMPLATE_ROUTE,
  MESSAGE_CREATOR_BASE_ROUTE,
  MESSAGE_TEMPLATE_ROUTE
} from 'src/config'
import SearchList from 'src/Components/local/molecules/search-list'
import Button from 'src/Components/local/atoms/button'
import ButtonList from 'src/Components/local/molecules/button-list'
import JsonEditor from 'src/Components/local/molecules/json-editor'
import SidebarAdmin from '../Components/SidebarAdmin'
import { getAllMessageTypes, duplicateMessageType } from '../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { setSelectedSchema } from '../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import { createMessage } from '../ActionsAndReducers/dbMessages/messages_ActionCreators'
import { formatShortDate } from 'src/Helpers'
import '../themes/App.scss'

const MessageTemplates = () => {
  const dispatch = useDispatch()
  const { messageTypes, umpireMenu, gameDate } = useSelector(state => state)
  const [jsonMessage, setJsonMessage] = useState([])

  const schema = useMemo(() => {
    const filter = messageTypes && messageTypes.messages.find((mes) => mes._id === umpireMenu.selectedSchemaID)
    if (filter) return filter
    return []
  }, [umpireMenu.selectedSchemaID])
  
  const saveMessage = () => {
    if (!umpireMenu.selectedSchemaID) return null
    dispatch(createMessage(jsonMessage, { ...schema, _id: umpireMenu.selectedSchemaID }))
  }

  const setView = route => {
    dispatch(setCurrentViewFromURI(route))
  }

  const duplicateTemplate = () => {
    dispatch(duplicateMessageType(umpireMenu.selectedSchemaID))
  }

  const deleteTemplate = () => {
    dispatch(modalAction.open('delete'))
  }

  const setSelectedSchemaId = (item) => {
    dispatch(setSelectedSchema(item._id))
  }

  const activeRow = item => {
    return item._id === umpireMenu.selectedSchemaID
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
        onClick={() => setView(`${MESSAGE_CREATOR_BASE_ROUTE}${CREATE_TEMPLATE_ROUTE}`)}
        color='secondary'
        icon='add'
        key='templates'
        fullWidth
      >
        Create new template
      </Button>,
      <SearchList
        key='searchlist'
        listData={messageTypes.messages}
        setSelected={setSelectedSchemaId}
        placeholder='Select template'
        activeRow={activeRow}
        rowLabel={rowLabel}
        rowFilter={rowFilter}
      />
    ]
  }

  const createTemplatesActions = () => {
    const actions = [{
      onClick: () => setView(`${MESSAGE_CREATOR_BASE_ROUTE}${EDIT_TEMPLATE_ROUTE}`),
      color: 'secondary',
      fullWidth: true,
      icon: 'edit',
      children: 'Edit'
    }, {
      onClick: duplicateTemplate,
      color: 'secondary',
      fullWidth: true,
      icon: 'copy',
      children: 'Duplicate'
    }, {
      onClick: deleteTemplate,
      color: 'secondary',
      fullWidth: true,
      icon: 'delete',
      children: 'Delete'
    }]
    return umpireMenu.selectedSchemaID.length > 0
      ? <ButtonList buttons={actions} />
      : null
  }

  useEffect(() => {
    dispatch(getAllMessageTypes())
    dispatch(setSelectedSchema(''))
  }, [])

  const responseHandler = (val) => {
    setJsonMessage(val)
  }
  
  return (
    <div className='view-wrapper' id='umpire'>
      <SidebarAdmin activeTab={MESSAGE_TEMPLATE_ROUTE}/>
      <div className='flex-content flex-content--big flex-content--last contain-message-templates'>
        <h1>Message Templates</h1>
        <div className='flex-content-wrapper'>
          <div id='selection' className='flex-content'>
            {createSearchListSection()}
          </div>
          <div id='preview' className='flex-content flex-content--big'>
            <p className='heading--sml'>Preview</p>
            <JsonEditor
              id='preview'
              formId='preview-editor'
              viewSaveButton={true}
              saveMessage={saveMessage}
              messageId={schema._id}
              template={schema}
              storeNewValue={responseHandler}
              disabled={false}
              gameDate={gameDate}
            />
          </div>
          <div id='function' className='flex-content flex-content--sml'>
            <p className='heading--sml'>Actions</p>
            <div className='template-actions'>
              {createTemplatesActions()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageTemplates
