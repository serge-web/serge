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
import { EMPTY_CELL } from 'src/config'

export const ROW_DATA_TYPE = 'RowDataType'
export const ROW_WITH_COLLAPSIBLE_TYPE = 'RowWithCollapsibleType'
export type TableCellType = {
  component: any
  label: string
}
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
    },
    '& .card,.card-body,.bg-light,.row': {
      padding: '0.10rem'
    },
    '& .card-body > div > div': {
      padding: '0.20rem'
    },
    '& .edt-disable .card.card-body.bg-light > div > div > h3': {
      display: 'none'
    },
    '& .edt-enable .card.card-body.bg-light > div > div > h3 > span': {
      display: 'none'
    }
  },
  tableRowCollapsibleTrigger: {
    cursor: 'pointer'
  }
}))

export const DataTable: React.FC<Props> = ({ columns, data, sort, noExpand = false }: Props) => {
  const classes = useStyles()
  const [filters, setFilters] = useState<Array<string>>([])
  const [filtersGroup, setFiltersGroup] = useState({})
  const [expandedRows, setExpandedRows] = useState<Array<string>>([])
  const [tableRows, setTableRow] = useState<RowType[]>([])
  const [sortingColId, setSortingColId] = useState<number>(0)
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

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

  type RowItemData = string | number | {
    label: string | number
    [property: string]: any
  }

  const onToggleRow = (rowIndex: string): void => {
    if (expandedRows.includes(rowIndex)) {
      // remove it
      setExpandedRows(expandedRows.filter((val) => val !== rowIndex))
    } else {
      setExpandedRows([rowIndex, ...expandedRows])
    }
  }

  const sortFn = (rows: RowType[], columnId = 0, sortWithCurentDirection = true): RowType[] => {
    let sortedRows = [...rows].sort((a: RowType, b: RowType): number => {
      const rowOne = a as unknown as RowWithCollapsibleType
      const rowTwo = b as unknown as RowWithCollapsibleType
      const cellOne = rowOne.cells[columnId]
      const cellTwo = rowTwo.cells[columnId]
      let cellOneValue = ''
      let cellTwoValue = ''
      if (typeof (cellOne) === 'object' && cellOne.label) {
        cellOneValue = cellOne.label
        cellTwoValue = cellTwo.label
      } else if (typeof (cellOne) === 'string') {
        cellOneValue = cellOne
        cellTwoValue = cellTwo as unknown as string
      } else {
        throw new Error('Sort fn cannot handle this cell type' + cellOne)
      }
      /**
       * Using localeCompare for string comparison, by passing the numeric: true option, it will smartly recognize numbers:
       * `Blue-1`  < `Blue-2`
       * `Blue-10` > `Blue-2`
       */
      return cellOneValue.localeCompare(cellTwoValue, undefined, { numeric: true, sensitivity: 'base' })
    })

    /** we should keep the current sort direction when receving the new message */
    if (sortWithCurentDirection && sortDirection === 'desc') {
      sortedRows = sortedRows.reverse()
    }

    return sortedRows
  }

  const sortTable = (columnId = 0, direction: SortDirection): void => {
    let sortedRows = sortFn(tableRows, columnId, false)
    if (direction === 'asc') {
      sortedRows = sortedRows.reverse()
    }
    setSortDirection(direction === 'asc' ? 'desc' : 'asc')
    setSortingColId(columnId)
    setTableRow(sortedRows)
  }
  const rowItemDataToString = (data: RowItemData): string => {
    if (typeof data === 'string') {
      return data
    } else if (typeof data === 'number') {
      return data + ''
    } else {
      return `${data.label}`
    }
  }

  const matches = (src: string[], dest: string | string[] | TableCellType): boolean => {
    if (Array.isArray(dest)) {
      const destStr = dest.map(item => item.trim()).join(' ') || EMPTY_CELL
      return src.some(item => destStr.includes(item))
    } else if (typeof dest === 'string') {
      return src.includes(dest)
    }
    return !dest.component && !dest.label && src.includes(EMPTY_CELL)
  }

  const updateFilter = (oldFilter: string[], currentFilter: string[]): string[] => {
    return oldFilter.reduce((result: string[], filter: string) => {
      if (currentFilter.includes(filter)) {
        result.push(filter)
      }
      return result
    }, [])
  }

  useMemo(() => {
    let localData = [...data]
    Object.keys(filtersGroup).forEach((id: string) => {
      /** the column filters list has changed but the current filtersGroup still keep the invalid value, should update this */
      const filter = updateFilter(filtersGroup[id] as string[], columns[id].filters)
      localData = localData.filter(row => {
        const localDataFilter = (filter as Array<string>)
        const value = row[id]?.label ||
          row[id] ||
          (row as unknown as RowWithCollapsibleType).cells[id]?.label ||
          (row as unknown as RowWithCollapsibleType).cells[id]
        return localDataFilter.length === 0 || matches(localDataFilter, value)
      })
    })
    setTableRow(sortFn(localData, sortingColId))
  }, [data, filtersGroup, columns])

  return (
    <TableContainer>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            {
              columns.map((column, columnId) => (
                <TableCell key={`column-${columnId}`}>
                  <TableHeadCell
                    sort={sort}
                    sortDirection={sortDirection}
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
                const rowIndexMixed: RowItemData = (tableCells.length && tableCells[0]) || rowCount
                const rowIndex: string = rowItemDataToString(rowIndexMixed)
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
                                  {!noExpand && <FontAwesomeIcon icon={isExpanded ? faMinus : faPlus} />}&nbsp;
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
                        <Collapse in={isExpanded} enter={false} exit={false}>
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
