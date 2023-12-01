import { ForceData, InteractionDetails, MessageAdjudicationOutcomes } from 'src/custom-types'

import { handleOutcomes } from 'src/Helpers'

/** apply the adjudication outcomes to the game data
 * 
 */
// NOTE: This function is currently not in use. It may be intended for future use.
export default (interaction: InteractionDetails, payload: MessageAdjudicationOutcomes, allForces: ForceData[]): ForceData[] => {
  return handleOutcomes(interaction, payload, allForces)
}
