/* global it expect */
import collatePlanFormData from './collate-plan-form-data'

import { cmdWkWargame } from '@serge/mocks'
import { PlanTurnFormPopulate, PlanTurnFormValues } from 'src/custom-types'
import { deepCopy, routeCreateStore } from '@serge/helpers'
import { Phase } from '@serge/config'

const forces = cmdWkWargame.data.forces.forces
const blueForce = forces[1]
const platformTypes = cmdWkWargame.data.platformTypes ? cmdWkWargame.data.platformTypes.platformTypes : []

// declare const routeCreateStore: (selectedId: string | undefined, phase: Phase, forces: ForceData[], playerForceId: ForceData['uniqid'], playerRole: Role['roleId'], isGameControl: Role['isGameControl'], platformTypes: PlatformTypeData[], filterHistorySteps: boolean, filterPlannedSteps: boolean, wargameInitiated?: boolean | undefined, oldStore?: RouteStore | undefined, channel?: ChannelMapping | undefined, turnNumber?: number | undefined) => RouteStore;

it('contains relevant population results', () => {
  if (blueForce.assets && platformTypes.length > 0) {
    const blueAsset = blueForce.assets[0]
    const routeStore = routeCreateStore(blueAsset.uniqid, Phase.Planning, forces, blueForce.uniqid, blueForce.roles[0].roleId, false, platformTypes, false, false, true, undefined, undefined, 3)
    if (routeStore.selected) {
      const res: PlanTurnFormPopulate = collatePlanFormData(platformTypes, routeStore.selected).populate
      expect(res.speed.length).toEqual(5)
      expect(res.speed[0]).toEqual(6)
      expect(res.status.length).toEqual(3)
      expect(res.status[0]).toEqual({ mobile: true, name: 'Transiting' })
    }
  } else {
    expect('test must fail, we don\'t have blue asset').toEqual('')
  }
})

it('contains relevant current results with planned turns', () => {
  if (blueForce.assets) {
    const newForces = deepCopy(forces)
    const blueForce = newForces[1]
    const blueAsset = blueForce.assets[0]
    blueAsset.status = {
      state: 'Moored'
    }
    const routeStore = routeCreateStore(blueAsset.uniqid, Phase.Planning, newForces, blueForce.uniqid, blueForce.roles[0].roleId, false, platformTypes, false, false, true, undefined, undefined, 3)
    if (routeStore.selected) {
      const res: PlanTurnFormValues = collatePlanFormData(platformTypes, routeStore.selected).values
      expect(res.speedVal).toEqual(10)
      expect(res.statusVal).toEqual({ mobile: true, name: 'Transiting' })
      expect(res.turnsVal).toEqual(1)
    }
  }
})

it('contains relevant current results without out planned turns', () => {
  if (blueForce.assets) {
    const newForces = deepCopy(forces)
    const blueForce = newForces[1]
    const blueAsset = blueForce.assets[0]
    blueAsset.plannedTurns = []
    blueAsset.status = {
      state: 'Moored'
    }
    const routeStore = routeCreateStore(blueAsset.uniqid, Phase.Planning, newForces, blueForce.uniqid, blueForce.roles[0].roleId, false, platformTypes, false, false, true, undefined, undefined, 3)
    if (routeStore.selected) {
      const res: PlanTurnFormValues = collatePlanFormData(platformTypes, routeStore.selected).values
      expect(res.speedVal).toEqual(0)
      expect(res.statusVal).toEqual({ mobile: false, name: 'Moored' })
      expect(res.turnsVal).toEqual(1)
    }
  }
})
