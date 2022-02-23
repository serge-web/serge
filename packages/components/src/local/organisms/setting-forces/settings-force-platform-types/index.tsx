import React, { FC, ChangeEvent, ReactNode, useState, useEffect, ReactElement } from 'react'
import { LaydownTypes } from '@serge/config'
/* Import proptypes */
import { ASSET_ITEM, PLATFORM_ITEM } from '../constants'
import PropTypes from './types/props'
import { PlatformItemType, ListItemType, ForceItemType } from '../types/sortableItems'
import { Asset, AttributeEditorData, ForceData, GroupItem, PlatformTypeData } from '@serge/custom-types'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import { createAssetBasedOnPlatformType, platformTypeNameToKey, groupCreateNewGroup, groupMoveToRoot, groupHostPlatform, collateEditorData } from '@serge/helpers'

import cx from 'classnames'
import { GetIcon } from '../../../asset-icon' // getIconClassname
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
import Badge from '../../../atoms/badge'
import Button from '../../../atoms/button'

export const AssetsAccordion: FC<PropTypes> = ({ platformTypes, selectedForce, onChangeHandler, routes = [] }) => {
  const [fixedLocationValue, setFixedLocationValue] = useState('')
  const [addAssetActive, setAddAssetActive] = useState(false)

  const createSelectedForcePlatforms = (assets: Asset[] | undefined): ForceItemType[] => {
    const selectedForcePlatforms: ForceItemType[] = Array.isArray(assets)
      ? assets.map((asset: Asset): ForceItemType => ({ ...asset, id: asset.platformType, type: ASSET_ITEM }))
      : []
    return selectedForcePlatforms
  }

  const [selectedPlatforms, setSelectedPlatforms] = useState<ForceItemType[]>(createSelectedForcePlatforms(selectedForce.assets))
  const [selectedAssetItem, setSelectedAssetItem] = useState<ForceItemType>(createSelectedForcePlatforms(selectedForce.assets)[0])
  const [attributes, setAttributes] = useState<AttributeEditorData[]>([])

  const canCombineWithLocal = (draggingItem: GroupItem, item: GroupItem, _parents: Array<GroupItem>, _type: NodeType, debug = true): boolean => {
    if (debug) return true
    return canCombineWith({ routes }, draggingItem.uniqid, item.uniqid, _parents, _type)
  }

  const allPlatforms: PlatformItemType[] = platformTypes.map(platform => ({ ...platform, id: platform.name, type: PLATFORM_ITEM }))

  useEffect(() => {
    if (Array.isArray(selectedForce.assets)) {
      const asset = selectedForce.assets.find(asset => asset.uniqid === selectedAssetItem.uniqid)
      if (asset?.locationPending !== LaydownTypes.Fixed) {
        setFixedLocationValue('')
      }
      // also the attributes
      if (asset && asset.attributeValues) {
        // collate attributes
        const pType = platformTypes.find((value: PlatformTypeData) => value.name === asset.platformType)
        const attrs = collateEditorData(asset.attributeValues, (pType && pType.attributeTypes) || [])
        setAttributes(attrs)
      } else {
        setAttributes([])
      }
    }
  }, [selectedAssetItem])

  const renderAssetForm = (): ReactNode => {
    if (selectedPlatforms.length === 0) return null
    if (!Array.isArray(selectedForce.assets)) return null
    if (selectedForce.assets.length === 0) return null

    if (typeof selectedAssetItem === 'undefined') {
      return null
    }

    const fixedLocationHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      const currentValue = event.target.value.toUpperCase()
      const regex = /^[a-zA-Z]{0,2}\d{0,2}$/
      if (regex.test(currentValue)) {
        setFixedLocationValue(currentValue)
        selectedAssetItem.position = currentValue
      }
      onChangeHandler(selectedForce)
    }
    const handleChangeAssetName = (event: ChangeEvent<HTMLInputElement>): void => {
      selectedAssetItem.name = event.target.value
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
        selectedAssetItem.locationPending = event.target.value as LaydownTypes
      } else {
        setFixedLocationValue('')
        if (event.target.value === LaydownTypes.ForceLaydown) {
          selectedAssetItem.locationPending = LaydownTypes.ForceLaydown
        } else {
          selectedAssetItem.locationPending = LaydownTypes.UmpireLaydown
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
              <TextInput customColor="transparent" className={styles['list-input']} value={selectedAssetItem.name} onChange={handleChangeAssetName}/>
            </label>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <label className={styles['input-group']}>
              <span className={styles['list-title']}>ContactID</span>
              <TextInput customColor="transparent" className={styles['list-input']} value={selectedAssetItem.contactId} onChange={handleChangeAssetContactId}/>
            </label>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <label className={styles['input-group']}>
              <span className={styles['list-title']}>UniqueID</span>
              <TextInput customColor="transparent" className={styles['list-input']} value={selectedAssetItem.uniqid} onChange={handleChangeAssetUniqid}/>
            </label>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <div className={styles['input-group']}>
              <span className={styles['list-title']}>Location</span>
              <NativeSelect
                value={selectedAssetItem.locationPending ? selectedAssetItem.locationPending : ''}
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
        {selectedAssetItem.locationPending === LaydownTypes.Fixed &&
          <ListItem>
            <ListItemText>
              <TextInput
                className={cx(styles['list-dynamic-input'], styles['list-input'])}
                value={selectedAssetItem.position ? selectedAssetItem.position : fixedLocationValue}
                onChange={fixedLocationHandler}
                placeholder="Enter location..."
              />
            </ListItemText>
          </ListItem>
        }
        {
          attributes && attributes.length > 0 &&
            <ListItem>
              <ListItemText>
                <label className={styles['input-group']}>
                  <span className={styles['list-title']}>Attributes</span>
                  { attributes.map((item: AttributeEditorData): ReactElement => {
                    const labelTxt = item.nameRead + ' ' + item.valueRead
                    return <Badge key={item.attrId} allCaps={false} label={labelTxt}/>
                  })
                  }
                  <Button>Edit</Button>
                </label>
              </ListItemText>
            </ListItem>

        }
      </List>
    </div>
  }
  const findIcon = (platformType: string): string => {
    const platform = platformTypes.find(({ name }) => name === platformType)
    return typeof platform === 'undefined' ? '' : platform.icon
  }
  const renderContent = (groupItem: GroupItem): JSX.Element => {
    const item = groupItem as ForceItemType
    // const icClassName = getIconClassname('', item.platformType)
    return (
      <div
        key={item.uniqid}
        className={cx(styles['list-item'], item.uniqid === selectedAssetItem?.uniqid && styles['list-item-selected'])}
        onClick={(): void => { setSelectedAssetItem(item) }}
      >
        <div className={styles['item-asset-icon-box']}>
          <GetIcon icType={item.platformType} color={selectedForce.color} imageSrc={findIcon(item.platformType)} />
          {/* <div className={cx(icClassName, styles['item-asset-icon'])}/> */}
        </div>
        <div className={styles['asset-name']}>{item.name}</div>
      </div>
    )
  }

  const handleForcePlatformTypesChange = (nextList: ListItemType[]): void => {
    let changes: boolean = nextList.length !== selectedPlatforms.length

    const forceAssets: Asset[] = nextList.map((item, key) => {
      if (item.type === PLATFORM_ITEM) {
        changes = true
        return createAssetBasedOnPlatformType(item as PlatformTypeData)
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
                    onStart={(): void => setAddAssetActive(true)}
                    onEnd={(): void => setAddAssetActive(false)}
                    group={'platformTypesList'}
                  >
                    {allPlatforms.map((item) => {
                      return <div key={item.id} className={styles['icon-item-main']}>
                        <div className={styles['icon-box-holder']}>
                          <div className={styles['icon-box-content']}>
                            <div key={item.id + item.type} className={styles['icon-box']}>
                              <div>
                                <GetIcon icType={platformTypeNameToKey(item.name)} color='#415b76' imageSrc={item.icon} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles['icon-box-name']}>
                          {item.name}
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
                        maxDepth={5}
                        onSet={(itemsLink: GroupItem[], type: NodeType, depth: GroupItem[]): void => {
                          const items = itemsLink.slice(0)
                          const [droppedItem, droppedInTo] = items
                          let result: ForceData[] = []
                          switch (type) {
                            case 'group': {
                              if (groupCreateNewGroup) {
                                result = groupCreateNewGroup(droppedItem.uniqid.toString(), droppedInTo.uniqid.toString(), [selectedForce])
                              } else {
                                console.warn('No new group handler', depth)
                              }
                              break
                            }
                            case 'group-out': {
                              if (groupMoveToRoot) {
                                result = groupMoveToRoot(droppedItem.uniqid.toString(), [selectedForce])
                              } else {
                                console.warn('No move to root handler found', depth)
                              }
                              break
                            }
                            default:
                              if (groupHostPlatform) {
                                result = groupHostPlatform(droppedItem.uniqid.toString(), droppedInTo.uniqid.toString(), [selectedForce])
                              } else {
                                console.warn('No handler for host platform', depth)
                              }
                              break
                          }
                          const [selectedForceChanges] = result
                          onChangeHandler(selectedForceChanges)
                          setSelectedPlatforms(createSelectedForcePlatforms(selectedForceChanges.assets))
                        }}
                      />
                    </List>
                  </div>
                  <div className={cx(styles['add-asset-overlay'], (addAssetActive || selectedPlatforms.length === 0) && styles['add-asset-overlay-active'])}>
                    <div className={styles['add-asset-overlay-msg']}>Drag here to add asset for force</div>
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
