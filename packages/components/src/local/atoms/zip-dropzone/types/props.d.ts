import React from 'react'

// Defining an interface called PropTypes
export default interface PropTypes {
    onChange: (data: any, filename: string) => void // A function prop that takes in two arguments - data and filename - and returns nothing (void)
    children?: React.ReactNode // An optional prop that can be any React node (e.g. a component, text, etc.)
  }
