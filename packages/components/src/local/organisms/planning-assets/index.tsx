import { faSearchMinus, faSearchPlus, faSkull, faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Column, MTableBody, MTableBodyRow, MTableToolbar } from '@material-table/core'
import cx from 'classnames'
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { SupportPanelContext } from '../support-panel'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { getColumns } from './helpers/collate-assets'
import CustomFilterRow from './helpers/custom-filter-row'
import styles from './styles.module.scss'
import PropTypes, { AssetRow } from './types/props'
import { expiredStorage, SUPPORT_PANEL_LAYOUT } from '@serge/config'
import { TAB_MY_FORCE, TAB_OPP_FOR } from '../support-panel/constants'

export const PlanningAssets: React.FC<PropTypes> = ({
  assets, forces, playerForce, opFor, platformStyles,
  onSelectionChange, onVisibleRowsChange, onVisibleColumnsChange
}: PropTypes) => {
  const [rows, setRows] = useState<AssetRow[]>([])
  const [columns, setColumns] = useState<Column<any>[]>([])
  const [showColumnFilters, setFilter] = useState<boolean>(false)
  const [showDead, setShowDead] = useState<boolean>(false)
  const preventScroll = useRef<boolean>(false)
  const { selectedAssets, assetsCache } = useContext(SupportPanelContext)

  const [visibleRows, setVisibleRows] = useState<AssetRow[]>([])
  const [visibleRowsCache, setVisibleRowsCache] = useState<string[]>([])

  // reference to table, we use it to clear the selection
  const tableRef = useRef<typeof MaterialTable | undefined>(null)

  useEffect(() => {
    // we're getting too many visibleRows updates, plus
    // the content of visible rows will change if
    // a row gets selected.  Our use of this callback however
    // is to update the map if the page is changed or if a filter
    // is applied
    //
    // So, cache the current ids, and compare that to the new
    // set of ids
    const visibleRowIds = visibleRows.map((item) => item.id)
    if (visibleRowIds !== visibleRowsCache) {
      // fire the change
      setVisibleRowsCache(visibleRowIds)
      // fire the change
      onVisibleRowsChange && onVisibleRowsChange(visibleRows)
    }
  }, [visibleRows])

  useEffect(() => {
    if (!columns.length || !showColumnFilters) {
      const columns = getColumns(opFor, forces, playerForce.uniqid, platformStyles, assetsCache)
      const cachedColumns = expiredStorage.getItem(SUPPORT_PANEL_LAYOUT.VISIBLE_COLUMNS)
      if (cachedColumns) {
        const parsedCols: { [x: string]: { field: string, hidden: string }[] } = JSON.parse(cachedColumns)
        const key = opFor ? TAB_OPP_FOR : TAB_MY_FORCE;
        (parsedCols[key] || []).map(mapCol => {
          columns.some(col => {
            if (col.field === mapCol.field) {
              col.hidden = Boolean(mapCol.hidden)
              return true
            }
            return false
          })
        })
      }
      setColumns(columns)
    }
  }, [playerForce, forces, showColumnFilters])

  useEffect(() => {
    const assetsOfInterest = showDead ? assets : assets.filter((asset) => asset.health && asset.health > 0)
    if (!showColumnFilters) {
      setRows(assetsOfInterest)
    }
  }, [assets, showColumnFilters, showDead, selectedAssets])

  useEffect(() => {
    if (selectedAssets.length) {
      const lastSelectedAssetId = selectedAssets[selectedAssets.length - 1]
      const elmRow = document.getElementById(lastSelectedAssetId)
      if (elmRow && !preventScroll.current) {
        const smoothScroll: ScrollIntoViewOptions = { behavior: 'smooth' }
        elmRow.scrollIntoView(smoothScroll)
      }
    }
    preventScroll.current = false
  }, [selectedAssets])

  const onSelectionChangeLocal = (rows: AssetRow[]) => {
    preventScroll.current = !!rows.length
    onSelectionChange && onSelectionChange(rows)
  }

  const clearSelectedAssets = (): void => {
    // clear the table selection - this will also fire the
    // selection handler in the parent
    if (tableRef.current) {
      const table = tableRef.current as any
      table.onAllSelected(false)
    }
  }

  const TableData = useMemo(() => {
    return <MaterialTable
      title={opFor ? 'Other force assets' : 'Own force Assets'}
      tableRef={tableRef}
      columns={columns}
      data={rows}
      actions={[
        {
          icon: () => <FontAwesomeIcon title='Show dead asset' icon={faSkull} className={cx({ [styles.selected]: showDead })} />,
          iconProps: showDead ? { color: 'action' } : { color: 'disabled' },
          tooltip: !showDead ? 'Show dead assets' : 'Hide dead assets',
          isFreeAction: true,
          onClick: (): void => setShowDead(!showDead)
        },
        {
          icon: () => <FontAwesomeIcon title='Show filter controls' icon={showColumnFilters ? faSearchMinus : faSearchPlus} className={cx({ [styles.selected]: showColumnFilters })} />,
          iconProps: showColumnFilters ? { color: 'action' } : { color: 'disabled' },
          tooltip: !showColumnFilters ? 'Show filter controls' : 'Hide filter controls',
          isFreeAction: true,
          onClick: (): void => setFilter(!showColumnFilters)
        }
      ]}
      icons={materialIcons as any}
      options={{
        paging: true,
        pageSize: 50,
        pageSizeOptions: [50, 100, 200, 500, 1000, 2000],
        filtering: showColumnFilters,
        selection: true,
        rowStyle: { fontSize: '80%' },
        columnsButton: true
      }}
      onSelectionChange={onSelectionChangeLocal}
      components={{
        Body: (props): React.ReactElement => {
          if (props.columns.length && onVisibleRowsChange) {
            setTimeout(() => {
              setVisibleRows(props.renderData)
              onVisibleColumnsChange && onVisibleColumnsChange(props.columns)
            })
          }
          return (<MTableBody
            {...props}
          />)
        },
        Toolbar: props => (
          <div>
            { selectedAssets.length > 0 &&
                <FontAwesomeIcon size='2x' title='Clear selection' onClick={clearSelectedAssets} icon={faBan} border />
            }
            <MTableToolbar {...props} />
          </div>
        ),
        Row: props => <MTableBodyRow id={props.data.id} {...props} />,
        FilterRow: props => <CustomFilterRow {...props} forces={forces} />
      }}
    />
  }, [rows, showColumnFilters])

  return TableData
}

export default PlanningAssets
