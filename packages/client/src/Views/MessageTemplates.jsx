import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faClone, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import {
  CREATE_TEMPLATE_ROUTE,
  EDIT_TEMPLATE_ROUTE,
  MESSAGE_CREATOR_BASE_ROUTE,
  MESSAGE_TEMPLATE_ROUTE
} from '../consts'
import { SearchList } from '@serge/components'
import Link from '../Components/Link'
import SidebarAdmin from '../Components/SidebarAdmin'
import JsonCreator from '../Components/JsonCreator'
import { getAllMessageTypes, duplicateMessageType } from '../ActionsAndReducers/dbMessageTypes/messageTypes_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { setSelectedSchema } from '../ActionsAndReducers/UmpireMenu/umpireMenu_ActionCreators'
import '@serge/themes/App.scss'

const MessageTemplates = () => {
  const dispatch = useDispatch()
  const messageTypes = useSelector(state => state.messageTypes)
  const umpireMenu = useSelector(state => state.umpireMenu)

  const duplicateTemplate = () => {
    dispatch(duplicateMessageType(umpireMenu.selectedSchemaID))
  }

  const deleteTemplate = () => {
    dispatch(modalAction.open('delete'))
  }

  const setSelectedSchemaId = (item) => {
    dispatch(setSelectedSchema(item._id))
  }

  const createSearchListSection = () => {
    return [
      <Link
        href={`${MESSAGE_CREATOR_BASE_ROUTE}${CREATE_TEMPLATE_ROUTE}`}
        key="templates" class="link">
        <FontAwesomeIcon icon={faPlus}/>Create new template
      </Link>,
      <SearchList
        key="searchlist"
        listData={messageTypes.messages}
        setSelected={setSelectedSchemaId}
        placeholder="Select template"
      />
    ]
  }

  const createTemplatesActions = () => {
    return umpireMenu.selectedSchemaID.length > 0
      ? <>
        <Link class="link link--secondary" href={`${MESSAGE_CREATOR_BASE_ROUTE}${EDIT_TEMPLATE_ROUTE}`}>
          <FontAwesomeIcon icon={faPencilAlt} />Edit
        </Link>
        <Link class="link link--secondary" href="" onClickHandler={duplicateTemplate}>
          <FontAwesomeIcon icon={faClone} />Duplicate
        </Link>
        <Link class="link link--secondary" href="" onClickHandler={deleteTemplate}>
          <FontAwesomeIcon icon={faTrash} />Delete
        </Link>
      </>
      : null
  }

  useEffect(() => {
    dispatch(getAllMessageTypes())
    dispatch(setSelectedSchema(''))
  }, [])

  return (
    <div className="view-wrapper" id="umpire">
      <SidebarAdmin activeTab={MESSAGE_TEMPLATE_ROUTE}/>
      <div className="flex-content flex-content--big flex-content--last contain-message-templates">
        <h1>Message Templates</h1>
        <div className="flex-content-wrapper">
          <div id="selection" className="flex-content">
            {createSearchListSection()}
          </div>
          <div id="preview" className="flex-content flex-content--big">
            <p className="heading--sml">Preview</p>
            <JsonCreator
              id="preview"
              disabled={true}
              previewForm={true}
            />
          </div>
          <div id="function" className="flex-content flex-content--sml">
            <p className="heading--sml">Actions</p>
            {createTemplatesActions()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageTemplates
