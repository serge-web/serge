import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import lineBreak from '../Helpers/splitNewLineBreak'
import { ADMIN_ROUTE, STORYBOOK_ROUTE } from '../consts'
import { faUserCog, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { GameInfo } from './PlayerUi/types'
import { databasePath, SERGE_INFO, settings } from '@serge/config'
import DbProvider from '../api/db'

const db = new DbProvider(databasePath + SERGE_INFO)

interface Props { gameInfo: GameInfo, enterSerge: () => void }

const PlayerUiLandingScreen: React.FC<Props> = ({ gameInfo, enterSerge }) => {

  const [title,setTitle] = React.useState('')

  db.get(settings).then((res) => setTitle(res['title'] || 'Database not found'))

  return <div className="flex-content-wrapper flex-content-wrapper--welcome">
    <div className="flex-content flex-content--welcome">
      <div className="flex-content--center contain-welcome-screen position-relative">
        <div className="welcome-logo">
          {
            gameInfo.imageUrlSet ? <img className="serge-logo" src={gameInfo.imageUrl} alt="Serge gaming" /> : null
          }
        </div>
        <div className="shortcuts">
          <a href={ADMIN_ROUTE} title="Game design/Admin pages" className="link-admin">
            <FontAwesomeIcon icon={faUserCog} />
          </a>
          <a href={STORYBOOK_ROUTE} title="User Interface review pages" className="link-admin">
          <FontAwesomeIcon icon={faPencilRuler} />
          </a>
        </div>
        <div className="welcome-desc">
          <p>{title}</p>
          <p>Welcome!</p>
          {lineBreak(gameInfo.description)}
          <button name="play" className="btn btn-action btn-action--primary" onClick={enterSerge}>Play</button>
        </div>
      </div>
    </div>
  </div>
}

export default PlayerUiLandingScreen
