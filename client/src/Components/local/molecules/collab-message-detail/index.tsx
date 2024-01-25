/* eslint-disable complexity */
import React, { useEffect, useState } from 'react'
/* Import Types */
import Props, { DialogModalStatus } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import Textarea from '../../atoms/textarea'
import Button from '../../atoms/button'
import DialogModal from '../../atoms/dialog'
import SplitButton from '../../atoms/split-button'
import FeedbackBlock from './helpers/feed-back-blcok'
import { CollaborativeMessageStates, CollaborativePermission, expiredStorage, CUSTOM_MESSAGE } from 'src/config'
import { ChannelCollab, ChannelTypes, ChannelUI, ForceRole, MessageCustom } from 'src/custom-types'
import { Action, actionsFor, ActionTable, ASSIGN_MESSAGE, createActionTable } from './helpers/actions-for'
import { ClaimFunc, CLAIM_HANDLER, CoreFunc, CORE_HANDLER, SubmitFunc, SUBMIT_HANDLER } from './helpers/handlers'
import { labelFactory, getCandidates, roleFromName, getOpenModalStatus, injectFeedback, ModalHandlerFn, getTemplateId } from './helpers/collaboration-utils'
import MessageEditorSection from './helpers/message-editor-section'

const UpperActions = ({ actionButtons }: {actionButtons: React.ReactNode[]}) => (
  <div key='upper' className={styles.actions}>
    {actionButtons}
  </div>
)

const LowerActions = ({ actionButtons }: {actionButtons: React.ReactNode[]}) => (
  <div key='lower' className={styles.actions}>
    {actionButtons}
  </div>
)

/* Render component */
export const CollabMessageDetail: React.FC<Props> = ({
  templates, message, state, onChange, isObserver, isUmpire,
  role, channelColb, permission, assignees = [], collapseMe, gameDate, onRead, isReaded
}) => {
  const [answer, setAnswer] = useState<{ [property: string]: any }>((message.details.collaboration && message.details.collaboration.response) || {})
  const [newMsg, setNewMsg] = useState<{ [property: string]: any }>({})
  const [candidates, setCandidates] = useState<Array<string>>([])
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const [actionTable, setActionTable] = useState<ActionTable | undefined>(undefined)

  const dialogOpenStatusKey = `${message._id}-${role.forceId}-${role.roleId}`
  const dialogModalStatus = getOpenModalStatus(dialogOpenStatusKey)

  const [openDialog, setOpenDialog] = useState<boolean>(dialogModalStatus.open || false)
  const [dialogTitle, setDialogTitle] = useState<string>(dialogModalStatus.title || '')
  const [placeHolder, setPlaceHolder] = useState<string>(dialogModalStatus.placeHolder || '')
  const [content, setModalContent] = useState<string>(dialogModalStatus.content || '')

  const [modalHandler, setModalHandler] = useState<ModalHandlerFn>()

  const [openModalStatus, setOpenModalStatus] = useState<DialogModalStatus | undefined>(undefined)

  const { collaboration } = message.details

  // note: channelColb may be a ChannelUI, rather than ChannelCollab
  const channAsUI = channelColb as unknown as ChannelUI
  const channelGeneric: ChannelTypes | undefined = channAsUI.cData || channelColb
  if (!channelGeneric) {
    console.warn("don't have v3 channel details")
    return (
      <div></div>
    )
  }
  
  const channelCollab = channelGeneric as ChannelCollab

  if (collaboration === undefined) {
    console.warn('not rendering message, collaborative details missing')
    return <></>
  }

  const isResponse = !!channelCollab.responseTemplate
  const canSeeResponse = permission > CollaborativePermission.CannotCollaborate || state === CollaborativeMessageStates.Released || isObserver

  /**
     * create the actions table for this user/channel
     */
  useEffect(() => {
    setActionTable(createActionTable(channelCollab.approveVerbs, channelCollab.requestChangesVerbs, channelCollab.releaseVerbs, isResponse))
  }, [channelCollab])

  /**
     * sort out the candidates for the task
     */
  useEffect(() => {
    setCandidates(getCandidates(assignees))
  }, [assignees])

  useEffect(() => {
    if (onRead && isReaded === false) onRead()
  }, [])

  useEffect(() => {
    if (openModalStatus) {
      const { open, title, content = '', placeHolder } = openModalStatus
      // store to local storage for using in case the site is reload while modal is opening
      const currentModalStatus = getOpenModalStatus(dialogOpenStatusKey)

      currentModalStatus.open = open
      setOpenDialog(open)

      if (title) {
        currentModalStatus.title = title
        setDialogTitle(title)
      }

      if (placeHolder) {
        currentModalStatus.placeHolder = placeHolder
        setPlaceHolder(placeHolder)
      }

      currentModalStatus.content = content
      setModalContent(content)

      expiredStorage.setItem(dialogOpenStatusKey, JSON.stringify(currentModalStatus))
    }
  }, [openModalStatus])

  const newMessageHandler = (val: { [property: string]: any }): void => {
    setNewMsg(val)
  }

  const responseHandler = (val: { [property: string]: any }): void => {
    setAnswer(val)
  }

  const notHappeningHandler = (_val: { [property: string]: any }): void => {
    // ignore
  }

  /** Submit new message, and collapse panel, if necessary
     */
  const handleChange = (msg: MessageCustom, collapse: boolean): void => {
    // collapse message, if necessary
    collapse && collapseMe && collapseMe(msg)
    // fire update
    onChange && onChange(msg, CUSTOM_MESSAGE)
  }

  const onModalValueChange = (content: string): void => {
    setOpenModalStatus({
      open: true,
      content
    })
  }

  const onModalClose = (): void => {
    setOpenDialog(false)
    expiredStorage.removeItem(dialogOpenStatusKey)
  }

  const handleEditingSubmit = (role: ForceRole, verb: string, handler: SubmitFunc): void => {
    // different handling depending upon if it's a response that's being sent
    const updatedPart = isResponse ? answer : newMsg
    const changed = handler(role, verb, message, updatedPart, privateMessage)
    const withFeedback = injectFeedback(changed, verb, '', role)
    handleChange(withFeedback, true)
  }

  const onModalSave = (feedback: string): void => {
    const msgWithFeedback = injectFeedback(message, dialogTitle, feedback, role)

    if (modalHandler) {
      modalHandler(msgWithFeedback)
      // clear the modal handler
      setModalHandler(undefined)
    }
    setOpenDialog(false)
    expiredStorage.removeItem(dialogOpenStatusKey)
  }

  const onPrivateMsgChange = (privateMsg: string): void => {
    setPrivateMessage(privateMsg)
    // the private msg needs to be stored temporarily in the message object to avoid being lost on rerendering
    message.details.privateMessage = privateMsg
  }

  const handleClaim = (selection: string | undefined, assignee: ForceRole | undefined, role: ForceRole, verb: string, handler: ClaimFunc): void => {
    const assigneeVal = selection ? roleFromName(selection, assignees) : assignee as ForceRole
    // get the force role
    // transform message
    const newMsg = handler(assigneeVal, role, verb, message)
    const msgWithFeedback = injectFeedback(newMsg, verb, selection ? ' to ' + selection : '', role)
    // now send it
    handleChange(msgWithFeedback, false)
  }

  const handleVerb = (requiresFeedback: boolean, role: ForceRole, verb: string, handler: CoreFunc): void => {
    if (requiresFeedback) {
      const quickHandler = (messageWithFeedback: MessageCustom): void => {
        if (messageWithFeedback) {
          const newMsg = handler(role, verb, messageWithFeedback)
          // now send it
          handleChange(newMsg, true)
        }
      }
      // note: it took hours to learn about the following use of function in state.
      // the answer came from here: https://medium.com/swlh/how-to-store-a-function-with-the-usestate-hook-in-react-8a88dd4eede1
      setModalHandler(() => quickHandler)
      setOpenModalStatus({
        open: true,
        title: verb,
        placeHolder: `Reason for ${verb}...`
      })
    } else {
      const newMsg = handler(role, verb, message)
      const msgWithFeedback = injectFeedback(newMsg, verb, '', role)
      // now send it
      handleChange(msgWithFeedback, true)
    }
  }

  /** any feedback in the message */
  const feedback = collaboration.feedback
  const haveData = state !== undefined && permission !== undefined

  // special case. If the message is `in-progress`, we only generate actions for `save` or `submit` if this is the owner
  const inProgress = state === CollaborativeMessageStates.InProgress
  const saveOrSubmit = permission >= CollaborativePermission.CanEdit
  const isOwner = role.roleId === collaboration.owner?.roleId
  const privateIsEditable = inProgress && saveOrSubmit && isOwner

  const actions = (actionTable && actionTable[state] && haveData) ? actionsFor(actionTable, state, permission, isOwner) : []

  // reverse the actions, so the lowest permission is on the right
  const reverseActions = actions.reverse()
  const actionButtons = reverseActions.map((action: Action) => {
    const verbs = action.verbs
    return verbs.map((verb: string) => {
      switch (action.handler.handlerType) {
        case SUBMIT_HANDLER: {
          const handler = action.handler.handler as SubmitFunc
          return <Button key={verb} customVariant="form-action" size="small" type="button" onClick={(): void => handleEditingSubmit(role, verb, handler)}>{verb}</Button>
        }
        case CLAIM_HANDLER: {
          const handler = action.handler.handler as ClaimFunc
          if (verb === ASSIGN_MESSAGE) {
            return <SplitButton label={'Assign'} key={verb} options={[...candidates]} onClick={(item: string): void => handleClaim(item, undefined, role, verb, handler)} />
          } else {
            return <Button key={verb} customVariant="form-action" size="small" type="button" onClick={(): void => handleClaim(undefined, role, role, verb, handler)}>{verb}</Button>
          }
        }
        case CORE_HANDLER: {
          const handler = action.handler.handler as CoreFunc
          const requiresFeedback = !!action.feedback
          return <Button key={verb} customVariant="form-action" size="small" type="button" onClick={(): void => handleVerb(requiresFeedback, role, verb, handler)}>{verb}{requiresFeedback && '*'}</Button>
        }
      }
    })
  })

  // sort out the template for the JSON editor
  const templateId = getTemplateId(isResponse, canSeeResponse, channelCollab)
  if (!templateId) {
    return <></>
  }

  return (
    <>
      <div className={styles.main}>
        <DialogModal
          title={dialogTitle}
          value={content}
          open={openDialog}
          onClose={onModalClose}
          onSave={onModalSave}
          onValueChange={onModalValueChange}
          placeholder={placeHolder}
        />
        <>
          <UpperActions actionButtons={actionButtons} />
          <FeedbackBlock
            permission={permission}
            isObserver={isObserver}
            feedback={feedback}
          />
          <MessageEditorSection
            isResponse={isResponse}
            canSeeResponse={canSeeResponse}
            message={message}
            collaboration={collaboration}
            template={templates[templateId]}
            notHappeningHandler={notHappeningHandler}
            responseHandler={responseHandler}
            newMessageHandler={newMessageHandler}
            state={state}
            role={role}
            gameDate={gameDate}
          />
          { // only show private field for umpire force(s)
            (isUmpire || isObserver) &&
              <Textarea 
                id={`private_message_${message._id}`} 
                value={privateMessage} 
                onChange={(nextValue): void => onPrivateMsgChange(nextValue)}
                disabled={!privateIsEditable} 
                theme='dark' 
                label='Private Message' 
                labelFactory={labelFactory} />
          }
          <LowerActions actionButtons={actionButtons} />
        </>
      </div>
    </>
  )
}

export default CollabMessageDetail
