import React, { useState } from 'react'
import moment from 'moment'
import TextInput from '../../atoms/text-input'

/* Import Types */
import Props, { ListItem } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const SearchList: React.FC<Props> = ({
  placeholder,
  listData,
  selected,
  setSelected
}: Props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const searchByQuery = (listItem: ListItem): boolean => {
    const { details } = listItem
    return details.title === '' || details.title.toLowerCase().includes(searchQuery.toLowerCase())
  }
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
          listData.filter(searchByQuery).map((item) => {
            const active = item._id === selected ? 'active' : null
            const title = item.details.title ? item.details.title : '[Title missing]'
            const date = moment(item.lastUpdated).format('DD/MM/YY')
            return (
              <span
                className={
                  `${styles['searchlist-title']} ${active ? styles.active : ''}`
                }
                onClick={(): void => setSelected(item)}
                key={item._id}
              >
                {title} - {date}
              </span>
            )
          })
        }
      </div>
    </div>
  )
}

export default SearchList
