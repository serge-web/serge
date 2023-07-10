/* global it expect */

/* Import mock data */
import { TASK_GROUP } from '@serge/config'
import { Asset, ForceData } from 'src/custom-types'
import { forces, platformTypes } from '@serge/mocks'
import findPlatformTypeFor from '../find-platform-type-for'

import groupCreateNewGroup from '../group-create-new-group'

const taskGroupType = findPlatformTypeFor(platformTypes, TASK_GROUP, '')

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

  if (!taskGroupType) {
    throw new Error('Failed to find task group type')
  }

  const forces2: ForceData[] = groupCreateNewGroup(frigateId, tankerId, forces, taskGroupType)
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
  if (forces2[1].assets && forces2[1].assets[2]) {
    const taskGroup = forces2[1].assets[2]
    if (taskGroup.comprising) {
      expect(taskGroup.comprising.find((asset: Asset) => asset.uniqid === frigateId)).toBeTruthy()

      // now get the tanker
      const tanker = taskGroup.comprising.find((asset: Asset) => asset.uniqid === tankerId)
      expect(tanker).toBeTruthy()

      // remove the tanker
      expect(taskGroup.comprising.length).toEqual(2)
      taskGroup.comprising = taskGroup.comprising.filter((asset: Asset) => asset.uniqid !== tankerId)
      expect(taskGroup.comprising.length).toEqual(1)

      // put the tanker back in the top level
      if (tanker) {
        forces2[1].assets.push(tanker)
      }

      // check tanker has appeared at top level
      expect(forces2[1].assets.length).toEqual(4)

      // ok, try to add the tanker to the task group
      const forces3: ForceData[] = groupCreateNewGroup(tankerId, taskGroup.uniqid, forces2, taskGroupType)
      if (forces3[1] && forces3[1].assets && forces3[1].assets.length) {
        expect(forces3[1].assets.length).toEqual(3)
        const taskGroup2 = forces3[1].assets[2]
        expect(taskGroup2.comprising).toBeTruthy()
        expect(taskGroup2.comprising?.length).toEqual(2)
      } else {
        expect(false).toBeTruthy()
      }
    }
  } else {
    expect(false).toBeTruthy()
  }
})
