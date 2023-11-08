import { useDropzone } from 'react-dropzone'
import React from 'react'
import PropTypes from './types/props'
import readZip from './helpers/readZip'

const ZipFileUploader: React.FC<PropTypes> = ({ onChange, children }) => {
  // Use the useDropzone hook to create a dropzone that accepts zip files and calls the readZip function with the dropped file
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.zip',
    onDrop: (acceptedFiles) => readZip(acceptedFiles[0], onChange)
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  )
}

export default ZipFileUploader
