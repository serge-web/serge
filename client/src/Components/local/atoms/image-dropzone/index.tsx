import React from 'react'
import { useDropzone } from 'react-dropzone'
import unfetch from 'node-fetch'
/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Icons */
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation
// error based on some webpack version
const fetch = unfetch.bind(window)

/* Render component */
export const ImageDropzone: React.FC<PropTypes> = ({
  title,
  onChange,
  onRejected,
  limit,
  iconUploadUrl,
  use64onApiEror
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
      if (iconUploadUrl) {
        console.log(iconUploadUrl, 'iconUploadUrl')
        fetch(iconUploadUrl, { method: 'POST', body: file })
          .then((response): Promise<{ path?: string }> => response.json())
          .then(({ path }) => {
            if (path) {
              handleChange(path, file)
            }
          })
          .catch((err) => {
            console.log(err)
            if (use64onApiEror) {
              console.warn('uploading image as base64')
              getBase64(file, (src: string) => {
                handleChange(src, file)
              })
            }
          })
      } else {
        getBase64(file, (src: string) => {
          handleChange(src, file)
        })
      }
    },
    accept: 'image/png, image/svg+xml',
    maxSize: limit,
    multiple: false,
    onDropRejected: (rejected: any): void => {
      if (typeof onRejected === 'function') {
        onRejected(rejected)
      }
    }
  })

  return (
    <div className={styles['image-dropzone']}>
      <h2>{ title }</h2>
      <div {...getRootProps()} className={styles['dropzone-content']}>
        <input {...getInputProps()} />
        <FontAwesomeIcon icon={faFileUpload} size="3x" />
        <p>Drag and drop a png/svg icon, or click to select. {limit / 1000}kb limit.</p>
      </div>
    </div>
  )
}

ImageDropzone.defaultProps = {
  title: 'Add an icon'
}
export default ImageDropzone
