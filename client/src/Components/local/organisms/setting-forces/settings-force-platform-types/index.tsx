import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Chip from '@material-ui/core/Chip'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import NativeSelect from '@material-ui/core/NativeSelect'
import Typography from '@material-ui/core/Typography'
import { LaydownTypes, TASK_GROUP } from 'src/config'
import { Asset, AttributeEditorData, AttributeType, AttributeTypes, AttributeValue, AttributeValues, ForceData, GroupItem, PlatformTypeData } from 'src/custom-types'
/* Import Components */
import { collateEditorData, createAssetBasedOnPlatformType, createAttributeValue, findPlatformTypeFor, groupCreateNewGroup, groupHostPlatform, groupMoveToRoot } from 'src/Helpers'
import cx from 'classnames'
import AssetIcon from '../../../asset-icon'
import React, { ChangeEvent, FC, ReactElement, ReactNode, useEffect, useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import Button from '../../../atoms/button'
import TextInput from '../../../atoms/text-input'
import AttributeEditor from '../../../attribute-editor'
import Groups from '../../../helper-elements/groups'
import { NodeType } from '../../../helper-elements/groups/types/props'
import canCombineWith from '../helpers/can-combine-with'
/* Import proptypes */
import { ASSET_ITEM, PLATFORM_ITEM } from '../constants'
import { ForceItemType, ListItemType, PlatformItemType } from '../types/sortableItems'
/* Import Styles */
import styles from './styles.module.scss'
import PropTypes from './types/props'

export const AssetsAccordion: FC<PropTypes> = ({ platformTypes, selectedForce, onChangeHandler, routes = [], onDeleteAsset }) => {
  const [fixedLocationValue, setFixedLocationValue] = useState('')
  const [addAssetActive, setAddAssetActive] = useState(false)

  const createSelectedForcePlatforms = (assets: Asset[] | undefined): ForceItemType[] => {
    const selectedForcePlatforms: ForceItemType[] = Array.isArray(assets)
      ? assets.map((asset: Asset): ForceItemType => ({ ...asset, id: asset.platformTypeId, type: ASSET_ITEM }))
      : []
    return selectedForcePlatforms
  }

  const PENDING_LOCATION = 'pending'

  const [selectedPlatforms, setSelectedPlatforms] = useState<Asset[]>(createSelectedForcePlatforms(selectedForce.assets))
  const [selectedAssetItem, setSelectedAssetItem] = useState<Asset>(createSelectedForcePlatforms(selectedForce.assets)[0])

  const [attributes, setAttributes] = useState<AttributeEditorData[]>([])
  const [attributeValues, setAttributeValues] = useState<AttributeValues>([])
  const [attributeTypes, setAttributeTypes] = useState<AttributeTypes>([])

  const [attributeEditorIsOpen, setAttributeEditorIsOpen] = useState<boolean>(false)

  const canCombineWithLocal = (draggingItem: GroupItem, item: GroupItem, _parents: Array<GroupItem>, _type: NodeType, debug = true): boolean => {
    if (debug) return true
    return canCombineWith({ routes }, draggingItem.uniqid, item.uniqid, _parents, _type)
  }

  const allPlatforms: PlatformItemType[] = platformTypes.map(platform => ({ ...platform, id: platform.name, type: PLATFORM_ITEM }))

  const getSelectedAsset = (): Asset | undefined => {
    if (Array.isArray(selectedPlatforms)) {
      return selectedPlatforms.find(asset => asset.uniqid === selectedAssetItem.uniqid)
    }
    return undefined
  }

  useEffect(() => {
    // get the new selected object (since the force has been cloned)
    if (selectedAssetItem && selectedForce.assets) {
      const item = selectedForce.assets.find((asset: Asset) => asset.uniqid === selectedAssetItem.uniqid)
      item && setSelectedAssetItem(item)
    }
  }, [selectedForce])

  useEffect(() => {
    const asset = getSelectedAsset()
    if (!asset) {
      return
    }
    if (asset.locationPending !== LaydownTypes.Fixed) {
      setFixedLocationValue('')
    }

    const pType = findPlatformTypeFor(platformTypes, '', asset.platformTypeId)
    pType && setAttributeTypes(pType.attributeTypes || [])
    let attrValues: AttributeValues = asset.attributeValues || []
    if (!attrValues.length && pType.attributeTypes && pType.attributeTypes.length) {
      attrValues = pType.attributeTypes.map((aType: AttributeType): AttributeValue => {
        return createAttributeValue(aType)
      })
    }
    setAttributeValues(attrValues)
  }, [selectedAssetItem])

  useEffect(() => {
    const attrs = collateEditorData(attributeValues, attributeTypes)
    const assets = selectedForce.assets || []
    assets.some(asset => {
      if (asset.uniqid === selectedAssetItem.uniqid) {
        asset.attributeValues = attributeValues
        return true
      }
      return false
    })
    setAttributes(attrs)
  }, [attributeTypes, attributeValues])

  const renderAssetForm = (): ReactNode => {
    if (selectedPlatforms.length === 0) return null
    if (!Array.isArray(selectedForce.assets)) return null
    if (selectedForce.assets.length === 0) return null

    if (typeof selectedAssetItem === 'undefined') {
      return null
    }

    const fixedLocationHandler = (event: ChangeEvent<HTMLInputElement>): void => {
      const currentValue = event.target.value
      // TODO: fix regex, so it takes 16 digit h3 index number
      // const regex = /^[0-9a-f]{16}$/
      // if (regex.test(currentValue)) {
      // } else {
      //   console.warn('failed regex')
      // }
      selectedAssetItem.position = currentValue
      setFixedLocationValue(currentValue)
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
        setFixedLocationValue(PENDING_LOCATION)
        // set the asset location to pending
        selectedAssetItem.position = PENDING_LOCATION
        if (event.target.value === LaydownTypes.ForceLaydown) {
          selectedAssetItem.locationPending = LaydownTypes.ForceLaydown
        } else {
          selectedAssetItem.locationPending = LaydownTypes.UmpireLaydown
        }
      }
      onChangeHandler(selectedForce)
    }

    // since we're in admin pages, the Game Designer is able to edit the attributes.
    const inGameAdminPages = true

    return <div className={styles['view-result-box']}>
      <AttributeEditor inAdjudication={inGameAdminPages} isOpen={attributeEditorIsOpen} onClose={(): void => setAttributeEditorIsOpen(false)}
        onSave={setAttributeValues} attributeTypes={attributeTypes} data={attributes} />
      <List dense={true}>
        <ListItem>
          <ListItemText>
            <label className={styles['input-group']}>
              <span className={styles['list-title']}>Name</span>
              <TextInput customColor="transparent" className={styles['list-input']} value={selectedAssetItem.name} onChange={handleChangeAssetName} />
            </label>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <label className={styles['input-group']}>
              <span className={styles['list-title']}>ContactID</span>
              <TextInput customColor="transparent" className={styles['list-input']} value={selectedAssetItem.contactId} onChange={handleChangeAssetContactId} />
            </label>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <label className={styles['input-group']}>
              <span className={styles['list-title']}>UniqueID</span>
              <TextInput customColor="transparent" className={styles['list-input']} value={selectedAssetItem.uniqid} onChange={handleChangeAssetUniqid} />
            </label>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <div className={styles['input-group']}>
              <span className={styles['list-title']}>Location</span>
              <NativeSelect
                value={selectedAssetItem.locationPending ? selectedAssetItem.locationPending : LaydownTypes.Fixed}
                name="location"
                className={styles['location-select']}
                onChange={handleChangeAssetLocation}
                inputProps={{ 'aria-label': 'location' }}
              >
                <option value={LaydownTypes.UmpireLaydown}>{LaydownTypes.UmpireLaydown}</option>
                <option value={LaydownTypes.ForceLaydown}>{LaydownTypes.ForceLaydown}</option>
                <option value={LaydownTypes.Fixed}>{LaydownTypes.Fixed}</option>
              </NativeSelect>
            </div>
          </ListItemText>
        </ListItem>
        {((selectedAssetItem.locationPending === undefined) || (selectedAssetItem.locationPending === LaydownTypes.Fixed)) &&
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
        {attributes.length > 0 &&
          <ListItem>
            <ListItemText>
              <label className={cx(styles['input-group'], styles['attribute-group'])}>
                <span className={styles['list-title']}>Attributes</span>
                <div>
                  {attributes.map((item: AttributeEditorData): ReactElement => {
                    const labelTxt = item.nameRead + ' ' + item.valueRead
                    return <Chip key={item.attrId} label={labelTxt} className={styles['attribute-chip']} />
                  })}
                  <Button color='primary' onClick={(): void => setAttributeEditorIsOpen(true)}>Edit</Button>
                </div>
              </label>
            </ListItemText>
          </ListItem>

        }
      </List>
    </div>
  }
  const findIcon = (platformTypeId: string): string => {
    const platform = platformTypes.find((platform) => platform.uniqid === platformTypeId)
    return typeof platform === 'undefined' ? '' : platform.icon
  }
  const renderContent = (groupItem: GroupItem): React.ReactElement => {
    const item = groupItem as ForceItemType
    // const icClassName = getIconClassname('', item.platformType)
    return (
      <div
        key={item.uniqid}
        className={cx(styles['list-item'], item.uniqid === selectedAssetItem?.uniqid && styles['list-item-selected'])}
        onClick={(): void => { setSelectedAssetItem(item) }}
      >
        <div className={styles['item-asset-icon-box']}>
          <AssetIcon color={selectedForce.color} imageSrc={findIcon(item.platformTypeId)} />
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
                                <AssetIcon color='#415b76' imageSrc={item.icon} />
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
                        onDeleteAsset={onDeleteAsset}
                        selectedAssetItem={selectedAssetItem}
                        canCombineWith={canCombineWithLocal}
                        setList={(newList: GroupItem): void => setSelectedPlatforms(selectedPlatforms.filter(item => item.uniqid !== newList.uniqid))}
                        group={'platformTypesList'}
                        maxDepth={5}
                        onSet={(itemsLink: GroupItem[], type: NodeType, depth: GroupItem[]): void => {
                          const items = itemsLink.slice(0)
                          const [droppedItem, droppedInTo] = items
                          let result: ForceData[] = []
                          const taskGroup = findPlatformTypeFor(platformTypes, TASK_GROUP, '')
                          switch (type) {
                            case 'group': {
                              if (groupCreateNewGroup) {
                                result = groupCreateNewGroup(droppedItem.uniqid.toString(), droppedInTo.uniqid.toString(), [selectedForce], taskGroup)
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
                                result = groupHostPlatform(droppedItem.uniqid.toString(), droppedInTo.uniqid.toString(), [selectedForce], taskGroup)
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
