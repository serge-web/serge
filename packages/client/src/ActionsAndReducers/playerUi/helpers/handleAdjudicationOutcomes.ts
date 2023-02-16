import { ForceData, InteractionDetails, MessageAdjudicationOutcomes } from '@serge/custom-types'
import { handleOutcomes } from '@serge/helpers'
import moment from 'moment'

/** apply the adjudication outcomes to the game data
 * 
 */
export default (interaction: InteractionDetails, payload: MessageAdjudicationOutcomes, allForces: ForceData[]): ForceData[] => {
  return handleOutcomes(interaction, payload, allForces, moment.utc(interaction.endTime).valueOf())
}
