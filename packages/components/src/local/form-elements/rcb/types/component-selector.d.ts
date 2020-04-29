import React from 'react'

export default interface ComponentSelector {
  (type: string, option: string | number): any
}