import React from 'react'

// Import component files
import AdjudicateTurnForm from './index'
import docs from './README.md'
import formData from './mocks/formData'
import { AdjudicateTurnFormPopulate, PlanTurnFormValues, RouteStore } from '@serge/custom-types'
import { deepCopy, routeCreateStore, routeSetCurrent } from '@serge/helpers'

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'
import AdjudicationManager from './helpers/adjudication-manager'
import { COMMODITY_TYPE_NUMBER, COMMODITY_VALUE_NUMBER, Phase } from '@serge/config'

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

const iconData = { platformType: 'merchant-vessel', forceColor: 'blue' }

// prepare some routes, and a selected item
const baseStore: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'umpire', platformTypes, undefined, false, false)
const frigateId = 'a0pra00001'
const store: RouteStore = routeSetCurrent(frigateId, baseStore)

// have a route store with attribute data
const storeWithAttributes: RouteStore = deepCopy(store)
if (storeWithAttributes.selected) {
  storeWithAttributes.selected.attributes = [{ commId: 'comm_a', commType: COMMODITY_VALUE_NUMBER, value: 123 },
    { commId: 'comm_b', commType: COMMODITY_VALUE_NUMBER, value: 42 }]
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
  setRouteStore, turnPlanned, cancelPlanning, closePlanningForm, iconData, formData)

// const fuelCommodity: NumberCommodityType = { commId: 'comm_a', commType: COMMODITY_TYPE_NUMBER, name: 'Fuel', units: 'tons' }
const formWithCommodities: AdjudicateTurnFormPopulate = deepCopy(formData)
formWithCommodities.attributes = [
  { commId: 'comm_a', commType: COMMODITY_TYPE_NUMBER, name: 'Fuel', units: 'tons' },
  { commId: 'comm_b', commType: COMMODITY_TYPE_NUMBER, name: 'People' }
]
const manager2: AdjudicationManager = new AdjudicationManager(storeWithAttributes, platformTypes, 'a1', 'Asset name', 3,
  setRouteStore, turnPlanned, cancelPlanning, closePlanningForm, iconData, formWithCommodities)

console.log('attr', manager2, manager2.currentAttributeValues())

export const Default: React.FC = () => <AdjudicateTurnForm
  manager={manager}
  canSubmitPlans={true}
  plansSubmitted={false} />

export const TurnsPlannedWithCommodities: React.FC = () => <AdjudicateTurnForm
  manager={manager2}
  canSubmitPlans={true}
  plansSubmitted={true} />

export const CannotSubmitPlans: React.FC = () => <AdjudicateTurnForm
  manager={manager}
  plansSubmitted={false}
  canSubmitPlans={false} />
