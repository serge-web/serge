import { CustomDialog } from '@serge/components'
import { findPlatformTypeFor } from '@serge/helpers'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
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
  iconUploadUrl,
  selectedForce,
  platformTypes = [],
  routes,
  onDeleteGameControl
}) => {
  const selectedForceId = initialForces.findIndex(force => force.uniqid === selectedForce?.uniqid)
  const [selectedItem, setSelectedItem] = useState(Math.max(selectedForceId, 0))
  const [forcesData, setForcesData] = useState(initialForces)
  const [content, toggleModal] = useState<string>('')

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
      if (!selectedForce) {
        return
      }
      const innvalidAssetFound = selectedForce.assets?.some(asset => {
        const pType = findPlatformTypeFor(platformTypes, asset.platformType)
        // check length of the asset, if it does not equal then show an waning message
        if (pType.attributeTypes?.length !== asset.attributeValues?.length) {
          toggleModal(`The attribute of the asset ${asset.name} does not match with platform type`)
          return true
        }
        // if the asset length is equal, check each item to see if it matched together
        const matched = pType.attributeTypes?.every(type => !!asset.attributeValues?.find(value => value.attrId === type.attrId))
        if (!matched) {
          toggleModal(`The attribute of the asset ${asset.name} does not match with platform type`)
          return true
        }
        return false
      })

      if (!innvalidAssetFound && onSave) {
        onSave(forcesData)
      }
    }

    const onClose = (): void => {
      toggleModal('')
    }

    return (
      <div key={selectedItem}>
        <CustomDialog isOpen={!!content} header='Error' onClose={onClose} content={content} />
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
            <IconUploader iconUploadUrl={iconUploadUrl} limit={20000} icon={data.icon} onChange={(icon: string): void => {
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
              onDeleteGameControl={onDeleteGameControl}
            />

            <AssetsAccordion
              routes={routes}
              selectedForce={data}
              forcesData={forcesData}
              platformTypes={platformTypes}
              onChangeHandler={handleChangeForce}
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
