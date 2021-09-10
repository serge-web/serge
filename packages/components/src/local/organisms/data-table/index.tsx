import React, { useMemo, useState } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell, { SortDirection } from '@material-ui/core/TableCell'
import Collapse from '@material-ui/core/Collapse'
import TableHeadCell from '../../atoms/table-head-cell'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import moment from 'moment'

/* Import Types */
import Props, { RowDataType, RowType, RowWithCollapsibleType } from './types/props'

export const ROW_DATA_TYPE = 'RowDataType'
export const ROW_WITH_COLLAPSIBLE_TYPE = 'RowWithCollapsibleType'

/* Render component */
const useStyles = makeStyles((theme: Theme) => ({
  table: {
    width: '100%'
  },
  tableHead: {
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette[`${'primaryAccent'}`]?.main}`,

    '& .MuiTableCell-head': {
      fontWeight: 'bold',
      padding: '8px 16px',
      color: 'white',

      '&:not(:first-child)': {
        borderLeft: '1px solid rgba(255, 255, 255, .5)'
      }
    }
  },
  tableBody: {
    backgroundColor: 'white',

    '& .MuiTableCell-body': {
      color: theme.palette.primary.main,
      padding: '8px 16px'
    }
  },
  tableRow: {
    '&:nth-child(2n + 2)': {
      backgroundColor: theme.palette.grey['200']
    }
  },
  tableRowCollapsible: {
    '& .MuiTableCell-body': {
      padding: 0,
      borderBottom: 'none'
    }
  },
  tableRowCollapsibleTrigger: {
    cursor: 'pointer'
  }
}))
export const DataTable: React.FC<Props> = ({ columns, data }: Props) => {
  const classes = useStyles()
  const [filters, setFilters] = useState<Array<string>>([])
  const [filtersGroup, setFiltersGroup] = useState({})
  const [expandedRows, setExpandedRows] = useState<Array<number>>([])
  const [tableRows, setTableRow] = useState<RowType[]>([])
  const [sortingColId, setSortingColId] = useState<number>(0)

  const onFilter = (id: number, filter: string): void => {
    const filterGroup = filtersGroup[id] ? filtersGroup[id] : []
    if (filters.includes(filter)) {
      setFilters(filters.filter(f => f !== filter))
      setFiltersGroup({
        ...filtersGroup,
        ...{ [id]: filterGroup.filter((list: string) => list !== filter) }
      })
    } else {
      filters.push(filter)
      setFilters(filters)
      setFiltersGroup({
        ...filtersGroup,
        ...{ [id]: [...filterGroup, filter] }
      })
    }
  }
  const onToggleRow = (rowIndex: any): void => {
    if (expandedRows.includes(rowIndex)) {
      // remove it
      setExpandedRows(expandedRows.filter((val: number) => val !== rowIndex))
    } else {
      setExpandedRows([rowIndex, ...expandedRows])
    }
  }

  useMemo(() => {
    let localData = [...data]
    Object.keys(filtersGroup).forEach((id: string) => {
      const filter = filtersGroup[id]
      localData = localData.filter(row => {
        const localDataFilter = (filter as Array<string>)
        const value = row[id]?.label ||
          row[id] ||
          (row as unknown as RowWithCollapsibleType).cells[id]?.label ||
          (row as unknown as RowWithCollapsibleType).cells[id]
        return localDataFilter.length === 0 || localDataFilter.includes(value)
      })
    })
    setTableRow(localData)
  }, [data, filtersGroup])

  const sortTable = (columnId = 0, sortDirection: SortDirection): void => {
    let sortedRows = [...tableRows].sort((a: RowType, b: RowType): number => {
      const rowOne = a as unknown as RowWithCollapsibleType
      const rowTwo = b as unknown as RowWithCollapsibleType
      return rowOne.cells[columnId] > rowTwo.cells[columnId] ? 1 : -1
    })
    if (sortDirection === 'desc') {
      sortedRows = sortedRows.reverse()
    }
    setSortingColId(columnId)
    setTableRow(sortedRows)
  }

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            {
              columns.map((column, columnId) => (
                <TableCell key={`column-${columnId}`}>
                  <TableHeadCell
                    sort={true}
                    sortingColId={sortingColId}
                    onSort={sortTable}
                    filters={filters}
                    onFilter={onFilter}
                    content={column}
                    id={columnId}
                  />
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {
            tableRows.map((row: RowType, rowCount: number) => {
              if (row.type === ROW_WITH_COLLAPSIBLE_TYPE) {
                const { collapsible, cells, rowKey } = row
                const tableCells = cells || row
                // ideally we'll use the contents of cell zero (message-id). If we can't
                // just use the row count
                const rowIndex: any = (tableCells.length && tableCells[0]) || rowCount
                const isExpanded = expandedRows.includes(rowIndex)
                return (
                  <React.Fragment key={rowKey}>
                    <TableRow
                      className={cx(classes.tableRow, classes.tableRowCollapsibleTrigger)}
                      onClick={(): void => onToggleRow(rowIndex)}
                    >
                      {
                        tableCells.map((cell: RowDataType, index: number) => {
                          return (
                            <TableCell key={`cell=${index}`}>
                              {index === 0 &&
                                <>
                                  <FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} />&nbsp;
                                </>
                              }
                              {
                                typeof cell !== 'string' && cell?.component !== undefined
                                  ? cell.component
                                  : columns[index] === 'Updated' ? moment(`${cell}`).fromNow() : cell
                              }
                            </TableCell>
                          )
                        })
                      }
                    </TableRow>
                    <TableRow className={classes.tableRowCollapsible}>
                      <TableCell colSpan={cells.length}>
                        <Collapse in={isExpanded}>
                          {isExpanded && collapsible((): void => { onToggleRow(rowIndex) })}
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                )
              }
              return <div key={rowCount}>Looks like DataTable not developed for ROW_DATA_TYPE</div>
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
