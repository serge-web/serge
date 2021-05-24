/* global it expect */

/* Import mock data */
import { Asset, ForceData } from '@serge/custom-types'
import { forces } from '@serge/mocks'

import groupCreateNewGroup from './group-create-new-group'

it('Creates new group from provided assets', () => {
  const frigateId = 'a0pra00001'
  const tankerId = 'a0pra00003'
  let blueSize = 0
  // check asset present at top level
  const blueAssets: Asset[] | undefined = forces[1].assets
  if (blueAssets && blueAssets.length > 0) {
    blueSize = blueAssets.length
    const frigate: Asset | undefined = blueAssets.find((asset: Asset) => asset.uniqid === frigateId)
    expect(frigate).toBeTruthy()
    const tanker: Asset | undefined = blueAssets.find((asset: Asset) => asset.uniqid === tankerId)
    expect(tanker).toBeTruthy()
  } else {
    expect(false).toBeTruthy()
  }

  const forces2: ForceData[] = groupCreateNewGroup(frigateId, tankerId, forces)
  expect(forces2).toBeTruthy()

  // check assets not at top level
  if (forces2[1].assets && forces2[1].assets.length) {
    const frigate: Asset | undefined = forces2[1].assets.find((asset: Asset) => asset.uniqid === frigateId)
    expect(frigate).toBeFalsy()
    const tanker: Asset | undefined = forces2[1].assets.find((asset: Asset) => asset.uniqid === tankerId)
    expect(tanker).toBeFalsy()
  } else {
    expect(false).toBeTruthy()
  }

  // check new task group present
  expect(forces2[1].assets && forces2[1].assets.length).toEqual(blueSize - 1)

  // check assets in new task group
  if (forces2[1].assets && forces2[1].assets[2] && forces2[1].assets[2].comprising) {
    expect(forces2[1].assets[2].comprising.find((asset: Asset) => asset.uniqid === frigateId)).toBeTruthy()
    expect(forces2[1].assets[2].comprising.find((asset: Asset) => asset.uniqid === tankerId)).toBeTruthy()
  } else {
    expect(false).toBeTruthy()
  }
})
