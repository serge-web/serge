declare module '*.md' {
  const content: string
  export = content;
}

// TODO: Remove the line below when the store package has been converted
declare module '@serge/store'
declare module 'whatwg-fetch'
