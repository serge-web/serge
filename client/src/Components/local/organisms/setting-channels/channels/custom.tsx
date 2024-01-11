import { TableFooter } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { ForceData, TemplateBody } from 'src/custom-types'
import { ChannelCustom } from 'src/custom-types/channel-data'
import { ParticipantCustom, ParticipantTemplate } from 'src/custom-types/participant'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import Confirm from '../../../atoms/confirm'
import FormGroup from '../../../atoms/form-group-shadow'
import EditableRow, { EDITABLE_SELECT_ITEM, Item as RowItem, Option } from '../../../molecules/editable-row'
import { SelectItem } from '../../../molecules/editable-row/types/props'
import { defaultParticipantCustom } from '../helpers/defaultParticipant'
import styles from '../styles.module.scss'
import { Role } from '../types/props'

type CustomChannelProps = {
  channel: ChannelCustom
  forces: ForceData[]
  messageTemplates: TemplateBody[]
  onChange: (channel: ChannelCustom) => void
}

export const CustomChannel: React.FC<CustomChannelProps> = ({
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

  useEffect(() => {
    setLocalChannelUpdates(channel)
  }, [channel])

  useEffect(() => {
    onChange(localChannelUpdates)
  }, [localChannelUpdates])

  const renderContent = (): React.ReactNode => {
    if (!localChannelUpdates) return null

    const handleSaveRows = (participants: ParticipantCustom[]): void => {
      const newChannel = { ...localChannelUpdates }
      newChannel.participants = participants
      setLocalChannelUpdates(newChannel)
    }

    const rowToParticipantCustom = (forces: ForceData[], nextItems: RowItem[], participant: ParticipantCustom): ParticipantCustom => {
      const [force, access, templateOrPermission] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]
      const selectedForce = forces[force.active ? force.active[0] : 0]
      const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (selectedForce.roles[key].roleId)) : []
      const templates: ParticipantTemplate[] = templateOrPermission.active ? templateOrPermission.active.map((key: number) => {
        const { _id, title } = messageTemplatesOptions[key].value as TemplateBody
        return { _id, title }
      }) : []

      return {
        ...participant,
        forceUniqid: selectedForce.uniqid,
        roles,
        templates
      }
    }

    const generateRowItemsCustom = (templatesOptions: Option[], forces: ForceData[], nextParticipant: ParticipantCustom): RowItem[] => {
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
      const activeRoles: number[] = partRoles ? partRoles.map(role => {
        return roleOptions.findIndex(option => option.value.roleId === role)
      }).filter(active => active !== -1) : []

      let activeTemplates: number[] = []

      if (nextParticipant.templates && nextParticipant.templates.length) {
        activeTemplates = nextParticipant.templates.map(template => {
          return templatesOptions.findIndex(option => option.uniqid === template._id)
        }).filter(active => active !== -1)
      }

      additionalFields.push({
        active: activeTemplates,
        emptyTitle: 'Chat if empty',
        multiple: true,
        options: templatesOptions,
        uniqid: 'templates',
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

    const handleChangeRow = (nextItems: RowItem[], participant: ParticipantCustom): RowItem[] => {
      const nextParticipant = rowToParticipantCustom(forces, nextItems, participant)
      return generateRowItemsCustom(messageTemplatesOptions, forces, nextParticipant)
    }

    const handleCreateParticipant = (rowItems: RowItem[]): void => {
      if (localChannelUpdates) {
        handleSaveRows([
          ...localChannelUpdates.participants,
          rowToParticipantCustom(forces, rowItems, defaultParticipantCustom)
        ])
      } else {
        console.warn('Can`t create new participant, no current channel')
      }
    }

    const renderTableBody = (data: ChannelCustom): React.ReactElement[] => {
      if (!data.participants) return [<></>]
      return data.participants.map((participant, key) => {
        const handleSaveRow = (row: RowItem[], pKey = -1): void => {
          if (pKey === -1) {
            return
          }
          const nextParticipants = [...data.participants]
          nextParticipants[pKey] = rowToParticipantCustom(forces, row, participant)
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

        const items = generateRowItemsCustom(messageTemplatesOptions, forces, participant)
        return <EditableRow
          onRemove={(pKey = -1): void => confirmRemoveParticipant(pKey)}
          key={key}
          onChange={(nextItems: RowItem[]): RowItem[] => {
            return handleChangeRow(nextItems, participant)
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
      const items = generateRowItemsCustom(messageTemplatesOptions, forces, defaultParticipantCustom)
      return <EditableRow
        isGenerator={true}
        noSwitchOnReset
        onChange={(nextItems: RowItem[]): RowItem[] => {
          return handleChangeRow(nextItems, defaultParticipantCustom)
        }}
        onSave={handleCreateParticipant}
        items={items}
        defaultMode='edit'
        actions
      />
    }

    return (
      <div>
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

export default CustomChannel
