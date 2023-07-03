import React, { MouseEvent, useState } from 'react'
import TextInput from '../../atoms/text-input'
import SearchListRow from '../../atoms/search-list-row'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
const SearchList: React.FC<Props> = ({
  placeholder,
  listData,
  setSelected,
  activeRow,
  rowLabel,
  rowFilter,
  onDuplicate,
  onDelete,
  withSearch
}: Props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const setQuery = (target: { value: string }): any => {
    setSearchQuery(target.value)
  }
  return (
    <div className={styles.searchlist}>
      {
        withSearch && (
          <TextInput
            fullWidth
            placeholder={placeholder}
            updateState={setQuery}
            value={searchQuery}
          />
        )
      }
      <div className={`${styles['searchlist-list']} searchlist-list`}>
        {
          listData.filter(list => rowFilter(list, searchQuery)).map((item, id) => {
            return (
              <SearchListRow
                active={activeRow(item)}
                onClick={(): void => setSelected(item)}
                key={id}
                onDuplicate={onDuplicate ? (): void => onDuplicate(item) : undefined}
                onDelete={onDelete ? (e: MouseEvent<SVGSVGElement>): void => {
                  e.stopPropagation()
                  onDelete(item)
                } : undefined}
              >
                {rowLabel(item)}
              </SearchListRow>
            )
          })
        }
      </div>
    </div>
  )
}

SearchList.defaultProps = {
  withSearch: true
}

export default SearchList
