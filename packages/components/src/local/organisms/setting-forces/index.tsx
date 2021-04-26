import React, { useState, useEffect, ChangeEvent } from 'react'
import cx from 'classnames'

/* Import proptypes */
import PropTypes, { ForceData, Role } from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { ReactSortable } from "react-sortablejs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faComments, faDirections, faBookReader, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import Colorpicker from '../../atoms/colorpicker'
import FormGroup from '../../atoms/form-group-shadow'
import SortableList, { Item as SortableListItem } from '../../molecules/sortable-list'
import PasswordView from '../../molecules/password-view'
import EditableList, { Item } from '../../molecules/editable-list'
import IconUploader from '../../molecules/icon-uploader'
import NativeSelect from '@material-ui/core/NativeSelect'
import { UMPIRE_FORCE } from '@serge/config'
import { PlatformType, Asset } from '@serge/custom-types'
import uniqid from 'uniqid'
import cn from 'classnames'
import { getIconClassname } from '../../asset-icon'
import Input from '../../atoms/text-input'

const MobileSwitch = withStyles({
  switchBase: {
    color: '#FFFFFF',
    '&$checked': {
      color: '#1A394D'
    },
    '&$checked + $track': {
      backgroundColor: '#1A394D'
    }
  },
  checked: {},
  track: {}
})(Switch)

/* Render component */
export const SettingForces: React.FC<PropTypes> = ({
  forces: initialForces,
  onSave,
  onChange,
  onRejectedIcon,
  onSidebarClick,
  onCreate,
  onDelete,
  selectedForce,
  platformTypes = []
}) => {
  const selectedForceId = initialForces.findIndex(force => force.uniqid === selectedForce?.uniqid)
  const [selectedItem, setSelectedItem] = useState(Math.max(selectedForceId, 0))
  const [selectedAssetItem, setSelectedAssetItem] = useState('')
  const [forcesData, setForcesData] = useState(initialForces)
  const [checkboxValue, setCheckboxValue] = useState(true)
  const handleSwitch = (_item: Item): void => {
    const selectedForce = forcesData.findIndex(force => force.uniqid === _item.uniqid)
    setSelectedItem(selectedForce)
    onSidebarClick && onSidebarClick(_item as ForceData)
  }

  const PLATFORM_ITEM = 'PLATFORM_ITEM'
  interface PlatformItemType extends PlatformType {
    type: typeof PLATFORM_ITEM,
    id: string
  }
  const ASSET_ITEM = 'ASSET_ITEM'
  interface ForceItemType extends Asset {
    type: typeof ASSET_ITEM,
    id: string
  }

  const allPlatforms: PlatformItemType[] = platformTypes.map(platform => ({ ...platform, id: platform.name, type: PLATFORM_ITEM }))

  // const renderPlatformTypeItem = (): React.ReactNode => {
  //   return platformTypes && platformTypes.map((platformType, index) => {
  //     return(
  //       <div key={index.toString()} className={styles['icon-box']}>
  //         <span>{platformType.name}</span>
  //       </div>
  //     )
  //   })
  // }

  const generatehashCode = (str: string): string => {
    let hash: number = 0
    if (str.length === 0) return '0'
    for (let i = 0; i < str.length; i++) {
      const chr = str.charCodeAt(i)
      hash  = ((hash << 5) - hash) + chr
      hash |= 0 // Convert to 32bit integer
    }
    const res = `${hash}`
    return res.substr(res.length - 3)
  }

  const handleChangeForces = (nextForces: Array<ForceData>): void => {
    setForcesData(nextForces)
    onChange({ forces: nextForces })
  }

  useEffect(() => {
    const selectedId = initialForces.findIndex(force => force.uniqid === selectedForce?.uniqid)
    setSelectedItem(Math.max(selectedId, 0))
    setForcesData(initialForces)
  }, [initialForces])

  const renderContent = (): React.ReactNode => {
    const data = forcesData[selectedItem]
    if (!data) return null

    const selectedForcePlatforms:ForceItemType[] = Array.isArray(data.assets) ? data.assets.map(asset => ({ ...asset, id: asset.platformType, type: ASSET_ITEM })) : []
    const handleChangeForce = (force: ForceData): void => {
      const nextForces: Array<ForceData> = [...initialForces]
      nextForces[selectedItem] = force
      handleChangeForces(nextForces)
    }


    const handleCreateRole = (): void => {
      const roles: Array<Role> = [...data.roles, {
        name: 'New Role',
        canSubmitPlans: false,
        password: 'p' + Math.random().toString(36).substring(8),
        isGameControl: false,
        isInsightViewer: false,
        isRFIManager: false,
        isObserver: false
      }]
      handleChangeForce({ ...data, roles: roles })
    }

    const handleOnRejectedIcon = (rejected: any): void => {
      if (typeof onRejectedIcon === 'function') {
        onRejectedIcon(rejected)
      } else {
        console.log(rejected)
      }
    }

    const renderRoleFields = (item: SortableListItem, key: number): React.ReactNode => {
      const roleItem = item as Role
      const handleChangeRole = (nextRole: Role, submitPlans = false): void => {
        const roles: Array<Role> = submitPlans ? data.roles.map(role => ({ ...role, canSubmitPlans: false })) : [...data.roles]
        roles[key] = nextRole
        handleChangeForce({ ...data, roles })
      }

      return (
        <div className={styles.role}>
          <div className={styles['role-item']}>
            <PasswordView value={roleItem.password} onChange={(password: string): void => {
              handleChangeRole({ ...roleItem, password })
            }}/>
            {key === 0 && <div className={styles['role-title']}>Password</div>}
          </div>
          <div className={styles['role-item']}>
            <MobileSwitch disabled={data.uniqid !== UMPIRE_FORCE} size='small' checked={roleItem.isObserver} onChange={(): void => {
              handleChangeRole({ ...roleItem, isObserver: !roleItem.isObserver })
            }} />
            {key === 0 && <div
              title='Can view all channels'
              className={cx(styles['role-title'], styles['title-center'])}>
              <FontAwesomeIcon icon={faEye} />
            </div>}
          </div>
          <div className={styles['role-item']}>
            <MobileSwitch disabled={data.uniqid !== UMPIRE_FORCE} size='small' checked={roleItem.isInsightViewer} onChange={(): void => {
              handleChangeRole({ ...roleItem, isInsightViewer: !roleItem.isInsightViewer })
            }} />
            {key === 0 && <div
              title='Can view feedback/insights'
              className={cx(styles['role-title'], styles['title-center'])}>
              <FontAwesomeIcon icon={faComments} />
            </div>}
          </div>
          <div className={styles['role-item']}>
            <MobileSwitch disabled={data.uniqid !== UMPIRE_FORCE} size='small' checked={roleItem.isRFIManager} onChange={(): void => {
              handleChangeRole({ ...roleItem, isRFIManager: !roleItem.isRFIManager })
            }} />
            {key === 0 && <div
              title='Can release RFI responses'
              className={cx(styles['role-title'], styles['title-center'])}>
              <FontAwesomeIcon icon={faBookReader} />
            </div>}
          </div>
          <div className={styles['role-item']}>
            <MobileSwitch size='small' checked={roleItem.canSubmitPlans} onChange={(): void => {
              handleChangeRole({ ...roleItem, canSubmitPlans: !roleItem.canSubmitPlans }, !roleItem.canSubmitPlans)
            }} />
            {key === 0 && <div
              title='Can submit mapping plans'
              className={cx(styles['role-title'], styles['title-center'])}>
              <FontAwesomeIcon icon={faDirections} />
            </div>}
          </div>
        </div>
      )
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setCheckboxValue(event.target.checked)
    }

    type ListItem = PlatformItemType | ForceItemType

    const handleForcePlatformTypesChange = (nextList: ListItem[]) => {
      let changes: boolean = nextList.length !== selectedForcePlatforms.length

      const forceAssets: Asset[] = nextList.map((item, key) => {
        if (item.type === PLATFORM_ITEM) {
          changes = true
          const assetid = uniqid.time()
          return {
            uniqid: 'a' + assetid,
            contactId: 'C' + generatehashCode(assetid),
            name: item.id,
            platformType: item.id.toLowerCase(),
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
        handleChangeForce({ ...data, assets: forceAssets })
      }
    }

    const renderAssetForm = () => {
      if (!Array.isArray(data.assets)) return null
      if (data.assets.length === 0) return null
      const asset = data.assets.find(asset => asset.uniqid === selectedAssetItem)
      if (typeof asset === 'undefined') {
        const [firstAsset] = data.assets
        setSelectedAssetItem(firstAsset.uniqid)
        return null
      }

      const handleChangeAssetName = (event: ChangeEvent<HTMLInputElement>): void => {
        asset.name = event.target.value
        handleChangeForce(data)
      }
      const handleChangeAssetUniqid = (_event: ChangeEvent<HTMLInputElement>): void => {
        // NOTE: uniqid Readonly
        // asset.uniqid = event.target.value
        // handleChangeForce(data)
      }
      const handleChangeAssetContactId = (_event: ChangeEvent<HTMLInputElement>): void => {
        // NOTE: contactId Readonly
        // asset.contactId = event.target.value
        // handleChangeForce(data)
      }
      const handleChangeAssetLocation = (_event: ChangeEvent<HTMLSelectElement>): void => {

      }

      return <div className={styles['view-result-box']}>
        <List dense={true}>
          <ListItem>
            <ListItemText>
              <label className={styles['input-group']}>
                <span className={styles['list-title']}>Name</span>
                <Input customColor="transparent" value={asset.name} onChange={handleChangeAssetName}/>
              </label>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <label className={styles['input-group']}>
                <span className={styles['list-title']}>ContactID</span>
                <Input customColor="transparent" value={asset.contactId} onChange={handleChangeAssetContactId}/>
              </label>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <label className={styles['input-group']}>
                <span className={styles['list-title']}>UniqueID</span>
                <Input customColor="transparent" value={asset.uniqid} onChange={handleChangeAssetUniqid}/>
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

    return (
      <div key={selectedItem}>
        <div className={cx(styles['row'], styles['mb_20'])}>
          <div className={styles.col}>
            <TextInput
              customColor="transparent"
              titleInput={true}
              value={data.name}
              updateState={(target: { value: string }): void => {
                handleChangeForce({ ...data, name: target.value })
              }}
            />
          </div>
          <div className={styles['color-box']}>
            <Colorpicker value={data.color} onChange={(newColor: string): void => {
              handleChangeForce({ ...data, color: newColor })
            }} />
          </div>
          <div className={styles.col}>
            <IconUploader limit={20000} icon={data.icon} onChange={(icon: string): void => {
              handleChangeForce({ ...data, icon })
            }} onRejected={handleOnRejectedIcon}>Change Icon</IconUploader>
          </div>
          <div className={styles.actions}>
            <Button
              icon="delete"
              onClick={(): void => { console.log('onDelete') }}
            >
              Delete
            </Button>
            <Button
              color="primary"
              onClick={(): void => { if (onSave) onSave(forcesData) }}
              data-qa-type="save"
            >
              Save Force
            </Button>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                className={styles['accordion-header']}
                expandIcon={<FontAwesomeIcon icon={faCaretDown} className={styles['arrow-icon']} />}
              >
                <Typography className={styles['accordion-title']}>Overview & Objectives</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.row}>
                  <div className={cx(styles.col, styles.section)}>
                    <FormGroup placeholder="Overview & Objectives">
                      <TextInput
                        multiline
                        fullWidth
                        variant="filled"
                        rows={8}
                        rowsMax={8}
                        updateState={(target: { value: string }): void => {
                          handleChangeForce({ ...data, overview: target.value })
                        }}
                        value={data.overview}
                        className={styles.textarea}
                      />
                    </FormGroup>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion}>
              <AccordionSummary
                className={styles['accordion-header']}
                expandIcon={<FontAwesomeIcon icon={faCaretDown} className={styles['arrow-icon']} />}
              >
                <Typography className={styles['accordion-title']}>Roles</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.row}>
                  <div className={cx(styles.col, styles.section)}>
                    <FormGroup placeholder="Roles">
                      <SortableList
                        remove={false}
                        sortable='auto'
                        required
                        onChange={(roles: Array<SortableListItem>): void => {
                          handleChangeForce({ ...data, roles: roles as Array<Role> })
                        }}
                        onCreate={handleCreateRole}
                        renderItemSection={renderRoleFields}
                        items={data.roles}
                        title='Add Role' />
                    </FormGroup>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion className={styles.accordion}>
              <AccordionSummary
                className={styles['accordion-header']}
                expandIcon={<FontAwesomeIcon icon={faCaretDown} className={styles['arrow-icon']} />}
              >
                <Typography className={styles['accordion-title']}>Assets</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{flexGrow: 1}}>
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checkboxValue}
                            onChange={handleChange}
                            color="primary"
                          />
                        }
                        label={<Typography className={styles['player-checkbox-label']}>Allow player to laydown assets</Typography>}
                      />

                      <div className={styles['icons-col']}>
                        <p>Available platform types</p>

                        <ReactSortable
                          list={allPlatforms}
                          sort={false}
                          setList={(_nextList): void => { }}
                          group={'platformTypesList'}
                        >
                          {allPlatforms.map((item) => {
                            const icClassName = getIconClassname('', item.name.toLowerCase())

                            return <div className={styles['icon-item-main']}>
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
                                const icClassName = getIconClassname(data.name.toLowerCase(), item.platformType.toLowerCase())

                                return <div
                                  key={item.uniqid}
                                  className={cn(styles['list-item'], item.uniqid === selectedAssetItem && styles['list-item-selected'])}
                                  onClick={(): void => { setSelectedAssetItem(item.uniqid) }}
                                >
                                  <div className={cx(icClassName, styles['item-asset-icon'])}/>
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
                  </Grid>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {
          // <div className={styles.row}>
          //   <div className={cx(styles.col, styles.section)}>
          //     <FormGroup placeholder="Overview & Objectives">
          //       <TextInput
          //         multiline
          //         fullWidth
          //         variant="filled"
          //         rows={8}
          //         rowsMax={8}
          //         updateState={(target: { value: string }): void => {
          //           handleChangeForce({ ...data, overview: target.value })
          //         }}
          //         value={data.overview}
          //         className={styles.textarea}
          //       />
          //     </FormGroup>
          //   </div>
          // </div>
        }

        {
          // <div className={styles.row}>
          //   <div className={cx(styles.col, styles.section)}>
          //     <FormGroup placeholder="Roles">
          //       <SortableList
          //         remove={false}
          //         sortable='auto'
          //         required
          //         onChange={(roles: Array<SortableListItem>): void => {
          //           handleChangeForce({ ...data, roles: roles as Array<Role> })
          //         }}
          //         onCreate={handleCreateRole}
          //         renderItemSection={renderRoleFields}
          //         items={data.roles}
          //         title='Add Role' />
          //     </FormGroup>
          //   </div>
          // </div>
        }
      </div>
    )
  }

  return (
    <AdminContent>
      <LeftSide>
        <EditableList
          items={initialForces}
          selectedItem={forcesData[selectedItem].uniqid}
          filterKey="uniqid"
          onClick={handleSwitch}
          onCreate={onCreate}
          onDelete={onDelete}
          withSearch={false}
          title="Add a New Force"
        />
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </AdminContent>
  )
}

export default SettingForces
