import React from 'react'

// Import component files
import AdjudicateTurnForm from './index'
import docs from './README.md'
import formData from './mocks/formData'
import { PlanTurnFormValues, RouteStore } from '@serge/custom-types'
import { routeCreateStore, routeSetCurrent } from '@serge/helpers'

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'
import AdjudicationManager from './helpers/adjudication-manager'
import { Phase } from '@serge/config'

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
const store2: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'umpire', platformTypes, false, false)
const frigateId = 'a0pra00001'
const store: RouteStore = routeSetCurrent(frigateId, store2)

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

export const Default: React.FC = () => <AdjudicateTurnForm
  manager={manager}
  canSubmitPlans={true}
  plansSubmitted={false} />

export const TurnsPlanned: React.FC = () => <AdjudicateTurnForm
  canSubmitPlans={true}
  plansSubmitted={true} />

export const CannotSubmitPlans: React.FC = () => <AdjudicateTurnForm
  plansSubmitted={false}
  canSubmitPlans={false} />
