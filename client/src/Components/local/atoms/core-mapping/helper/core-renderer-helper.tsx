import React from 'react'
import { RENDERER_CORE, RENDERER_MILSYM } from 'src/custom-types'
import CoreRenderer from '../renderers/core-renderer'
import MilSymbolRenderer from '../renderers/milsymbol-renderer'
import { CoreRendererProps } from '../types/props'

export class CoreRendererHelper {  
  static from (type: string): React.FunctionComponent<CoreRendererProps> {
    switch (type) {
      case RENDERER_CORE:
        return CoreRenderer
      case RENDERER_MILSYM:
        return MilSymbolRenderer
      default:
        throw Error('Invalid type of renderer')
    }
  }
}
