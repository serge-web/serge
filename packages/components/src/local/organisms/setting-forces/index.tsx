import { Asset, AttributeType, AttributeValue } from '@serge/custom-types'
import { createAttributeValue, findPlatformTypeFor } from '@serge/helpers'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import { CustomDialog } from '../../atoms/custom-dialog'
/* Import Components */
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import Button from '../../atoms/button'
import Colorpicker from '../../atoms/colorpicker'
import TextInput from '../../atoms/text-input'
import EditableList, { Item } from '../../molecules/editable-list'
import IconUploader from '../../molecules/icon-uploader'
import SettingsForceOverview from './settings-force-overview'
import AssetsAccordion from './settings-force-platform-types'
import RolesAccordion from './settings-force-roles'
/* Import Styles */
import styles from './styles.module.scss'
/* Import proptypes */
import PropTypes, { ForceData } from './types/props'

/* Render component */
export const SettingForces: React.FC<PropTypes> = ({
  forces: initialForces,
  onSave,
  onChange,
  onRejectedIcon,
  onSidebarClick,
  onCreate,
  onDelete,
  onDuplicate,
  iconUploadUrl,
  selectedForce,
  platformTypes = [],
  routes,
  customDeleteHandler,
  onDeleteAsset
}) => {
  const selectedForceId = initialForces.findIndex(force => force.uniqid === selectedForce?.uniqid)
  const [selectedItem, setSelectedItem] = useState(Math.max(selectedForceId, 0))
  const [forcesData, setForcesData] = useState(initialForces)
  const [content, toggleModal] = useState<any>('')

  const handleSwitch = (_item: Item): void => {
    const selectedForce = forcesData.findIndex(force => force.uniqid === _item.uniqid)
    setSelectedItem(selectedForce)
    onSidebarClick && onSidebarClick(_item as ForceData)
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

    const handleChangeForce = (force: ForceData): void => {
      const nextForces: Array<ForceData> = [...initialForces]
      nextForces[selectedItem] = force
      // TODO: strip out un-necessary UI related metadata (`type: "ASSET-ITEM"`)
      handleChangeForces(nextForces)
    }

    const handleOnRejectedIcon = (rejected: any): void => {
      if (typeof onRejectedIcon === 'function') {
        onRejectedIcon(rejected)
      } else {
        console.log(rejected)
      }
    }

    const onSaveForce = (): void => {
      const currentForce = selectedItem >= 0 && forcesData[selectedItem]
      if (!currentForce) {
        console.log('do not have selected force. Not saving', selectedItem)
        return
      }
      const attributeErrors: string[] = []
      currentForce.assets && currentForce.assets.forEach((asset: Asset) => {
        const pType = findPlatformTypeFor(platformTypes, '', asset.platformTypeId)
        // check for extra attributes
        const extraAttrs = asset.attributeValues && asset.attributeValues.filter((value: AttributeValue) => {
          return !(pType.attributeTypes && pType.attributeTypes.some((val: AttributeType) => val.attrId === value.attrId))
        })

        extraAttrs && extraAttrs.forEach((value: AttributeValue) => {
          const msg = 'Removed attribute ' + value.attrId + ' from ' + asset.name
          attributeErrors.push(msg)
          // and strip out the attributes
          asset.attributeValues = asset.attributeValues && asset.attributeValues.filter(value => !extraAttrs.includes(value))
        })

        // check for missing attributes
        const missingAttrs = pType.attributeTypes && pType.attributeTypes.filter((value: AttributeType) => {
          return !(asset.attributeValues && asset.attributeValues.some((val: AttributeValue) => val.attrId === value.attrId))
        })

        missingAttrs && missingAttrs.forEach((aType: AttributeType) => {
          const msg = 'Added attribute ' + aType.name + ' to ' + asset.name
          attributeErrors.push(msg)
          // initialise array, if necessary
          if (!asset.attributeValues) {
            asset.attributeValues = []
          }
          // and create the default values
          asset.attributeValues.push(createAttributeValue(aType))
        })
      })

      // show message
      const attrsbuteErrorList = attributeErrors.reduce((html, item) => {
        html += `<li>${item}</li>`
        return html
      }, '')

      attributeErrors.length > 0 && toggleModal(`The attributes for some assets did not match with type details. These fixes have been applied: <br/> ${attrsbuteErrorList}`)

      if (onSave) {
        // if the data is wrong and has been modified, should update back to the forceData
        // If not, just save the forcesData
        if (attributeErrors.length) {
          forcesData.some(force => {
            if (force.uniqid === currentForce.uniqid && force.assets) {
              force.assets.forEach((asset, idx) => {
                if (currentForce.assets) {
                  asset.attributeValues = currentForce.assets[idx].attributeValues
                }
              })
              return true
            }
            return false
          })
        }
        onSave(forcesData)
      }
    }

    /** modal is complete, collapse it */
    const onClose = (): void => {
      toggleModal('')
    }

    return (
      <div key={selectedItem}>
        <CustomDialog isOpen={!!content} cancelBtnText={'OK'} header='Error' onClose={onClose} content={content} />
        <div className={cx(styles.row, styles['mb-20'])}>
          <div className={styles.col}>
            <TextInput
              customColor="transparent"
              titleInput={true}
              value={data.name}
              updateState={(target: { value: string }): void => {
                handleChangeForce({ ...data, name: target.value })
              }}
              className="underline"
            />
          </div>
          <div className={styles['color-box']}>
            <Colorpicker value={data.color} onChange={(newColor: string): void => {
              handleChangeForce({ ...data, color: newColor })
            }} />
          </div>
          <div className={styles.col} style={{ textDecoration: 'underline' }}>
            <IconUploader classname='main' iconUploadUrl={iconUploadUrl} limit={20000} icon={data.icon} onChange={(icon: string): void => {
              handleChangeForce({ ...data, icon })
            }} onRejected={handleOnRejectedIcon}>Change Icon</IconUploader>
          </div>
          <div className={styles.actions}>
            <Button
              color="primary"
              onClick={onSaveForce}
              data-qa-type="save"
            >
              Save Force
            </Button>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <SettingsForceOverview
              data={data}
              handleChangeForce={handleChangeForce}
            />

            <RolesAccordion
              data={data}
              handleChangeForce={handleChangeForce}
              forces={forcesData}
              customDeleteHandler={customDeleteHandler}
            />

            <AssetsAccordion
              routes={routes}
              selectedForce={data}
              forcesData={forcesData}
              platformTypes={platformTypes}
              onChangeHandler={handleChangeForce}
              onDeleteAsset={onDeleteAsset}
            />
          </div>
        </div>
      </div >
    )
  }

  return (
    <AdminContent>
      <LeftSide>
        <EditableList
          items={initialForces}
          selectedItem={forcesData[selectedItem]?.uniqid}
          filterKey="uniqid"
          onClick={handleSwitch}
          onCreate={onCreate}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
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
