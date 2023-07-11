import { Divider, TableFooter } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { CollaborativePermission } from 'src/config'
import { ForceData, ParticipantCollab, Role, TemplateBody } from 'src/custom-types'
import { ChannelCollab } from 'src/custom-types/channel-data'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import Confirm from '../../../atoms/confirm'
import FormGroup from '../../../atoms/form-group-shadow'
import EditableRow, { EDITABLE_SELECT_ITEM, EDITABLE_SWITCH_ITEM, Item as RowItem, Option } from '../../../molecules/editable-row'
import { SelectItem, SwitchItem } from '../../../molecules/editable-row/types/props'
import { defaultParticipantCollab } from '../helpers/defaultParticipant'
import { Action, AdditionalData, MessageGroup, MessageGroupType, MessagesValues } from '../helpers/genMessageCollabEdit'
import { getMessagesValues, getSelectedOptions, integrateWithLocalChanges, onMessageValuesChanged } from '../helpers/messageCollabUtils'
import styles from '../styles.module.scss'

type CollabChannelProps = {
  channel: ChannelCollab
  forces: ForceData[]
  messageTemplates: TemplateBody[]
  onChange: (channel: ChannelCollab) => void
}

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

    const rowToParticipantCollab = (forces: ForceData[], nextItems: RowItem[], participantCollab: ParticipantCollab): ParticipantCollab => {
      const [force, access, permissionsTpls] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]
      const selectedForce = forces[force.active ? force.active[0] : 0]
      const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (selectedForce.roles[key].roleId)) : []
      const permission = permissionsTpls.active ? permissionsTpls.active[0] : CollaborativePermission.CannotCollaborate

      let { canCreate, viewUnreleasedVersions } = defaultParticipantCollab

      const createNewMsg = nextItems.find(item => (item.uniqid === 'create_new_message')) as SwitchItem | undefined
      const seeLiveUpdates = nextItems.find(item => (item.uniqid === 'see_live_updates')) as SwitchItem | undefined

      if (typeof createNewMsg !== 'undefined') canCreate = !!createNewMsg.active
      if (typeof seeLiveUpdates !== 'undefined') viewUnreleasedVersions = !!seeLiveUpdates.active
      return {
        ...participantCollab,
        forceUniqid: selectedForce.uniqid,
        roles,
        permission,
        canCreate,
        viewUnreleasedVersions
      }
    }

    const generateRowItemsCollab = (forces: ForceData[], nextParticipant: ParticipantCollab): RowItem[] => {
      let forceSelected: number[] = [0]
      let roleOptions: Option[] = []
      const additionalFields: RowItem[] = []

      if (nextParticipant.forceUniqid) {
        const forceIndex = forces.findIndex(force => force.uniqid === nextParticipant.forceUniqid)
        if (forceIndex !== -1) {
          roleOptions = forces[forceIndex].roles.map((role): Option => ({
            name: role.name,
            uniqid: role.name,
            value: role
          }))
          forceSelected = [forceIndex]
        }
      }

      const partRoles: string[] = nextParticipant.roles
      const activeRoles: Array<number> = partRoles ? partRoles.map(role => {
        return roleOptions.findIndex(option => option.value.roleId === role)
      }).filter(active => active !== -1) : []

      // init row item for create new message switch
      additionalFields.push({
        type: EDITABLE_SWITCH_ITEM,
        uniqid: 'create_new_message',
        // get default value for switcher
        active: !!nextParticipant.canCreate
      })

      // init row item for see live updates switch
      additionalFields.push({
        type: EDITABLE_SWITCH_ITEM,
        uniqid: 'see_live_updates',
        // get default value for switcher
        active: !!nextParticipant.viewUnreleasedVersions
      })

      const permissionOptions: Option[] = []
      Object.keys(CollaborativePermission).forEach((key: string) => {
        if (!isNaN(Number(key))) {
          permissionOptions.push({ name: CollaborativePermission[key], uniqid: '' + key })
        }
      })

      // init row item for permission select
      additionalFields.push({
        active: [nextParticipant.permission],
        emptyTitle: 'Edit',
        multiple: false,
        options: permissionOptions,
        uniqid: 'permissions',
        type: EDITABLE_SELECT_ITEM
      })

      return [
        {
          active: forceSelected,
          multiple: false,
          options: forces,
          uniqid: 'forces',
          type: EDITABLE_SELECT_ITEM
        },
        {
          active: activeRoles,
          emptyTitle: 'All roles',
          multiple: true,
          options: roleOptions,
          uniqid: 'access',
          type: EDITABLE_SELECT_ITEM
        },
        ...additionalFields
      ]
    }

    const handleChangeRow = (nextItems: RowItem[], participant: ParticipantCollab): RowItem[] => {
      const nextParticipant = rowToParticipantCollab(forces, nextItems, participant)
      return generateRowItemsCollab(forces, nextParticipant)
    }

    const handleCreateParticipant = (rowItems: RowItem[]): void => {
      if (localChannelUpdates) {
        handleSaveRows([
          ...localChannelUpdates.participants,
          rowToParticipantCollab(forces, rowItems, defaultParticipantCollab)
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
