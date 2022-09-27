import { Chip, Table } from '@material-ui/core'
import { ForceData, MessagePlanning } from '@serge/custom-types'
import MaterialTable, { Column } from 'material-table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import JsonEditor from '../../molecules/json-editor'
import styles from './styles.module.scss'
import PropTypes, { AdjudicationRow } from './types/props'
import { findAsset, ForceStyle } from '@serge/helpers'
import { arrToDict, collateActivities, getColumnSummary } from '../planning-assets/helpers/collate-assets'

export const AdjudicationMessagesList: React.FC<PropTypes> = ({
  forces, messages, template, isUmpire, gameDate,
  customiseTemplate, playerForceId, setSelectedItems, forceColors
}: PropTypes) => {
  const [rows, setRows] = useState<AdjudicationRow[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)

  const [myMessages, setMyMessages] = useState<MessagePlanning[]>([])
  useEffect(() => {
    setMyMessages(messages.filter((message: MessagePlanning) => isUmpire || message.details.from.forceId === playerForceId))
  }, [messages, playerForceId])

  /** custom date formatter, for compact date/time display */
  const shortDate = (value?: string): string => {
    return value ? moment(value).format('DDHHmm[Z]') : ''
  }

  useEffect(() => {
    const dataTable = myMessages.map(message => {
      const forceName: ForceStyle = forceColors.find((force: ForceStyle) => force.forceId === message.details.from.forceId)
      return {
        id: message._id,
        title: message.message.title,
        force: (forceName && forceName.force) || 'unknown',
        role: message.details.from.roleName,
        activity: message.message.ActivityType,
        period: shortDate(message.message.startDate) + '-' + shortDate(message.message.endDate)
      }
    })
    setRows(dataTable)

    const umpireForce = forces.find((force: ForceData) => force.umpire)
    const summaryData = umpireForce && getColumnSummary(forces, umpireForce.uniqid, false, [])
    const activities = collateActivities(myMessages)
    const columnsData: Column[] = jestWorkerId ? [] : !summaryData ? [] : [
      { title: 'ID', field: 'id' },
      { title: 'Title', field: 'title' },
      { title: 'Force', field: 'force', lookup: arrToDict(summaryData.forces) },
      { title: 'Activity', field: 'activity', lookup: arrToDict(activities) },
      { title: 'Duration', field: 'period' }
    ]
    setColumns(columnsData)
  }, [myMessages])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  const assetClick = (objName: string): void => {
    const asset = findAsset(forces, undefined, objName)
    if (asset) {
      // don't change selection yet - it collapses the panel
      const doSetSelected = false
      doSetSelected && setSelectedItems([asset.uniqid])
    }
  }

  const formatOwnAsset = (obj: any): any => <><span>
    <Chip onClick={(): void => assetClick(obj.FEName)} color='primary' variant='outlined'
      clickable icon={<FontAwesomeIcon icon={faSearchLocation} />} label={obj.FEName + '  [#' + obj.Number + ']'} /> [{obj.StartDate} - {obj.EndDate}]
  </span><br /></>

  const formatOppAsset = (obj: any): any => {
    return <><span>
      <Chip onClick={(): void => assetClick(obj.FEName)} clickable variant='outlined' icon={<FontAwesomeIcon icon={faSearchLocation} />}
        color='secondary' label={obj.FEName + '  [#' + obj.Number + ']'} />
    </span><br /></>
  }

  const detailPanel = (rowData: AdjudicationRow): any => {
    // retrieve the message & template
    const message: MessagePlanning | undefined = messages.find((value: MessagePlanning) => value._id === rowData.id)
    if (!message) {
      console.error('message not found, id:', rowData.id, 'messages:', messages)
    } else {
      if (!template) {
        console.log('template not found for', message.details.messageType, 'template:', template)
      }
      if (message && template) {
        const msg = message.message
        console.log(msg)
        return <>
          <Table>
            <tbody>
              <tr>
                <td>Overview:</td><td>{msg.reference} - <b>{msg.title} <FontAwesomeIcon icon={faSearchLocation} /></b></td>
              </tr>
              <tr>
                <td>Detail:</td><td>{msg.Description}</td>
              </tr>
              <tr>
                <td>Activity: </td><td><b>{msg.ActivityType}</b></td>
              </tr>
              <tr>
                <td>Timing: </td><td>{msg.Date}</td>
              </tr>
              <tr>
                <td>Location: </td><td>{msg.Location} <FontAwesomeIcon icon={faSearchLocation} /></td>
              </tr>
              <tr>
                <td>Own Assets: <FontAwesomeIcon icon={faSearchLocation} /></td><td>{msg.Assets.map((obj: any): any => formatOwnAsset(obj))}</td>
              </tr>
              <tr>
                <td>Targets: <FontAwesomeIcon icon={faSearchLocation} /></td><td>{msg.Targets.map((obj: any): any => formatOppAsset(obj))}</td>
              </tr>
            </tbody>
          </Table>
          <JsonEditor
            messageContent={{
              GeneralFeedback: '',
              FeedbackItems: []
            }}
            customiseTemplate={customiseTemplate}
            messageId={rowData.id}
            template={template}
            disabled={false}
            gameDate={gameDate}
          /></>
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
