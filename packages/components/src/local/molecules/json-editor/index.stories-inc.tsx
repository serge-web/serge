import * as turf from '@turf/turf'
import React from 'react'

// Import component files
import { withKnobs } from '@storybook/addon-knobs'
import JsonEditor from './index'
import docs from './README.md'

// Import mock
import {
  messageDataCollaborativeEditing, messageDataCollaborativeResponding,
  MessageTemplatesMoskByTitle, P9BMock, planningMessages as planningChannelMessages, WargameMock
} from '@serge/mocks'
import { Story } from '@storybook/react/types-6-0'

import { PLANNING_MESSAGE } from '@serge/config'
import {
  Asset, GroupedActivitySet, MessageInfoTypeClipped, MessageInteraction,
  MessagePlanning, MessageStructure, PlanningActivity
} from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'
import { AssetRow } from '../../p9legacy/planning-assets/types/props'
import { collapseLocation } from '../../p9legacy/planning-messages-list/helpers/collapse-location'
import { customiseActivities } from '../../p9legacy/support-panel/helpers/customise-activities'
import { customiseAssets } from '../../p9legacy/support-panel/helpers/customise-assets'
import { customiseLiveOrders } from '../../p9legacy/support-panel/helpers/customise-live-orders'
import { customiseLocation } from '../../p9legacy/support-panel/helpers/customise-location'
import { generateAllTemplates, generateTemplate } from './helpers/generate-p9-templates'
import { coreTemplate } from './helpers/p9-core'
import { otherTemplate } from './helpers/p9-other'
import Props from './types/props'
import { interactsWith } from '../../p9legacy/support-panel/helpers/gen-order-data'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

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
  const data = generateAllTemplates()
  console.log('activities', data.activities)
  console.log('templates', data.templates)
  const activities = data.activities
  activities.forEach((force1) => {
    force1.groupedActivities.forEach((group1) => {
      group1.activities.forEach((act1) => {
        activities.forEach((force2) => {
          force2.groupedActivities.forEach((group2) => {
            group2.activities.forEach((act2) => {
              interactsWith(act1, act2, true)
            })
          })
        })
      })
    })
  })
}

const template = MessageTemplatesMoskByTitle[messageDataCollaborativeEditing[0].details.messageType]
const channel = P9BMock.data.channels.channels[0]
const templateMessageCreator = {
  details: MessageTemplatesMoskByTitle[messageDataCollaborativeEditing[0].details.messageType].details,
  _id: channel.uniqid
}

const Template: Story<Props> = ({ messageId, disabled, template, messageContent, modifyForEdit, customiseTemplate }) => {
  return (
    <JsonEditor
      storeNewValue={storeNewValue}
      template={template}
      messageId={messageId}
      disabled={disabled}
      gameDate={WargameMock.data.overview.gameDate}
      messageContent={messageContent}
      modifyForEdit={modifyForEdit}
      customiseTemplate={customiseTemplate}
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

const templates = P9BMock.data.templates ? P9BMock.data.templates.templates : []

const planningMessages = planningChannelMessages.filter((msg: MessageInteraction | MessagePlanning | MessageInfoTypeClipped) => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]
const landActivityTemplate = templates.find((template) => template.title === planningMessages[0].details.messageType)
const landMessage = planningMessages[0]

const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

const localCustomise = (_document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> => {
  const forces = P9BMock.data.forces.forces
  const blueAssets = forces[1].assets ? forces[1].assets : []
  const redAssets = forces[2].assets ? forces[2].assets : []
  const toRow = (asset: Asset): AssetRow => {
    const subType = asset.attributes ? asset.attributes.a_Type as string : 'n/a'
    const row: AssetRow = {
      id: asset.uniqid,
      icon: 'icon',
      name: asset.name,
      platformType: asset.platformTypeId,
      subType: subType,
      health: 100,
      c4: 'Operational',
      domain: 'Land',
      attributes: { word: 'text', number: 123 },
      taskGroup: ''
    }
    return row
  }
  const blueRows = blueAssets.map((asset) => toRow(asset))
  const redRows = redAssets.map((asset) => toRow(asset))

  // and the activities
  const isBlue = _document && _document.Reference && _document.Reference.includes('Blue')

  const forceActivities = isBlue ? activities[0] : activities[1]
  const acts: Array<{ id: string, name: string }> = []
  forceActivities.groupedActivities.forEach((val: GroupedActivitySet) => {
    val.activities.forEach((val2: string | PlanningActivity) => {
      if (typeof (val) === 'string') {
        throw Error('Should not have string in planning activities')
      }
      const plan = val2 as PlanningActivity
      acts.push({ id: plan.uniqid, name: val.category + '-' + plan.name })
    })
  })
  // const overview = P9BMock.data.overview

  const liveOrders: MessagePlanning[] = planningMessages

  const customisers: Array<{ (_document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> }> = [
    (document, template) => customiseAssets(document, template, blueRows, redRows),
    (document, template) => customiseActivities(document, template, []),
    (document, template) => customiseLiveOrders(document, template, liveOrders),
    (document, template) => customiseLocation(document, template)
  ]

  let res: Record<string, any> = { ...schema }
  customisers.forEach((fn) => {
    res = fn(document, res)
  })
  return res
}

export const PlanningMessage = Template.bind({})
PlanningMessage.args = {
  customiseTemplate: localCustomise,
  template: landActivityTemplate,
  messageContent: landMessage.message,
  messageId: 'id_2b',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

// const land = generateTemplate('first', coreTemplate, landTemplate)
// const maritime2 = generateTemplate('first', true, coreTemplate, maritimeTemplate, 'ISTAR')
const maritime = generateTemplate('first', true, coreTemplate, otherTemplate, 'ISTAR')
// const air = generateTemplate('first', coreTemplate, airTemplate)
// const other = generateTemplate('first', coreTemplate, otherTemplate, transit)

// generateAllTemplates()

// helper code to inject perceived locations, including some that aren't the actual locations
const injectPerceivedLocations = !7
if (injectPerceivedLocations) {
  P9BMock.data.forces.forces.forEach((force) => {
    if (force.assets) {
      force.assets.forEach((asset) => {
        const loc = asset.location
        if (loc) {
          const pers = asset.perceptions
          pers.forEach((perc) => {
            const rnd = Math.random()
            if (rnd > 0.6) {
              perc.position = deepCopy(loc)
            } else if (rnd > 0.4) {
              const randBrg = Math.random() * 360
              const randDistKm = Math.random() * 50
              const origin = turf.point([loc[1], loc[0]])
              const newPt = turf.destination(origin, randDistKm, -180 + randBrg, { units: 'kilometers' })
              const newLocation = newPt.geometry.coordinates
              const newLat = Math.floor(newLocation[1] * 10000) / 10000
              const newLong = Math.floor(newLocation[0] * 10000) / 10000
              const newLoc: [number, number] = [newLat, newLong]
              perc.position = newLoc
            } else {
              delete perc.position
            }
          })
        }
      })
    }
  })
  console.log('force with percept', P9BMock.data.forces.forces)
}

export const P9Message = Template.bind({})
P9Message.args = {
  customiseTemplate: localCustomise,
  modifyForEdit: (document) => collapseLocation(document),
  template: maritime,
  messageContent: landMessage.message,
  messageId: 'id_2b',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}

export const P9MessageWithoutLocation = Template.bind({})
const msg = deepCopy(landMessage.message)
delete msg.location
P9MessageWithoutLocation.args = {
  // customiseTemplate: localCustomise,
  modifyForEdit: (document) => collapseLocation(document),
  template: maritime,
  messageContent: msg,
  messageId: 'id_2b',
  disabled: false,
  gameDate: WargameMock.data.overview.gameDate
}
