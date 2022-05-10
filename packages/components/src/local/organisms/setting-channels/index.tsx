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
import { CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM, CHANNEL_MAPPING, SpecialChannelTypes } from '@serge/config'
import { ParticipantCollab } from '@serge/custom-types'
import { ChannelChat, ChannelCollab, ChannelCore, ChannelCustom, ChannelMapping } from '@serge/custom-types/channel-data'
import { CoreParticipant, ParticipantChat, ParticipantCustom, ParticipantMapping } from '@serge/custom-types/participant'
import cx from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import Confirm from '../../atoms/confirm'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import Button from '../../atoms/button'
import FormGroup from '../../atoms/form-group-shadow'
import TextInput from '../../atoms/text-input'
import EditableList, { Item } from '../../molecules/editable-list'
import EditableRow, { Item as RowItem, Option } from '../../molecules/editable-row'
/* Import Helpers */
import createChannel from './helpers/createChannel'
import createParticipant from './helpers/createParticipant'
import { defaultParticipantChat, defaultParticipantCollab, defaultParticipantCustom, defaultParticipantMapping } from './helpers/defaultParticipant'
import generateRowItemsChat from './helpers/generateRowItemsChat'
import generateRowItemsCollab from './helpers/generateRowItemsCollab'
import generateRowItemsCustom from './helpers/generateRowItemsCustom'
import { Action, AdditionalData, MessageGroup, MessageGroupType, MessagesValues } from './helpers/genMessageCollabEdit'
import { getMessagesValues, getSelectedOptions, integrateWithLocalChanges, isCollabChannel, onMessageValuesChanged } from './helpers/messageCollabUtils'
import rowToParticipantChat from './helpers/rowToParticipantChat'
import rowToParticipantCollab from './helpers/rowToParticipantCollab'
import rowToParticipantCustom from './helpers/rowToParticipantCustom'
/* Import Styles */
import styles from './styles.module.scss'
/* Import proptypes */
import PropTypes, { ChannelTypes } from './types/props'
import rowToParticipantMapping from './helpers/rowToParticipantMapping'
import generateRowItemsMapping from './helpers/generateRowItemsMapping'
// import { CircleOutlined } from '@material-ui/icons'

/* Render component */
export const SettingChannels: React.FC<PropTypes> = ({
  onChange,
  onSave,
  onSidebarClick,
  onCreate,
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
  const [participantKey, confirmRemoveParticipant] = useState<number>(-1)
  const [postRemoveActionConfirmed, setPostRemoveActionConfirmed] = useState<boolean>(false)

  const messageTemplatesOptions: Array<Option> = messageTemplates.map(template => ({
    name: template.title,
    uniqid: template._id,
    value: template
  }))

  const isCollab = isCollabChannel(selectedChannel)
  const isChat = selectedChannel && selectedChannel.channelType === CHANNEL_CHAT
  const isCustom = selectedChannel && selectedChannel.channelType === CHANNEL_CUSTOM
  const isMapping = selectedChannel && selectedChannel.channelType === CHANNEL_MAPPING
  const channelAsLegacy = selectedChannel as any
  const isLegacyCollab = channelAsLegacy && channelAsLegacy.format

  /** init data for collab panel controls */
  const messagesValues = getMessagesValues(isCollab, selectedChannel)
  const [messageLocal, setMessageLocal] = useState<MessagesValues>(messagesValues)

  useEffect(() => {
    /** on changes channel, update the message data local */
    setMessageLocal(messagesValues)
  }, [selectedChannel])

  const handleSwitchChannel = (_item: Item): void => {
    setSelectedItem(channels.findIndex(item => item === _item))
    onSidebarClick && onSidebarClick(_item as ChannelTypes)
  }

  const handleChangeChannels = (nextChannels: Array<ChannelTypes>, selectedChannel: ChannelTypes): void => {
    onChange({ channels: nextChannels, selectedChannel })
  }

  const renderContent = (): React.ReactNode => {
    if (!localChannelUpdates[selectedItem]) return null
    const data = localChannelUpdates[selectedItem]

    const handleChangeChannel = (channel: ChannelTypes): void => {
      const nextChannels: Array<ChannelTypes> = [...localChannelUpdates]
      nextChannels[selectedItem] = channel
      handleChangeChannels(nextChannels, channel)
      setLocalChannelUpdates(nextChannels)
    }

    const handleSaveRows = (participants: Array<CoreParticipant>): void => {
      switch (data.channelType) {
        case CHANNEL_COLLAB: {
          const newParts = participants as Array<ParticipantCollab>
          const collabChannel = data as ChannelCollab
          const newChannel = { ...collabChannel }
          newChannel.participants = newParts
          handleChangeChannel(newChannel)
          break
        }
        case CHANNEL_CUSTOM: {
          const newParts = participants as Array<ParticipantCustom>
          const collabChannel = data as ChannelCustom
          const newChannel = { ...collabChannel }
          newChannel.participants = newParts
          handleChangeChannel(newChannel)
          break
        }
        case CHANNEL_CHAT: {
          const newParts = participants as Array<ParticipantChat>
          const collabChannel = data as ChannelChat
          const newChannel = { ...collabChannel }
          newChannel.participants = newParts
          handleChangeChannel(newChannel)
          break
        }
        case CHANNEL_MAPPING: {
          const newParts = participants as Array<ParticipantMapping>
          const collabChannel = data as ChannelMapping
          const newChannel = { ...collabChannel }
          newChannel.participants = newParts
          handleChangeChannel(newChannel)
          break
        }
      }
    }

    const handleUpdateCollabChannel = (messagesLocal: MessagesValues): void => {
      const localChannelUpdate = localChannelUpdates[selectedItem]
      const nextChannel = integrateWithLocalChanges(messageTemplatesOptions, localChannelUpdate, messagesLocal)
      localChannelUpdates[selectedItem] = nextChannel
      handleChangeChannels(localChannelUpdates, nextChannel)
      setLocalChannelUpdates(localChannelUpdates)
    }

    const handleChangeRow = (nextItems: Array<RowItem>, /* _itKey: number, */participant: CoreParticipant): Array<RowItem> => {
      if (isCollab) {
        const nextParticipant = rowToParticipantCollab(forces, nextItems, participant as ParticipantCollab)
        return generateRowItemsCollab(forces, nextParticipant)
      }
      if (isChat) {
        const nextParticipant = rowToParticipantChat(forces, nextItems, participant as ParticipantChat)
        return generateRowItemsChat(forces, nextParticipant)
      }
      if (isCustom) {
        const nextParticipant = rowToParticipantCustom(messageTemplatesOptions, forces, nextItems, participant as ParticipantCustom)
        return generateRowItemsCustom(messageTemplatesOptions, forces, nextParticipant)
      }
      if (isMapping) {
        const nextParticipant = rowToParticipantMapping(forces, nextItems, participant as ParticipantMapping)
        return generateRowItemsMapping(forces, nextParticipant)
      }
      console.warn('Not handled changed row for ', selectedChannel?.name)
      return []
    }

    const handleCreateParticipant = (rowItems: Array<RowItem>): void => {
      if (selectedChannel) {
        handleSaveRows([
          ...data.participants,
          createParticipant(messageTemplatesOptions, forces, rowItems, selectedChannel.channelType)
        ])
      } else {
        console.warn('Can`t create new participant, no current channel')
      }
    }

    // render table body
    const renderTableBody = (data: ChannelTypes): React.ReactElement[] => {
      if (!data.participants) return [<></>]
      const dParts: CoreParticipant[] = data.participants
      return dParts.map((participant, key: number) => {
        const handleSaveRow = (row: Array<RowItem>, pKey = -1): void => {
          if (pKey === -1) {
            return
          }
          const nextParticipants = [...data.participants]
          if (isCollab) {
            nextParticipants[pKey] = rowToParticipantCollab(forces, row, participant as ParticipantCollab)
          } else if (isChat) {
            nextParticipants[pKey] = rowToParticipantChat(forces, row, participant as ParticipantChat)
          } else if (isMapping) {
            nextParticipants[pKey] = rowToParticipantMapping(forces, row, participant as ParticipantMapping)
          } else {
            nextParticipants[pKey] = rowToParticipantCustom(messageTemplatesOptions, forces, row, participant as ParticipantCustom)
          }

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

        const items = isCollab ? generateRowItemsCollab(forces, participant as ParticipantCollab)
          : isChat ? generateRowItemsChat(forces, participant as ParticipantChat)
            : isMapping ? generateRowItemsMapping(forces, participant as ParticipantMapping) : generateRowItemsCustom(messageTemplatesOptions, forces, participant as ParticipantCustom)

        return <EditableRow
          onRemove={(pKey = -1): void => confirmRemoveParticipant(pKey)}
          key={participant.subscriptionId}
          onChange={(nextItems: Array<RowItem> /* , itKey: number */): Array<RowItem> => {
            return handleChangeRow(nextItems, /* itKey, */ participant)
          }}
          onSave={handleSaveRow}
          items={items}
          defaultMode='view'
          actions={true}
          participantKey={key}
        />
      })
    }

    // render table footer
    const renderTableFooter = (): React.ReactElement => {
      // generate the correct type of controls for this channel type
      const items = isCollab ? generateRowItemsCollab(forces, defaultParticipantCollab)
        : isChat ? generateRowItemsChat(forces, defaultParticipantChat)
          : isMapping ? generateRowItemsMapping(forces, defaultParticipantMapping) : generateRowItemsCustom(messageTemplatesOptions, forces, defaultParticipantCustom)
      return <EditableRow
        isGenerator={true}
        noSwitchOnReset
        onChange={(nextItems: Array<RowItem> /* , itKey: number */): Array<RowItem> => {
          return handleChangeRow(nextItems, /* itKey, */ isCollab ? defaultParticipantCollab : isChat ? defaultParticipantChat : defaultParticipantCustom)
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

    if (isLegacyCollab) {
      return <div>Legacy channel type. Not rendered.</div>
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
              onClick={(): void => { onSave && onSave(localChannelUpdates[selectedItem]) }}
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
                        <TableCell align="center">Restrict access to specific roles</TableCell>
                        {isCustom &&
                          <TableCell align="center">Templates</TableCell>
                        }
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {renderTableBody(data)}
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
                        options={getSelectedOptions(MessageGroupType.REQUEST_CHANGES, messageLocal, selectedChannel)}
                        multiple={false}
                        onChange={(val: string[]): void => onRequestChanged(val, 'add')}
                        onDelete={(val: string[]): void => onRequestChanged(val, 'delete')}
                        type={MessageGroupType.REQUEST_CHANGES}
                        value={messageLocal.requestChanges}
                      />
                      <MessageGroup
                        title='Approve'
                        options={getSelectedOptions(MessageGroupType.APPROVE, messageLocal, selectedChannel)}
                        multiple={false}
                        onChange={(val: string[]): void => onApproveChanged(val, 'add')}
                        onDelete={(val: string[]): void => onApproveChanged(val, 'delete')}
                        type={MessageGroupType.APPROVE}
                        value={messageLocal.approve}
                      />
                      <MessageGroup
                        title='Release'
                        options={getSelectedOptions(MessageGroupType.RELEASE, messageLocal, selectedChannel)}
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
                        {renderTableBody(data)}
                      </TableBody>
                      <TableFooter>
                        {renderTableFooter()}
                      </TableFooter>
                    </Table>
                  </div>
                </Paper>
              </FormGroup>}
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    setSelectedItem(Math.max(selectedChannelId, 0))
    setLocalChannelUpdates(channels)
  }, [channels, selectedChannelId])

  const handleAddChannel = (type?: SpecialChannelTypes): void => {
    const createdChannel: ChannelCore = createChannel(channels, forces[0], type)
    const channelD = createdChannel as unknown as ChannelTypes
    localChannelUpdates.push(channelD)
    onCreate && onCreate(createdChannel.name, createdChannel)
    handleChangeChannels(localChannelUpdates, channelD)
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
                  <MenuItem onClick={(): void => handleAddChannel(SpecialChannelTypes.CHANNEL_COLLAB)} >Collab' Edit</MenuItem>
                  <MenuItem onClick={(): void => handleAddChannel(SpecialChannelTypes.CHANNEL_MAPPING)} >Mapping</MenuItem>
                  <MenuItem onClick={(): void => handleAddChannel(SpecialChannelTypes.CHANNEL_CHAT)} >Chat</MenuItem>
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
      <Confirm
        isOpen={participantKey !== -1}
        title="Delete Participation"
        message="Are you sure you want to permanently delete this participation?"
        cancelBtnText='Cancel'
        confirmBtnText='Delete'
        onCancel={(): void => confirmRemoveParticipant(-1)}
        onConfirm={(): void => setPostRemoveActionConfirmed(true)}
      />
      <LeftSide>
        {renderActions()}
        <EditableList
          title="Add Channel"
          items={channels}
          selectedItem={channels[selectedItem] ? channels[selectedItem].uniqid : undefined}
          filterKey="uniqid"
          onClick={handleSwitchChannel}
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

export { ChannelTypes } from './types/props'
