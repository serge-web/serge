import React, { useReducer } from 'react'
import Select from 'react-select'
import TextInput from '../Components/Inputs/TextInput'
import { useStateValue } from '../Store/PlayerUi'
import { getWargame } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'

export default function PlayerUiLobby ({ wargameList, roleOptions, checkPassword }) {
  if (!wargameList) {
    return (
      <div className="flex-content-wrapper flex-content-wrapper--welcome">
        <div className="flex-content flex-content--welcome">      
          <h3>Server Not Found = check configuration</h3>
        </div>
      </div>
    )
  }
  const [localState, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      selectedWargame: '',
      rolePassword: ''
    }
  )
  const [state, dispatch] = useStateValue()
  const { selectedWargame, rolePassword } = localState
  const updateSelectedWargame = (selectedWargame) => {
    setState({ selectedWargame })
    getWargame(selectedWargame.value)(dispatch)
  }
  const setRolePassword = val => {
    setState({ rolePassword: val })
  }
  const setRolePasswordDemo = (e, val) => {
    e.preventDefault()
    setRolePassword(val)
  }
  return (
    <div className="flex-content-wrapper flex-content-wrapper--welcome">
      <div className="flex-content flex-content--welcome">
        {!state.selectedForce && !state.selectedRole &&
        <div className={`flex-content--center ${selectedWargame && state.showAccessCodes ? 'has-demo-passwords' : ''}`}>
          <h1>Set wargame</h1>
          <div id="custom-select-wargame-selection">
            <Select
              name="wargame-selection"
              value={selectedWargame}
              className="react-select"
              classNamePrefix="react-select"
              options={wargameList.map((wargame) => ({ label: wargame.title, value: wargame.name }))}
              onChange={updateSelectedWargame}
            />
          </div>
          <div className="flex-content">
            <TextInput
              label="Access code"
              className="material-input"
              updateStore={setRolePassword}
              options={{ numInput: false }}
              data={rolePassword || ''}
            />
          </div>
          {selectedWargame && state.showAccessCodes &&
          <div className="demo-passwords">
            <h3>Not visible in production</h3>
            <ul className="demo-list-forces">
              {roleOptions.map((force) => {
                return (
                  <li key={force.name} className="list-item-demo-passwords">
                    <h4>{force.name}</h4>
                    <ul data-qa-force-name={force.name}>
                      {
                        force.roles.map((role) => (
                          <li key={role.name}>
                            <button onClick={e => setRolePasswordDemo(e, role.password)} className="btn btn-sm btn-primary">
                              {role.name}
                            </button>
                          </li>
                        ))
                      }
                    </ul>
                  </li>
                )
              })
              }
            </ul>
          </div>
          }
          <button name="enter-game" disabled={!rolePassword} className="btn btn-action btn-action--primary" onClick={() => checkPassword(rolePassword)}>Enter</button>
        </div>
        }
      </div>
    </div>
  )
}
