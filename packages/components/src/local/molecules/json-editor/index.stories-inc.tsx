import React from 'react'

// Import component files
import { withKnobs } from '@storybook/addon-knobs'
import JsonEditor from './index'
import docs from './README.md'

// Import mock
import { messageDataCollaborativeEditing, messageDataCollaborativeResponding, MessageTemplatesMoskByTitle, MockPerForceActivities, MockPlanningActivities, P9Mock, planningMessages as planningChannelMessages, planningMessageTemplatesMock, WargameMock } from '@serge/mocks'
import { Story } from '@storybook/react/types-6-0'

import { PLANNING_MESSAGE } from '@serge/config'
import { Asset, GroupedActivitySet, MessageInfoTypeClipped, MessageInteraction, MessagePlanning, MessageStructure, PlanningActivity } from '@serge/custom-types'
import { AssetRow } from 'src/local/organisms/planning-assets/types/props'
import { fixPerForcePlanningActivities } from '../../organisms/planning-channel/helpers/collate-plans-helper'
import Props from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

console.clear()

export default {
  title: 'local/molecules/JsonEditor',
  component: JsonEditor,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      defaultValue: false,
      control: { type: 'boolean' }
    }
  }
}
const storeNewValue = (_value: { [property: string]: any }): void => {
  console.log('store test', _value)
}

const template = MessageTemplatesMoskByTitle[messageDataCollaborativeEditing[0].details.messageType]
const channel = P9Mock.data.channels.channels[0]
const templateMessageCreator = {
  details: MessageTemplatesMoskByTitle[messageDataCollaborativeEditing[0].details.messageType].details,
  _id: channel.uniqid
}

const Template: Story<Props> = ({ messageId, disabled, template, messageContent, modifyForEdit, customiseTemplate }) => {
  console.log('cust template', customiseTemplate)
  return (
    <JsonEditor
      storeNewValue={storeNewValue}
      template={template}
      messageId={messageId}
      disabled={disabled}
      gameDate={WargameMock.data.overview.gameDate}
      messageContent={messageContent}
      modifyForEdit = {modifyForEdit}
      customiseTemplate = {customiseTemplate}
    />
  )
}

export const Standard = Template.bind({})
Standard.args = {
  messageContent: messageDataCollaborativeEditing[0].message,
  messageId: 'id_1',
  template: template,
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

export const Response = Template.bind({})
Response.args = {
  template: templateMessageCreator,
  messageContent: messageDataCollaborativeResponding[0].message,
  messageId: 'id_2ß',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

export const MessageCreator = Template.bind({})
MessageCreator.args = {
  template: templateMessageCreator,
  messageId: 'id_2ß',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

const planningMessages = planningChannelMessages.filter((msg: MessageInteraction | MessagePlanning | MessageInfoTypeClipped) => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]
const landActivityTemplate = planningMessageTemplatesMock.find((template) => template.title === planningMessages[0].details.messageType)
const landMessage = planningMessages[0]

const planningActivities = MockPlanningActivities
const perForcePlanningActivities = MockPerForceActivities
const filledInPerForcePlanningActivities = fixPerForcePlanningActivities(perForcePlanningActivities, planningActivities)

const customiseLandTemplate = (_document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> => {
  if (schema) {
    const forces = P9Mock.data.forces.forces
    const blueAssets = forces[1].assets ? forces[1].assets : []
    const redAssets = forces[2].assets ? forces[2].assets : []
    const toRow = (asset: Asset): AssetRow => {
      const row: AssetRow = {
        id: asset.uniqid,
        icon: 'icon',
        name: asset.name,
        condition: asset.condition,
        status: asset.status ? asset.status.state : 'unknown',
        platformType: asset.platformTypeId
      }
      return row
    }
    const blueRows = blueAssets.map((asset) => toRow(asset))
    const redRows = redAssets.map((asset) => toRow(asset))

    // and the activities
    const isBlue = _document && _document.Reference.includes('Blue')

    const oldOwnAssets = schema.properties?.ownAssets?.items?.properties?.asset?.enum
    if (oldOwnAssets) {
      schema.properties.ownAssets.items.properties.asset.enum = blueRows.map((asset: AssetRow) => asset.id)
      schema.properties.ownAssets.items.properties.asset.options.enum_titles = blueRows.map((asset: AssetRow) => asset.name)
    }
    const oldOwnTargets = schema.properties?.otherAssets?.items?.enum
    if (oldOwnTargets) {
      schema.properties.otherAssets.items.enum = redRows.map((asset: AssetRow) => asset.id)
      schema.properties.otherAssets.items.options.enum_titles = redRows.map((asset: AssetRow) => asset.name)
    }
    const activities = schema.properties?.activity
    console.log('activities', activities)
    if (activities) {
      const forceActivities = isBlue ? filledInPerForcePlanningActivities[0] : filledInPerForcePlanningActivities[1]
      const acts: Array<{id: string, name: string}> = []
      forceActivities.groupedActivities.map((val: GroupedActivitySet) => {
        val.activities.forEach((val2: string | PlanningActivity) => {
          if (typeof (val) === 'string') {
            throw Error('Should not have string in planning activities')
          }
          const plan = val2 as PlanningActivity
          acts.push({ id: plan.uniqid, name: val.category + '-' + plan.name })
        })
      })
      activities.enum = acts.map((val) => val.id)
      activities.options.enum_titles = acts.map((val) => val.name)
    }
  }

  return schema
}

console.log('land message', landMessage.message)

export const PlanningMessage = Template.bind({})
PlanningMessage.args = {
  customiseTemplate: customiseLandTemplate,
  template: landActivityTemplate,
  messageContent: landMessage.message,
  messageId: 'id_2b',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}
