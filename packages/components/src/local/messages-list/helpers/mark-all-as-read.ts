import {expiredStorage, LOCAL_STORAGE_TIMEOUT} from '@serge/config'
import { Message } from '@serge/custom-types';

const markAllAsRead = (context: any, setAllMarkedRead: Function) => {
  const [ state ] = context;
  state.chatChannel.messages.forEach((message: Message) => {
    expiredStorage.setItem(state.currentWargame + message._id, "read", LOCAL_STORAGE_TIMEOUT);
  })
  setAllMarkedRead(true)
}

export default markAllAsRead