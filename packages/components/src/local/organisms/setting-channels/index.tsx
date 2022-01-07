import { Button as MUIButton, Divider, TableFooter } from '@material-ui/core'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
/* Import Components */
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { CHANNEL_COLLAB, SpecialChannelTypes } from '@serge/config'
import { ChannelCollab, ParticipantCollab } from '@serge/custom-types'
import cx from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import Button from '../../atoms/button'
import FormGroup from '../../atoms/form-group-shadow'
import TextInput from '../../atoms/text-input'
import EditableList, { Item } from '../../molecules/editable-list'
import EditableRow, { Item as RowItem, Option } from '../../molecules/editable-row'
/* Import Helpers */
import createChannel from './helpers/createChannel'
import createParticipant from './helpers/createParticipant'
import defaultParticipant from './helpers/defaultParticipant'
import generateRowItems from './helpers/generateRowItems'
import generateRowItemsCollab from './helpers/generateRowItemsCollab'
import { Action, AdditionalData, MessageGroup, MessageGroupType, MessagesValues } from './helpers/genMessageCollabEdit'
import { getMessagesValues, integrateWithLocalChanges, isCollabChannel, onMessageValuesChanged, getSelectedOptions } from './helpers/messageCollabUtils'
import rowToParticipant from './helpers/rowToParticipant'
import rowToParticipantCollab from './helpers/rowToParticipantCollab'
/* Import Styles */
import styles from './styles.module.scss'
/* Import proptypes */
import PropTypes, { ChannelData, Participant } from './types/props'
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

  let realSelectedChannel = selectedChannel
  if (selectedChannel && Object.keys(selectedChannel).length <= 2) {
    realSelectedChannel = channels.find(channel => channel.uniqid === selectedChannel.uniqid)
  }

  const isCollab = isCollabChannel(realSelectedChannel)

  /** init data for collab panel controls */
  const messagesValues = getMessagesValues(isCollab, realSelectedChannel)
  const [messageLocal, setMessageLocal] = useState<MessagesValues>(messagesValues)

  useEffect(() => {
    /** on changes channel, update the message data local */
    setMessageLocal(messagesValues)
  }, [realSelectedChannel])

  const handleSwitch = (_item: Item): void => {
    setSelectedItem(channels.findIndex(item => item === _item))
    onSidebarClick && onSidebarClick(_item as ChannelData)
  }

  const handleChangeChannels = (nextChannels: Array<ChannelData>, selectedChannel: ChannelData): void => {
    onChange({ channels: nextChannels, selectedChannel })
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
          <TableCell align="center">UnClaim</TableCell>
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
      handleChangeChannels(nextChannels, channel)
      setLocalChannelUpdates(nextChannels)
    }

    const handleSaveRows = (participants: Array<Participant>): void => {
      handleChangeChannel({
        ...data,
        participants: participants
      })
    }

    const handleUpdateCollabChannel = (messagesLocal: MessagesValues): void => {
      const localChannelUpdate = localChannelUpdates[selectedItem]
      const nextChannel = integrateWithLocalChanges(messageTemplatesOptions, localChannelUpdate, messagesLocal)
      localChannelUpdates[selectedItem] = nextChannel
      handleChangeChannels(localChannelUpdates, nextChannel)
      setLocalChannelUpdates(localChannelUpdates)
    }

    const handleChangeRow = (nextItems: Array<RowItem>, itKey: number, participant: Participant = defaultParticipant, isCollab: boolean): Array<RowItem> => {
      const newNextItems = [...nextItems]
      if (itKey === 0) {
        newNextItems[1].active = []
        newNextItems[2].active = []
      }
      let nextParticipant
      if (isCollab) {
        nextParticipant = rowToParticipantCollab(forces, nextItems, participant as unknown as ParticipantCollab)
        return generateRowItemsCollab(forces, nextParticipant)
      }
      nextParticipant = rowToParticipant(messageTemplatesOptions, forces, nextItems, participant)
      return generateRowItems(messageTemplatesOptions, forces, nextParticipant, data)
    }

    const handleCreateParticipant = (rowItems: Array<RowItem>): void => {
      handleSaveRows([
        ...data.participants,
        createParticipant(messageTemplatesOptions, forces, rowItems)
      ])
    }

    // render table body
    const renderTableBody = (data: ChannelData, isCollab: boolean): React.ReactElement[] => {
      if (!data.participants) return [<></>]

      return data.participants.map((participant, participantKey) => {
        const handleSaveRow = (row: Array<RowItem>): void => {
          const nextParticipants = [...data.participants]
          if (isCollab) {
            nextParticipants[participantKey] = rowToParticipantCollab(forces, row, participant as unknown as ParticipantCollab)
          } else {
            nextParticipants[participantKey] = rowToParticipant(messageTemplatesOptions, forces, row, participant)
          }
          handleSaveRows(nextParticipants)
        }

        const handleRemoveParticipant = (): void => {
          const newItems = [...data.participants]
          newItems.splice(participantKey, 1)
          handleSaveRows(newItems)
        }

        const items = isCollab ? generateRowItemsCollab(forces, participant) : generateRowItems(messageTemplatesOptions, forces, participant, data)

        return <EditableRow
          onRemove={handleRemoveParticipant}
          key={participant.subscriptionId}
          onChange={(nextItems: Array<RowItem>, itKey: number): Array<RowItem> => {
            return handleChangeRow(nextItems, itKey, participant, isCollab)
          }}
          onSave={handleSaveRow}
          items={items}
          defaultMode='view'
          actions={true}
        />
      })
    }

    // render table footer
    const renderTableFooter = (): React.ReactElement => {
      return <EditableRow
        isGenerator={true}
        noSwitchOnReset
        onChange={(nextItems: Array<RowItem>, itKey: number): Array<RowItem> => {
          return handleChangeRow(nextItems, itKey, defaultParticipant, isCollab)
        }}
        onSave={handleCreateParticipant}
        items={generateRowItems(messageTemplatesOptions, forces, defaultParticipant, data)}
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
            {!isCollab &&
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
                      {renderTableBody(data, isCollab)}
                    </TableBody>
                    <TableFooter>
                      {renderTableFooter()}
                    </TableFooter>
                  </Table>
                </TableContainer>
              </FormGroup>
            }

            {isCollab &&
              <FormGroup>
                <Paper className={styles.pager}>
                  <div className={styles['control-groups']}>

                    <MessageGroup
                      title="Messages Templates"
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
                        title="Request Changes"
                        options={getSelectedOptions(MessageGroupType.REQUEST_CHANGES, messageLocal, realSelectedChannel)}
                        multiple={false}
                        onChange={(val: string[]): void => onRequestChanged(val, 'add')}
                        onDelete={(val: string[]): void => onRequestChanged(val, 'delete')}
                        type={MessageGroupType.REQUEST_CHANGES}
                        value={messageLocal.requestChanges}
                      />
                      <MessageGroup
                        title='"Approve"'
                        options={getSelectedOptions(MessageGroupType.APPROVE, messageLocal, realSelectedChannel)}
                        multiple={false}
                        onChange={(val: string[]): void => onApproveChanged(val, 'add')}
                        onDelete={(val: string[]): void => onApproveChanged(val, 'delete')}
                        type={MessageGroupType.APPROVE}
                        value={messageLocal.approve}
                      />
                      <MessageGroup
                        title='"Release"'
                        options={getSelectedOptions(MessageGroupType.RELEASE, messageLocal, realSelectedChannel)}
                        multiple={false}
                        onChange={(val: string[]): void => onReleaseChanged(val, 'add')}
                        onDelete={(val: string[]): void => onReleaseChanged(val, 'delete')}
                        type={MessageGroupType.RELEASE}
                        value={messageLocal.release}
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
                        {renderTableBody(data, isCollab)}
                      </TableBody>
                      <TableFooter>
                        {renderTableFooter()}
                      </TableFooter>
                    </Table>
                  </div>

                  <div className={styles.box}>
                    <div className={styles.title}>Additional Data</div>
                    <Divider />
                    <div className={styles['control-groups']}>
                      <MessageGroup
                        title=''
                        multiple
                        options={AdditionalData}
                        onChange={onAdditionalDataChanged}
                        type={MessageGroupType.ADDITIONAL_DATA}
                        value={messageLocal.additionalData}
                      />
                    </div>
                  </div>
                </Paper>
              </FormGroup>}
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const selectedChannelId = channels.findIndex(({ uniqid }) => uniqid === realSelectedChannel?.uniqid)
    setSelectedItem(Math.max(selectedChannelId, 0))
    setLocalChannelUpdates(channels)
  }, [channels])

  const handleAddChannel = (type?: SpecialChannelTypes): void => {
    let createdChannel = createChannel(channels, forces[0], type)
    // on createing new channel, set channelType = CHANNEL_COLLAB as default
    const collabChannel = createdChannel as unknown as ChannelCollab
    collabChannel.channelType = CHANNEL_COLLAB
    collabChannel.approveVerbs = []
    collabChannel.requestChangesVerbs = []
    collabChannel.releaseVerbs = []
    createdChannel = collabChannel as unknown as ChannelData

    const nextChannels: ChannelData[] = [
      createdChannel,
      ...channels
    ]
    handleChangeChannels(nextChannels, createdChannel)
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
          onClick={(): void => { setOpen(!open) }}
        >
          <ArrowDropDownIcon />
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
                  <MenuItem onClick={(): void => handleAddChannel(SpecialChannelTypes.CHANNEL_COLLAB_EDIT)} >Collab' Edit</MenuItem>
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
