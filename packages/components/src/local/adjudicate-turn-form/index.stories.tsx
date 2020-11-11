import React from 'react'
import { withKnobs, radios } from '@storybook/addon-knobs'

// Import component files
import AdjudicateTurnForm from './index'
import docs from './README.md'
import formData from './mocks/formData'
import { AdjudicateTurnFormValues, PlanTurnFormValues, RouteStore } from '@serge/custom-types'
import { PlanningStates } from '@serge/config'
import { routeCreateStore, routeSetCurrent } from '@serge/helpers'

/* Import mock data */
import { forces, platformTypes } from '@serge/mocks'
import AdjudicationManager from './helpers/adjudication-manager'

export default {
  title: 'local/AdjudicateTurnForm',
  component: AdjudicateTurnForm,
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const iconData = { platformType: 'merchant-vessel', forceColor: 'blue' }

const routeAccepted = (route: AdjudicateTurnFormValues): void => {
  console.log('route accepted in story', route)
}

// prepare some routes, and a selected item
const store2: RouteStore = routeCreateStore(undefined, forces, 'umpire', true, platformTypes, undefined, false, false)
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

const manager: AdjudicationManager = new AdjudicationManager(store, setRouteStore, turnPlanned, cancelPlanning)

const states = {
  Saved: PlanningStates.Saved,
  Pending: PlanningStates.Pending,
  Planning: PlanningStates.Planning,
  Planned: PlanningStates.Planned,
  Rejected: PlanningStates.Rejected
}

export const Default: React.FC = () => <AdjudicateTurnForm
  routeAccepted={routeAccepted}
  plannedRouteStatus={radios('Current planning state', states, PlanningStates.Pending)}
  icon={iconData}
  manager={manager}
  canSubmitPlans={true}
  plansSubmitted={false}
  formHeader="Adjudicate header"
  formData={formData} />

export const TurnsPlanned: React.FC = () => <AdjudicateTurnForm
  routeAccepted={routeAccepted}
  plannedRouteStatus={PlanningStates.Pending}
  icon={iconData}
  canSubmitPlans={true}
  plansSubmitted={true}
  formHeader="Adjudicate header"
  formData={formData} />

export const CannotSubmitPlans: React.FC = () => <AdjudicateTurnForm
  routeAccepted={routeAccepted}
  plannedRouteStatus={PlanningStates.Pending}
  icon={iconData}
  plansSubmitted={false}
  canSubmitPlans={false}
  formHeader="Adjudicate header"
  formData={formData} />
