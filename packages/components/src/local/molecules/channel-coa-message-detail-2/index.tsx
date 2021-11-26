import React, { useEffect, useState } from 'react'
import moment from 'moment'
/* Import Types */
import Props, { DialogModalStatus } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import Textarea from '../../atoms/textarea'
import Button from '../../atoms/button'
import DialogModal from '../../atoms/dialog'
import SplitButton from '../../atoms/split-button'

/* Import Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { CollaborativeMessageStates2, CollaborativePermission, expiredStorage } from '@serge/config'
import JsonEditor from '../json-editor'
import { FeedbackItem, ForceRole, MessageCustom } from '@serge/custom-types'
import Collapsible from '../../helper-elements/collapsible'
import { Action, actionsFor, ActionTable, createActionTable } from './helpers/actions-for'

const labelFactory = (id: string, label: string): React.ReactNode => (
  <label htmlFor={id}><FontAwesomeIcon size='1x' icon={faUserSecret} /> {label}</label>
)

/** for the specified channel, provide a list of people who
 * can have documents assigned to them
 */
const getCandidates = (assignees: ForceRole[]): string[] => {
  return assignees.map((assignee: ForceRole) =>
    `${assignee.forceName} - ${assignee.roleName}`
  )
}

// /** from the provided force & role, produce a ForceRole object */
// const roleFromName = (force: string, rolename: string, assignees: ForceRole[]): ForceRole => {
//   const match = assignees.find((role: ForceRole) => {
//     return role.forceName === force && role.roleName === rolename
//   })
//   if (match) {
//     return match
//   }
//   throw new Error('Failed to find role for force:' + force + ' role:' + rolename)
// }

const getOpenModalStatus = (key: string): DialogModalStatus => {
  return JSON.parse(expiredStorage.getItem(key) || '{}')
}

const requestChanges = (msg: MessageCustom): MessageCustom => {
  console.log('dummy request changes handler')
  return msg
}

/* Render component */
export const ChannelCoaMessageDetail2: React.FC<Props> = ({ templates, message, state, onChange, isObserver, isUmpire, role, channelColb, permission, assignees = [], collapseMe, gameDate, onRead, isReaded }) => {
  //  const [answer, setAnswer] = useState((message.details.collaboration && message.details.collaboration.response) || '')
  const [newMsg, setNewMsg] = useState<{ [property: string]: any }>({})
  const [candidates, setCandidates] = useState<Array<string>>([])
  const [privateMessage, setPrivateMessage] = useState<string>(message.details.privateMessage || '')
  const [actionTable, setActionTable] = useState<ActionTable | undefined>(undefined)

  const dialogOpenStatusKey = `${message._id}-${role.forceId}-${role.roleId}`
  const dialogModalStatus = getOpenModalStatus(dialogOpenStatusKey)

  const [open, setOpenDialog] = useState<boolean>(dialogModalStatus.open || false)
  const [dialogTitle, setDialogTitle] = useState<string>(dialogModalStatus.title || '')
  const [placeHolder, setPlaceHolder] = useState<string>(dialogModalStatus.placeHolder || '')
  const [content, setModalContent] = useState<string>(dialogModalStatus.content || '')

  if (message.details.collaboration === undefined) {
    return <></>
  } else {
    const collab = message.details.collaboration
    const isResponse = !!channelColb.responseTemplate
    const docBeingEdited = state === CollaborativeMessageStates2.InProgress
    const roleIsOwner = collab.owner && collab.owner.roleId === role.roleId
    const collabIsEditable = docBeingEdited && roleIsOwner

    /**
     * create the actions table for this user/channel
     */
    useEffect(() => {
      setActionTable(createActionTable(channelColb.approveVerbs, channelColb.requestChangesVerbs, channelColb.releaseVerbs))
    }, [channelColb])

    /**
     * sort out the candidates for the task
     */
    useEffect(() => {
      setCandidates(getCandidates(assignees))
    }, [assignees])

    false && console.log('action table', actionTable, newMsg && labelFactory, assignees, setPrivateMessage)

    //  const editDoc = true // ColEditDocumentBeingEdited(message, channel, canCollaborate, role)
    //  const editResponse = ColRespDocumentBeingEdited(message, channel, canCollaborate, role)

    //  const isEditor = formEditable(message, role)

    //  const { collaboration } = message.details
    //  const responseIsReleased = collaboration && collaboration.status === CollaborativeMessageStates.Released

    useEffect(() => {
      if (onRead && isReaded === false) onRead()
    }, [])

    const setOpenModalStatus = ({ open, title, content = '', placeHolder }: DialogModalStatus): void => {
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

    const getJsonEditorValue = (val: { [property: string]: any }): void => {
      setNewMsg(val)
    }

    /** local change handler. Updates `lastUpdated` value
     * in message
     */
    const handleChange = (msg: MessageCustom, collapse: boolean): void => {
      // collapse message, if necessary
      collapse && collapseMe && collapseMe()
      // fire update
      onChange && onChange(msg)
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

    const onModalSave = (feedback: string): void => {
      const newFeedback: string = '[' + dialogTitle + '] - ' + feedback
      // put message into feedback item
      const feedbackItem: FeedbackItem =
      {
        fromId: role.roleId,
        fromName: role.roleName,
        date: new Date().toISOString(),
        feedback: newFeedback
      }
      if (message.details.collaboration) {
        if (!message.details.collaboration.feedback) {
          // create empty array, if necessary
          message.details.collaboration.feedback = []
        }
        message.details.collaboration.feedback.push(feedbackItem)
      }

      handleChange(requestChanges(message), true)
      setOpenDialog(false)
      expiredStorage.removeItem(dialogOpenStatusKey)
    }

    const onPrivateMsgChange = (privateMsg: string): void => {
      setPrivateMessage(privateMsg)
      // the private msg needs to be stored temporarily in the message object to avoid being lost on rerendering
      message.details.privateMessage = privateMsg
    }

    const formatFeedback = (feedback: FeedbackItem): string => {
      return moment(feedback.date).format('YYYY-MM-DD HH:mm') +
        ' [' + feedback.fromName + '] ' +
        feedback.feedback
    }

    const CollapsibleHeader = ({ onExpand, collapsed, feedback }: any): React.ReactElement => {
      const multipleFeedback = feedback.length > 1
      const handleOnExpand = (): void => {
        multipleFeedback && onExpand(!collapsed)
      }

      const rebderReadIcon = (): React.ReactNode => {
        return <>
          {multipleFeedback && (collapsed ? '+' : '-')}
        </>
      }
      return (
        <div className={styles['feedback-header']} onClick={handleOnExpand}>
          <span className={styles['feedback-icon']}>{rebderReadIcon()}</span>
          {formatFeedback(feedback[feedback.length - 1])}
        </div>
      )
    }

    const CollapsibleContent = ({ collapsed, feedback }: any): React.ReactElement => {
      // put in reverse chronological order
      const descending = feedback.slice().reverse()
      return (
        <div className={styles['feedback-content']}>
          {!collapsed && descending.map((item: FeedbackItem, key: number) => {
            if (key > 0) return (<div key={key}>{formatFeedback(item)}</div>)
            else return null
          })}
        </div>
      )
    }

    /** any feedback in the message */
    const feedback = message.details.collaboration?.feedback

    // create a single feedback block - we use it in either message type
    const feedbackBlock = (permission > CollaborativePermission.CannotCollaborate || isObserver) && feedback && feedback.length > 0 && (
      <div>
        <div className={styles['feedback-title']}>Feedback</div>
        <div className={styles['feedback-item']}>
          <Collapsible
            header={<CollapsibleHeader feedback={feedback} />}
            content={<CollapsibleContent feedback={feedback} />}
          />
        </div>
      </div>)

    if (!message.details.collaboration) {
      console.error('Message doesnt have collaboration block')
    }

    const haveData = state !== undefined && permission !== undefined
    const actions = (actionTable && Object.keys(actionTable).length && haveData) ? actionsFor(actionTable, state, permission) : []

    // reverse the actions, so the lowest permission is on the right
    const reverseActions = actions.reverse()

    return (
      <div className={styles.main}>
        <DialogModal
          title={dialogTitle}
          value={content}
          open={open}
          onClose={onModalClose}
          onSave={onModalSave}
          onValueChange={onModalValueChange}
          placeholder={placeHolder}
        />
        <>
          <div className={styles.actions}>
            {
              reverseActions.map((action: Action) => {
                const verbs = action.verbs
                return verbs.map((verb: string) => {
                  // check for "special" verbs
                  if (verb === 'Assign') {
                    return <SplitButton label={'Assign'} options={[...candidates]} onClick={(): void => action.handler('a', verb)} />
                  } else {
                    const requiresFeedback = !!action.feedback
                    return <Button key={verb} customVariant="form-action" size="small" type="button" onClick={(): void => action.handler('a', verb)}>{verb}{requiresFeedback && '*'}</Button>
                  }
                })
              })
            }
          </div>
          {
            feedbackBlock
          }
          {
            isResponse && <> <JsonEditor
              messageTemplates={templates}
              message={message}
              getJsonEditorValue={getJsonEditorValue}
              disabled={true}
              gameDate={gameDate}
            /><JsonEditor
              messageTemplates={templates}
              message={message}
              getJsonEditorValue={getJsonEditorValue}
              disabled={false}
              gameDate={gameDate}
            /></>
          }
          {!isResponse && <JsonEditor
            messageTemplates={templates}
            message={message}
            getJsonEditorValue={getJsonEditorValue}
            disabled={!collabIsEditable}
            gameDate={gameDate} />

          }
          {/* <JsonEditor
            messageTemplates={templates}
            message={message}
            getJsonEditorValue={getJsonEditorValue}
            disabled={true}
            gameDate={gameDate}
          /> */}
          {/* {
            responseIsReleased
              ? <Textarea fitContent={true} id={`answer_${message._id}`} value={answer} disabled theme='dark' label="Answer" />
              : (canCollaborate || canReleaseMessages || isObserver) &&
              <Textarea fitContent={true} id={`answer_${message._id}`} value={answer} onChange={(nextValue): void => onAnswerChange(nextValue)} disabled={!isEditor} theme='dark' label="Answer" />
          } */}
          { // only show private field for umpire force(s)
            (isUmpire || isObserver) && privateMessage &&
            <Textarea id={`private_message_${message._id}`} value={privateMessage} onChange={(nextValue): void => onPrivateMsgChange(nextValue)}
              disabled={true} theme='dark' label='Private Message' labelFactory={labelFactory} />
          }
        </>
      </div>
    )
  }
}

export default ChannelCoaMessageDetail2
