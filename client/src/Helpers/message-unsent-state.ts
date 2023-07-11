import { LOCAL_STORAGE_TIMEOUT, expiredStorage } from 'src/config'

export const getUnsentMessageKey = (currentWargame: string, selectedForce: string, selectedRole: string, channel: string, type: string): string => {
  return `${type}-${currentWargame}-${selectedForce}-${selectedRole}-${channel}`
}

export const getUnsentMessage = (currentWargame: string, selectedForce: string, selectedRole: string, channel: string, type: string): string => {
  const modelName = getUnsentMessageKey(currentWargame, selectedForce, selectedRole, channel, type)
  const value = expiredStorage.getItem(modelName)
  if (value) {
    return JSON.parse(expiredStorage.getItem(modelName) || '')
  }
  return ''
}

export const saveUnsentMessage = (message:string | any, currentWargame: string, selectedForce: string, selectedRole: string, channel: string, type: string): void => {
  const modelName = getUnsentMessageKey(currentWargame, selectedForce, selectedRole, channel, type)
  expiredStorage.setItem(modelName, JSON.stringify(message), LOCAL_STORAGE_TIMEOUT)
}

export const clearUnsentMessage = (currentWargame: string, selectedForce: string, selectedRole: string, channel: string, type: string): string => {
  const remove = getUnsentMessageKey(currentWargame, selectedForce, selectedRole, channel, type)
  return expiredStorage.removeItem(remove)
}
