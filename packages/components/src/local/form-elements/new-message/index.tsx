import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import Collapsible from 'react-collapsible'
import MessageCreator from '../message-creator'
import DropdownInput from '../dropdown-input'
import { TemplateBody } from '@serge/custom-types'
import { usePrevious } from '@serge/helpers'
import PropTypes from './types/props'
const NEW_MESSAGE_BY_DEFAULT_TITLE = 'NEW_MESSAGE_TITLE'

const NewMessage: React.FC<PropTypes> = ({
  templates,
  channel,
  privateMessage,
  orderableChannel,
  confirmCancel,
  currentTurn,
  gameDate,
  selectedForce,
  selectedRole,
  selectedRoleName,
  postBack,
  saveCachedNewMessageValue,
  getCachedNewMessagevalue,
  clearCachedNewMessage,
  customiseTemplate
}) => {
  const prevTemplates: TemplateBody = usePrevious(templates)
  const [selectedSchema, setSelectedSchema] = useState<Record<string, any> | null>(null)
  const [selectedType, setSelectedType] = useState<string>('')
  const tab = useRef<any>(null)

  const setTemplate = (templateData: TemplateBody): void => {
    saveCachedNewMessageValue && saveCachedNewMessageValue(templateData.title, NEW_MESSAGE_BY_DEFAULT_TITLE)
    setSelectedType(templateData.title)
    setSelectedSchema(templateData.details)
  }

  const allTemplates: TemplateBody[] = (templates.length && templates[0] && templates) || []

  const classes = `message-editor new-message-creator wrap ${orderableChannel ? 'new-message-orderable' : ''}`

  useEffect(() => {
    if (!prevTemplates) {
      if (templates.length) {
        const schemaTitle = getCachedNewMessagevalue && getCachedNewMessagevalue(NEW_MESSAGE_BY_DEFAULT_TITLE)
        if (schemaTitle) {
          const findColumn = templates.find(find => find.title === schemaTitle)
          setSelectedSchema(findColumn.details)
          setSelectedType(findColumn.title)
        } else {
          setSelectedSchema(templates[0].details)
          setSelectedType(templates[0].title)
        }
      } else {
        console.warn('Zero templates received for channel ', channel)
      }
    }
  }, [templates, prevTemplates])

  const onMessageSend = (event: MouseEvent<HTMLButtonElement>): void => {
    setTimeout(() => {
      if (tab && tab.current) {
        tab.current.handleTriggerClick(event)
      }
    }, 0)
  }

  const onCancel = (e: MouseEvent<HTMLButtonElement>): void => {
    setTimeout(() => {
      if (tab && tab.current) {
        tab.current.handleTriggerClick(e)
      }
    }, 0)
  }

  return (
    <div className={classes} style={{ zIndex: 10 }}>
      <Collapsible
        trigger={'New Message'}
        transitionTime={200}
        easing={'ease-in-out'}
        ref={tab}
      >
        {
          allTemplates.length > 1 && (
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
          getcachedCreatorMessageValue={getCachedNewMessagevalue}
          clearCachedCreatorMessage={clearCachedNewMessage}
          createCachedCreatorMessage={saveCachedNewMessageValue}
          messageOption={selectedType}
          schema={selectedSchema}
          channel={channel}
          confirmCancel={!!confirmCancel}
          privateMessage={privateMessage}
          onMessageSend={onMessageSend}
          onCancel={onCancel}
          currentTurn={currentTurn}
          gameDate={gameDate}
          selectedForce={selectedForce}
          selectedRole={selectedRole}
          selectedRoleName={selectedRoleName}
          postBack={postBack}
          customiseTemplate={customiseTemplate}

        />
      </Collapsible>
    </div>
  )
}
export default NewMessage
