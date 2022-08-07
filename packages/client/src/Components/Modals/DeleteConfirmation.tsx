import { Confirm } from '@serge/components'
import { Asset, ForceData, IconOption, ModalData, PlatformType, PlatformTypeData, RoleType, RootState } from '@serge/custom-types'
import '@serge/themes/App.scss'
import React, { useEffect, useState } from 'react'
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

type PlatformTypeCount = {
  force: ForceData
  asset: Asset
}

const DeleteModal = () => {
  const dispatch = useDispatch()
  const currentModal = useSelector((state: RootState) => state.currentModal)
  const wargame = useSelector((state: RootState) => state.wargame)
  const { type, data, customMessages } = currentModal.data as ModalData
  const [message, setMessage] = useState<string>(customMessages && customMessages.message)

  if (!currentModal.data) {
    return <></>
  }

  const countPlatformTypeUsed = (): PlatformTypeCount[] => {
    return wargame.data.forces.forces.reduce((result, force) => {
      const platformTypeId = (data as PlatformTypeData).uniqid
      force.assets?.filter(asset => {
        if (asset.platformTypeId === platformTypeId) {
          result.push({ force, asset })
        }
      })
      return result
    }, [] as PlatformTypeCount[])
  }

  useEffect(() => {
    if (type === 'platformType') {
      const platformTypeUsed = countPlatformTypeUsed()
      if (platformTypeUsed) {
        setMessage(platformTypeUsed.length ? `${platformTypeUsed.length} Assets of this type will be also be deleted:<br/>${platformTypeUsed.map(item => `<li>${item.asset.name} (${item.force.name})</li>`).join('')}${message}` : message)
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
          const forcesData: ForceData[] = wargame.data.forces.forces
          for (const item of countPlatformTypeUsed()) {
            const newForce = item.force
            const forceIdx = forcesData.findIndex(force => force.uniqid === newForce.uniqid)
            newForce.assets = item.force.assets?.filter(a => a.platformTypeId !== item.asset.platformTypeId)
            forcesData[forceIdx] = newForce
          }
          dispatch(updateForcesAndDeletePlatformType(wargame.currentWargame, forcesData, data as PlatformType))
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
