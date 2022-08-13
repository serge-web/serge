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
import EditableRow, { Item as RowItem, Option } from '../../../molecules/editable-row'
import MoreInfo from '../../../molecules/more-info'
import createParticipant from '../helpers/createParticipant'
import { defaultParticipantChat } from '../helpers/defaultParticipant'
import generateRowItemsChat from '../helpers/generateRowItemsChat'
import rowToParticipantChat from '../helpers/rowToParticipantChat'
import styles from '../styles.module.scss'
import { ChatChannelProps } from '../types/props'

export const ChatChannel: React.FC<ChatChannelProps> = ({
  channel,
  forces,
  messageTemplates,
  onChange
}) => {
  const [localChannelUpdates, setLocalChannelUpdates] = useState<ChannelChat>(channel)
  const [participantKey, confirmRemoveParticipant] = useState<number>(-1)
  const [postRemoveActionConfirmed, setPostRemoveActionConfirmed] = useState<boolean>(false)
  const [isChatAuthorHidden, setChatAuthorHidden] = useState<boolean>(false)

  const messageTemplatesOptions: Array<Option> = messageTemplates.map(template => ({
    name: template.title,
    uniqid: template._id,
    value: template
  }))

  useEffect(() => {
    setChatAuthorHidden(!!channel.hideMessageAuthor)
  }, [])

  useEffect(() => {
    setLocalChannelUpdates(channel)
  }, [channel])

  useEffect(() => {
    onChange(localChannelUpdates)
  }, [localChannelUpdates])

  const renderContent = (): React.ReactNode => {
    if (!localChannelUpdates) return null

    const handleSaveRows = (participants: ParticipantChat[]): void => {
      const newChannel = { ...localChannelUpdates }
      newChannel.participants = participants
      setLocalChannelUpdates(newChannel)
    }

    const handleChangeRow = (nextItems: RowItem[], participant: ParticipantChat): RowItem[] => {
      const nextParticipant = rowToParticipantChat(forces, nextItems, participant)
      return generateRowItemsChat(forces, nextParticipant)
    }

    const handleCreateParticipant = (rowItems: RowItem[]): void => {
      if (localChannelUpdates) {
        handleSaveRows([
          ...localChannelUpdates.participants,
          createParticipant(messageTemplatesOptions, forces, rowItems, localChannelUpdates.channelType) as ParticipantChat
        ])
      } else {
        console.warn('Can`t create new participant, no current channel')
      }
    }

    const renderTableBody = (data: ChannelChat): React.ReactElement[] => {
      if (!data.participants) return [<></>]
      return data.participants.map((participantChat, key: number) => {
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
                    {renderTableBody(channel)}
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
