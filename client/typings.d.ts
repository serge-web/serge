// export {}

declare module '*.md' {
  const content: string
  export = content;
}

declare global {
  interface Window {
    G_CONFIG: any
  }
}

declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >
  export default ReactComponent
}

declare module 'react-leaflet-vectorgrid'
declare module '@json-editor/json-editor'
declare module 'redux-logger'
// TODO: Remove the line below when the store package has been converted
declare module '@serge/store'
declare module 'whatwg-fetch'
