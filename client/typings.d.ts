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

declare module 'react-leaflet-vectorgrid'
declare module '@json-editor/json-editor'
// TODO: Remove the line below when the store package has been converted
declare module '@serge/store'
declare module 'whatwg-fetch'
