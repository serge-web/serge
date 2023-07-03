export const getElementById = (id: string): Element | null => document.getElementById(id)
export const getElementByClass = (className: string): Element[] => Array.from(document.getElementsByClassName(className))
