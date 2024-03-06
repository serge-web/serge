import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import Button from '../../atoms/button'
import { TemplateBody } from 'src/custom-types'
import TextInput from '../../atoms/text-input'
import styles from './styles.module.scss'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import EditableList, { Item } from '../../molecules/editable-list'
import PropTypes from './types/props'

const TemplateEditor: React.FC<PropTypes> = ({
  templates,
  selectedTemplate,
  onChange,
  onSave,
  onCreate,
  onDuplicate,
  onDelete,
  onSidebarClick
}) => {
  const selectedChannelIdx = templates.findIndex(template => template._id === selectedTemplate?._id)
  const [selectedItem, setSelectedItem] = useState(Math.max(selectedChannelIdx, 0))
  const [templateData, setTemplateData] = useState<TemplateBody[]>(templates)
  
  useEffect(() => {
    setSelectedItem(0)
    // setSelectedChannelState(channels[0])
  }, [templates.length])

  const handleSwitch = (_item: Item): void => {
    setSelectedItem(templates.findIndex(item => item === _item))
    onSidebarClick && onSidebarClick(_item as TemplateBody)
  }

  const handleChangeTemplates = (nextTemplates: Array<TemplateBody>): void => {
    setTemplateData(nextTemplates)
    onChange({ templates: nextTemplates })
  }

  const handleChangeTemplate = (template: TemplateBody): void => {
    const nextTemplates: Array<TemplateBody> = [...templates]
    nextTemplates[selectedItem] = template
    // TODO: strip out un-necessary UI related metadata (`type: "ASSET-ITEM"`)
    handleChangeTemplates(nextTemplates)
  }

  const onSaveTemplate = (): void => {
    const currentTemplate = selectedItem >= 0 && templateData[selectedItem]
    if (!currentTemplate) {
      console.log('do not have selected force. Not saving', selectedItem)
      return
    }

    if (onSave) {
      onSave(templateData)
    }
  }

  const renderContent = (): React.ReactNode => {
    const data = templates[selectedItem]
    if (!data) return null

    return (
      <div key={selectedItem}>
        <div className={cx(styles.row, styles['mb-20'])}>
          <div className={styles.col}>
            <TextInput
              customColor="transparent"
              titleInput={true}
              value={data.title}
              updateState={(target: { value: string }): void => {
                handleChangeTemplate({ ...data, title: target.value })
              }}
              className="underline"
            />
          </div>
          <div className={styles.actions}>
            <Button
              color="primary"
              onClick={onSaveTemplate}
              data-qa-type="save"
            >
                Save Template
            </Button>
          </div>
        </div>
      </div >
    )
  }
  
  return (
    <AdminContent>
      <LeftSide>
        <div>
          <EditableList
            items={templates}
            selectedItem={templateData[selectedItem].title}
            filterKey="title"
            labelKey='title'
            onClick={handleSwitch}
            onCreate={onCreate}
            onDelete={onDelete}
            onDuplicate={onDuplicate}
            withSearch={true}
            title="Create Templete List"
          />
 
        </div>
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </AdminContent>
  )
}

export default TemplateEditor
