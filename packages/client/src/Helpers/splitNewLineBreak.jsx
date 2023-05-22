import React from 'react'
export default function (string) {
  return string.split('\n').map((it, i) => it.length > 0 && <div className='paragraph' key={'x' + i}>{it}</div>)
}
