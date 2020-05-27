import React, { useContext } from 'react'

// /* Import Constants */
// import { CHAT_CHANNEL_ID, LOCAL_STORAGE_TIMEOUT } from "@serge/config";

// /* Import Stylesheet */
// import styles from './styles.module.scss'

// /* import Helpers */
// import markAllAsRead from './helpers/mark-all-as-read'

/* Import context */
import { PlayerStateContext } from '@serge/store'

/* Render component */
export const GameAdmin: React.FC = () => {

  const { channels } = useContext<any>(PlayerStateContext)[0]

  
  // const [ activeTab ] = useState(Object.keys(channels)[0])
  // const [ allMarkedRead, setAllMarkedRead ] = useState(false)
  // const [ showObjectives, setShowObjectives ] = useState(false)
  
  // useEffect(() => {
  //   const channelLength = 1
  //   channelLength && setAllMarkedRead(false)
  // }, [])

 console.log(channels)
  

 return <div>
    This is the game Admin component 
  </div>
}

export default GameAdmin
