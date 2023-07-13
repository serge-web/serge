import React, { Component } from 'react'
import FlexLayout from 'flexlayout-react'
import RouterDashboard from '../Components/Router/RouterDashboard'
import PlayerUiWrapper from './PlayerUiWrapper'

import '@serge/themes/dependencies/flexlayout-react.scss'
import 'src/themes/App.scss'
import '@serge/themes/demo.scss'

const json = {
  global: {
    tabSetTabStripHeight: 45,
    tabEnableClose: false,
    tabEnableRenderOnDemand: false
  },
  layout: {
    type: 'row',
    id: '#demo-row-main',
    children: [
      {
        type: 'row',
        id: '#demo-row-main-first',
        children: [
          {
            type: 'tabset',
            id: '#demo-tabset-main',
            children: [
              {
                type: 'tab',
                id: '#demo-game-designer',
                name: 'Game Designer',
                component: 'game-designer'
              }
            ],
            active: true
          },
          {
            type: 'tabset',
            id: '#demo-tabset-player-1',
            children: [

              {
                type: 'tab',
                id: '#demo-player-1',
                name: 'Player',
                component: 'player'
              }
            ],
            active: true
          }
        ],
        active: true
      },
      {
        type: 'row',
        id: '#demo-row-main-second',
        children: [
          {
            type: 'tabset',
            id: '#demo-tabset-player-2',
            children: [

              {
                type: 'tab',
                id: '#demo-player-2',
                name: 'Player',
                component: 'player'
              }
            ],
            active: true
          },
          {
            type: 'tabset',
            id: '#demo-tabset-player-3',
            children: [

              {
                type: 'tab',
                id: '#demo-player-3',
                name: 'Player',
                component: 'player'
              }
            ],
            active: true
          }
        ],
        active: true
      }
    ]
  },
  borders: []
}

class DemoScreen extends Component {
  constructor (props) {
    super(props)
    this.model = FlexLayout.Model.fromJson(json)
    this.flexlayout = React.createRef()
    this.timeId = undefined
  }

  componentDidMount () {
    this.timeId = setTimeout(() => { this.flexlayout.current.forceUpdate() })
  }

  componentWillUnmount () {
    if (this.timeId) clearTimeout(this.timeId)
  }

  factory = (node) => {
  const component = node.getComponent()
  const { id } = node._attributes
  const sources = {
  'game-designer': <RouterDashboard/>,
  player: <PlayerUiWrapper/>
  }
  return (
    <div id={id.replace('#', '')}>
    { sources[component] }
    </div>
  )
  }

  classNameMapper = (defaultClassName) => `${defaultClassName} ${defaultClassName}--undo-transparent`

  render () {
    return (
      <div className='flex-content-wrapper demo-content-wrapper'>
        <div className='flex-content flex-content--fill'>
          <FlexLayout.Layout
            ref={this.flexlayout}
            model={this.model}
            factory={this.factory}
            classNameMapper={this.classNameMapper}
            className='flex-layout-demo'
          />
        </div>
      </div>
    )
  }
}

export default DemoScreen
