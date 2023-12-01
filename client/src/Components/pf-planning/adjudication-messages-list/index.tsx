import { faSearchMinus, faSearchPlus, faUser, faBug } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Column } from '@material-table/core'
import { Chip } from '@material-ui/core'
import { Phase } from 'src/config'
import cx from 'classnames'
import React, { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import CustomDialog from '../../local/atoms/custom-dialog'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { SHOW_ALL_TURNS } from '../support-panel/helpers/TurnFilter'
import styles from './styles.module.scss'
import PropTypes, { AdjudicationRow } from './types/props'

/** fallback for if we don't know search rate for ISTAR platforms .
 * Value expected to be in km2/hour */
export const DEFAULT_SEARCH_RATE = 2000

export const AdjudicationMessagesList: React.FC<PropTypes> = ({
  forces, 
  gameDate,
  customiseTemplate,
  playerRoleId, 
  forcePlanningActivities, 
  platformTypes,
  currentTurn,
  onDetailPanelOpen,
  onDetailPanelClose,
  turnFilter,
  phase,
  gameTurnLength
}: PropTypes) => {
  const [rows, setRows] = useState<AdjudicationRow[]>([])
  const [columns, setColumns] = useState<Column<AdjudicationRow>[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const [onlyShowOpen, setOnlyShowOpwn] = useState<boolean>(true)
  const [dialogMessage, setDialogMessage] = useState<React.ReactElement | undefined>()
  const [dialogHeader, setDialogHeader] = useState<string>('')
  
  // note: this time is in military presentation
  const [currentTime] = useState<string>('pending')
  
  const [inPlanning, setInPlanning] = useState<boolean>(true)

  const currentColumnsData = useRef<Column<AdjudicationRow>[]>([])
  
  // NOTE: The following debugging information is logged for potential troubleshooting purposes,
  // but it is currently not utilized in the code. Consider removing or updating as needed.
  !7 && console.log('Debugging info:', { forces, gameDate, playerRoleId, phase, customiseTemplate, forcePlanningActivities, platformTypes, currentTurn })

  const localDetailPanelOpen = (row: AdjudicationRow): void => {
    onDetailPanelOpen && onDetailPanelOpen(row)
  }

  const localDetailPanelClose = (row: AdjudicationRow): void => {
    onDetailPanelClose && onDetailPanelClose(row)
  }

  useEffect(() => {
    setInPlanning(phase === Phase.Planning)
  }, [phase])

  const renderBoolean = (row: AdjudicationRow): React.ReactElement => {
    return <span>{row.complete ? 'Y' : 'N'}</span>
  }

  useEffect(() => {
    if (!columns.length || !filter) {
      const hideTurnColumn = turnFilter !== SHOW_ALL_TURNS
      const columnsData: Column<AdjudicationRow>[] = [
        { title: 'Reference', field: 'reference' },
        { title: 'Turn', field: 'turn', type: 'numeric', hidden: hideTurnColumn }, //  },
        { title: 'Complete', field: 'complete', render: renderBoolean },
        { title: 'Important', field: 'important', lookup: { Y: 'Y', N: 'N' } },
        { title: 'Owner', field: 'owner' },
        { title: 'Activity', field: 'Reference' },
        { title: 'Duration', field: 'period' }
      ]
      currentColumnsData.current = columnsData
      setColumns(columnsData)
    }
    setRows([])
  }, [turnFilter, filter])

  const detailPanel = ({ rowData }: { rowData: AdjudicationRow }): any => {
    const DetailPanelStateListener = () => {
      useEffect(() => {
        localDetailPanelOpen(rowData)
        return () => {
          localDetailPanelClose(rowData)
        }
      }, [])
      return <></>
    }

    return <DetailPanelStateListener />
  }

  const closeDialogCallback = useCallback(() => setDialogMessage(undefined), [])
  
  // linter warned that this object was being created on each render, so use a useMemo
  const eventList = useMemo(() => {
    const eventList: CSSProperties = {
      height: '700px',
      overflowY: 'scroll'
    } as CSSProperties
    return eventList
  }, [gameTurnLength])

  const TableData = useMemo(() => {
    return <MaterialTable
      title={'Adjudication'}
      columns={columns}
      data={rows}
      icons={materialIcons as any}
      actions={[
        {
          icon: () => <FontAwesomeIcon title='Only show open interactions' icon={faUser} />,
          iconProps: onlyShowOpen ? { color: 'action' } : { color: 'disabled' },
          tooltip: 'Only show open interactions',
          isFreeAction: true,
          onClick: (): void => setOnlyShowOpwn(!onlyShowOpen)
        },
        {
          icon: () => <FontAwesomeIcon title='Check orders' icon={faBug} className={cx({ [styles.selected]: true })} />,
          iconProps: { color: 'action' },
          tooltip: 'Check orders valid',
          isFreeAction: true,
          onClick: (): void => setDialogHeader('Validate orders')
        },
        {
          icon: () => <FontAwesomeIcon title='Show filter controls' icon={filter ? faSearchMinus : faSearchPlus} className={cx({ [styles.selected]: filter })} />,
          iconProps: filter ? { color: 'error' } : { color: 'action' },
          tooltip: !filter ? 'Show filter controls' : 'Hide filter controls',
          isFreeAction: true,
          onClick: (): void => setFilter(!filter)
        }
      ]}
      options={{
        paging: true,
        pageSize: 20,
        emptyRowsWhenPaging: false,
        pageSizeOptions: [10, 20, 50, 100],
        filtering: filter,
        selection: false,
        rowStyle: { fontSize: '80%' },
        columnsButton: true
      }}
      detailPanel={detailPanel}
    />
  }, [rows, filter])

  return (
    <div className={styles['messages-list']}>
      
      {dialogMessage !== undefined &&
        <CustomDialog
          isOpen={dialogMessage !== undefined}
          header={dialogHeader}
          cancelBtnText={'OK'}
          onClose={closeDialogCallback}
          bodyStyle={eventList}
        >
          <>{dialogMessage}</>
        </CustomDialog>
      }
      <div className='button-wrap'>
        {inPlanning}
        <Chip label={currentTime} />
      </div>
      {TableData}
    </div>
  )
}

export default AdjudicationMessagesList
