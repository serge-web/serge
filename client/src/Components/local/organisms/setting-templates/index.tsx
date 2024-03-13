import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import Button from '../../atoms/button'
import { TemplateBody } from 'src/custom-types'
import TextInput from '../../atoms/text-input'
import { customizeValidator } from '@rjsf/validator-ajv8'
import Form from '@rjsf/core'
import Tabs from '../../atoms/tabs'
import { TemplateTab } from 'src/config'
import styles from './styles.module.scss'
import { AdminContent, LeftSide, RightSide } from '../../atoms/admin-content'
import EditableList, { Item } from '../../molecules/editable-list'
import { FormBuilder } from '@ginkgo-bioworks/react-json-schema-form-builder'
import './bioworks.css'
import PropTypes, { FormData } from './types/props'

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
  const selectedChannelIdx = templates.findIndex(template => template._id === selectedTemplate?._id)
  const [selectedItem, setSelectedItem] = useState(Math.max(selectedChannelIdx, 0))
  const [templateData, setTemplateData] = useState<TemplateBody[]>(templates)
  const [currentTab, setCurrentTab] = useState<string>(TemplateTab.Preview)
  const [schema, setSchema] = useState<string>('{}')
  const [uischema, setUiSchema] = useState('{}')
  const validator = customizeValidator<FormData>()
  const formData: FormData = {}

  useEffect(() => {
    // Find the index of the selected template in the templates array
    const selectedId = templates.findIndex(template => template._id === selectedTemplate?._id)
  
    const correctedSelectedItem = Math.max(selectedId, 0)
  
    const selectedTemplateDetails = templates[correctedSelectedItem]?.details || {}
  
    // Destructure schema and uischema from the selected template details
    const { schema, uischema } = selectedTemplateDetails as any
  
    // Update state with the selected template information
    setSelectedItem(correctedSelectedItem)
    setTemplateData(templates)
    setSchema(schema)
    setUiSchema(uischema)
  }, [selectedItem, templates, selectedTemplate])

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
      const templateDetails = {
        schema: schema,
        uischema: uischema
      }
      templateData[selectedItem].details = templateDetails
      onSave(templateData[selectedItem])
    }
  }
  
  const onCreateNewTemplate = () => {
    const Template: TemplateBody = {
      lastUpdated: new Date().toISOString(),
      title: 'Chat',
      details: { 
        schema: '{}',
        uischema: '{}'
      },
      completed: false,
      _id: 'k16eedkl',
      _rev: ''
    }
    
    onCreate && onCreate(Template)
  }

  const renderContent = (): React.ReactNode => {
    const data = templates[selectedItem]

    const handleTabChange = (changedTab: string): void => {
      setCurrentTab(changedTab)
    }

    const contentTabs = [
      TemplateTab.Preview,
      TemplateTab.Visual
    ]

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
        {contentTabs.length > 0 && <Tabs activeTab={currentTab} onChange={handleTabChange} tabs={contentTabs} changed={false} />}
        { 
          currentTab === TemplateTab.Preview && <FormBuilder
            schema={schema}
            uischema={uischema}
            onChange={(newSchema: string, newUiSchema: string) => {
              setSchema(newSchema)
              setUiSchema(newUiSchema)
            }}
          />
        }
        {
          currentTab === TemplateTab.Visual && schema && <Form<FormData> 
            schema={JSON.parse(schema)} 
            validator={validator} 
            formData={formData} 
          />
        }
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
