import { Area } from '@serge/custom-types'
import L from 'leaflet'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v4'
import { Select, SelectItem } from '../typings'

type StandardAreaMenuProps = {
  /**
   * the set of standard areas
   */
  areas?: Area[]
  /**
   * handler for new orders being selected
   */
  handler: { (area: Area): void }
  /**
   * flag for whether to show select menu.
   * Note: because we add the control to the map ourself, we we're adding ourselves each time this control
   * Note: was included/remove from the map. To prevent repeatedly being added, we have `showControl` prop.
   * Note: which means the component only gets generated once, and we add/remove a single instance of the
   * Note: control from the map
   * */
  showControl: boolean
}

const StandardAreaMenu: React.FC<StandardAreaMenuProps> = ({ areas, handler, showControl }) => {
  const map = useMap()

  const [controlButton, setControlButton] = useState<Select | undefined>(undefined)

  const handleClick = (value: string): void => {
    if (areas) {
      const theArea = areas.find((area) => area.name === value)
      theArea && handler && handler(theArea)
    } else {
      console.warn('Should have list of areas')
    }
  }

  /** generate the tree of activities */
  const getItems = (areas: Area[]): SelectItem[] => {
    return areas.map((area: Area) => {
      return {
        label: area.name,
        value: area.name
      }
    })
  }

  useEffect(() => {
    if (areas) {
      if (!controlButton) {
        const items = getItems(areas)
        const selectControl = L.control.select({
          // TODO: we need to move this to the top-left, but put it beneath the `Cancel planning` controls
          // TODO: if we set it to top-left, one gets presented over the top of the other.
          position: 'topleft',
          iconMain: '📝',
          iconGroupChecked: '⊳',
          iconGroupUnchecked: '⊳',
          items: items,
          onSelect: (item: any) => {
            handleClick(item)
          },
          additionalClass: 'select-control-custom'
        })
        setControlButton(selectControl)
      }
      if (controlButton) {
        if (showControl) {
          controlButton.addTo(map)
        } else {
          controlButton.remove()
        }
      }
    }
  }, [areas, showControl, controlButton])

  return <></>
}

export default StandardAreaMenu
