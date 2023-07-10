import { expiredStorage, LOCAL_STORAGE_TIMEOUT } from '@serge/config'

export const getMessageStateKey = (currentWargame: string, selectedForce: string, selectedRole: string, uniqKey: string): string => {
  return `${currentWargame}-${selectedForce}-${selectedRole}-${uniqKey}`
}

export const getMessageStateByKey = (key: string): null | string => {
  return expiredStorage.getItem(key)
}

export const removeMessageStateByKey = (key: string): void => {
  expiredStorage.removeItem(key)
}

export const setMessageStateByKey = (key: string): void => {
  expiredStorage.setItem(key, 'read', LOCAL_STORAGE_TIMEOUT)
}

export const getMessageState = (currentWargame: string, selectedForce: string, selectedRole: string, uniqKey: string): null | string => {
  const key = getMessageStateKey(currentWargame, selectedForce, selectedRole, uniqKey)
  return getMessageStateByKey(key)
}

export const isMessageReaded = (currentWargame: string, selectedForce: string, selectedRole: string, uniqKey: string): boolean => {
  return getMessageState(currentWargame, selectedForce, selectedRole, uniqKey) !== null
}

export const setMessageState = (currentWargame: string, selectedForce: string, selectedRole: string, uniqKey: string): void => {
  const key = getMessageStateKey(currentWargame, selectedForce, selectedRole, uniqKey)
  setMessageStateByKey(key)
}

export const removeMessageState = (currentWargame: string, selectedForce: string, selectedRole: string, uniqKey: string): void => {
  const key = getMessageStateKey(currentWargame, selectedForce, selectedRole, uniqKey)
  removeMessageStateByKey(key)
}
