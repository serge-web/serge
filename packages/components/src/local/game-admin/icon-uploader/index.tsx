import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

// import cx from 'classnames'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* IMport Icons */
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Render component */
export const IconUploader: React.FC<PropTypes> = ({
  children,
  background = 'rgba(0,0,0,0)',
  onChange,
  limit,
  icon
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

  const [modal, setModal] = useState<boolean>(false)

  const handleChange = (newSrc: string): void => {
    if (typeof onChange === 'function') {
      onChange(newSrc)
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: (acceptedFiles: Array<any>): void => {
      const [file] = acceptedFiles
      getBase64(file, (src: string) => {
        setModal(false)
        handleChange(src)
      })
    },
    accept: 'image/png',
    maxSize: limit,
    multiple: false,
    onDropRejected: (rejected: any): void => {
      console.log('rejected', rejected)
    }
  })
  const handeClick = (): void => {
    setModal(!modal)
  }

  return (
    <div className={styles.main}>
      <div
        onClick={handeClick}
        style={{ background: background }}
        className={styles.icon}
      >
        {icon && <img src={icon} alt='icon' />}
      </div>
      <div onClick={handeClick}>{children}</div>
      {modal && <div className={styles.modal}>
        <div className={styles['modal-bg']} onClick={handeClick}/>
        <div className={styles['modal-content']}>
          <h2>Add an icon</h2>
          <div {...getRootProps()} className={styles['dropzone-content']}>
            <input {...getInputProps()} />
            <FontAwesomeIcon icon={faFileUpload} size="3x" />
            <p>Drag and drop a png  icon, or click to select. {limit / 1000}kb limit.</p>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default IconUploader
