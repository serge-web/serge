export type CustomTranslationType = {
  tooltips: {
    placeMarker: string
    firstVertex: string
    continueLine: string
    finishLine: string
    finishPoly: string
    finishRect: string
    startCircle: string
    finishCircle: string
    placeCircleMarker: string
    placeText: string
  }
  actions: {
    finish: string
    cancel: string
    removeLastVertex: string
  }
  buttonTitles: {
    drawMarkerButton: string
    drawPolyButton: string
    drawLineButton: string
    drawCircleButton: string
    drawRectButton: string
    editButton: string
    dragButton: string
    cutButton: string
    deleteButton: string
    drawCircleMarkerButton: string
    snappingButton: string
    pinningButton: string
    rotateButton: string
    drawTextButton: string
  }
}

export const CustomTranslation: CustomTranslationType = {
  tooltips: {
    placeMarker: 'Click to place marker a',
    firstVertex: 'Click to place first vertex b',
    continueLine: 'Click to continue drawing c',
    finishLine: 'Click any existing marker to finish d',
    finishPoly: 'Click first marker to finish e',
    finishRect: 'Click to finish f',
    startCircle: 'Click to place circle center g',
    finishCircle: 'Click to finish circle h',
    placeCircleMarker: 'Click to place circle marker i',
    placeText: 'Click to place text j'
  },
  actions: {
    finish: 'Finish',
    cancel: 'Cancel',
    removeLastVertex: 'Remove Last Vertex'
  },
  buttonTitles: {
    drawMarkerButton: 'Draw Marker',
    drawPolyButton: 'Draw Polygons',
    drawLineButton: 'Draw Polyline',
    drawCircleButton: 'Draw Circle',
    drawRectButton: 'Draw Rectangle',
    editButton: 'Edit Layers',
    dragButton: 'Drag Layers',
    cutButton: 'Cut Layers',
    deleteButton: 'Remove Layers',
    drawCircleMarkerButton: 'Draw Circle Marker',
    snappingButton: 'Snap dragged marker to other layers and vertices',
    pinningButton: 'Pin shared vertices together',
    rotateButton: 'Rotate Layers',
    drawTextButton: 'Draw Text'
  }
}
