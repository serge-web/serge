import React, { useState } from 'react'
import TextInput from '../../atoms/text-input'
import SearchListRow from '../../atoms/search-list-row'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const SearchList: React.FC<Props> = ({
  placeholder,
  listData,
  setSelected,
  activeRow,
  rowLabel,
  rowFilter,
  onDuplicate,
  onDelete
}: Props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const setQuery = (target: { value: string }): any => {
    setSearchQuery(target.value)
  }
  return (
    <div className={styles.searchlist}>
      <TextInput
        fullWidth
        placeholder={placeholder}
        updateState={setQuery}
        value={searchQuery}
      />
      <div className={styles['searchlist-list']}>
        {
          listData.filter(list => rowFilter(list, searchQuery)).map((item, id) => {
            return (
              <SearchListRow
                active={activeRow(item)}
                onClick={(): void => setSelected(item)}
                key={id}
                onDuplicate={onDuplicate}
                onDelete={onDelete}
              >
                { rowLabel(item) }
              </SearchListRow>
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchList
