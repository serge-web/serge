import { Table } from '@material-ui/core'
import { Asset, ForceData, MessageInteraction, MessagePlanning, PlanningActivity } from '@serge/custom-types'
import { forceColors, ForceStyle } from '@serge/helpers'
import { noop } from 'lodash'
import MaterialTable, { Column } from 'material-table'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Button from '../../atoms/button'
import JsonEditor from '../../molecules/json-editor'
import { getColumnSummary } from '../planning-assets/helpers/collate-assets'
import { collateInteraction, InteractionData, updateAssets, updateForces } from './helpers/collate-interaction'
import styles from './styles.module.scss'
import PropTypes, { AdjudicationRow } from './types/props'

export const AdjudicationMessagesList: React.FC<PropTypes> = ({
  forces, interactionMessages, planningMessages, template, isUmpire, gameDate,
  customiseTemplate, playerForceId, playerRoleId, forcePlanningActivities
}: PropTypes) => {
  const [rows, setRows] = useState<AdjudicationRow[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)

  const forceStyles: Array<ForceStyle> = forceColors(forces, true)

  const [myMessages, setMyMessages] = useState<MessageInteraction[]>([])
  useEffect(() => {
    setMyMessages(interactionMessages.filter((message: MessageInteraction) => isUmpire || message.details.from.roleId === playerRoleId))
  }, [interactionMessages, playerForceId])

  /** custom date formatter, for compact date/time display */
  const shortDate = (value?: string): string => {
    return value ? moment(value).format('DDHHmm[Z]') : ''
  }

  const renderBoolean = (row: AdjudicationRow): React.ReactElement => {
    return <span>{row.complete ? 'Y' : 'N'}</span>
  }

  const renderAsset = (uniqid: Asset['uniqid'], assets: Asset[], index: number): React.ReactElement => {
    const asset = assets.find((asset) => asset.uniqid === uniqid)
    if (!asset) {
      throw Error('Failed to find asset:' + uniqid)
    }
    return <li key={index}>{asset.name}</li>
  }

  const renderOrderDetail = (order1: boolean, row: AdjudicationRow, assets: Asset[], activity?: PlanningActivity): React.ReactElement => {
    const id = order1 ? row.order1 : row.order2
    const plan: MessagePlanning | undefined = planningMessages.find((val: MessagePlanning) => val._id === id)
    if (!plan) {
      throw Error('Failed to find message:' + id)
    }

    return <div>
      <span><b>Title: </b> {plan.message.title} </span>
      <span><b>Activity: </b> {activity && activity.name} </span><br />
      <span><b>Own: </b> {plan.message.ownAssets &&
        <ul> {
          plan.message.ownAssets.map((str, index) => renderAsset(str, assets, index))}
        </ul>}</span>
      <span><b>Other: </b> {plan.message.otherAssets &&
        <ul> {
          plan.message.otherAssets.map((str, index) => renderAsset(str, assets, index))}
        </ul>}</span>
    </div>
  }

  const renderOrderTitle = (order1: boolean, row: AdjudicationRow): React.ReactElement => {
    const id = order1 ? row.order1 : row.order2
    const plan: MessagePlanning | undefined = planningMessages.find((val: MessagePlanning) => val._id === id)
    if (!plan) {
      throw Error('Failed to find message:' + id)
    }
    return <span>Title: {plan.message.title}</span>
  }

  useEffect(() => {
    const dataTable = myMessages.map((message: MessageInteraction): AdjudicationRow => {
      const interaction = message.details.interaction
      if (!interaction) {
        throw Error('Interaction details missing')
      }
      const complete = interaction.complete || false
      return {
        id: message._id,
        order1: interaction.orders1,
        order2: interaction.orders2 || 'n/a',
        complete: complete,
        activity: message.message.reference,
        period: shortDate(interaction.startTime) + '-' + shortDate(interaction.endTime),
        // if the item is incomplete
        tableData: { showDetailPanel: complete ? undefined : detailPanel }
      }
    })
    setRows(dataTable)

    const umpireForce = forces.find((force: ForceData) => force.umpire)
    const summaryData = umpireForce && getColumnSummary(forces, umpireForce.uniqid, false, [])
    const columnsData: Column[] = jestWorkerId ? [] : !summaryData ? [] : [
      { title: 'ID', field: 'id' },
      { title: 'Complete', field: 'complete', render: renderBoolean },
      { title: 'Order 1', field: 'order1', render: (row) => renderOrderTitle(true, row) },
      { title: 'Order 2', field: 'order2', render: (row) => renderOrderTitle(false, row) },
      { title: 'Activity', field: 'reference' },
      { title: 'Duration', field: 'period' }
    ]
    setColumns(columnsData)
  }, [myMessages])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const localCustomiseTemplate = (schema: Record<string, any>, interaction: InteractionData): Record<string, any> => {
    // run the parent first
    const firstUpdate = customiseTemplate ? customiseTemplate(schema) : schema

    // wrap manipulation code in `try` in case the template structure doesn't match
    try {
      // now our local changes
      updateAssets(firstUpdate.properties.perceptionOutcomes.items.properties.asset, interaction)
      updateAssets(firstUpdate.properties.healthOutcomes.items.properties.asset, interaction)
      updateAssets(firstUpdate.properties.locationOutcomes.items.properties.asset, interaction)

      // now the perceived forces
      updateForces(firstUpdate.properties.perceptionOutcomes.items.properties.force, forceStyles)
      updateForces(firstUpdate.properties.perceptionOutcomes.items.properties.perceivedForce, forceStyles)
    } catch (e) {
      console.warn('Failed to customise template. Does it not match expected adjudication template?', e)
    }

    return firstUpdate
  }

  const localSubmitAdjudication = (): void => {
    console.log('save message ')
  }

  const localStoreNewValue = (value: { [property: string]: any }): void => {
    console.log('store new value', value)
  }

  const detailPanel = (rowData: AdjudicationRow): any => {
    // retrieve the message & template
    const message: MessageInteraction | undefined = interactionMessages.find((value: MessageInteraction) => value._id === rowData.id)
    if (!message) {
      console.error('message not found, id:', rowData.id, 'messages:', interactionMessages)
    } else {
      if (!template) {
        console.log('template not found for', message.details.messageType, 'template:', template)
      }
      if (message && template) {
        const msg = message.message
        const data = collateInteraction(message._id, interactionMessages, planningMessages, forces, forceStyles, forcePlanningActivities)
        return <>
          <Table>
            <tbody>
              <tr>
                <td>{renderOrderDetail(true, rowData, data.allAssets, data.order1Activity)}</td>
                <td>{renderOrderDetail(false, rowData, data.allAssets, data.order2Activity)}</td>
              </tr>
            </tbody>
          </Table>
          <JsonEditor
            messageContent={msg}
            customiseTemplate={(schema) => localCustomiseTemplate(schema, data)}
            messageId={rowData.id}
            template={template}
            disabled={false}
            gameDate={gameDate}
            saveMessage={localSubmitAdjudication}
            storeNewValue={localStoreNewValue}
          />
          <div className='button-wrap' >
            <Button color='secondary' onClick={noop} icon='save'>Submit Adjudication</Button>
          </div>
        </>
      } else {
        return <div>Template not found for {message.details.messageType}</div>
      }
    }
  }

  const extendProps = jestWorkerId ? {} : {
    detailPanel: detailPanel
  }

  return (
    <div className={styles['messages-list']}>
      <div className='button-wrap' >
        <Button color='secondary' onClick={noop} icon='save'>Get next interaction</Button>
      </div>

      <MaterialTable
        title={'Adjudication'}
        columns={columns}
        data={rows}
        actions={jestWorkerId ? [] : [
          {
            icon: 'filter',
            iconProps: filter ? { color: 'action' } : { color: 'disabled' },
            tooltip: 'Show filter controls',
            isFreeAction: true,
            onClick: (): void => setFilter(!filter)
          }
        ]}
        options={{
          paging: false,
          sorting: false,
          filtering: filter,
          selection: !jestWorkerId // fix unit-test for material table
        }}
        {...extendProps}
      />
    </div>
  )

  // return (
  //   <div className={styles['messages-list']}>
  //     <Orders title='Adjudication' detailPanelFnc={detailPanel} columns={columns} rows={rows} />
  //   </div>
  // )
}

export default AdjudicationMessagesList
