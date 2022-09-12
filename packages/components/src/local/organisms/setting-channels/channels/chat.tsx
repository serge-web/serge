import { Checkbox, FormControlLabel, TableFooter } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { ChannelChat } from '@serge/custom-types/channel-data'
import { ParticipantChat } from '@serge/custom-types/participant'
import cx from 'classnames'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Confirm from '../../../atoms/confirm'
import FormGroup from '../../../atoms/form-group-shadow'
import EditableRow, { EDITABLE_SELECT_ITEM, Item as RowItem } from '../../../molecules/editable-row'
import { Option, SelectItem } from '../../../molecules/editable-row/types/props'
import MoreInfo from '../../../molecules/more-info'
import { defaultParticipantChat } from '../helpers/defaultParticipant'
import styles from '../styles.module.scss'
import { ForceData, Role } from '../types/props'

type ChatChannelProps = {
  channel: ChannelChat
  forces: ForceData[]
  onChange: (channel: ChannelChat) => void
}

export const ChatChannel: React.FC<ChatChannelProps> = ({
  channel,
  forces,
  onChange
}) => {
  const [localChannelUpdates, setLocalChannelUpdates] = useState<ChannelChat>(channel)
  const [participantKey, confirmRemoveParticipant] = useState<number>(-1)
  const [postRemoveActionConfirmed, setPostRemoveActionConfirmed] = useState<boolean>(false)
  const [isChatAuthorHidden, setChatAuthorHidden] = useState<boolean>(false)

  useEffect(() => {
    setLocalChannelUpdates(channel)
  }, [channel])

  useEffect(() => {
    onChange(localChannelUpdates)
    setChatAuthorHidden(!!localChannelUpdates.hideMessageAuthor)
  }, [localChannelUpdates])

  const renderContent = (): React.ReactNode => {
    if (!localChannelUpdates) return null

    const handleSaveRows = (participants: ParticipantChat[]): void => {
      const newChannel = { ...localChannelUpdates }
      newChannel.participants = participants
      setLocalChannelUpdates(newChannel)
    }

    const rowToParticipantChat = (forces: ForceData[], nextItems: RowItem[], participant: ParticipantChat): ParticipantChat => {
      const [force, access] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]
      const selectedForce = forces[force.active ? force.active[0] : 0]
      const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (
        selectedForce.roles[key].roleId
      )) : []

      return {
        ...participant,
        forceUniqid: selectedForce.uniqid,
        roles
      }
    }

    const generateRowItemsChat = (forces: ForceData[], nextParticipant: ParticipantChat): RowItem[] => {
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

    const handleChangeRow = (nextItems: RowItem[], participant: ParticipantChat): RowItem[] => {
      const nextParticipant = rowToParticipantChat(forces, nextItems, participant)
      return generateRowItemsChat(forces, nextParticipant)
    }

    const handleCreateParticipant = (rowItems: RowItem[]): void => {
      if (localChannelUpdates) {
        handleSaveRows([
          ...localChannelUpdates.participants,
          rowToParticipantChat(forces, rowItems, defaultParticipantChat)
        ])
      } else {
        console.warn('Can`t create new participant, no current channel')
      }
    }

    const renderTableBody = (data: ChannelChat): React.ReactElement[] => {
      if (!data.participants) return [<></>]
      return data.participants.map((participantChat, key) => {
        const handleSaveRow = (row: RowItem[], pKey = -1): void => {
          if (pKey === -1) {
            return
          }
          const nextParticipants = [...data.participants]
          nextParticipants[pKey] = rowToParticipantChat(forces, row, participantChat)
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

        const items = generateRowItemsChat(forces, participantChat)

        return <EditableRow
          onRemove={(pKey = -1): void => confirmRemoveParticipant(pKey)}
          key={participantChat.subscriptionId}
          onChange={(nextItems: RowItem[]): RowItem[] => {
            return handleChangeRow(nextItems, participantChat)
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
      const items = generateRowItemsChat(forces, defaultParticipantChat)
      return <EditableRow
        isGenerator={true}
        noSwitchOnReset
        onChange={(nextItems: RowItem[]): RowItem[] => {
          return handleChangeRow(nextItems, defaultParticipantChat)
        }}
        onSave={handleCreateParticipant}
        items={items}
        defaultMode='edit'
        actions
      />
    }

    const renderChatOptions = (): React.ReactElement => {
      const handleCheckbox = (event: ChangeEvent<HTMLInputElement>): void => {
        const newChannel = { ...localChannelUpdates }
        newChannel.hideMessageAuthor = event.target.checked
        setChatAuthorHidden(event.target.checked)
        setLocalChannelUpdates(newChannel)
      }

      return (
        <div className={styles['chat-configuration']}>
          <FormGroup placeholder="Configuration">
            <TableContainer component={Paper} className={styles['paper-container']}>
              <MoreInfo description='Hide Force and Role for chat message authors'>
                <FormControlLabel
                  label={'Hide message authors'}
                  className={styles.configuration}
                  control={
                    <Checkbox
                      onChange={handleCheckbox}
                      checked={isChatAuthorHidden}
                    />
                  }
                />
              </MoreInfo>
            </TableContainer>
          </FormGroup>
        </div>
      )
    }

    return (
      <div>
        <div className={styles.row}>
          <div className={cx(styles.col, styles.section, styles.table)}>
            {renderChatOptions()}
            <FormGroup placeholder="Participants and messages">
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Force</TableCell>
                      <TableCell align="left">Restrict access to specific roles</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderTableBody(localChannelUpdates)}
                  </TableBody>
                  <TableFooter>
                    {renderTableFooter()}
                  </TableFooter>
                </Table>
              </TableContainer>
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

export default ChatChannel
