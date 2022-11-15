import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table } from '@material-ui/core'
import { ADJUDICATION_OUTCOMES } from '@serge/config'
import { Asset, ForceData, MessageAdjudicationOutcomes, MessageInteraction, MessagePlanning, MessageStructure } from '@serge/custom-types'
import { findAsset, forceColors, ForceStyle } from '@serge/helpers'
import _ from 'lodash'
import MaterialTable, { Column } from 'material-table'
import moment from 'moment'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import Button from '../../atoms/button'
import JsonEditor from '../../molecules/json-editor'
import { getColumnSummary } from '../planning-assets/helpers/collate-assets'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { SHOW_ALL_TURNS } from '../support-panel/helpers/TurnFilter'
import { collateInteraction, InteractionData, updateAssets, updateForces, updatePlatformTypes } from './helpers/collate-interaction'
import { getNextInteraction } from './helpers/getNextInteraction'
import styles from './styles.module.scss'
import PropTypes, { AdjudicationRow } from './types/props'

export const AdjudicationMessagesList: React.FC<PropTypes> = ({
  forces, interactionMessages, planningMessages, template, isUmpire, gameDate,
  customiseTemplate, playerForceId, playerRoleId, forcePlanningActivities, handleAdjudication,
  turnFilter, platformTypes, onDetailPanelOpen, onDetailPanelClose, mapPostBack
}: PropTypes) => {
  const [rows, setRows] = useState<AdjudicationRow[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)

  const forceStyles: Array<ForceStyle> = forceColors(forces, true)

  const [myMessages, setMyMessages] = useState<MessageInteraction[]>([])
  // const [currentAdjudication, setCurrentAdjudication] = useState<string | undefined>(undefined)
  const currentAdjudication = useRef<MessageAdjudicationOutcomes | undefined>(undefined)

  const localDetailPanelOpen = (row: AdjudicationRow): void => {
    onDetailPanelOpen && onDetailPanelOpen(row)
  }

  const localDetailPanelClose = (row: AdjudicationRow): void => {
    onDetailPanelClose && onDetailPanelClose(row)
  }

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

  const renderAsset = (assetId: string | { asset: Asset['uniqid'], number: number }, forces: ForceData[], index: number): React.ReactElement => {
    let asset: Asset | undefined
    const isString = typeof (assetId) === 'string'
    let numStr = ''
    if (isString) {
      try {
        asset = findAsset(forces, assetId)
      } catch (e) {
      }
    } else {
      try {
        asset = findAsset(forces, assetId.asset)
        numStr = ' (' + assetId.number + ')'
      } catch (e) {
      }
    }
    if (!asset) {
      console.warn('Failed to find asset:' + assetId)
      return <li key={index}>Asset not found</li>
    } else {
      return <li key={index}>{asset.name}{numStr}</li>
    }
  }

  const renderOrderDetail = (order1: boolean, row: AdjudicationRow, forces: ForceData[], activity?: string): React.ReactElement => {
    const id = order1 ? row.order1 : row.order2
    const plan: MessagePlanning | undefined = planningMessages.find((val: MessagePlanning) => val._id === id)
    if (!plan) {
      console.warn('Failed to find message:', id)
      return <span>Order not found</span>
    }
    const done = ['title', 'activity', 'location', 'ownAssets', 'otherAssets']
    const items = Object.keys(plan.message).map((item, index): React.ReactElement => {
      if (done.includes(item)) {
        return <Fragment key={index} />
      } else {
        const name = _.kebabCase(item)
        return <Fragment key={index}><span key={index}><b>{name}: </b>{'' + plan.message[item]}</span><br /></Fragment>
      }
    })
    return <div>
      <span><b>Title: </b> {plan.message.title} </span>
      <span><b>Activity: </b> {activity || 'n/a'} </span><br />
      <span><b>Own: </b> {plan.message.ownAssets &&
        <ul> {
          plan.message.ownAssets.map((str, index) => renderAsset(str, forces, index))}
        </ul>}</span>
      <span><b>Other: </b> {plan.message.otherAssets &&
        <ul> {
          plan.message.otherAssets.map((str, index) => renderAsset(str, forces, index))}
        </ul>}</span>
      {items}
    </div>
  }

  const renderOrderTitle = (order1: boolean, row: AdjudicationRow): React.ReactElement => {
    const id = order1 ? row.order1 : row.order2
    const plan: MessagePlanning | undefined = planningMessages.find((val: MessagePlanning) => val._id === id)
    if (!plan) {
      console.warn('Failed to find message:', id)
      return <span>Order not found</span>
    }
    return <span>Title: {plan.message.title}</span>
  }

  useEffect(() => {
    const dataTable = myMessages.map((message: MessageInteraction): AdjudicationRow => {
      const interaction = message.details.interaction
      if (!interaction) {
        throw Error('Interaction details missing')
      }
      const myMessage = message.details.from.roleId === playerRoleId
      const incompleteMessageFromMe = (myMessage && !interaction.complete)
      return {
        id: message._id,
        order1: interaction.orders1,
        order2: interaction.orders2 || 'n/a',
        turn: message.details.turnNumber,
        complete: !!interaction.complete,
        activity: message.message.Reference,
        period: shortDate(interaction.startTime) + '-' + shortDate(interaction.endTime),
        // if the item is incomplete
        tableData: { showDetailPanel: incompleteMessageFromMe ? detailPanel : undefined }
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
      { title: 'Activity', field: 'Reference' },
      { title: 'Duration', field: 'period' }
    ]
    if (turnFilter === SHOW_ALL_TURNS && !jestWorkerId) {
      const turnColumn: Column = { title: 'Turn', field: 'turn', type: 'numeric' }
      columnsData.splice(1, 0, turnColumn)
    }
    if (columns.length === 0) {
      setColumns(columnsData)
    }
  }, [myMessages])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const localCustomiseTemplate = (document: MessageStructure | undefined, schema: Record<string, any>, interaction: InteractionData): Record<string, any> => {
    // run the parent first
    const firstUpdate = customiseTemplate ? customiseTemplate(document, schema) : schema
    const includeUnknown = true
    // wrap manipulation code in `try` in case the template structure doesn't match
    try {
      // now our local changes
      updateAssets(firstUpdate.properties.perceptionOutcomes.items.properties.asset, interaction)
      updateAssets(firstUpdate.properties.healthOutcomes.items.properties.asset, interaction)
      updateAssets(firstUpdate.properties.locationOutcomes.items.properties.asset, interaction)

      // now the perceived forces
      updateForces(firstUpdate.properties.perceptionOutcomes.items.properties.force, forceStyles)
      updateForces(firstUpdate.properties.perceptionOutcomes.items.properties.perceivedForce, forceStyles, includeUnknown)

      // now the platform types
      updatePlatformTypes(firstUpdate.properties.perceptionOutcomes.items.properties.perceivedType, platformTypes, includeUnknown)
    } catch (e) {
      console.warn('Failed to customise template. Does it not match expected adjudication template?', e)
    }

    return firstUpdate
  }

  const localSubmitAdjudication = (): void => {
    if (currentAdjudication.current) {
      // get current message
      const outcomes: MessageAdjudicationOutcomes = currentAdjudication.current
      const document = interactionMessages.find((msg) => msg.message.Reference === outcomes.Reference)
      if (document) {
        const details = document.details
        const interaction = details.interaction
        if (interaction) {
        // mark as adjudicatead
          interaction.complete = true
        }

        // for the map handler to work, the message type needs to be int he emssage
        const outAsAny = outcomes as any
        outAsAny.messageType = ADJUDICATION_OUTCOMES

        // postBack. note - we use the mapping post back handler, so it
        // can modify the wargame, in addition to sending the message
        mapPostBack && mapPostBack(details, outcomes)
      }
    }
  }

  /** this is how we prevent draft messages getting corrected */
  const localStoreNewValue = (value: { [property: string]: any }): void => {
    currentAdjudication.current = value as MessageAdjudicationOutcomes
  }

  const getInteraction = (): void => {
    console.log('get interaction', forcePlanningActivities)
    const interaction = getNextInteraction(planningMessages, forcePlanningActivities || [], interactionMessages, 0, 30)
    console.log('interaction', interaction)
    if (interaction) {
      // send up to parent
      handleAdjudication && handleAdjudication(interaction)
    }
  }

  const detailPanel = (rowData: AdjudicationRow): any => {
    const DetailPanelStateListener = () => {
      useEffect(() => {
        localDetailPanelOpen(rowData)
        return () => {
          localDetailPanelClose(rowData)
        }
      }, [])
      return <></>
    }

    // retrieve the message & template
    const message: MessageInteraction | undefined = interactionMessages.find((value: MessageInteraction) => value._id === rowData.id)
    if (!message) {
      console.error('message not found, id:', rowData.id, 'messages:', interactionMessages)
    } else {
      if (!template) {
        console.log('template not found for', message.details.messageType, 'template:', template)
      }
      console.log('open detail', template)
      if (message && template) {
        const msg = message.message
        const data = collateInteraction(message._id, interactionMessages, planningMessages, forces, forceStyles, forcePlanningActivities)
        if (!data) {
          return <span>Orders not found for interaction with id: {message._id}</span>
        } else {
          return <>
            <DetailPanelStateListener />
            <Table>
              <tbody>
                <tr>
                  <td>{renderOrderDetail(true, rowData, forces, data.order1Activity)}</td>
                  <td>{renderOrderDetail(false, rowData, forces, data.order2Activity)}</td>
                </tr>
              </tbody>
            </Table>
            <JsonEditor
              messageContent={msg}
              customiseTemplate={(document, schema) => localCustomiseTemplate(document, schema, data)}
              messageId={rowData.id}
              disabled={false}
              template={template}
              gameDate={gameDate}
              saveMessage={localSubmitAdjudication}
              storeNewValue={localStoreNewValue}
            />
            <div className='button-wrap' >
              <Button color='secondary' onClick={localSubmitAdjudication} icon='save'>Submit Adjudication</Button>
            </div>
          </>
        }
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
        <Button color='secondary' onClick={getInteraction} icon='save'>Get next interaction</Button>
      </div>

      <MaterialTable
        title={'Adjudication'}
        columns={columns}
        data={rows}
        icons={materialIcons}
        actions={jestWorkerId ? [] : [
          {
            icon: () => <FontAwesomeIcon title='Show filter controls' icon={faFilter} />,
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
