import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import Button from '../../atoms/button'
import TextInput from '../../atoms/text-input'
import Tabs from '../../atoms/tabs'
import uniqid from 'uniqid'
import EditableList, { Item } from '../../molecules/editable-list'
import { FormBuilder } from '@ginkgo-bioworks/react-json-schema-form-builder'
import PropTypes from './types/props'
import JsonEditor from '../../molecules/json-editor'
import { TemplateBody } from 'src/custom-types'
import { TemplateTab } from 'src/config'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import './bioworks.css'
import styles from './styles.module.scss'

const SettingTemplate: React.FC<PropTypes> = ({
  templates,
  selectedTemplate,
  onChange,
  onSave,
  onCreate,
  onDuplicate,
  onDelete,
  onSidebarClick
}) => {
  const [selectedItem, setSelectedItem] = useState<number>(0)
  const [templateData, setTemplateData] = useState<TemplateBody[]>(templates)
  const [currentTab, setCurrentTab] = useState<string>(TemplateTab.Visual)
  
  useEffect(() => {
    const selectedId = templates.findIndex(template => template._id === selectedTemplate?._id)
    const correctedSelectedItem = Math.max(selectedId, 0)    
    setSelectedItem(correctedSelectedItem)
    setTemplateData(templates)
  }, [selectedTemplate, templates])
  const handleSwitch = (_item: Item): void => {
    const index = templates.findIndex(item => item === _item)
    setSelectedItem(index)
    onSidebarClick && onSidebarClick(_item as TemplateBody)
  }
  const handleChangeTemplates = (nextTemplates: TemplateBody[]): void => {
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
      console.log('No selected template. Not saving.', selectedItem)
      return
    }
  
    if (onSave) {
      onSave(templateData[selectedItem])
    }
  }
  
  const onCreateNewTemplate = () => {
    const id = 'template-' + uniqid.time()  

    const newTemplate: TemplateBody = {
      lastUpdated: new Date().toISOString(),
      title: id,
      details: { schema: {}, uischema: {}, title: id },
      completed: false,
      _id: id,
      _rev: ''
    }
    onCreate && onCreate(newTemplate)
  }

  const isValidJSON = (input: any): boolean => {
    try {
      if (typeof input === 'object') {
        JSON.stringify(input)
      } else if (typeof input === 'string') {
        JSON.parse(input)
      } else {
        return false
      }
      return true
    } catch {
      return false
    }
  }
  const renderContent = (): React.ReactNode => {
    const data = templateData[selectedItem]
    if (!data) return null

    const { schema, uischema } = data.details

    const handleTabChange = (changedTab: string): void => {
      setCurrentTab(changedTab)
    }

    const contentTabs = [TemplateTab.Visual, TemplateTab.Preview]

    const handleFormChange = (newSchema: string, newUiSchema: string) => {
      // console.log('newSchema', JSON.parse(newSchema))
      // console.log('newUiSchema', JSON.parse(newUiSchema))
    
      const details = data.details
      const newDetails = {
        ...details,
        schema: JSON.parse(newSchema),
        uischema: JSON.parse(newUiSchema)
      }
      copyToClipboard(newDetails)

      // console.log('newDetails', newDetails)
      handleChangeTemplate({ ...data, details: newDetails })
    }
    async function copyToClipboard (data: any) {
      try {
        // Convert the data to a JSON string with pretty-printing
        const jsonString = JSON.stringify(data, null, 2)
  
        // Use the Clipboard API to write the text to the clipboard
        await navigator.clipboard.writeText(jsonString)
  
        console.log('Data copied to clipboard successfully.')
      } catch (err) {
        console.error('Failed to copy data to clipboard:', err)
      }
    }
  
    // Call the function with your big object or array
  
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
            <Button color="primary" onClick={onSaveTemplate} data-qa-type="save">
              Save Template
            </Button>
          </div>
        </div>
        {contentTabs.length > 0 && <Tabs activeTab={currentTab} onChange={handleTabChange} tabs={contentTabs} changed={false} />}
        { 
          currentTab === TemplateTab.Visual && <FormBuilder
            schema={JSON.stringify(schema || {})}
            uischema={JSON.stringify(uischema || {})}
            onChange={handleFormChange}
          />
        }
        {
          currentTab === TemplateTab.Preview && isValidJSON(schema) && <JsonEditor
            template={{
              details: { schema },
              _id: data._id
            }}
            messageId={data._id}
          />
        }
        {schema && console.log('Please note: No form has been created. To proceed, kindly create a form.')}
      </div>
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
            onCreate={onCreateNewTemplate}
            onDelete={onDelete}
            onDuplicate={onDuplicate}
            withSearch={true}
            title="Create Template List"
          />
        </div>
      </LeftSide>
      <RightSide>
        {renderContent()}
      </RightSide>
    </AdminContent>
  )
}

export default SettingTemplate
