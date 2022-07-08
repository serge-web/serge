import { Button as MUIButton, Divider, TableFooter, TextField } from '@material-ui/core'
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
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import Button from '../../atoms/button'
import Confirm from '../../atoms/confirm'
// import { CircleOutlined } from '@material-ui/icons'
import { CustomDialog } from '../../atoms/custom-dialog'
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
import generateRowItemsMapping from './helpers/generateRowItemsMapping'
import { Action, AdditionalData, MessageGroup, MessageGroupType, MessagesValues } from './helpers/genMessageCollabEdit'
import { getMessagesValues, getSelectedOptions, integrateWithLocalChanges, isCollabChannel, onMessageValuesChanged } from './helpers/messageCollabUtils'
import rowToParticipantChat from './helpers/rowToParticipantChat'
import rowToParticipantCollab from './helpers/rowToParticipantCollab'
import rowToParticipantCustom from './helpers/rowToParticipantCustom'
import rowToParticipantMapping, { checkForSaveProblems } from './helpers/rowToParticipantMapping'
/* Import Styles */
import styles from './styles.module.scss'
/* Import proptypes */
import { faAt, faBorderStyle, faCaretDown, faDrawPolygon, faPlay, faSearch, faSearchMinus, faSearchPlus, faTh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import PropTypes, { ChannelTypes } from './types/props'

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
  selectedChannel: originalChannel
}) => {
  const selectedChannelId = channels.findIndex(({ uniqid }) => uniqid === originalChannel?.uniqid)
  const [selectedItem, setSelectedItem] = useState(Math.max(selectedChannelId, 0))
  const [selectedChannelState, setSelectedChannelState] = useState<ChannelTypes | undefined>(originalChannel)
  const [localChannelUpdates, setLocalChannelUpdates] = useState(channels)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [participantKey, confirmRemoveParticipant] = useState<number>(-1)
  const [postRemoveActionConfirmed, setPostRemoveActionConfirmed] = useState<boolean>(false)
  const [problems, setProblems] = useState<string>('')

  const messageTemplatesOptions: Array<Option> = messageTemplates.map(template => ({
    name: template.title,
    uniqid: template._id,
    value: template
  }))

  const isCollab = isCollabChannel(selectedChannelState)
  const isChat = selectedChannelState && selectedChannelState.channelType === CHANNEL_CHAT
  const isCustom = selectedChannelState && selectedChannelState.channelType === CHANNEL_CUSTOM
  const isMapping = selectedChannelState && selectedChannelState.channelType === CHANNEL_MAPPING
  const channelAsLegacy = selectedChannelState as any
  const isLegacyCollab = channelAsLegacy && channelAsLegacy.format

  // representation of channel, in more specific types
  const mappingChannel: ChannelMapping | undefined | false = isMapping && selectedChannelState as ChannelMapping

  /** init data for collab panel controls */
  const messagesValues = getMessagesValues(isCollab, selectedChannelState)
  const [messageLocal, setMessageLocal] = useState<MessagesValues>(messagesValues)

  useEffect(() => {
    /** on changes channel, update the message data local */
    setMessageLocal(messagesValues)
  }, [selectedChannelState])

  useEffect(() => {
    setSelectedChannelState(channels[selectedItem])
  }, [selectedItem])

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
      console.warn('Not handled changed row for ', selectedChannelState?.name)
      return []
    }

    const handleCreateParticipant = (rowItems: Array<RowItem>): void => {
      if (selectedChannelState) {
        handleSaveRows([
          ...data.participants,
          createParticipant(messageTemplatesOptions, forces, rowItems, selectedChannelState.channelType)
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
            // do check
            const problems = checkForSaveProblems(row)
            if (problems) {
              setProblems(problems)
              return
            } else {
              nextParticipants[pKey] = rowToParticipantMapping(forces, row, participant as ParticipantMapping)
            }
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
          presentAsList
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

    const renderMappingConstraints = (): React.ReactElement => {
      if (!mappingChannel) {
        return (<></>)
      }

      const updateMapConstraintsBounds = (value: string, key: number[]): void => {
        const nextChannel = { ...mappingChannel }
        nextChannel.constraints.bounds[key[0]][key[1]] = +value
        handleChangeChannel(nextChannel)
      }

      const updateMapConstraintsZoom = (value: string, type: 'maxZoom' | 'minZoom' | 'maxNativeZoom'): void => {
        const nextChannel = { ...mappingChannel }
        nextChannel.constraints[type] = +value
        handleChangeChannel(nextChannel)
      }

      const updateMapConstraintsH3Res = (e: ChangeEvent<HTMLInputElement>): void => {
        const nextChannel = { ...mappingChannel }
        nextChannel.constraints.h3res = +e.target.value
        handleChangeChannel(nextChannel)
      }

      const updateMapConstraintsTileLayer = (value: string, key: 'attribution' | 'url'): void => {
        const nextChannel = { ...mappingChannel }
        if (nextChannel.constraints.tileLayer) {
          nextChannel.constraints.tileLayer[key] = value
        }
        handleChangeChannel(nextChannel)
      }

      const updateMapConstraintsPolygonUrl = (e: ChangeEvent<HTMLInputElement>): void => {
        const nextChannel = { ...mappingChannel }
        nextChannel.constraints.polygonAreasURL = e.target.value
        handleChangeChannel(nextChannel)
      }

      const updateMapConstraintsGridCellUrl = (e: ChangeEvent<HTMLInputElement>): void => {
        const nextChannel = { ...mappingChannel }
        nextChannel.constraints.gridCellsURL = e.target.value
        handleChangeChannel(nextChannel)
      }

      const { bounds, minZoom, maxZoom, maxNativeZoom, h3res, tileLayer, polygonAreasURL, gridCellsURL } = mappingChannel.constraints

      return (
        <Accordion className={styles['accordion']}>
          <AccordionSummary
            className={styles['accordion-header']}
            expandIcon={<FontAwesomeIcon icon={faCaretDown} className={styles['arrow-icon']} />}
          >
            <Typography className={styles['accordion-title']}>Proportions and Constraints</Typography>
          </AccordionSummary>
          <AccordionDetails className={styles['accordion-details']}>
            <div className={styles['control-groups']}>
              <div className={styles['mapping-item-constraints']}>
                <FormGroup placeholder="Bounds">
                  <Table aria-label="Bounds">
                    <TableBody>
                      <TableRow>
                        <TableCell className={styles['constraints-cell']}></TableCell>
                        <TableCell className={styles['constraints-cell']}>Latitude</TableCell>
                        <TableCell className={styles['constraints-cell']}>Longtitude</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                          <FontAwesomeIcon size='2x' icon={faBorderStyle} />
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='number'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={bounds[0][0]}
                            onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsBounds(e.target.value, [0, 0])}
                          />
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='number'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={bounds[0][1]}
                            onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsBounds(e.target.value, [0, 1])}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                          <FontAwesomeIcon size='2x' icon={faBorderStyle} style={{ transform: 'rotate(180deg)' }} />
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='number'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={bounds[1][0]}
                            onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsBounds(e.target.value, [1, 0])}
                          />
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='number'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={bounds[1][1]}
                            onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsBounds(e.target.value, [1, 1])}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </FormGroup>
                <FormGroup placeholder="Zoom">
                  <Table aria-label="Zoom">
                    <TableBody>
                      <TableRow>
                        <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                          <FontAwesomeIcon icon={faSearch} />
                        </TableCell>
                        <TableCell className={cx(styles['constraints-cell'], styles['cell-lbl'])}>
                          Max Native
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='number'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={maxNativeZoom}
                            onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsZoom(e.target.value, 'maxNativeZoom')}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                          <FontAwesomeIcon icon={faSearchPlus} />
                        </TableCell>
                        <TableCell className={cx(styles['constraints-cell'], styles['cell-lbl'])}>
                          Max Zoom
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='number'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={maxZoom}
                            onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsZoom(e.target.value, 'maxZoom')}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                          <FontAwesomeIcon icon={faSearchMinus} />
                        </TableCell>
                        <TableCell className={cx(styles['constraints-cell'], styles['cell-lbl'])}>
                          Min Zoom
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='number'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={minZoom}
                            onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsZoom(e.target.value, 'minZoom')}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </FormGroup>
              </div>
              <div className={styles['mapping-item-constraints']}>
                <span style={{ width: '70%' }}>
                  <FormGroup placeholder="H3">
                    <Table aria-label="H3">
                      <TableBody>
                        <TableRow>
                          <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                            <span style={{ fontSize: 35, display: 'block', marginBottom: 5 }}>&#x2B22;</span>
                          </TableCell>
                          <TableCell className={styles['constraints-cell']}>
                            <TextField
                              type='number'
                              className={styles.input}
                              InputProps={{ disableUnderline: true }}
                              value={h3res}
                              onInput={updateMapConstraintsH3Res}
                            />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </FormGroup>
                </span>
                <FormGroup placeholder="Tile Layer">
                  <Table aria-label="Tile Layer">
                    <TableBody>
                      <TableRow>
                        <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                          <FontAwesomeIcon size='2x' icon={faAt} />
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='text'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={tileLayer?.attribution}
                            onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsTileLayer(e.target.value, 'attribution')}
                          />
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                          <FontAwesomeIcon size='2x' icon={faPlay} style={{ transform: 'rotate(-90deg)' }} />
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='text'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={tileLayer?.url}
                            onInput={(e: ChangeEvent<HTMLInputElement>): void => updateMapConstraintsTileLayer(e.target.value, 'url')}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </FormGroup>
                <FormGroup placeholder="Polygon">
                  <Table aria-label="Polygon">
                    <TableBody>
                      <TableRow>
                        <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                          <FontAwesomeIcon size='2x' icon={faDrawPolygon} />
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='text'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={polygonAreasURL}
                            onInput={updateMapConstraintsPolygonUrl}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </FormGroup>
                <FormGroup placeholder="Grid Cell">
                  <Table aria-label="Grid Cell">
                    <TableBody>
                      <TableRow>
                        <TableCell className={cx(styles['constraints-icon'], styles['constraints-cell'])}>
                          <FontAwesomeIcon size='2x' icon={faTh} />
                        </TableCell>
                        <TableCell className={styles['constraints-cell']}>
                          <TextField
                            type='text'
                            className={styles.input}
                            InputProps={{ disableUnderline: true }}
                            value={gridCellsURL}
                            onInput={updateMapConstraintsGridCellUrl}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </FormGroup>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

      )
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
            {!isCollab && !isMapping &&
              <FormGroup placeholder="Participants and messages">
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Force</TableCell>
                        <TableCell align="left">Restrict access to specific roles</TableCell>
                        {isCustom &&
                          <TableCell align="left">Templates</TableCell>
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
            {isMapping && renderMappingConstraints()}
            {
              isMapping &&
              <FormGroup placeholder="Participants and messages">
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Force</TableCell>
                        <TableCell align="left">Restrict access to specific roles</TableCell>
                        <TableCell align="left">Controls</TableCell>
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
                        options={getSelectedOptions(MessageGroupType.REQUEST_CHANGES, messageLocal, selectedChannelState)}
                        multiple={false}
                        onChange={(val: string[]): void => onRequestChanged(val, 'add')}
                        onDelete={(val: string[]): void => onRequestChanged(val, 'delete')}
                        type={MessageGroupType.REQUEST_CHANGES}
                        value={messageLocal.requestChanges}
                      />
                      <MessageGroup
                        title='Approve'
                        options={getSelectedOptions(MessageGroupType.APPROVE, messageLocal, selectedChannelState)}
                        multiple={false}
                        onChange={(val: string[]): void => onApproveChanged(val, 'add')}
                        onDelete={(val: string[]): void => onApproveChanged(val, 'delete')}
                        type={MessageGroupType.APPROVE}
                        value={messageLocal.approve}
                      />
                      <MessageGroup
                        title='Release'
                        options={getSelectedOptions(MessageGroupType.RELEASE, messageLocal, selectedChannelState)}
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
      <CustomDialog
        isOpen={!!problems}
        header={'Error'}
        cancelBtnText={'OK'}
        onClose={(): void => setProblems('')}
        content={problems}
      />
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
