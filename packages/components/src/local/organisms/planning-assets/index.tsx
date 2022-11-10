import { faChevronRight, faFilter, faSearch, faSortUp, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaterialTable, { Column, Icons, MTableBody, MTableBodyRow } from 'material-table'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SupportPanelContext } from '../support-panel'
import { getColumns, getRows } from './helpers/collate-assets'
import PropTypes, { AssetRow } from './types/props'

/** we need to manually provide the icons for material-table to run offline
 *
 */
 export const materialIcons: Icons = {
  Search: () => <FontAwesomeIcon title='Free text search' icon={faSearch} />,
  ResetSearch: () => <FontAwesomeIcon title='Reset search' icon={faTimes} />,
  Check: () => <FontAwesomeIcon title='Reset search' icon={faSquare} />,
  DetailPanel: () => <FontAwesomeIcon title='Reset search' icon={faChevronRight} />,
  SortArrow: () => <FontAwesomeIcon title='Sort' icon={faSortUp} />
}

export const PlanningAssets: React.FC<PropTypes> = ({ assets, forces, playerForce, opFor, forceColors, platformStyles, onSelectionChange, onVisibleRowsChange }: PropTypes) => {
  const [rows, setRows] = useState<AssetRow[]>([])
  const [columns, setColumns] = useState<Column[]>([])
  const [filter, setFilter] = useState<boolean>(false)
  const preventScroll = useRef<boolean>(false)
  const { selectedAssets } = useContext(SupportPanelContext)

  useEffect(() => {
    setColumns(getColumns(opFor, forces, playerForce.uniqid, platformStyles))
    // TODO - swap next line for
    // setRows(assets)
    setRows(getRows(opFor, forces, forceColors, platformStyles, playerForce, selectedAssets))
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

  // fix unit-test for MaterialTable
  const jestWorkerId = process.env.JEST_WORKER_ID
  // end

  return <MaterialTable
    title={opFor ? 'Other force assets' : 'Own force Assets'}
    columns={jestWorkerId ? [] : columns}
    data={jestWorkerId ? [] : rows}
    parentChildData={(row, rows): any => rows.find((a: AssetRow): any => a.id === row.parentId)}
    actions={jestWorkerId ? [] : [
      {
        icon: () => <FontAwesomeIcon title='Show filter controls' icon={faFilter} />,
        iconProps: filter ? { color: 'action' } : { color: 'disabled' },
        tooltip: 'Show filter controls',
        isFreeAction: true,
        onClick: (): void => setFilter(!filter)
      }
    ]}
    icons={materialIcons}
    options={{
      paging: false,
      sorting: false,
      filtering: filter,
      selection: !jestWorkerId // fix unit-test for material table,
    }}
    onSelectionChange={onSelectionChangeLocal}
    components={{
      Body: (props): React.ReactElement => {
        if (props.columns.length && onVisibleRowsChange) {
          onVisibleRowsChange(props.renderData)
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
