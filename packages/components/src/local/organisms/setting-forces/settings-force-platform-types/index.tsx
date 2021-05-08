import React, { FC, ChangeEvent, ReactNode, useState } from 'react'

/* Import proptypes */
import { ASSET_ITEM, PLATFORM_ITEM } from '../constants'
import PropTypes from './types/props'
// import { ForceData } from '@serge/custom-types'
import { PlatformItemType, ListItemType, ForceItemType } from '../types/sortableItems'
import { Asset } from '@serge/custom-types'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import { kebabCase } from 'lodash'
import { generateHashCode } from '@serge/helpers'
import uniqid from 'uniqid'

import cx from 'classnames'
import { getIconClassname } from '../../../asset-icon'
import Grid from '@material-ui/core/Grid'
import { ReactSortable } from 'react-sortablejs'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextInput from '../../../atoms/text-input'
import NativeSelect from '@material-ui/core/NativeSelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'

export const AssetsAccordion: FC<PropTypes> = ({ platformTypes, selectedForce, onChangeHandler }) => {
  const [selectedAssetItem, setSelectedAssetItem] = useState('')
  const allPlatforms: PlatformItemType[] = platformTypes.map(platform => ({ ...platform, id: platform.name, type: PLATFORM_ITEM }))

  const renderAssetForm = (): ReactNode => {
    if (!Array.isArray(selectedForce.assets)) return null
    if (selectedForce.assets.length === 0) return null
    const asset = selectedForce.assets.find(asset => asset.uniqid === selectedAssetItem)
    if (typeof asset === 'undefined') {
      const [firstAsset] = selectedForce.assets
      setSelectedAssetItem(firstAsset.uniqid)
      return null
    }

    const handleChangeAssetName = (event: ChangeEvent<HTMLInputElement>): void => {
      asset.name = event.target.value
      onChangeHandler(selectedForce)
    }
    const handleChangeAssetUniqid = (_event: ChangeEvent<HTMLInputElement>): void => {
      // NOTE: uniqid Readonly
      // asset.uniqid = event.target.value
      // handleChangeForce(selectedForce)
      console.log(_event)
    }
    const handleChangeAssetContactId = (_event: ChangeEvent<HTMLInputElement>): void => {
      // NOTE: contactId Readonly
      // asset.contactId = event.target.value
      // handleChangeForce(selectedForce)
      console.log(_event)
    }
    const handleChangeAssetLocation = (_event: ChangeEvent<HTMLSelectElement>): void => {
      // handleChangeForce(selectedForce)
      console.log(_event)
    }

    return <div className={styles['view-result-box']}>
      <List dense={true}>
        <ListItem>
          <ListItemText>
            <label className={styles['input-group']}>
              <span className={styles['list-title']}>Name</span>
              <TextInput customColor="transparent" className={styles['list-input']} value={asset.name} onChange={handleChangeAssetName}/>
            </label>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <label className={styles['input-group']}>
              <span className={styles['list-title']}>ContactID</span>
              <TextInput customColor="transparent" className={styles['list-input']} value={asset.contactId} onChange={handleChangeAssetContactId}/>
            </label>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <label className={styles['input-group']}>
              <span className={styles['list-title']}>UniqueID</span>
              <TextInput customColor="transparent" className={styles['list-input']} value={asset.uniqid} onChange={handleChangeAssetUniqid}/>
            </label>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <div className={styles['input-group']}>
              <span className={styles['list-title']}>Location</span>
              <NativeSelect
                value={asset.position}
                name="age"
                className={styles['age-select']}
                onChange={handleChangeAssetLocation}
                inputProps={{ 'aria-label': 'age' }}
              >
                <option value="" disabled>
                    Placeholder
                </option>
                <option value={10}>Chosen By Player</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </div>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  }

  const selectedForcePlatforms: ForceItemType[] = Array.isArray(selectedForce.assets)
    ? selectedForce.assets.map(asset => ({ ...asset, id: asset.platformType, type: ASSET_ITEM }))
    : []
  
  const handleForcePlatformTypesChange = (nextList: ListItemType[]): void => {
    let changes: boolean = nextList.length !== selectedForcePlatforms.length
    
    const forceAssets: Asset[] = nextList.map((item, key) => {
      if (item.type === PLATFORM_ITEM) {
        changes = true
        const assetid = uniqid.time()
        return {
          uniqid: 'a' + assetid,
          contactId: 'C' + generateHashCode(assetid),
          name: item.id,
          platformType: kebabCase(item.id.toLowerCase()),
          perceptions: [],
          condition: ''
        } as Asset
      }
      const nextItem = item as Asset
      const compareAsset = selectedForcePlatforms[key]
      if (typeof compareAsset === 'undefined' || nextItem.uniqid !== compareAsset.uniqid) changes = true
      return nextItem
    })

    if (changes) {
      onChangeHandler({ ...selectedForce, assets: forceAssets })
    }
  }

  return (
    <Accordion className={styles.accordion}>
      <AccordionSummary
        className={styles['accordion-header']}
        expandIcon={<FontAwesomeIcon icon={faCaretDown} className={styles['arrow-icon']} />}
      >
        <Typography className={styles['accordion-title']}>Assets</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ flexGrow: 1 }}>
          {allPlatforms.length > 0
            ? <Grid container spacing={3}>
              <Grid item xs={3}>
                <div className={styles['icons-col']}>
                  <p>Available platform types</p>
                  <ReactSortable
                    list={allPlatforms}
                    sort={false}
                    setList={(): void => { console.log('') }}
                    group={'platformTypesList'}
                  >
                    {allPlatforms.map((item) => {
                      const icClassName = getIconClassname('', kebabCase(item.name))
                      return <div key={item.id} className={styles['icon-item-main']}>
                        <div className={styles['icon-box-holder']}>
                          <div className={styles['icon-box-content']}>
                            <div key={item.id + item.type} className={styles['icon-box']}>
                              <div className={cx(icClassName, styles['item-icon'])}/>
                            </div>
                          </div>
                        </div>
                      </div>
                    })}
                  </ReactSortable>
                </div>
              </Grid>
              <Grid item xs={5}>
                <div className={styles['assets-list-box']}>
                  <p>List of assets</p>
                  <div className={styles['assets-list-scrollable-box']}>
                    <List dense={true}>
                      <ReactSortable
                        list={selectedForcePlatforms}
                        sort={false}
                        setList={handleForcePlatformTypesChange}
                        group={'platformTypesList'}
                      >
                        {selectedForcePlatforms.map((item) => {
                          const icClassName = getIconClassname('', item.platformType)
                          return <div
                            key={item.uniqid}
                            className={cx(styles['list-item'], item.uniqid === selectedAssetItem && styles['list-item-selected'])}
                            onClick={(): void => { setSelectedAssetItem(item.uniqid) }}
                          >
                            <div className={styles['item-asset-icon-box']}>
                              <div className={cx(icClassName, styles['item-asset-icon'])}/>
                            </div>
                            <div className={styles['asset-name']}>{item.name}</div>
                          </div>
                        })}
                      </ReactSortable>
                    </List>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                {renderAssetForm()}
              </Grid>
            </Grid> : 'no available Platform Types'}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default AssetsAccordion
