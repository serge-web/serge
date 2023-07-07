import React from 'react'
// Import component files
import { AttributeTypes, AttributeValues, ForceData, PlatformTypeData } from 'src/custom-types'
import AttributeEditor from './index'
import docs from './README.md'
import { platformTypes, smallScaleForces } from '@serge/mocks'
import { collateEditorData } from '@serge/helpers'

export default {
  title: 'local/attribute-editor',
  component: AttributeEditor,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const onSave = (data: AttributeValues): void => {
  console.log('data', data)
}

const getTypes = (pTypes: PlatformTypeData[]): AttributeTypes => {
  let attributes: AttributeTypes | undefined
  if (pTypes && pTypes[1]) {
    attributes = pTypes[1].attributeTypes
  }
  return attributes || []
}

const getValues = (forces: ForceData[]): any => {
  let aValues: AttributeValues | undefined
  if (forces && forces.length && forces[1] && forces[1].assets && forces[1].assets[0]) {
    aValues = forces[1].assets[0].attributeValues
  }
  return aValues || []
}

const attrTypes = getTypes(platformTypes)
const attrValues = getValues(smallScaleForces)
const attrData = collateEditorData(attrValues, attrTypes)

export const Default: React.FunctionComponent = (): React.ReactElement =>
  <AttributeEditor isOpen={true} onClose={(): void => { console.log('close') }} onSave={onSave} attributeTypes={attrTypes} data={attrData} />

export const InAdjudication: React.FunctionComponent = (): React.ReactElement =>
  <AttributeEditor inAdjudication={true} isOpen={true} onClose={(): void => { console.log('close') }} onSave={onSave} attributeTypes={attrTypes} data={attrData} />
