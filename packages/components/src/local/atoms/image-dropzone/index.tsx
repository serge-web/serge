import React from 'react'
import { useDropzone } from 'react-dropzone'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Icons */
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Render component */
export const ImageDropzone: React.FC<PropTypes> = ({
  title,
  onChange,
  limit
}) => {
  const getBase64 = (file: any, cb: (res: string) => void): void => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (): void => {
      if (typeof reader.result === 'string') {
        cb(reader.result)
      }
    }
    reader.onerror = (error): void => {
      console.log('Error: ', error)
    }
  }

  const handleChange = (newSrc: string, file: any): void => {
    if (typeof onChange === 'function') {
      onChange(newSrc, file)
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: (acceptedFiles: Array<any>): void => {
      const [file] = acceptedFiles
      getBase64(file, (src: string) => {
        handleChange(src, file)
      })
    },
    accept: 'image/png',
    maxSize: limit,
    multiple: false,
    onDropRejected: (rejected: any): void => {
      console.log('rejected', rejected)
    }
  })

  return (
    <div className={styles['image-dropzone']}>
      <h2>{ title }</h2>
      <div {...getRootProps()} className={styles['dropzone-content']}>
        <input {...getInputProps()} />
        <FontAwesomeIcon icon={faFileUpload} size="3x" />
        <p>Drag and drop a png icon, or click to select. {limit / 1000}kb limit.</p>
      </div>
    </div>
  )
}

ImageDropzone.defaultProps = {
  title: 'Add an icon'
}
export default ImageDropzone
