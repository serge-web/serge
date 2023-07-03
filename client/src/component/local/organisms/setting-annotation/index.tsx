/* Import Components */
import { AnnotationMarkerData, IconOption, AnnotationIcons } from '@serge/custom-types'
import React, { useEffect, useState } from 'react'
import uniqid from 'uniqid'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import Button from '../../atoms/button'
import TextInput from '../../atoms/text-input'
import EditableList, { Item } from '../../molecules/editable-list'
import IconUploader from '../../molecules/icon-uploader'
import styles from './styles.module.scss'
import PropTypes from './types/props'

/* Render component */
export const SettingAnnotation: React.FC<PropTypes> = ({ annotation, onChange, onSave, onDelete, onDuplicate, iconUploadUrl }) => {
  const newAnnotationMarkerData: AnnotationMarkerData = {
    markers: []
  }

  const initialAnnotationMarkerData: AnnotationMarkerData = annotation || newAnnotationMarkerData
  const [localAnnotationMarkerData, setLocalAnnotationMarkerData] = useState<AnnotationMarkerData>(initialAnnotationMarkerData)
  const [selectedItem, setSelectedItem] = useState<number>(-1)
  const [previousItem, setPreviousItem] = useState<Item | null>()

  useEffect(() => {
    if (annotation) {
      setLocalAnnotationMarkerData(annotation)
      // if previoutItem has value but could not be found in the `localAnnotationMarkerData.annotations` mean it has been deleted
      // then we should set the selected index to -1
      if (previousItem) {
        const preIdx = localAnnotationMarkerData.markers.findIndex(item => item.name === previousItem.name)
        if (preIdx === -1) {
          setSelectedItem(preIdx)
          setPreviousItem(null)
        }
      }
    }
  }, [annotation])
  const handleSwitch = (_item: Item): void => {
    setSelectedItem(localAnnotationMarkerData.markers.findIndex(item => item === _item))
  }

  const handleDelete = (item: Item): void => {
    setPreviousItem(item)
    onDelete && onDelete(item as IconOption)
  }

  const handleDuplicate = (item: Item): void => {
    onDuplicate && onDuplicate(item as IconOption)
  }

  const handleChangeAnnotationMarkerDatas = (nextAnnotationMarkerDatas: AnnotationIcons): void => {
    const updates = {
      ...localAnnotationMarkerData,
      markers: nextAnnotationMarkerDatas
    }
    onChange(updates)
    setLocalAnnotationMarkerData(updates)
  }
  const handleChangeAnnotationMarkerData = (data: IconOption, key: number): void => {
    const copyTypes: AnnotationIcons = [...localAnnotationMarkerData.markers]
    copyTypes[key] = data
    handleChangeAnnotationMarkerDatas(copyTypes)
  }

  const renderContent = (): React.ReactNode => {
    if (!localAnnotationMarkerData.markers[selectedItem]) return null
    const data: IconOption = localAnnotationMarkerData.markers[selectedItem]

    const handleChangeName = (name: string): void => {
      handleChangeAnnotationMarkerData({ ...data, name }, selectedItem)
    }

    const handleChangeIcon = (icon: string): void => {
      handleChangeAnnotationMarkerData({ ...data, icon }, selectedItem)
    }

    const handleSave = (): void => {
      // creat a new annotation object
      const saveObject: AnnotationMarkerData = {
        ...localAnnotationMarkerData,
        markers: localAnnotationMarkerData.markers.map((annotation, key): IconOption => {
          annotation.name = createAnnotationName(1, annotation.name, key)
          return annotation
        })
      }
      // update localAnnotationMarkerData and call onSave
      handleChangeAnnotationMarkerDatas(saveObject.markers)
      if (onSave) onSave(saveObject)
    }

    return (
      <div key={selectedItem} className={styles.head}>
        <div className={styles.row}>
          <div className={styles.col}>
            <TextInput
              customColor='transparent'
              titleInput={true}
              value={data.name}
              updateState={(target: { value: string }): void => {
                handleChangeName(target.value)
              }}
            />
          </div>
          <div className={styles.actions}>
            <Button
              color='primary'
              onClick={handleSave}
              data-qa-type='save'
            >
              Save Marker
            </Button>
          </div>
        </div>
        <div className={styles.col}>
          <IconUploader classname='annotation' iconUploadUrl={iconUploadUrl} limit={20000} icon={data.icon} onChange={handleChangeIcon}>Change Icon</IconUploader>
        </div>
      </div>
    )
  }
  // Create uniq annotation type name
  const createAnnotationName = (key = 1, defName = 'New Annotation Type', exclude = -1): string => {
    let name: string = defName
    if (key > 1) name += ' ' + key
    if (localAnnotationMarkerData.markers.find((annotation, key) => name === annotation.name && key !== exclude)) {
      return createAnnotationName(key + 1, defName, exclude)
    }
    return name
  }

  // Create a new empty AnnotationMarkerDataData item
  const handleCreateMarker = (): void => {
    localAnnotationMarkerData.markers.unshift({
      name: createAnnotationName(),
      icon: '',
      uniqid: uniqid('p')
    })
    // update localAnnotationMarkerData and call onSave
    handleChangeAnnotationMarkerDatas(localAnnotationMarkerData.markers)
    if (onSave) onSave(localAnnotationMarkerData)
  }
  return (
    <AdminContent>
      <LeftSide>
        <EditableList
          items={localAnnotationMarkerData.markers}
          onClick={handleSwitch}
          onCreate={handleCreateMarker}
          onDelete={handleDelete}
          onDuplicate={handleDuplicate}
          title='Add new annotation'
          selectedItem={localAnnotationMarkerData.markers[selectedItem]?.name}
          filterKey='name'
        />
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </AdminContent>
  )
}

export default SettingAnnotation
