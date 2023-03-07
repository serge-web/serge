import L from 'leaflet'
import React, { useEffect, useState } from 'react'
import { useMap } from 'react-leaflet-v4'
import { Dialog } from '../typings'

type LeafletDialogProps = {
  showControl: boolean
  content?: string
}

const LeafletDialog: React.FC<LeafletDialogProps> = ({ showControl, content = '' }) => {
  const map = useMap()

  const [leafletDialog, setLeafletDialog] = useState<Dialog>()

  useEffect(() => {
    if (!leafletDialog) {
      const dialog = L.control.dialog({
        size: [300, 300],
        anchor: [0, 0],
        position: 'bottomleft'
      }).setContent(content)
        .addTo(map)
        .hideResize()
        .hideClose()
      setLeafletDialog(dialog)
    }
    if (showControl) {
      leafletDialog && leafletDialog.open()
    } else {
      leafletDialog && leafletDialog.close()
    }
  }, [showControl])

  useEffect(() => {
    if (leafletDialog && content) {
      leafletDialog.setContent(content)
    }
  }, [content])

  return <></>
}

export default LeafletDialog
