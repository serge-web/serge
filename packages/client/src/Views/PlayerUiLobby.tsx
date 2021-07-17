import React, { useState } from 'react'
import Select from 'react-select'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import { getWargame } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { serverPath } from '../consts'
import { ForceData, Role, WargameList } from '@serge/custom-types'
import { TextInput } from '@serge/components'

interface Props {
  wargameList: WargameList[],
  /** function to check if the password is valid, and do routing if successful */
  checkPassword: (pass: string) => void,
  allForces: ForceData[]
}

interface Option { label: string, value: string }

const PlayerUiLobby: React.FC<Props> = ({ wargameList, allForces, checkPassword }) => {
  if (!wargameList) {
    return (
      <div className="flex-content-wrapper flex-content-wrapper--welcome">
        <div className="flex-content flex-content--welcome">
          <h2>Serge - Serious Gaming Evolved</h2>
          <h2>&nbsp;</h2>
          <h3>* Server Not Found - check configuration</h3>
          <h3>* Trying to connect to: <i>{serverPath}</i></h3>
          <h3>* The above URL should be something like:</h3>
          <h4>&nbsp;&nbsp;&nbsp;- Dev machine: http://192.168.1.115:8080</h4>
          <h4>&nbsp;&nbsp;&nbsp;- Dedicated network:  http://serge:8080</h4>
          <h4>&nbsp;&nbsp;&nbsp;- Online review: https://serge-review.herokuapp.com/</h4>
        </div>
      </div>
    )
  }

  const [selectedWargame, setSelectedWargame] = useState<Option | undefined>()
  const [rolePassword, setRolePassword] = useState<string>('')
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()

  const updateSelectedWargame = (selectedWargame?: Option | null): void => {
    if (selectedWargame) {
      setSelectedWargame(selectedWargame)
      getWargame(selectedWargame.value)(dispatch)
    } else {
      setSelectedWargame(undefined)
    }
  }

  if (!selectedWargame && wargameList.length === 1) {
    const { title, name } = wargameList[0]
    updateSelectedWargame({ label: title, value: name })
  }

  const setRolePasswordDemo = (e: React.MouseEvent, val: string): void => {
    e.preventDefault()
    setRolePassword(val)
  }

  const roleOptions = allForces.map(
    force => ({ name: force.name, roles: force.roles })
  )

  return (
    <div className="flex-content-wrapper flex-content-wrapper--welcome">
      <div className="flex-content flex-content--welcome">
        {!state.selectedForce && !state.selectedRoleName &&
          <div className={`flex-content--center ${selectedWargame && state.showAccessCodes ? 'has-demo-passwords' : ''}`}>
            <h1>Set wargame</h1>
            <div id="custom-select-wargame-selection">
              <Select
                name="wargame-selection"
                value={selectedWargame}
                className="react-select"
                classNamePrefix="react-select"
                options={wargameList.map((wargame: WargameList) => ({ label: wargame.title, value: wargame.name }))}
                onChange={updateSelectedWargame}
              />
            </div>
            <div className="flex-content">
              <TextInput
                className="material-input"
                placeholder="Access code"
                variant="filled"
                type='password'
                value={rolePassword}
                updateState={(el: { value: string }) => setRolePassword(el.value)}
                options={{ numInput: false }}
              />
            </div>
            {selectedWargame && state.showAccessCodes &&
              <div className="demo-passwords">
                <h3>Not visible in production</h3>
                <ul className="demo-list-forces">
                  {roleOptions.map((force) => (<li key={force.name} className="list-item-demo-passwords">
                    <h4>{force.name}</h4>
                    <ul data-qa-force-name={force.name}>
                      {force.roles.map((role: Role) => (
                        <li key={role.name}>
                          <button onClick={e => setRolePasswordDemo(e, role.password)} className="btn btn-sm btn-primary">
                            {role.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>))}
                </ul>
              </div>
            }
            <button
              name="enter-game"
              disabled={!rolePassword}
              className="btn btn-action btn-action--primary"
              onClick={() => checkPassword(rolePassword)}
            >
              Enter
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default PlayerUiLobby
