import { Button as MUIButton } from '@material-ui/core'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { 
  CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM, 
  // CHANNEL_MAPPING, 
  CHANNEL_PLANNING, SpecialChannelTypes 
} from 'src/config'
import { 
  ChannelChat, ChannelCollab, ChannelCore, ChannelCustom
  //  ChannelMapping 
} from 'src/custom-types/channel-data'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import Button from '../../atoms/button'
import TextInput from '../../atoms/text-input'
import EditableList, { Item } from '../../molecules/editable-list'
import ChatChannel from './channels/chat'
import CollabChannel from './channels/collab'
import CustomChannel from './channels/custom'
// import MappingChannel from './channels/mapping'
import createChannel from './helpers/createChannel'
import styles from './styles.module.scss'
import PropTypes, { ChannelTypes } from './types/props'

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
  const selectedChannelIdx = channels.findIndex(({ uniqid }) => uniqid === selectedChannel?.uniqid)
  const [selectedItem, setSelectedItem] = useState(Math.max(selectedChannelIdx, 0))
  const [selectedChannelState, setSelectedChannelState] = useState<ChannelTypes | undefined>(selectedChannel)
  const [localChannelUpdates, setLocalChannelUpdates] = useState(channels)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setSelectedItem(0)
    setSelectedChannelState(channels[0])
  }, [channels.length])

  useEffect(() => {
    setSelectedChannelState(channels[selectedItem])
  }, [selectedItem])

  const onChannelDataChange = (selectedChannel: ChannelTypes): void => {
    const nextChannels: ChannelTypes[] = [...localChannelUpdates]
    nextChannels[selectedItem] = selectedChannel
    onChange({ channels: nextChannels, selectedChannel })
    setLocalChannelUpdates(nextChannels)
    setSelectedChannelState(selectedChannel)
  }

  const onChannelSwitch = (_item: Item): void => {
    setSelectedItem(channels.findIndex(item => item === _item))
    onSidebarClick && onSidebarClick(_item as ChannelTypes)
  }

  const renderChannelContent = useMemo(() => {
    const channelType = (selectedChannelState && selectedChannelState.channelType)
    switch (channelType) {
      case CHANNEL_COLLAB:
        return <CollabChannel
          channel={selectedChannelState as ChannelCollab}
          forces={forces}
          messageTemplates={messageTemplates}
          onChange={onChannelDataChange}
        />
      case CHANNEL_CUSTOM:
        return <CustomChannel
          channel={selectedChannelState as ChannelCustom}
          forces={forces}
          messageTemplates={messageTemplates}
          onChange={onChannelDataChange}
        />
      // case CHANNEL_MAPPING:
      //   return <MappingChannel
      //     channel={selectedChannelState as ChannelMapping}
      //     forces={forces}
      //     onChange={onChannelDataChange}
      //   />
      case CHANNEL_CHAT:
        return <ChatChannel
          channel={selectedChannelState as ChannelChat}
          forces={forces}
          onChange={onChannelDataChange}
        />
      case CHANNEL_PLANNING:
        return <div>Editor not yet provided for planning channel. Waiting for data model to mature. Channel:<br />{JSON.stringify(selectedChannelState)}</div>
      case undefined:
        return <div>Channels empty. Please create a channel.</div>
      default:
        return <div>Legacy/Unsupported channel type. Not rendered. Channel type: {JSON.stringify(selectedChannelState)}</div>
    }
  }, [selectedChannelIdx, selectedChannelState])

  useEffect(() => {
    setLocalChannelUpdates(channels)
  }, [channels])

  const addNewChannel = (type?: SpecialChannelTypes): void => {
    const createdChannel: ChannelCore = createChannel(channels, forces[0], type)
    const channelD = createdChannel as unknown as ChannelTypes
    localChannelUpdates.unshift(channelD)
    setOpen(false)
    onCreate && onCreate(createdChannel.name, createdChannel)
    onChange({ channels: localChannelUpdates, selectedChannel: channelD })
  }

  const closeChannelsMenu = (event: React.MouseEvent<Document, MouseEvent>): void => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return
    }
    setOpen(false)
  }

  const renderChannelActions = useMemo(() => {
    return <div className={styles.actions}>
      <ButtonGroup
        variant="contained"
        color="secondary"
        ref={anchorRef}
        aria-label="split button"
      >
        <MUIButton onClick={(): void => { addNewChannel() }}>ADD CHANNEL</MUIButton>
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
              <ClickAwayListener onClickAway={closeChannelsMenu}>
                <MenuList id="split-button-menu">
                  <MenuItem disabled>Special channels</MenuItem>
                  <MenuItem onClick={(): void => addNewChannel(SpecialChannelTypes.CHANNEL_COLLAB)} >Collab Edit</MenuItem>
                  {/* <MenuItem onClick={(): void => addNewChannel(SpecialChannelTypes.CHANNEL_MAPPING)} >Mapping</MenuItem> */}
                  <MenuItem onClick={(): void => addNewChannel(SpecialChannelTypes.CHANNEL_CHAT)} >Chat</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  }, [open])

  return (
    <AdminContent>
      <LeftSide>
        {renderChannelActions}
        <EditableList
          title="Add Channel"
          items={localChannelUpdates}
          selectedItem={localChannelUpdates[selectedItem]?.uniqid}
          filterKey="uniqid"
          onClick={onChannelSwitch}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
        />
      </LeftSide>
      <RightSide>
        <div className={styles.row}>
          <div className={styles.col}>
            {
              selectedChannelState &&
              <TextInput
                className={styles['channel-name']}
                customColor="transparent"
                titleInput={true}
                value={selectedChannelState.name}
                updateState={(target: { value: string }): void => {
                  onChannelDataChange({
                    ...selectedChannelState,
                    name: target.value
                  })
                }}
              />
            }
          </div>
          <div className={styles.actions}>
            <Button
              color="secondary"
              disabled={!selectedChannelState}
              onClick={(): void => { onSave && onSave(localChannelUpdates[selectedItem]) }}
              data-qa-type="save"
            >
              Save Channel
            </Button>
          </div>
        </div>
        {renderChannelContent}
      </RightSide>
    </AdminContent>
  )
}

export default SettingChannels

export type { ChannelTypes } from './types/props'
