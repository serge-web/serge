import { CellLabelStyle } from 'src/config'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import Item from '../../map-control/helpers/item'

export interface LabelSelectorProps {
  // update the cell label style in use
  setCellLabelStyle: { (style: CellLabelStyle): any }
  // receive details on an updated label style
  cellLabelStyle: CellLabelStyle
}

interface CellStyleDetails {
  label: string
  value: CellLabelStyle
  active: boolean
}

/* Render component */
export const CellLabelStyleSelector: React.FC<LabelSelectorProps> = ({ cellLabelStyle, setCellLabelStyle }) => {
  // maintain local list of cell label styles
  const [cellStyles, setCellStyles] = useState<CellStyleDetails[]>([])

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
      storeStyle('Ctr', CellLabelStyle.CTR_LABELS, cellLabelStyle),
      storeStyle('H3', CellLabelStyle.H3_LABELS, cellLabelStyle),
      storeStyle('L/L', CellLabelStyle.LAT_LON_LABELS, cellLabelStyle),
      storeStyle('X-Y', CellLabelStyle.X_Y_LABELS, cellLabelStyle),
      storeStyle(' ', CellLabelStyle.BLANK, cellLabelStyle)
    ]
    setCellStyles(cellStyleList)
  }, [cellLabelStyle])

  return (
    <>
      {cellStyles.length > 0 && <div className={cx('leaflet-control')}>
        {cellStyles.map((style: CellStyleDetails): React.ReactElement => (
          <Item
            contentTheme={style.active ? 'light' : 'dark'}
            key={`s_${style.value}`}
            onClick={(): void => { setCellLabelStyle(style.value) }}
            title={'Style cells as ' + style.label}
          >
            {style.label}
          </Item>
        ))}
      </div>}
    </>
  )
}

export default CellLabelStyleSelector
