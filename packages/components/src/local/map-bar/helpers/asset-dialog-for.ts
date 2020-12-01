import { Phase, UMPIRE_FORCE } from '@serge/config'
import { WorldStatePanels } from '../../world-state/helpers/enums'
import { MapBarForms } from './enums'

/** determine which form to show on this click
 * @param {string} playerForce the force for the current player
 * @param {string} assetForce the force for the selected asset
 * @param {Array<string>} assetVisibleTo the forces that can see the asset
 * @param {Array<string>} assetControlledBy which forces can control this asset
 * @param {Phase} gamePhase the name of the current game phase
 * @param {WorldStatePanels} panel the currently active tab in WorldState
 * @return {string} name of dialog to show
 */
const assetDialogFor = (
  playerForce: string,
  assetForce: string,
  assetVisibleTo: Array<string> | undefined,
  assetControlledBy: Array<string> | undefined,
  gamePhase: Phase,
  panel: WorldStatePanels): MapBarForms | undefined => {
    const myForce = assetForce.toLowerCase() === playerForce.toLowerCase() 
    const forceThatIControl = assetControlledBy != null && assetControlledBy.includes(playerForce)
    const canControl: boolean = myForce || forceThatIControl
    const isUmpire = playerForce.toLowerCase() === UMPIRE_FORCE
    switch (gamePhase) {
      case Phase.Planning:
        if (isUmpire) {
          // this depends on the panel
          switch(panel) {
            case WorldStatePanels.Control:
              return canControl ? MapBarForms.Planning : MapBarForms.Visibility
            case WorldStatePanels.Visibility:
              return MapBarForms.Visibility
            default:
              return undefined
          }
        } else if (canControl) {
          return MapBarForms.Planning
        } else {
          // a player has clicked on an asset from a force they don't control
          // check this force can see the asset
          const canSee = assetVisibleTo && assetVisibleTo.find((force: string) => force.toLowerCase() === playerForce.toLowerCase())
          return canSee ? MapBarForms.Perception : undefined

        }
      case Phase.Adjudication:
        if (isUmpire) {
          console.log(isUmpire, canControl, panel)
          // this depends on the panel
          switch(panel) {
            case WorldStatePanels.Control:
              return MapBarForms.Adjudicaton
            case WorldStatePanels.Visibility:
              return MapBarForms.Visibility
            case WorldStatePanels.ControlledBy:
              return canControl ? MapBarForms.Planning : undefined
            default:
              return undefined
          }
        } else if (canControl) {
          // my force in adjudication. Show planning
          return MapBarForms.Planning
        } else {
          // in adj' mode, clicking on a platform of another force lets the
          // player update/change the player's perception of that platform
          return MapBarForms.Perception
        }
    }
}

export default assetDialogFor
