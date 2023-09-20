import { Area, AreaCategory } from 'src/custom-types'
import L from 'leaflet'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v4'
import { Select, SelectItem } from '../typings'

type StandardAreaMenuProps = {
  /**
   * the set of standard areas
   */
  areas?: AreaCategory[]
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

  onMount: (control: Select) => void

  additionalClass?: string
}

const StandardAreaMenu: React.FC<StandardAreaMenuProps> = ({ areas, handler, showControl, onMount, additionalClass }) => {
  const map = useMap()

  const [controlButton, setControlButton] = useState<Select | undefined>(undefined)

  const handleClick = (value: string): void => {
    if (areas) {
      const [catName, areaName] = value.split('~')
      if (catName && areaName) {
        const theCat = areas.find((cat) => cat.name === catName)
        if (theCat) {
          const theArea = theCat.areas.find((area) => area.name === areaName)
          theArea && handler && handler(theArea)
          return
        }
      }
      console.warn('Failed to find area for', value, areas)
    }
  }

  /** generate the tree of activities */
  const getItems = (areas: AreaCategory[]): SelectItem[] => {
    return areas.map((category) => {
      return {
        label: category.name,
        value: category.name,
        items: category.areas.map((area) => {
          return {
            label: area.name, value: category.name + '~' + area.name
          }
        })
      }
    })
  }

  useEffect(() => {
    if (areas) {
      if (!controlButton) {
        const items = getItems(areas)
        const selectControl = L.control.select({
          position: 'topleft',
          iconMain: '☰',
          iconGroupChecked: '⊳',
          iconGroupUnchecked: '⊳',
          items: items,
          onSelect: (item: any) => {
            handleClick(item)
          },
          additionalClass,
          preventClickThrough: true
        })
        setControlButton(selectControl)
      }
      if (controlButton) {
        if (showControl) {
          controlButton.addTo(map)
          onMount(controlButton)
        } else {
          controlButton.remove()
        }
      }
    }
  }, [areas, showControl, controlButton])

  return <></>
}

export default StandardAreaMenu
