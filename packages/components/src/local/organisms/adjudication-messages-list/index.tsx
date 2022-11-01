import { Table } from '@material-ui/core'
import { ForceData, MessageInteraction } from '@serge/custom-types'
import MaterialTable, { Column } from 'material-table'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import JsonEditor from '../../molecules/json-editor'
import { getColumnSummary } from '../planning-assets/helpers/collate-assets'
import styles from './styles.module.scss'
import PropTypes, { AdjudicationRow } from './types/props'

export const AdjudicationMessagesList: React.FC<PropTypes> = ({
  forces, messages, template, isUmpire, gameDate,
  customiseTemplate, playerForceId, playerRoleId
}: PropTypes) => {
  const [rows, setRows] = useState<AdjudicationRow[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)

  const [myMessages, setMyMessages] = useState<MessageInteraction[]>([])
  useEffect(() => {
    setMyMessages(messages.filter((message: MessageInteraction) => isUmpire || message.details.from.roleId === playerRoleId))
  }, [messages, playerForceId])

  /** custom date formatter, for compact date/time display */
  const shortDate = (value?: string): string => {
    return value ? moment(value).format('DDHHmm[Z]') : ''
  }

  const renderBoolean = (row: AdjudicationRow): React.ReactElement => {
    return <span>{row.complete ? 'Y' : 'N'}</span>
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
        period: shortDate(interaction.startTime) + '-' + shortDate(interaction.endTime)
      }
    })
    setRows(dataTable)

    const umpireForce = forces.find((force: ForceData) => force.umpire)
    const summaryData = umpireForce && getColumnSummary(forces, umpireForce.uniqid, false, [])
    const columnsData: Column[] = jestWorkerId ? [] : !summaryData ? [] : [
      { title: 'ID', field: 'id' },
      { title: 'Complete', field: 'complete', render: renderBoolean },
      { title: 'Order 1', field: 'order1' },
      { title: 'Order 2', field: 'order2' },
      { title: 'Activity', field: 'reference' },
      { title: 'Duration', field: 'period' }
    ]
    setColumns(columnsData)
  }, [myMessages])

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  // const assetClick = (objName: string): void => {
  //   const asset = findAsset(forces, undefined, objName)
  //   if (asset) {
  //     // don't change selection yet - it collapses the panel
  //     // const doSetSelected = false
  //     // doSetSelected && setSelectedAssets([asset.uniqid])
  //   }
  // }

  // const formatOwnAsset = (obj: any): any => <><span>
  //   <Chip onClick={(): void => assetClick(obj.FEName)} color='primary' variant='outlined'
  //     clickable icon={<FontAwesomeIcon icon={faSearchLocation} />} label={obj.FEName + '  [#' + obj.Number + ']'} /> [{obj.StartDate} - {obj.EndDate}]
  // </span><br /></>

  // const formatOppAsset = (obj: any): any => {
  //   return <><span>
  //     <Chip onClick={(): void => assetClick(obj.FEName)} clickable variant='outlined' icon={<FontAwesomeIcon icon={faSearchLocation} />}
  //       color='secondary' label={obj.FEName + '  [#' + obj.Number + ']'} />
  //   </span><br /></>
  // }

  const detailPanel = (rowData: AdjudicationRow): any => {
    // retrieve the message & template
    const message: MessageInteraction | undefined = messages.find((value: MessageInteraction) => value._id === rowData.id)
    if (!message) {
      console.error('message not found, id:', rowData.id, 'messages:', messages)
    } else {
      if (!template) {
        console.log('template not found for', message.details.messageType, 'template:', template)
      }
      if (message && template) {
        const msg = message.message
        return <>
          <Table>
            <tbody>
              <tr>
                <td>Interaction overview in here</td>
              </tr>
            </tbody>
          </Table>
          <JsonEditor
            messageContent={msg}
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
