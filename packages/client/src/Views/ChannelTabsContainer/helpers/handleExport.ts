import { Asset, ForceData, PlayerUi } from '@serge/custom-types'

export const FORCES = 'forces'
export const INTERACTIONS = 'interactions'
export const MESSAGES = 'messages'

const storeAsset = (asset: Asset, assets: Record<string, any>[]) => {
  const val = {
    id: asset.uniqid
  }
  assets.push(val)
  if (asset.comprising) {
    asset.comprising.forEach((asset2: Asset) => {
      storeAsset(asset2, assets)
    })
  }
}

const handleExport = (state: PlayerUi) => {
  const forces = state.allForces
  const assets: Array<Record<string, any>> = []
  forces.forEach((force: ForceData) => {
    if (force.assets) {
      force.assets.forEach((asset: Asset) => {
        storeAsset(asset, assets)
      })
    }
  })
  console.log('assets', assets)
}

export default handleExport
