import { UNSENT_SELECT_BY_DEFAULT_VALUE } from 'src/config'
import { CoreMessage, TemplateBody } from 'src/custom-types'
import { usePrevious } from 'src/Helpers'
import React, { MouseEvent, useEffect, useMemo, useRef, useState } from 'react'
import Collapsible from 'react-collapsible'
import DropdownInput from '../dropdown-input'
import MessageCreator from '../message-creator'
import PropTypes from './types/props'

const NewMessage: React.FC<PropTypes> = ({
  templates,
  channel,
  privateMessage,
  orderableChannel,
  confirmCancel,
  onCancel,
  currentTurn,
  gameDate,
  selectedForce,
  selectedRole,
  selectedRoleName,
  postBack,
  channelId,
  saveCachedNewMessageValue,
  getCachedNewMessagevalue,
  clearCachedNewMessage,
  draftMessage,
  title,
  hideTemplateSelector,
  modifyForEdit,
  modifyForSave
}) => {
  const prevTemplates: TemplateBody = usePrevious(templates)
  const [selectedSchema, setSelectedSchema] = useState<Record<string, any> | null | string>(null)
  const [selectedType, setSelectedType] = useState<string>('')
  const [updateNewMessage, setUpdateNewMessage] = useState(false)

  const tab = useRef<any>(null)
  const schemaTitle = useMemo(() => getCachedNewMessagevalue && getCachedNewMessagevalue(UNSENT_SELECT_BY_DEFAULT_VALUE), [channelId, updateNewMessage])

  const setTemplate = (templateData: TemplateBody): void => {
    saveCachedNewMessageValue && saveCachedNewMessageValue(templateData.title, UNSENT_SELECT_BY_DEFAULT_VALUE)
    setSelectedType(templateData.title)
    setSelectedSchema(templateData.details)
  }

  if (!templates) {
    console.warn('WARNING - <NewMessage> does not have templates')
  }
  const allTemplates: TemplateBody[] = (templates && templates.length > 0) ? templates : []

  const classes = `message-editor new-message-creator wrap ${orderableChannel ? 'new-message-orderable' : ''}`

  useEffect(() => {
    const allTemplates: TemplateBody[] = (templates && templates.length > 0) ? templates : []
    const checkTitle = selectedSchema && templates[0]?.title !== selectedSchema.title
  
    const updateSchema = (schema: any) => {
      setSelectedSchema(schema.details)
      setSelectedType(schema.title)
    }
  
    const handleTemplateSelection = () => {
      if (schemaTitle) {
        const findColumn = templates.find(find => find.title === schemaTitle)
        if (findColumn) {
          updateSchema(findColumn)
        } else {
          setUpdateNewMessage(false)
          updateSchema(templates[0])
        }
      } else if (draftMessage) {
        const msg = draftMessage as CoreMessage
        const schemaId = msg.templateId
        const template = templates.find((tmpl: TemplateBody) => tmpl._id === schemaId)
        if (template) {
          updateSchema(template)
        } else {
          console.warn('failed to find schema', schemaId, templates)
        }
      } else {
        setUpdateNewMessage(false)
        updateSchema(templates[0])
      }
    }
  
    if (!prevTemplates || updateNewMessage || draftMessage || checkTitle || templates) {
      if (allTemplates.length) {
        handleTemplateSelection()
      } else {
        console.warn('Zero templates received for channel ', channel)
      }
    }
  }, [templates, prevTemplates, schemaTitle, updateNewMessage, draftMessage])

  const onMessageSend = (event: MouseEvent<HTMLButtonElement>): void => {
    setTimeout(() => {
      if (tab && tab.current) {
        tab.current.handleTriggerClick(event)
      }
    }, 0)
  }

  const onCancelLocal = (e: MouseEvent<HTMLButtonElement>): void => {
    setUpdateNewMessage(true)
    onCancel && onCancel()
    setTimeout(() => {
      if (tab && tab.current) {
        tab.current.handleTriggerClick(e)
      }
    }, 0)
  }

  const onClossCollapsible = (): void => {
    clearCachedNewMessage && clearCachedNewMessage([UNSENT_SELECT_BY_DEFAULT_VALUE])
  }

  const onOpencollapsible = (): void => {
    saveCachedNewMessageValue && saveCachedNewMessageValue(selectedType, UNSENT_SELECT_BY_DEFAULT_VALUE)
  }
  
  return (
    <div className={classes} style={{ zIndex: 10 }}>
      <Collapsible
        open={!!schemaTitle || !!draftMessage}
        onOpening={onOpencollapsible}
        onClose={onClossCollapsible}
        trigger={title || 'New Message'}
        transitionTime={200}
        easing={'ease-in-out'}
        ref={tab}
      >
        {
          !hideTemplateSelector && allTemplates.length > 1 && (
            <DropdownInput
              updateStore={setTemplate}
              selectOptions={allTemplates}
              placeholder='Select message'
              className='message-input'
              data={selectedType}
            />
          )
        }
        <MessageCreator
          clearCachedCreatorMessage={clearCachedNewMessage}
          messageOption={selectedType}
          schema={selectedSchema}
          channel={channel}
          confirmCancel={!!confirmCancel}
          privateMessage={privateMessage}
          onMessageSend={onMessageSend}
          onCancel={onCancelLocal}
          currentTurn={currentTurn}
          gameDate={gameDate}
          selectedForce={selectedForce}
          selectedRole={selectedRole}
          selectedRoleName={selectedRoleName}
          postBack={postBack}
          draftMessage={draftMessage}
          modifyForEdit={modifyForEdit}
          modifyForSave={modifyForSave}
        />
      </Collapsible>
    </div>
  )
}
export default NewMessage
