import { faSearchMinus, faSearchPlus, faTable, faUser, faUserLock, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Action, Column, MTableBody } from '@material-table/core'
import { SUPPORT_PANEL_LAYOUT } from 'src/config'
import cx from 'classnames'
import React, { CSSProperties, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import CustomDialog from '../../local/atoms/custom-dialog'
import CustomFilterRow from '../planning-assets/helpers/custom-filter-row'
import { TAB_MY_ORDERS } from '../support-panel/constants'
import { getFilterApplied, getIsFilterState } from '../support-panel/helpers/caching-utils'
import { materialIcons } from '../support-panel/helpers/material-icons'
import styles from './styles.module.scss'
import PropTypes, { OrderRow } from './types/props'

export const PlanningMessagesList: React.FC<PropTypes> = ({
  isUmpire, 
  allForces,
  forceColors,
  playerRoleId,
  phase, 
  selectedRoleName,
  channel,
  selectedOrders, 
  setSelectedOrders, 
  selectedForce, 
  currentTurn, turnFilter,
  onDetailPanelOpen, 
  onDetailPanelClose,
  onSupportPanelLayoutChange,
  getSupportPanelState, 
  copyMessage
}: PropTypes) => {
  const [rows, setRows] = useState<OrderRow[]>([])
  const [columns, setColumns] = useState<Column<OrderRow>[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const [initialised, setInitialised] = useState<boolean>(false)
  const [onlyShowMyOrders, setOnlyShowMyOrders] = useState<boolean>(false)
  const tableRef = useRef<any>()
  const [toolbarActions, setToolbarActions] = useState<Action<OrderRow>[]>([])
  const [visibleRows, setVisibleRows] = useState<OrderRow[]>([])

  const [countOfSelectedPlans, setCountOfSelectedPlans] = useState<number>(0)
  const [dialogMessage, setDialogMessage] = useState<React.ReactElement | undefined>()
  const [showTurnSummaryTable, setShowTurnSummaryTable] = useState<boolean>(false)
  const [hiddenColumnChanges, setHiddenColumnChanges] = useState<boolean>(false)

  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }
  !7 && console.log('planning selectedOrders: ', selectedOrders, !!setSelectedOrders)

  // NOTE: The following debugging information is logged for potential troubleshooting purposes,
  // but it is currently not utilized in the code. Consider removing or updating as needed.
  !7 && console.log('Debugging info:', { allForces, forceColors, playerRoleId, phase, selectedRoleName, channel })
  const panelState = useMemo(() => getSupportPanelState(), [])

  useEffect(() => {
    const isFilterState = getIsFilterState(panelState)
    if (isFilterState[TAB_MY_ORDERS] && isFilterState[TAB_MY_ORDERS] !== filter) {
      setTimeout(() => {
        setFilter(isFilterState[TAB_MY_ORDERS])
      })
    }
  }, [])

  useEffect(() => {
    const selectedCount = visibleRows.filter((item) => {
      return item.tableData && item.tableData.checked
    }).length
    setCountOfSelectedPlans(selectedCount)
  }, [visibleRows])

  const closeDialogCallback = useCallback(() => setDialogMessage(undefined), [])

  useEffect(() => {
    const res: Action<OrderRow>[] = [
      {
        icon: () => <FontAwesomeIcon title='View summary' icon={faTable} className={cx({ [styles.selected]: true })} />,
        iconProps: { color: 'action' },
        tooltip: 'Show summary of outcomes of previous turn',
        disabled: false,
        isFreeAction: true,
        onClick: (): void => setShowTurnSummaryTable(!showTurnSummaryTable)
      },
      {
        icon: () => <FontAwesomeIcon title='Only show orders created by me' icon={onlyShowMyOrders ? faUser : faUserLock} className={cx({ [styles.selected]: onlyShowMyOrders })} />,
        iconProps: onlyShowMyOrders ? { color: 'error' } : { color: 'action' },
        tooltip: onlyShowMyOrders ? 'Show all orders' : 'Only show orders created by me',
        isFreeAction: true,
        onClick: (): void => setOnlyShowMyOrders(!onlyShowMyOrders)
      },
      {
        icon: () => <FontAwesomeIcon title='Show filter controls' icon={filter ? faSearchMinus : faSearchPlus} className={cx({ [styles.selected]: filter })} />,
        iconProps: filter ? { color: 'error' } : { color: 'action' },
        tooltip: !filter ? 'Show filter controls' : 'Hide filter controls',
        isFreeAction: true,
        onClick: (): void => {
          setFilter(!filter)
          const isFilterState = getIsFilterState(panelState)
          isFilterState[TAB_MY_ORDERS] = !filter
          onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.IS_FILTER, JSON.stringify(isFilterState))
          // reset filters applied when toggle off filter state
          if (filter) {
            const filtersApplied = getFilterApplied(panelState)
            delete filtersApplied[TAB_MY_ORDERS]
            onSupportPanelLayoutChange(SUPPORT_PANEL_LAYOUT.FILTER_APPLIED, JSON.stringify(filtersApplied))
          }
        }
      },
      {
        icon: () => <FontAwesomeIcon title='Copy Message' icon={faCopy} />,
        iconProps: { color: 'action' },
        tooltip: countOfSelectedPlans === 1 ? 'Copy Message' : 'Only a single set of orders can be copied',
        disabled: countOfSelectedPlans !== 1,
        isFreeAction: false,
        onClick: (_event: any, data: OrderRow | OrderRow[]): void => localCopyMessage(data)
      }
    ]
    setToolbarActions(res)
  }, [isUmpire, filter, onlyShowMyOrders, countOfSelectedPlans])

  // useEffect hook serves asynchronously, whereas the useLayoutEffect hook works synchronously
  useLayoutEffect(() => {
    setRows([])

    if (!columns.length || !filter || !initialised) {
      setInitialised(true)
      setColumns([])
    }
  }, [turnFilter, filter])

  const onLocalDetailPanelClose = (rowData: OrderRow) => {
    onDetailPanelClose && onDetailPanelClose(rowData)
  }

  const detailPanel = ({ rowData }: { rowData: OrderRow }): any => {
    const DetailPanelStateListener = () => {
      useEffect(() => {
        onDetailPanelOpen && onDetailPanelOpen(rowData)
        return () => {
          onLocalDetailPanelClose(rowData)
        }
      }, [])
      return <></>
    }
    return <DetailPanelStateListener />
  }

  const localCopyMessage = (data: OrderRow | OrderRow[]): void => {
    if (Array.isArray(data)) {
      const item = data as OrderRow[]
      copyMessage && copyMessage(item[0].id)
    }
  }

  const onSelectionChange = (rows: OrderRow[]): void => {
    const indices = rows.map((row: OrderRow): string => row.id)
    setSelectedOrders(indices)
  }

  const TableData = useMemo(() => {
    return <MaterialTable
      title={'Orders'}
      columns={columns}
      tableRef={tableRef}
      data={rows}
      icons={materialIcons as any}
      actions={toolbarActions}
      options={{
        search: true,
        paging: true,
        pageSize: 20,
        emptyRowsWhenPaging: false,
        pageSizeOptions: [20, 50, 100],
        filtering: filter,
        selection: true,
        columnsButton: true,
        rowStyle: { fontSize: '80%' }
      }}
      onSelectionChange={onSelectionChange}
      onChangeColumnHidden={() => setHiddenColumnChanges(!hiddenColumnChanges)}
      detailPanel={detailPanel}
      components={{
        Body: (props): React.ReactElement => {
          if (props.columns.length) {
            setTimeout(() => {
              setVisibleRows(props.data)
            })
          }
          return (<MTableBody
            {...props}
          />)
        },
        FilterRow: props => <CustomFilterRow
          {...props}
          onSupportPanelLayoutChange={onSupportPanelLayoutChange}
          getSupportPanelState={getSupportPanelState}
          cacheKey={TAB_MY_ORDERS}
        />
      }}
    />
  }, [rows, filter, toolbarActions, onlyShowMyOrders, columns, hiddenColumnChanges])

  // linter warned that this object was being created on each render, so use a useMemo
  const eventList = useMemo(() => {
    const eventList: CSSProperties = {
      height: '700px',
      overflowY: 'scroll'
    } as CSSProperties
    return eventList
  }, [currentTurn])

  return (
    <div className={styles['messages-list']} style={{ zIndex: 9 }}>
      {dialogMessage !== undefined &&
        <CustomDialog
          isOpen={dialogMessage !== undefined}
          header={'Review outcomes'}
          cancelBtnText={'OK'}
          onClose={closeDialogCallback}
          bodyStyle={eventList}
        >
          <>{dialogMessage}</>
        </CustomDialog>
      }
      {TableData}
    </div>
  )
}

export default PlanningMessagesList
