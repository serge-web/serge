import { Phase } from '@serge/config'

/** determine which form to show on this click
 * @param {string} playerForce the force for the current player
 * @param {string} assetForce the force for the selected asset
 * @param {Array<string>} assetControlledBy which forces can control this asset
 * @param {Phase} gamePhase the name of the current game phase
 * @return {string} name of dialog to show
 */
const assetDialogFor = (
  playerForce:string, 
  assetForce:string, 
  assetControlledBy: [string?] | undefined, 
  gamePhase: Phase): string => {
    let res: string = ''
    switch(gamePhase)
    {
      case Phase.Planning:
        if (assetForce.toLowerCase() === playerForce.toLowerCase()) {
          res = "Planning"
        } else if (assetControlledBy != null && assetControlledBy.includes(playerForce)) {
          res = "Planning"
        } else if(playerForce.toLowerCase() !== 'umpire') {
          res = "PerceivedAs"
        } else {
          res = ''
        }
        break;
      case Phase.Adjudication:
        if (playerForce.toLowerCase() === 'umpire') {
          res = "Adjudication"
        } else if (assetForce.toLowerCase() !== playerForce.toLowerCase()) {
          res = "PerceivedAs"
        } else {
          res = ''
        }
        break;      
    }
    return res
}

export default assetDialogFor
