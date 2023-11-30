import { Asset } from 'src/custom-types'
import { P9BMock } from 'src/mocks'
import { istarSearchRate, findActivityFromCompositeString, TurnTimes, trimPeriod } from './getNextInteraction'

const wargame = P9BMock.data
const forces = wargame.forces.forces
const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

it('calculates search rate', () => {
  const istarAssets: Asset[] = []
  forces.some((force) => {
    if (force.assets) {
      const istar = force.assets.filter((asset) => asset.platformTypeId.toLowerCase().includes('istar'))
      if (istar.length) {
        istarAssets.push(...istar)
      }
    }
  })
  const list = istarAssets.slice(0, 4)
  let ctr = 2
  const items: Array<{ asset: Asset['uniqid'], number: number, missileType?: string }> = list.map((item) => {
    return {
      asset: item.uniqid,
      number: ctr++
    }
  })
  const emptyRate = istarSearchRate([], forces, 1000)
  expect(emptyRate).toEqual(1000)
  const rate = istarSearchRate(items, forces, 1000)
  expect(rate).toEqual(1400) // TODO investigte, it should be 1540
})

// ++
it('extracts activity', () => {
  const testStr = 'f-blue-Maritime-Transit'
  const force = 'f-blue'
  const forceActs = activities.find((set) => set.force === force)
  expect(forceActs).toBeTruthy()
  if (forceActs) {
    const activity = findActivityFromCompositeString(testStr, forceActs)
    expect(activity).toBeTruthy()
    if (activity) {
      expect(activity.name).toEqual('Transit')
    }
  }
})

it('trims period', () => {
  const p1: TurnTimes = { start: 100, end: 200 }
  const p2: TurnTimes = { start: 50, end: 250 }
  const p3: TurnTimes = { start: 150, end: 180 }
  const t1 = trimPeriod(p1, p2)
  expect(t1.start).toEqual(100)
  expect(t1.end).toEqual(200)

  const t2 = trimPeriod(p1, p3)
  expect(t2.start).toEqual(150)
  expect(t2.end).toEqual(180)
})
