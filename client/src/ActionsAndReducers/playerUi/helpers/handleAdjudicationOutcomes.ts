import { ForceData, InteractionDetails, MessageAdjudicationOutcomes } from 'src/custom-types'
import { handleOutcomes } from '@serge/helpers'

/** apply the adjudication outcomes to the game data
 * 
 */
export default (interaction: InteractionDetails, payload: MessageAdjudicationOutcomes, allForces: ForceData[]): ForceData[] => {
  return handleOutcomes(interaction, payload, allForces)
}
