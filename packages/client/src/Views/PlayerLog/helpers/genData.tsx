import { Column, Row } from '@serge/components';
import React from 'react';
import { PlayerLogModal } from '../types/props';
import styles from '../styles.module.scss'
import cx from 'classnames'

type PlayerLogDataTable = {
  columns: Column[];
  rows: Row[];
  customStyles: any;
}
type ColumnListItem = {
  label: string;
  field: string;
}
export const genPlayerLogDataTable = (rows: PlayerLogModal[]): PlayerLogDataTable => {

  const sortCol = (str1: string, str2: string): number => {
    const a = str1.toLowerCase()
    const b = str2.toLowerCase()

    return a > b ? 1 : -1
  }

  const cellRender = (row: Row, col: ColumnListItem): string | React.ReactElement => {
    switch (col.field) {
      case 'forceName':
        return (
          <span className={styles['custom-cell']}>
            <div className={styles['role-icon']} style={{ backgroundColor: row.forceColor }} />
            {row[col.field]}
          </span>
        )

      case 'roleName':
        return (
          <span className={styles['custom-cell']}>
            <div className={cx({ [styles['role-icon']]: true, [styles.active]: row.active, [styles.inactive]: !row.active })} />
            {row[col.field]}
          </span>
        )

      default:
        return row[col.field]
    }
  }

  const columnsList: ColumnListItem[] = [
    { label: 'Force', field: 'forceName' },
    { label: 'Role', field: 'roleName' },
    { label: 'Last active', field: 'lastActive' },
    { label: 'Message', field: 'message' },
    { label: 'Sent at', field: 'lastMessage' }
  ]

  const columns = columnsList.map(col => {
    return {
      name: col.label,
      field: col.field,
      selector: (row: Row): string | React.ReactElement => cellRender(row, col),
      sortable: true,
      sortFunction: (rowA: Row, rowB: Row): number => sortCol(rowA[col.field], rowB[col.field]),
      colFilter: ['roleName', 'message'].includes(col.field) // enable col filter for 2 cols
    }
  })

  const customStyles = {
    headRow: {
      style: {
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderTopColor: '#3ef1ea',
        fontWeight: 'bold',
        fontSize: 'initial',
        backgroundColor: '#012858',
        color: 'white'
      }
    },
    headCells: {
      style: {
        borderLeftStyle: 'solid',
        borderLeftWidth: '1px',
        borderRightColor: 'white'
      }
    }
  }

  return {
    columns,
    rows,
    customStyles
  }
}