import React, { useState } from 'react'
import cx from 'classnames'

/* Import proptypes */
import PropTypes, { ChannelData, Participant } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { TableFooter } from '@material-ui/core'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import FormGroup from '../../atoms/form-group-shadow'
import EditableRow, { Item as RowItem, Option } from '../../molecules/editable-row'
import EditableList, { Item } from '../../molecules/editable-list'

/* Import Helpers */
import generateRowItems from './helpers/generateRowItems'
import rowToParticipant from './helpers/rowToParticipant'
import defaultParticipant from './helpers/defaultParticipant'
import createParticipant from './helpers/createParticipant'
import createChannel from './helpers/createChannel'

/* Render component */
export const SettingChannels: React.FC<PropTypes> = ({ onChange, onSave, channels, forces, messages }) => {
  const [selectedItem, setSelectedItem] = useState(0)
  const [localChannelUpdates, setLocalChannelUpdates] = useState(channels)
  const messageTemplatesOptions: Array<Option> = messages.map(message => ({
    name: message.title,
    value: message
  }))

  const handleSwitch = (_item: Item): void => {
    setSelectedItem(channels.findIndex(item => item === _item))
  }

  const handleChangeChannels = (nextChannels: Array<ChannelData>): void => {
    onChange(nextChannels)
  }

  const handleCreateChannel = (): void => {
    handleChangeChannels([
      ...channels,
      createChannel(channels)
    ])
  }

  const renderContent = (): React.ReactNode => {
    if (!channels[selectedItem]) return null
    const data = channels[selectedItem]

    const handleChangeChannel = (channel: ChannelData): void => {
      const nextChannels: Array<ChannelData> = [...channels]
      nextChannels[selectedItem] = channel
      handleChangeChannels(nextChannels)
      setLocalChannelUpdates(nextChannels)
    }

    const handleSaveRows = (participants: Array<Participant>): void => {
      handleChangeChannel({
        ...data,
        participants: participants
      })
    }

    const handleChangeRow = (nextItems: Array<RowItem>, itKey: number, participant: Participant = defaultParticipant): Array<RowItem> => {
      const newNextItems = [...nextItems]
      if (itKey === 0) {
        newNextItems[1].active = []
        newNextItems[2].active = []
      }
      const nextParcipiant = rowToParticipant(messageTemplatesOptions, forces, nextItems, participant)
      return generateRowItems(messageTemplatesOptions, forces, nextParcipiant)
    }

    const handleCreateParticipant = (rowItems: Array<RowItem>): void => {
      handleSaveRows([
        ...data.participants,
        createParticipant(messageTemplatesOptions, forces, rowItems)
      ])
    }

    return (
      <div key={selectedItem}>
        <div className={styles.row}>
          <div className={styles.col}>
            <TextInput
              customColor="transparent"
              titleInput={true}
              value={data.name}
              updateState={(target: { value: string }): void => {
                handleChangeChannel({ ...data, name: target.value })
              }}
            />
          </div>
          <div className={styles.actions}>
            <Button
              color="secondary"
              onClick={(): void => { if (onSave) onSave(localChannelUpdates) }}
              data-qa-type="save"
            >
              Save Channel
            </Button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={cx(styles.col, styles.section, styles.table)}>
            <FormGroup placeholder="Participants and messages">
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Force</TableCell>
                      <TableCell align="left">Restrict access to specific roles</TableCell>
                      <TableCell align="left">Templates</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.participants.map((participant, participantKey) => {
                      const handleSaveRow = (row: Array<RowItem>): void => {
                        const nextParticipants = [...data.participants]
                        nextParticipants[participantKey] = rowToParticipant(messageTemplatesOptions, forces, row, participant)
                        handleSaveRows(nextParticipants)
                      }

                      const handleRemoveParticipant = (): void => {
                        const newItems = [...data.participants]
                        newItems.splice(participantKey, 1)
                        handleSaveRows(newItems)
                      }

                      return <EditableRow
                        onRemove={handleRemoveParticipant}
                        key={participant.subscriptionId}
                        onChange={(nextItems: Array<RowItem>, itKey: number): Array<RowItem> => {
                          return handleChangeRow(nextItems, itKey, participant)
                        }}
                        onSave={handleSaveRow}
                        items={generateRowItems(messageTemplatesOptions, forces, participant)}
                        defaultMode='view'
                        actions={true}

                      />
                    })}
                  </TableBody>
                  <TableFooter>
                    <EditableRow
                      noSwitchOnReset
                      onChange={handleChangeRow}
                      onSave={handleCreateParticipant}
                      items={generateRowItems(messageTemplatesOptions, forces, defaultParticipant)}
                      defaultMode='edit'
                      actions
                    />
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
    <AdminContent>
      <LeftSide>
        <EditableList
          items={channels}
          onClick={handleSwitch}
          onCreate={handleCreateChannel}
        />
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </AdminContent>
  )
}

export default SettingChannels

export { ChannelData } from './types/props'
