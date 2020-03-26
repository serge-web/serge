import {expiredStorage, LOCAL_STORAGE_TIMEOUT} from '@serge/config'

const markAllAsRead = (context, setAllMarkedRead) => {
  const [ state ] = context;
  state.chatChannel.messages.forEach(message => {
    expiredStorage.setItem(state.currentWargame + message._id, "read", LOCAL_STORAGE_TIMEOUT);
  });
  setAllMarkedRead(true)
}

export default markAllAsRead