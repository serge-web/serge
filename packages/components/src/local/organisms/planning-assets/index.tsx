import { faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Column, MTableBody, MTableBodyRow } from '@material-table/core'
import { expiredStorage } from '@serge/config'
import cx from 'classnames'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SUPPORT_PANEL_LAYOUT } from '../planning-channel'
import { SupportPanelContext } from '../support-panel'
import { TAB_MY_FORCE, TAB_OPP_FOR } from '../support-panel/constants'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { getColumns } from './helpers/collate-assets'
import CustomFilterRow from './helpers/custom-filter-row'
import styles from './styles.module.scss'
import PropTypes, { AssetRow } from './types/props'

export const PlanningAssets: React.FC<PropTypes> = ({
  assets, forces, playerForce, opFor, platformStyles,
  onSelectionChange, onVisibleRowsChange, onVisibleColumnsChange
}: PropTypes) => {
  const [rows, setRows] = useState<AssetRow[]>([])
  const [columns, setColumns] = useState<Column<any>[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const preventScroll = useRef<boolean>(false)
  const { selectedAssets, assetsCache } = useContext(SupportPanelContext)

  const [visibleRows, setVisibleRows] = useState<AssetRow[]>([])
  const [visibleRowsCache, setVisibleRowsCache] = useState<string[]>([])

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
    if (!columns.length || !filter) {
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
  }, [playerForce, forces, filter])

  useEffect(() => {
    // const newRows = getRows(opFor, forces, forceColors, platformStyles, playerForce, selectedAssets, platformTypes, attributeTypes)
    // setRows(newRows)
    // TODO - swap next line for
    if (!filter) {
      setRows(assets)
    }
  }, [assets, filter])

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

  return <MaterialTable
    title={opFor ? 'Other force assets' : 'Own force Assets'}
    columns={columns}
    data={rows}
    parentChildData={(row, rows): any => rows.find((a: AssetRow): any => a.id === row.parentId)}
    actions={[
      {
        icon: () => <FontAwesomeIcon title='Show filter controls' icon={filter ? faSearchMinus : faSearchPlus} className={cx({ [styles.selected]: filter })} />,
        iconProps: filter ? { color: 'action' } : { color: 'disabled' },
        tooltip: !filter ? 'Show filter controls' : 'Hide filter controls',
        isFreeAction: true,
        onClick: (): void => setFilter(!filter)
      }
    ]}
    icons={materialIcons as any}
    options={{
      paging: true,
      pageSize: 50,
      pageSizeOptions: [5, 10, 15, 20, 50, 100, 200, 500],
      filtering: filter,
      selection: true,
      rowStyle: { fontSize: '80%' },
      columnsButton: true
    }}
    onSelectionChange={onSelectionChangeLocal}
    components={{
      Body: (props): React.ReactElement => {
        if (props.columns.length) {
          setTimeout(() => {
            setVisibleRows(props.renderData)
            onVisibleColumnsChange && onVisibleColumnsChange(props.columns)
          })
        }
        return (<MTableBody
          {...props}
        />)
      },
      Row: props => <MTableBodyRow id={props.data.id} {...props} />,
      FilterRow: props => <CustomFilterRow {...props} forces={forces} />
    }}
  />
}

export default PlanningAssets
