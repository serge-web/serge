import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import Collapsible from 'react-collapsible'
import MessageCreator from '../message-creator'
import DropdownInput from '../dropdown-input'
import { TemplateBody } from '@serge/custom-types'
import { usePrevious } from '@serge/helpers'
import PropTypes from './types/props'

const NewMessage2 = ({
  role,
  templates,
  curChannel,
  privateMessage,
  orderableChannel,
  confirmCancel,
  activityTimeChanel,
  channels,
  currentTurn,
  currentWargame,
  gameDate,
  saveMessage,
  saveNewActivityTimeMessage,
  selectedForce,
  selectedRole,
  selectedRoleName,
  dispatch
}: PropTypes) => {
  const prevTemplates = usePrevious(templates)
  const [selectedSchema, setSelectedSchema] = useState<Object | null>(null)
  const tab = useRef<any>(null)

  const mapTemplateToDropdown = (item: TemplateBody) => ({
    value: JSON.stringify(item.details),
    option: item.title
  })
  const setTemplate = (value: string) => {
    setSelectedSchema(JSON.parse(value))
  }

  const allTemplates = (templates.length && templates[0] && templates.map(mapTemplateToDropdown)) || []

  const classes = `message-editor new-message-creator wrap ${orderableChannel ? 'new-message-orderable' : ''}`

  useEffect(() => {
    setSelectedSchema(null)
  }, [curChannel])

  useEffect(() => {
    if (!prevTemplates) {
      if (templates.length) {
        setSelectedSchema(templates[0].details)
      } else {
        console.warn('Zero templates received for channel ', curChannel)
      }
    }
  }, [templates, prevTemplates])

  const onMessageSend = (event: MouseEvent<HTMLButtonElement>) => {
    activityTimeChanel(role, 'Create new message')
    setTimeout(() => {
      tab?.current?.handleTriggerClick(event)
    }, 0)
  }

  const onCancel = (e: MouseEvent<HTMLButtonElement>) => {
    setTimeout(() => {
      tab?.current?.handleTriggerClick(e)
    }, 0)
  }
  console.log('new message', privateMessage, confirmCancel, orderableChannel)

  return (
    <div className={classes} style={{ zIndex: 1 }}>
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
              data={JSON.stringify(selectedSchema)}
            />
          )
        }
        <MessageCreator
          schema={selectedSchema}
          curChannel={curChannel}
          confirmCancel={!!confirmCancel}
          privateMessage={privateMessage}
          onMessageSend={onMessageSend}
          onCancel={onCancel}
          channels={channels}
          currentTurn={currentTurn}
          currentWargame={currentWargame}
          gameDate={gameDate}
          saveMessage={saveMessage}
          saveNewActivityTimeMessage={saveNewActivityTimeMessage}
          selectedForce={selectedForce}
          selectedRole={selectedRole}
          selectedRoleName={selectedRoleName}
          dispatch={dispatch}
        />
      </Collapsible>
    </div>
  )
}
export default NewMessage2
