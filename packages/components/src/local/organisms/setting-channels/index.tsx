import React, { useState, useEffect, useRef } from 'react'
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
import { TableFooter, Button as MUIButton } from '@material-ui/core'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import FormGroup from '../../atoms/form-group-shadow'
import EditableRow, { Item as RowItem, Option } from '../../molecules/editable-row'
import EditableList, { Item } from '../../molecules/editable-list'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

/* Import Helpers */
import createChannel from './helpers/createChannel'
import generateRowItems from './helpers/generateRowItems'
import rowToParticipant from './helpers/rowToParticipant'
import defaultParticipant from './helpers/defaultParticipant'
import createParticipant from './helpers/createParticipant'
import { SpecialChannelTypes } from '@serge/config'
// import { CircleOutlined } from '@material-ui/icons'

/* Render component */
export const SettingChannels: React.FC<PropTypes> = ({
  onChange,
  onSave,
  onSidebarClick,
  onDelete,
  onDuplicate,
  channels,
  forces,
  messageTemplates,
  selectedChannel
}) => {
  const selectedChannelId = channels.findIndex(({ uniqid }) => uniqid === selectedChannel?.uniqid)
  const [selectedItem, setSelectedItem] = useState(Math.max(selectedChannelId, 0))
  const [localChannelUpdates, setLocalChannelUpdates] = useState(channels)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const messageTemplatesOptions: Array<Option> = messageTemplates.map(template => ({
    name: template.title,
    uniqid: template._id,
    value: template
  }))

  const handleSwitch = (_item: Item): void => {
    setSelectedItem(channels.findIndex(item => item === _item))
    onSidebarClick && onSidebarClick(_item as ChannelData)
  }

  const handleChangeChannels = (nextChannels: Array<ChannelData>): void => {
    onChange({ channels: nextChannels })
  }

  const renderAdditionalCells = (channelData: ChannelData): React.ReactNode => {
    if (typeof channelData.format === 'undefined') return null
    if (
      channelData.format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT ||
      channelData.format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE
    ) {
      return (
        <>
          <TableCell align="center">Participate</TableCell>
          <TableCell align="center">Release</TableCell>
        </>
      )
    }
    return null
  }

  const renderContent = (): React.ReactNode => {
    if (!localChannelUpdates[selectedItem]) return null
    const data = localChannelUpdates[selectedItem]

    const handleChangeChannel = (channel: ChannelData): void => {
      const nextChannels: Array<ChannelData> = [...localChannelUpdates]
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
      const nextParticipant = rowToParticipant(messageTemplatesOptions, forces, nextItems, participant)
      return generateRowItems(messageTemplatesOptions, forces, nextParticipant, data)
    }

    const handleCreateParticipant = (rowItems: Array<RowItem>): void => {
      handleSaveRows([
        ...data.participants,
        createParticipant(messageTemplatesOptions, forces, rowItems)
      ])
    }

    console.log('============= ', localChannelUpdates[selectedItem])

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
              onClick={(): void => { if (onSave) onSave(localChannelUpdates[selectedItem]) }}
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
                      {renderAdditionalCells(data)}
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    { data.participants && data.participants.map((participant, participantKey) => {
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
                        items={generateRowItems(messageTemplatesOptions, forces, participant, data)}
                        defaultMode='view'
                        actions={true}

                      />
                    })}
                  </TableBody>
                  <TableFooter>
                    <EditableRow
                      isGenerator={true}
                      noSwitchOnReset
                      onChange={handleChangeRow}
                      onSave={handleCreateParticipant}
                      items={generateRowItems(messageTemplatesOptions, forces, defaultParticipant, data)}
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

  useEffect(() => {
    const selectedChannelId = channels.findIndex(({ uniqid }) => uniqid === selectedChannel?.uniqid)
    setSelectedItem(Math.max(selectedChannelId, 0))
    setLocalChannelUpdates(channels)
  }, [channels])

  const handleAddChannel = (type?: SpecialChannelTypes): void => {
    const nextChannels: ChannelData[] = [
      createChannel(channels, forces[0], type),
      ...channels
    ]
    handleChangeChannels(nextChannels)
    setLocalChannelUpdates(nextChannels)
  }
  const handleClose = (event: React.MouseEvent<Document, MouseEvent>): void => {
    // @ts-ignore
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }
  const renderActions = (): React.ReactNode => {
    return <div className={styles.actions}>
      <ButtonGroup
        variant="contained"
        color="secondary"
        ref={anchorRef}
        aria-label="split button"
      >
        <MUIButton onClick={(): void => { handleAddChannel() }}>ADD CHANNEL</MUIButton>
        <MUIButton
          color="secondary"
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={ (): void => { setOpen(!open) } }
        >
          <ArrowDropDownIcon/>
        </MUIButton>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }): React.ReactNode => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  <MenuItem disabled>Special channels</MenuItem>
                  <MenuItem onClick={(): void => handleAddChannel(SpecialChannelTypes.CHANNEL_COLLAB_EDIT)} >Collab Edit</MenuItem>
                  <MenuItem onClick={(): void => handleAddChannel(SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE)} >Collab Responce</MenuItem>
                  <MenuItem onClick={(): void => handleAddChannel(SpecialChannelTypes.CHANNEL_MAPPING)} >Mapping</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  }

  return (
    <AdminContent>
      <LeftSide>
        {renderActions()}
        <EditableList
          title="Add Channel"
          items={channels}
          selectedItem={channels[selectedItem] ? channels[selectedItem].uniqid : undefined}
          filterKey="uniqid"
          onClick={handleSwitch}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
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
