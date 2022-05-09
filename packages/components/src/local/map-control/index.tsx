import React, { useEffect, useState } from 'react'
import { DomEvent } from 'leaflet'
import Item from './helpers/item'
import cx from 'classnames'

/* Import icons */
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import HomeIcon from '@material-ui/icons/Home'
import PublicIcon from '@material-ui/icons/Public'
import HistoryIcon from '@material-ui/icons/History'
import PlannedIcon from '@material-ui/icons/Update'
import InfoIcon from '@material-ui/icons/Info'

/* Import proptypes */
import PropTypes from './types/props'
import { CellLabelStyle, UMPIRE_FORCE } from '@serge/config'

interface CellStyleDetails {
  label: string
  value: CellLabelStyle
  active: boolean
}

/* Import Styles */
// import styles from './styles.module.scss'

/* Render component */
export const MapControl: React.FC<PropTypes> = ({
  /* main */
  map,
  /* home */
  showHome = true,
  bounds,
  /* zoom */
  showZoom = true,
  zoomStepSize = 0.5,
  /* view as */
  forces = [],
  viewAsCallback,
  viewAsForce,
  cellLabelCallback,
  cellLabelType,
  filterPlannedRoutes,
  setFilterPlannedRoutes,
  filterHistoryRoutes,
  setFilterHistoryRoutes,
  addInfoMarker
}) => {
  const [cellStyles, setCellStyles] = useState<CellStyleDetails[]>([])

  /*
   * disable map scroll and click events to allow
   * to use map control  as usual html
   */
  const disableMapClickAndScrolll = (ref: any): void => {
    if (ref) {
      DomEvent.disableClickPropagation(ref).disableScrollPropagation(ref)
    }
  }
  /* change map zoom level */
  const handleZoomChange = (changeValue: number): void => {
    const currentZoom = map.getZoom()
    if (currentZoom) map.setZoom(currentZoom + changeValue)
  }

  /* set map to overall view */
  const handleHome = (): void => {
    bounds && map.flyToBounds(bounds)
  }

  /* set view as force */
  const viewAs = (force: string): void => {
    if (viewAsCallback) {
      viewAsCallback(force)
    }
  }

  /* utilty method for whether to show view-as button as selected  */
  const showAsSelected = (force: string): 'light' | 'dark' | undefined => {
    return viewAsForce !== undefined ? viewAsForce === force ? 'light' : 'dark' : 'dark'
  }

  /* utilty method for whether we're filtering planned routes  */
  const isFilterAsPlannedRoutes = (): 'light' | 'dark' => {
    return filterPlannedRoutes ? 'dark' : 'light'
  }

  /* utilty method for whether we're filtering planned routes  */
  const isFilterAsHistoryRoutes = (): 'light' | 'dark' => {
    return filterHistoryRoutes ? 'dark' : 'light'
  }

  /* callback responding to filter planned routes toggle  */
  const togglePlannedFilter = (): void => {
    if (setFilterPlannedRoutes) {
      setFilterPlannedRoutes(!filterPlannedRoutes)
    }
  }

  /* callback responding to filter planned routes toggle  */
  const toggleHistoryFilter = (): void => {
    if (setFilterHistoryRoutes) {
      setFilterHistoryRoutes(!filterHistoryRoutes)
    }
  }

  /** the forces from props has changed */
  useEffect(() => {
    const storeStyle = (label: string, style: CellLabelStyle, current: CellLabelStyle | undefined): CellStyleDetails => {
      return {
        label: label,
        value: style,
        active: style === current
      }
    }

    // collate the cell styles
    const cellStyleList: CellStyleDetails[] = [
      storeStyle('Ctr', CellLabelStyle.CTR_LABELS, cellLabelType),
      storeStyle('H3', CellLabelStyle.H3_LABELS, cellLabelType),
      storeStyle('L/L', CellLabelStyle.LAT_LON_LABELS, cellLabelType),
      storeStyle('X-Y', CellLabelStyle.X_Y_LABELS, cellLabelType)
    ]
    setCellStyles(cellStyleList)
  }, [cellLabelType])

  if (!map) return null

  return (
    <div className='leaflet-control-container' ref={disableMapClickAndScrolll}>
      <div className='leaflet-top leaflet-right'>
        <div className={cx('leaflet-control')} data-tour="zoom-control">
          {showZoom && <Item title="Zoom In" onClick={(): void => { handleZoomChange(zoomStepSize) }}><AddIcon /></Item>}
          {showHome && <Item title="Fit to window" onClick={(): void => { handleHome() }}><HomeIcon /></Item>}
          {showZoom && <Item title="Zoom Out" onClick={(): void => { handleZoomChange(-1 * zoomStepSize) }}><RemoveIcon /></Item>}
        </div>
        <div className={cx('leaflet-control')} data-tour="counter-clockwise">
          <Item title="View full history" onClick={(): void => { toggleHistoryFilter() }}
            contentTheme={isFilterAsHistoryRoutes()} >
            <HistoryIcon />
          </Item>
          <Item title="View all planned steps" onClick={(): void => { togglePlannedFilter() }}
            contentTheme={isFilterAsPlannedRoutes()} >
            <PlannedIcon />
          </Item>
        </div>
        { addInfoMarker &&
          <div className={cx('leaflet-control')}>
            <Item title='Add information marker' onClick={(): void => { addInfoMarker() }}
              contentTheme={ 'dark' } >
              <InfoIcon/>
            </Item>
          </div>
        }
        {forces.length > 0 && <div className={cx('leaflet-control')} data-tour="certain-force">
          {forces.map((force: any): JSX.Element => (
            <Item
              contentTheme={showAsSelected(force.uniqid)}
              key={`k_${force.uniqid}`}
              onClick={(): void => { viewAs(force.uniqid) }}
              title={`View As ${force.name}`}
            >
              <PublicIcon style={{ color: force.uniqid === UMPIRE_FORCE ? '#777' : force.color }} />
            </Item>
          ))}
        </div>}
        {cellStyles.length > 0 && <div className={cx('leaflet-control')}>
          {cellStyles.map((style: CellStyleDetails): JSX.Element => (
            <Item
              contentTheme={style.active ? 'light' : 'dark'}
              key={`s_${style.value}`}
              onClick={(): void => { cellLabelCallback && cellLabelCallback(style.value) }}
              title={'Style cells as' + style.label}
            >
              {style.label}
            </Item>
          ))}
        </div>}
      </div>
    </div>
  )
}

export default MapControl
