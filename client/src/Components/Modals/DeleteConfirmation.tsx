import { Confirm } from '@serge/components'
import { Asset, ForceData, IconOption, ModalData, PlatformType, PlatformTypeData, RoleType, RootState } from '@serge/custom-types'
import '@serge/themes/App.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearWargames,
  deleteAnnotation,
  deleteSelectedAsset,
  deleteSelectedChannel,
  deleteSelectedForce,
  deleteSelectedRole,
  updateForcesAndDeletePlatformType
} from '../../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { modalAction } from '../../ActionsAndReducers/Modal/Modal_ActionCreators'

/** asset, with its parent force */
type ForcePlusAsset = {
  readonly force: ForceData
  readonly asset: Asset
}

const DeleteModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector((state: RootState) => state.currentModal)
  const wargame = useSelector((state: RootState) => state.wargame)

  // check we have necessary data nugget
  if (!currentModal.data) {
    console.warn('Warning: Delete Confirmation form lacks ModalData data element')
    return <></>
  }

  const { type, data, customMessages } = currentModal.data as ModalData
  const [message, setMessage] = useState<string>(customMessages && customMessages.message)

  /** for a given platform type id, find all assets of that type. Provide
   * as array, with parent force details
   */
  const findAssetsOfSelectedPlatformType = (forces: ForceData[], platformTypeId: PlatformTypeData['uniqid']): ForcePlusAsset[] => {
    return forces.reduce((result: ForcePlusAsset[], force: ForceData) => {
      force.assets?.forEach(asset => {
        if (asset.platformTypeId === platformTypeId) {
          result.push({ force, asset })
        }
      })
      return result
    }, [] as ForcePlusAsset[])
  }

  useEffect(() => {
    if (type === 'platformType') {
      const forces: ForceData[] = wargame.data.forces.forces
      const platformTypeId = (data as PlatformTypeData).uniqid
      const platformTypeUsed = findAssetsOfSelectedPlatformType(forces, platformTypeId)
      if (platformTypeUsed) {
        setMessage(platformTypeUsed.length ? `${platformTypeUsed.length} assets of this type will be also be deleted:<br/>${platformTypeUsed.map(item => `<li>${item.asset.name} (${item.force.name})</li>`).join('')}${message}` : message)
      }
    }
  }, [type])

  const onHideModal = () => {
    dispatch(modalAction.close())
  }

  const onDelete = () => {
    const curTab = wargame.currentTab

    switch (type) {
      case 'force': {
        if (curTab && wargame.currentWargame) {
          const isUmpire = wargame.data[curTab].forces.find((f: ForceData) => f.uniqid === data).umpire
          if (isUmpire) return
          dispatch(deleteSelectedForce(wargame.currentWargame, data as string))
        }
        break
      }
      case 'asset': {
        dispatch(deleteSelectedAsset(data))
        break
      }
      case 'channel': {
        if (wargame.currentWargame) dispatch(deleteSelectedChannel(wargame.currentWargame, data as string))
        break
      }
      case 'role': {
        if (wargame.currentWargame) dispatch(deleteSelectedRole(wargame.currentWargame, data as RoleType))
        break
      }
      case 'games': {
        dispatch(clearWargames())
        break
      }
      case 'platformType': {
        if (wargame.currentWargame) {
          const forces: ForceData[] = wargame.data.forces.forces
          const platformTypeId = (data as PlatformTypeData).uniqid
          for (const item of findAssetsOfSelectedPlatformType(forces, platformTypeId)) {
            const newForce = item.force
            const forceIdx = forces.findIndex(force => force.uniqid === newForce.uniqid)
            newForce.assets = item.force.assets?.filter(a => a.platformTypeId !== item.asset.platformTypeId)
            forces[forceIdx] = newForce
          }
          dispatch(updateForcesAndDeletePlatformType(wargame.currentWargame, forces, data as PlatformType))
        }
        break
      }
      case 'annotation': {
        if (wargame.currentWargame) dispatch(deleteAnnotation(wargame.currentWargame, data as IconOption))
        break
      }
      default: {
        console.warn('delete handler not provided for:', type)
      }
    }

    dispatch(modalAction.close())
  }

  if (!currentModal.open) return <></>

  return (
    <Confirm
      isOpen={currentModal.open}
      title={customMessages ? customMessages.title : `Delete ${type}`}
      message={customMessages ? message : 'This action is permanent. Are you sure?'}
      cancelBtnText='Cancel'
      confirmBtnText='Delete'
      onCancel={onHideModal}
      onConfirm={onDelete}
    />
  )
}
export default DeleteModal
