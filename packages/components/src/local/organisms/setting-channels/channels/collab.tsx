import { Divider, TableFooter } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { ParticipantCollab } from '@serge/custom-types'
import { ChannelCollab } from '@serge/custom-types/channel-data'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import Confirm from '../../../atoms/confirm'
import FormGroup from '../../../atoms/form-group-shadow'
import EditableRow, { Item as RowItem, Option } from '../../../molecules/editable-row'
import createParticipant from '../helpers/createParticipant'
import { defaultParticipantCollab } from '../helpers/defaultParticipant'
import generateRowItemsCollab from '../helpers/generateRowItemsCollab'
import { Action, AdditionalData, MessageGroup, MessageGroupType, MessagesValues } from '../helpers/genMessageCollabEdit'
import { getMessagesValues, getSelectedOptions, integrateWithLocalChanges, onMessageValuesChanged } from '../helpers/messageCollabUtils'
import rowToParticipantCollab from '../helpers/rowToParticipantCollab'
import styles from '../styles.module.scss'
import { CollabChannelProps } from '../types/props'

export const CollabChannel: React.FC<CollabChannelProps> = ({
  channel,
  forces,
  messageTemplates,
  onChange
}) => {
  const [localChannelUpdates, setLocalChannelUpdates] = useState(channel)
  const [participantKey, confirmRemoveParticipant] = useState<number>(-1)
  const [postRemoveActionConfirmed, setPostRemoveActionConfirmed] = useState<boolean>(false)

  const messageTemplatesOptions: Array<Option> = messageTemplates.map(template => ({
    name: template.title,
    uniqid: template._id,
    value: template
  }))

  const messagesValues = getMessagesValues(localChannelUpdates)
  const [messageLocal, setMessageLocal] = useState<MessagesValues>(messagesValues)

  useEffect(() => {
    setLocalChannelUpdates(channel)
  }, [channel])

  useEffect(() => {
    onChange(localChannelUpdates)
  }, [localChannelUpdates])

  const renderContent = (): React.ReactNode => {
    if (!localChannelUpdates) return null

    const handleSaveRows = (participants: ParticipantCollab[]): void => {
      const newChannel = { ...localChannelUpdates }
      newChannel.participants = participants
      setLocalChannelUpdates(newChannel)
    }

    const handleUpdateCollabChannel = (messagesLocal: MessagesValues): void => {
      const nextChannel = integrateWithLocalChanges(messageTemplatesOptions, localChannelUpdates, messagesLocal)
      setLocalChannelUpdates(nextChannel)
    }

    const handleChangeRow = (nextItems: RowItem[], participant: ParticipantCollab): RowItem[] => {
      const nextParticipant = rowToParticipantCollab(forces, nextItems, participant)
      return generateRowItemsCollab(forces, nextParticipant)
    }

    const handleCreateParticipant = (rowItems: RowItem[]): void => {
      if (localChannelUpdates) {
        handleSaveRows([
          ...localChannelUpdates.participants,
          createParticipant(messageTemplatesOptions, forces, rowItems, localChannelUpdates.channelType) as ParticipantCollab
        ])
      } else {
        console.warn('Can`t create new participant, no current channel')
      }
    }

    const renderTableBody = (data: ChannelCollab): React.ReactElement[] => {
      if (!data.participants) return [<></>]
      return data.participants.map((participantCollab, key) => {
        const handleSaveRow = (row: RowItem[], pKey = -1): void => {
          if (pKey === -1) {
            return
          }
          const nextParticipants = [...data.participants]
          nextParticipants[pKey] = rowToParticipantCollab(forces, row, participantCollab)
          handleSaveRows(nextParticipants)
        }

        const handleRemoveParticipant = (): void => {
          const newItems = [...data.participants]
          newItems.splice(participantKey, 1)
          handleSaveRows(newItems)
        }

        if (postRemoveActionConfirmed && participantKey !== -1) {
          handleRemoveParticipant()
          setPostRemoveActionConfirmed(false)
          confirmRemoveParticipant(-1)
        }

        const items = generateRowItemsCollab(forces, participantCollab)

        return <EditableRow
          onRemove={(pKey = -1): void => confirmRemoveParticipant(pKey)}
          key={participantCollab.subscriptionId}
          onChange={(nextItems: RowItem[]): RowItem[] => {
            return handleChangeRow(nextItems, participantCollab)
          }}
          onSave={handleSaveRow}
          items={items}
          defaultMode='view'
          actions={true}
          participantKey={key}
          presentAsList
        />
      })
    }

    const renderTableFooter = (): React.ReactElement => {
      const items = generateRowItemsCollab(forces, defaultParticipantCollab)
      return <EditableRow
        isGenerator={true}
        noSwitchOnReset
        onChange={(nextItems: RowItem[]): RowItem[] => {
          return handleChangeRow(nextItems, defaultParticipantCollab)
        }}
        onSave={handleCreateParticipant}
        items={items}
        defaultMode='edit'
        actions
      />
    }

    const onMessageTemplateChanged = (value: string[], action: Action): void => {
      const nextMsgLocal = onMessageValuesChanged(messageLocal, value, action, MessageGroupType.MESSAGE_TEMPLATE)
      setMessageLocal(nextMsgLocal)
      handleUpdateCollabChannel(nextMsgLocal)
    }

    const onResponseTemplateChanged = (value: string[], action: Action): void => {
      const nextMsgLocal = onMessageValuesChanged(messageLocal, value, action, MessageGroupType.RESPONSE_TEMPLATE)
      setMessageLocal(nextMsgLocal)
      handleUpdateCollabChannel(nextMsgLocal)
    }

    const onDocumentStatusChanged = (value: string[]): void => {
      const nextMsgLocal = onMessageValuesChanged(messageLocal, value, 'add', MessageGroupType.DOCUMENT_STATUS)
      setMessageLocal(nextMsgLocal)
      handleUpdateCollabChannel(nextMsgLocal)
    }

    const onRequestChanged = (value: string[], action: Action): void => {
      const nextMsgLocal = onMessageValuesChanged(messageLocal, value, action, MessageGroupType.REQUEST_CHANGES)
      setMessageLocal(nextMsgLocal)
      handleUpdateCollabChannel(nextMsgLocal)
    }

    const onApproveChanged = (value: string[], action: Action): void => {
      const nextMsgLocal = onMessageValuesChanged(messageLocal, value, action, MessageGroupType.APPROVE)
      setMessageLocal(nextMsgLocal)
      handleUpdateCollabChannel(nextMsgLocal)
    }

    const onReleaseChanged = (value: string[], action: Action): void => {
      const nextMsgLocal = onMessageValuesChanged(messageLocal, value, action, MessageGroupType.RELEASE)
      setMessageLocal(nextMsgLocal)
      handleUpdateCollabChannel(nextMsgLocal)
    }

    const onAdditionalDataChanged = (value: string[]): void => {
      const nextMsgLocal = onMessageValuesChanged(messageLocal, value, 'add', MessageGroupType.ADDITIONAL_DATA)
      setMessageLocal(nextMsgLocal)
      handleUpdateCollabChannel(nextMsgLocal)
    }

    return (
      <div>
        <div className={styles.row}>
          <div className={cx(styles.col, styles.section, styles.table)}>
            <FormGroup>
              <Paper className={styles.pager}>
                <div className={styles['control-groups']}>
                  COLLAB MESSAGE
                  <MessageGroup
                    title="Message Templates"
                    multiple={false}
                    options={messageTemplatesOptions}
                    onChange={(val: string[]): void => onMessageTemplateChanged(val, 'add')}
                    onDelete={(val: string[]): void => onMessageTemplateChanged(val, 'delete')}
                    type={MessageGroupType.MESSAGE_TEMPLATE}
                    value={messageLocal.messageTemplate}
                  />

                  <MessageGroup
                    title="Response Templates"
                    multiple={false}
                    options={messageTemplatesOptions}
                    onChange={(val: string[]): void => onResponseTemplateChanged(val, 'add')}
                    onDelete={(val: string[]): void => onResponseTemplateChanged(val, 'delete')}
                    type={MessageGroupType.RESPONSE_TEMPLATE}
                    value={messageLocal.responseTemplate}
                  />

                  <MessageGroup
                    title="Initial Document Status"
                    multiple={false}
                    onChange={onDocumentStatusChanged}
                    type={MessageGroupType.DOCUMENT_STATUS}
                    value={messageLocal.documentStatus}
                  />

                </div>

                <div className={styles.box}>
                  <div className={styles.title}>Terminology</div>
                  <Divider />
                  <div className={styles['control-groups']}>
                    <MessageGroup
                      title='Request Changes'
                      options={getSelectedOptions(MessageGroupType.REQUEST_CHANGES, messageLocal, localChannelUpdates)}
                      multiple={false}
                      onChange={(val: string[]): void => onRequestChanged(val, 'add')}
                      onDelete={(val: string[]): void => onRequestChanged(val, 'delete')}
                      type={MessageGroupType.REQUEST_CHANGES}
                      value={messageLocal.requestChanges}
                    />
                    <MessageGroup
                      title='Approve'
                      options={getSelectedOptions(MessageGroupType.APPROVE, messageLocal, localChannelUpdates)}
                      multiple={false}
                      onChange={(val: string[]): void => onApproveChanged(val, 'add')}
                      onDelete={(val: string[]): void => onApproveChanged(val, 'delete')}
                      type={MessageGroupType.APPROVE}
                      value={messageLocal.approve}
                    />
                    <MessageGroup
                      title='Release'
                      options={getSelectedOptions(MessageGroupType.RELEASE, messageLocal, localChannelUpdates)}
                      multiple={false}
                      onChange={(val: string[]): void => onReleaseChanged(val, 'add')}
                      onDelete={(val: string[]): void => onReleaseChanged(val, 'delete')}
                      type={MessageGroupType.RELEASE}
                      value={messageLocal.release}
                    />
                  </div>
                </div>

                <div className={styles.box}>
                  <div className={styles['control-groups']}>
                    <MessageGroup
                      title='Additional data'
                      multiple
                      options={AdditionalData}
                      onChange={onAdditionalDataChanged}
                      type={MessageGroupType.ADDITIONAL_DATA}
                      value={messageLocal.additionalData}
                    />
                  </div>
                </div>

                <div className={styles.box}>
                  <div className={styles.title}>Permission</div>
                  <Divider />
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Force</TableCell>
                        <TableCell align="center">Role</TableCell>
                        <TableCell align="center">Create New Message</TableCell>
                        <TableCell align="center">See Live Updates</TableCell>
                        <TableCell align="center">Permission</TableCell>
                        <TableCell align="center"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {renderTableBody(localChannelUpdates)}
                    </TableBody>
                    <TableFooter>
                      {renderTableFooter()}
                    </TableFooter>
                  </Table>
                </div>
              </Paper>
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Confirm
        isOpen={participantKey !== -1}
        title="Delete Participation"
        message="Are you sure you want to permanently delete this participation?"
        cancelBtnText='Cancel'
        confirmBtnText='Delete'
        onCancel={(): void => confirmRemoveParticipant(-1)}
        onConfirm={(): void => setPostRemoveActionConfirmed(true)}
      />
      {renderContent()}
    </>
  )
}

export default CollabChannel
