import { expiredStorage, LOCAL_STORAGE_TIMEOUT } from '@serge/config'

const markAllAsRead = (messages: any, currentWargame: any, setAllMarkedRead: any) => {
  messages.map((message: any) => {
    expiredStorage.setItem(currentWargame + message._id, 'read', LOCAL_STORAGE_TIMEOUT)
    setAllMarkedRead(true)
  })
}

export default markAllAsRead
