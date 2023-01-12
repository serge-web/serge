import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Column, MTableBody, MTableBodyRow } from '@material-table/core'
import cx from 'classnames'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SupportPanelContext } from '../support-panel'
import { materialIcons } from '../support-panel/helpers/material-icons'
import { getColumns, getRows } from './helpers/collate-assets'
import styles from './styles.module.scss'
import PropTypes, { AssetRow } from './types/props'

export const PlanningAssets: React.FC<PropTypes> = ({
  assets, forces, playerForce, opFor, forceColors, platformStyles,
  onSelectionChange, onVisibleRowsChange, platformTypes, attributeTypes
}: PropTypes) => {
  const [rows, setRows] = useState<AssetRow[]>([])
  const [columns, setColumns] = useState<Column<any>[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const preventScroll = useRef<boolean>(false)
  const { selectedAssets } = useContext(SupportPanelContext)

  useEffect(() => {
    if (!columns.length) {
      setColumns(getColumns(opFor, forces, playerForce.uniqid, platformStyles))
    }
    // TODO - swap next line for
    // setRows(assets)
    setRows(getRows(opFor, forces, forceColors, platformStyles, playerForce, selectedAssets, platformTypes, attributeTypes))
    if (selectedAssets.length) {
      const lastSelectedAssetId = selectedAssets[selectedAssets.length - 1]
      const elmRow = document.getElementById(lastSelectedAssetId)
      if (elmRow && !preventScroll.current) {
        const smoothScroll: ScrollIntoViewOptions = { behavior: 'smooth' }
        elmRow.scrollIntoView(smoothScroll)
      }
    }
    preventScroll.current = false
  }, [playerForce, forces, selectedAssets, assets])

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
        icon: () => <FontAwesomeIcon title='Show filter controls' icon={faFilter} className={cx({ [styles.selected]: filter })} />,
        iconProps: filter ? { color: 'action' } : { color: 'disabled' },
        tooltip: 'Show filter controls',
        isFreeAction: true,
        onClick: (): void => setFilter(!filter)
      }
    ]}
    icons={materialIcons as any}
    options={{
      paging: true,
      pageSize: 20,
      pageSizeOptions: [5, 10, 15, 20],
      filtering: filter,
      selection: true,
      rowStyle: {fontSize:'80%'}
    }}
    onSelectionChange={onSelectionChangeLocal}
    components={{
      Body: (props): React.ReactElement => {
        if (props.columns.length && onVisibleRowsChange) {
          setTimeout(() => {
            onVisibleRowsChange(props.renderData)
          })
        }
        return (<MTableBody
          {...props}
        />)
      },
      Row: props => <MTableBodyRow id={props.data.id} {...props} />
    }}
  />
}

export default PlanningAssets
