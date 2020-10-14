import React, { useState } from 'react'

import cx from 'classnames'

/* Import proptypes */
import PropTypes, { ChannelData, Participant, Role } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import { Content, LeftSide, RightSide } from '../content'
import EditableList, { Item } from '../editable-list'
import TransparentInput from '../../form-elements/transparent-input'
import Button from '../../form-elements/button'
import FormGroup from '../../form-elements/form-group-shadow'
import EditableRow, { Item as RowItem, Option } from '../editable-row'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

/* Render component */
export const Channels: React.FC<PropTypes> = ({ onChange, onSave, channels, forces, messages }) => {
  const [selectedItem, setSelectedItem] = useState(0)

  const messageTemplatesOptions: Array<Option> = messages.map(message => ({
    name: message.title,
    value: message
  }))
  // const itemsTemplate:<Array<Item>> = [
  //   {
  //
  //   }
  // ]
  // const [parcipiants] = useState<Array<Array<Item>>>([itemsTemplate])

  const handleSwitch = (_item: Item, key: number): void => {
    setSelectedItem(key)
  }

  const handleChangeChannels = (nextChannels: Array<ChannelData>): void => {
    onChange(nextChannels)
  }

  const renderContent = (): React.ReactNode => {
    if (!channels[selectedItem]) return null
    const data = channels[selectedItem]

    const handleChangeChannel = (channel: ChannelData): void => {
      const nextChannels: Array<ChannelData> = [...channels]
      nextChannels[selectedItem] = channel
      handleChangeChannels(nextChannels)
    }

    const handleSaveRows = (participants: Array<Participant>): void => {
      handleChangeChannel({
        ...data,
        participants: participants
      })
    }

    //
    // const handleCreateRole = (): void => {
    //   const roles: Array<Role> = [...data.roles, {
    //     name: 'New Role',
    //     canSubmitPlans: true,
    //     password: Math.random().toString(36).substring(5),
    //     control: false,
    //     isInsightViewer: false,
    //     isObserver: false
    //   }]
    //   handleChangeForce({ ...data, roles: roles })
    // }

    return (
      <div key={selectedItem}>
        <div className={styles.row}>
          <div className={styles.col}>
            <TransparentInput
              onChange={(name: string): void => {
                handleChangeChannel({ ...data, name })
              }}
              value={data.name}
              placeholder="Channel Name"/>
          </div>
          <div className={styles.actions}>
            <Button onClick={(): void => { if (onSave) onSave() }}>Save</Button>
          </div>
        </div>
        <div className={styles.row}>
          <div className={cx(styles.col, styles.section)}>
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
                      const generateRowItems = (nextParticipant: Participant): Array<RowItem> => {
                        let forceSelected: Array<number> = [0]
                        let roleOptions: Array<Option> = []

                        if (nextParticipant.forceUniqid) {
                          const forceIndex = forces.findIndex(force => force.uniqid === nextParticipant.forceUniqid)
                          if (forceIndex !== -1) {
                            roleOptions = forces[forceIndex].roles
                            forceSelected = [forceIndex]
                          }
                        }

                        const activeRoles: Array<number> = nextParticipant.roles.map(role => {
                          return roleOptions.findIndex(option => option.name === role.name)
                        }).filter(active => active !== -1)

                        let activeTemplates: Array<number> = []

                        if (nextParticipant.templates.length) {
                          activeTemplates = nextParticipant.templates.map(template => {
                            return messageTemplatesOptions.findIndex(option => option.name === template.title)
                          }).filter(active => active !== -1)
                        }

                        return [
                          {
                            active: forceSelected,
                            multiple: false,
                            options: forces,
                            uniqid: 'forces'
                          },
                          {
                            active: activeRoles,
                            emptyTitle: 'All roles',
                            multiple: true,
                            options: roleOptions,
                            uniqid: 'access'
                          },
                          {
                            active: activeTemplates,
                            emptyTitle: 'Chat if empty',
                            multiple: true,
                            options: messageTemplatesOptions,
                            uniqid: 'templates'
                          }
                        ]
                      }

                      const rowToParticipant = (nextItems: Array<RowItem>): Participant => {
                        const [force, access, template] = nextItems
                        const selectedForce = forces[force.active ? force.active[0] : 0]
                        const roles: Array<Role> = access.active ? access.active.map(key => (
                          selectedForce.roles[key]
                        )) : []
                        const templates: Array<any> = template.active ? template.active.map(key => (
                          messageTemplatesOptions[key].value
                        )) : []
                        return {
                          ...participant,
                          force: selectedForce.name,
                          forceUniqid: selectedForce.uniqid,
                          roles,
                          templates
                        }
                      }

                      const handleSaveRow = (row: Array<RowItem>): void => {
                        const nextParticipants = [...data.participants]
                        nextParticipants[participantKey] = rowToParticipant(row)
                        handleSaveRows(nextParticipants)
                      }

                      const handleChangeRow = (nextItems: Array<RowItem>, itKey: number): Array<RowItem> => {
                        const newNextItems = { ...nextItems }
                        if (itKey === 0) {
                          newNextItems[1].active = []
                          newNextItems[2].active = []
                        }
                        return generateRowItems(rowToParticipant(nextItems))
                      }

                      return <EditableRow
                        key={participant.subscriptionId}
                        onChange={handleChangeRow}
                        onSave={handleSaveRow}
                        items={generateRowItems(participant)}
                        defaultMode='view'
                        actions={true}

                      />
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Content>
      <LeftSide>
        <EditableList items={channels} onClick={handleSwitch} />
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </Content>
  )
}

export default Channels
