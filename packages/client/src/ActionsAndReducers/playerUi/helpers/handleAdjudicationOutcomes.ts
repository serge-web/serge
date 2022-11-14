import { ForceData, MessageAdjudicationOutcomes } from '@serge/custom-types'
import { handleAdjudicationOutcomesHelper } from '@serge/helpers'
/** apply the adjudication outcomes to the game data
 * 
 */
export default (payload: MessageAdjudicationOutcomes, allForces: ForceData[]): ForceData[] => {
  return handleAdjudicationOutcomesHelper(payload, allForces)
}
