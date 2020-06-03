import { Phase } from '@serge/config'

/** determine which form to show on this click
 * @param {string} playerForce the force for the current player
 * @param {string} assetForce the force for the selected asset
 * @param {Array<string>} assetControlledBy which forces can control this asset
 * @param {Phase} gamePhase the name of the current game phase
 * @return {string} name of dialog to show
 */
const assetDialogFor = (
  playerForce: string,
  assetForce: string,
  assetControlledBy: Array<string> | undefined,
  gamePhase: Phase): string => {
  let res = ''
  switch (gamePhase) {
    case Phase.Planning:
      if (assetForce.toLowerCase() === playerForce.toLowerCase()) {
        // it's the players' own ship, plan next turn
        res = 'Planning'
      } else if (assetControlledBy != null && assetControlledBy.includes(playerForce)) {
        // it's from a force that the player can control, plan next turn
        res = 'Planning'
      } else if (playerForce.toLowerCase() !== 'umpire') {
        // a player has clicked on an asset from a force they don't control
        res = 'PerceivedAs'
      } else {
        res = ''
      }
      break
    case Phase.Adjudication:
      if (playerForce.toLowerCase() === 'umpire') {
        // in adjudication mode, umpire force performs adjudication
        res = 'Adjudication'
      } else if (assetForce.toLowerCase() !== playerForce.toLowerCase()) {
        // in adj' mode, clicking on a platform of another force lets the
        // player update/change the player's perception of that platform
        res = 'PerceivedAs'
      } else {
        res = ''
      }
      break
  }
  return res
}

export default assetDialogFor
