import React, { FC, ChangeEvent, ReactNode, useState, useEffect } from 'react'
import { LaydownTypes } from '@serge/config'
/* Import proptypes */
import { ASSET_ITEM, PLATFORM_ITEM } from '../constants'
import PropTypes from './types/props'
// import { ForceData } from '@serge/custom-types'
import { PlatformItemType, ListItemType, ForceItemType } from '../types/sortableItems'
import { Asset, GroupItem } from '@serge/custom-types'

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

import Groups from '../../../helper-elements/groups'
import { NodeType } from '../../../helper-elements/groups/types/props'
import canCombineWith from '../../../world-state/helpers/can-combine-with'

export const AssetsAccordion: FC<PropTypes> = ({ platformTypes, selectedForce, onChangeHandler, routes = [] }) => {
  const [selectedAssetItem, setSelectedAssetItem] = useState('')
  const [fixedLocationValue, setFixedLocationValue] = useState('')
  const [showInput, setShowInput] = useState(false)
  const [addAssetActive, setAddAssetActive] = useState(false)
  const [selectedPlatforms, setSelectedPlatforms] = useState<ForceItemType[]>([])

  const canCombineWithLocal = (draggingItem: GroupItem, item: GroupItem, _parents: Array<GroupItem>, _type: NodeType): boolean => {
    return canCombineWith({ routes }, draggingItem.uniqid, item.uniqid, _parents, _type, undefined)
  }

  const allPlatforms: PlatformItemType[] = platformTypes.map(platform => ({ ...platform, id: platform.name, type: PLATFORM_ITEM }))

  useEffect(() => {
    if (Array.isArray(selectedForce.assets)) {
      const asset = selectedForce.assets.find(asset => asset.uniqid === selectedAssetItem)
      if (asset?.locationPending !== LaydownTypes.Fixed) {
        setShowInput(false)
        setFixedLocationValue('')
      } else {
        setShowInput(true)
      }
    }
  }, [selectedAssetItem])

  const renderAssetForm = (): ReactNode => {
    if (selectedPlatforms.length === 0) return null
    if (!Array.isArray(selectedForce.assets)) return null
    if (selectedForce.assets.length === 0) return null
    const asset = selectedForce.assets.find(asset => asset.uniqid === selectedAssetItem)
    if (typeof asset === 'undefined') {
      const [firstAsset] = selectedForce.assets
      setSelectedAssetItem(firstAsset.uniqid)
      return null
    }

    const fixedLocationHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      const currentValue = event.target.value.toUpperCase()
      const regex = /^[a-zA-Z]{0,2}\d{0,2}$/
      if (regex.test(currentValue)) {
        setFixedLocationValue(currentValue)
        asset.position = currentValue
      }
      onChangeHandler(selectedForce)
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
    const handleChangeAssetLocation = (event: ChangeEvent<HTMLSelectElement>): void => {
      if (event.target.value && event.target.value === LaydownTypes.Fixed) {
        setShowInput(true)
        asset.locationPending = event.target.value as LaydownTypes
      } else {
        setShowInput(false)
        setFixedLocationValue('')
        if (event.target.value === LaydownTypes.ForceLaydown) {
          asset.locationPending = LaydownTypes.ForceLaydown
        } else {
          asset.locationPending = LaydownTypes.UmpireLaydown
        }
      }
      onChangeHandler(selectedForce)
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
                value={asset.locationPending ? asset.locationPending : ''}
                name="location"
                className={styles['location-select']}
                onChange={handleChangeAssetLocation}
                inputProps={{ 'aria-label': 'location' }}
              >
                <option value="" disabled>Placeholder</option>
                <option value={LaydownTypes.ForceLaydown}>{LaydownTypes.ForceLaydown}</option>
                <option value={LaydownTypes.UmpireLaydown}>{LaydownTypes.UmpireLaydown}</option>
                <option value={LaydownTypes.Fixed}>{LaydownTypes.Fixed}</option>
              </NativeSelect>
            </div>
          </ListItemText>
        </ListItem>
        {showInput &&
          <ListItem>
            <ListItemText>
              <TextInput
                className={cx(styles['list-dynamic-input'], styles['list-input'])}
                value={asset.position ? asset.position : fixedLocationValue}
                onChange={fixedLocationHandler}
                placeholder="Enter location..."
              />
            </ListItemText>
          </ListItem>
        }
      </List>
    </div>
  }

  const renderContent = (item: any): JSX.Element => {
    const icClassName = getIconClassname('', item.platformType)
    return (
      <div
        key={item.uniqid}
        className={cx(styles['list-item'], item.uniqid === selectedAssetItem && styles['list-item-selected'])}
        onClick={(): void => { setSelectedAssetItem(item.uniqid) }}
      >
        <div className={styles['item-asset-icon-box']}>
          <div className={cx(icClassName, styles['item-asset-icon'])}/>
        </div>
        <div className={styles['asset-name']}>{item.name}</div>
      </div>
    )
  }

  const createSelectedForcePlatforms = (assets: Asset[] | undefined): ForceItemType[] => {
    const selectedForcePlatforms: ForceItemType[] = Array.isArray(assets)
      ? assets.map((asset: Asset): ForceItemType => ({ ...asset, id: asset.platformType, type: ASSET_ITEM }))
      : []
    return selectedForcePlatforms
  }

  useEffect(() => {
    setSelectedPlatforms(createSelectedForcePlatforms(selectedForce.assets))
  }, [])

  const handleForcePlatformTypesChange = (nextList: ListItemType[]): void => {
    let changes: boolean = nextList.length !== selectedPlatforms.length

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
          condition: '',
          position: '',
          locationPending: false
        } as Asset
      }
      const nextItem = item as Asset
      const compareAsset = selectedPlatforms[key]
      if (typeof compareAsset === 'undefined' || nextItem.uniqid !== compareAsset.uniqid) changes = true
      return nextItem
    })

    if (changes) {
      setSelectedPlatforms(prevState => [...prevState, ...(createSelectedForcePlatforms(forceAssets))])
      onChangeHandler({ ...selectedForce, assets: [...selectedPlatforms, ...forceAssets] })
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
                <div className={cx(styles['platform-types-box'], styles['icons-col'])}>
                  <p>Available platform types</p>
                  <ReactSortable
                    list={allPlatforms}
                    sort={false}
                    setList={(newList: (PlatformItemType | ForceItemType)[]): void => {
                      const [removeItem] = newList.filter(item => item.type === ASSET_ITEM) as ForceItemType[]
                      if (removeItem !== undefined) {
                        setSelectedPlatforms(selectedPlatforms.filter(item => item.uniqid !== removeItem.uniqid))
                      }
                    }}
                    onStart={() => setAddAssetActive(true)}
                    onEnd={() => setAddAssetActive(false)}
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
                      <Groups
                        items={selectedPlatforms}
                        renderContent={renderContent}
                        canOrganise={true}
                        canCombineWith={canCombineWithLocal}
                        group={'platformTypesList'}
                        onSet={(itemsLink: any, type: any, depth: any): void => {
                          console.log('item onSet: ', {
                            'itemsLink: ': itemsLink,
                            'type: ': type,
                            'depth: ': depth
                          })
                        }}
                      />
                    </List>
                  </div>
                  <div className={cx(styles['add-asset-overlay'], (addAssetActive || selectedPlatforms.length === 0) && styles['add-asset-overlay-active'])} >
                    <div className={styles['add-asset-overlay-msg']} >Drag here to add asset for force</div>
                    <ReactSortable
                      className={styles['add-asset-overlay-dropzone']}
                      list={[]}
                      sort={true}
                      setList={handleForcePlatformTypesChange}
                      group={'platformTypesList'}
                    />
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
