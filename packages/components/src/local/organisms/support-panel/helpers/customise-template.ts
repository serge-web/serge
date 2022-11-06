import { GroupedActivitySet, MessageStructure, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import { AssetRow } from '../../planning-assets/types/props'

export const customiseTemplate = (_document: MessageStructure | undefined, schema: Record<string, any>, 
  ownAssets: AssetRow[], otherAssets: AssetRow[], activities?: PerForcePlanningActivitySet[]): Record<string, any> => {
  if (schema) {
    const oldOwnAssets = schema.properties?.ownAssets?.items?.properties?.asset
    if (oldOwnAssets) {
      oldOwnAssets.enum = ownAssets.map((asset: AssetRow) => asset.id)
      oldOwnAssets.options.enum_titles = ownAssets.map((asset: AssetRow) => asset.name)
    }
    const oldOwnTargets = schema.properties?.otherAssets?.items
    if (oldOwnTargets) {
      oldOwnTargets.enum = otherAssets.map((asset: AssetRow) => asset.id)
      oldOwnTargets.options.enum_titles = otherAssets.map((asset: AssetRow) => asset.name)
    }
    const oldActivity = schema.properties?.activity?.items
    if (oldActivity && activities) {
      const isBlue = _document && _document.Reference && _document.Reference.includes('Blue')
      const myActivities = isBlue ? activities[0] : activities[1]
  
      const acts: Array<{id: string, name: string}> = []
      myActivities.groupedActivities.map((val: GroupedActivitySet) => {
        val.activities.forEach((val2: string | PlanningActivity) => {
          if (typeof(val) === 'string') {
            throw Error('Should not have string in planning activities')
          }
          const plan = val2 as PlanningActivity
          acts.push({id: plan.uniqid, name: val.category + '-' + plan.name})
        })
      })
      oldActivity.enum = acts.map((val) => val.id)
      oldActivity.options.enum_titles = acts.map((val) => val.name)
    }

  }
  console.log('returning', schema)
  return schema
}
