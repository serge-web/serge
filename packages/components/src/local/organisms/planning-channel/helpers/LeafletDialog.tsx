import L from 'leaflet'
import React, { useEffect, useState } from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { useMap } from 'react-leaflet-v4'
import { Dialog } from '../typings'

type LeafletDialogProps = {
  showControl: boolean
}

const LeafletDialog: React.FC<LeafletDialogProps> = ({ showControl }) => {
  const map = useMap()

  const [leafletDialog, setLeafletDialog] = useState<Dialog>()

  const buildDialogContent = () => {
    return <div style={{ color: '#000' }}>
      This is dialog content
    </div>
  }

  useEffect(() => {
    if (!leafletDialog) {
      const dialog = L.control.dialog({
        size: [300, 300],
        anchor: [0, 0],
        position: 'bottomleft'
      }).setContent(ReactDOMServer.renderToString(buildDialogContent()))
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

  return <></>
}

export default LeafletDialog
