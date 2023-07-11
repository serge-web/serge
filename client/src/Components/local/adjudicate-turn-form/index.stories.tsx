import React from 'react'

// Import component files
import AdjudicateTurnForm from './index'
import docs from './README.md'
import formData from './mocks/formData'
import { AdjudicateTurnFormPopulate, IconDefinition, PlanTurnFormValues, RouteStore } from 'src/custom-types'
import { deepCopy, routeCreateStore, routeSetCurrent } from 'src/Helpers'

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'
import AdjudicationManager from './helpers/adjudication-manager'
import { ATTRIBUTE_TYPE_NUMBER, ATTRIBUTE_VALUE_NUMBER, Phase } from 'src/config'

export default {
  title: 'local/organisms/AdjudicateTurnForm',
  component: AdjudicateTurnForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

// prepare some routes, and a selected item
const baseStore: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'umpire', '', true, platformTypes, false, false, undefined, undefined, undefined)
const frigateId = 'a0pra00001'
const store: RouteStore = routeSetCurrent(frigateId, baseStore)

// have a route store with attribute data
const storeWithAttributes: RouteStore = deepCopy(store)
if (storeWithAttributes.selected) {
  storeWithAttributes.selected.attributes = [{ attrId: 'comm_a', attrType: ATTRIBUTE_VALUE_NUMBER, value: 123 },
    { attrId: 'comm_b', attrType: ATTRIBUTE_VALUE_NUMBER, value: 42 }]
}

const setRouteStore = (store: RouteStore): void => {
  console.log('new store', store.routes.length)
}

const turnPlanned = (plannedTurn: PlanTurnFormValues): void => {
  console.log('turn planned', plannedTurn)
}

const cancelPlanning = (): void => {
  console.log('cancelling planning')
}

const closePlanningForm = (): void => {
  console.log('closing planning form')
}

const manager: AdjudicationManager = new AdjudicationManager(store, platformTypes, 'a1', 'Asset name', 3,
  setRouteStore, turnPlanned, cancelPlanning, closePlanningForm, formData)

const formWithAttributes: AdjudicateTurnFormPopulate = deepCopy(formData)
formWithAttributes.attributes = [
  { attrId: 'comm_a', editableByPlayer: true, description: 'How much fuel is remaining', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'Fuel', units: 'tons' },
  { attrId: 'comm_b', attrType: ATTRIBUTE_TYPE_NUMBER, name: 'People' }
]
const manager2: AdjudicationManager = new AdjudicationManager(storeWithAttributes, platformTypes, 'a1', 'Asset name', 3,
  setRouteStore, turnPlanned, cancelPlanning, closePlanningForm, formWithAttributes)

const icon: IconDefinition = { forceColor: '#f00', platformType: 'frigate', icon: 'frigate.svg' }

export const Default: React.FC = () => <AdjudicateTurnForm
  manager={manager}
  icon={icon}
  canSubmitPlans={true}
  plansSubmitted={false} />

export const TurnsPlannedWithAttributes: React.FC = () => <AdjudicateTurnForm
  manager={manager2}
  icon={icon}
  canSubmitPlans={true}
  plansSubmitted={true} />

export const CannotSubmitPlans: React.FC = () => <AdjudicateTurnForm
  manager={manager}
  icon={icon}
  plansSubmitted={false}
  canSubmitPlans={false} />
