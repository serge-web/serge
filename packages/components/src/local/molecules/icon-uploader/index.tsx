import React, { useState } from 'react'
import ImageDropzone from '../../atoms/image-dropzone'

/* Import proptypes */
import PropTypes from './types/props'

/* Import Styles */
import styles from './styles.module.scss'

/* Render component */
export const IconUploader: React.FC<PropTypes> = ({
  children,
  background = 'rgba(0,0,0,0)',
  onChange,
  limit,
  icon
}) => {
  const [modal, setModal] = useState<boolean>(false)

  const handleChange = (newSrc: string): void => {
    setModal(false)
    if (typeof onChange === 'function') {
      onChange(newSrc)
    }
  }
  const handleClick = (): void => {
    setModal(!modal)
  }

  const onRejected = (rejected: any): void => {
    console.log(rejected)
  }

  return (
    <div className={styles.main}>
      <div
        onClick={handleClick}
        style={{ background }}
        className={styles.icon}
      >
        {icon && <img src={icon} alt='icon' />}
      </div>
      <div onClick={handleClick}>{children}</div>
      {modal && <div className={styles.modal}>
        <div className={styles['modal-bg']} onClick={handleClick}/>
        <div className={styles['modal-content']}>
          <ImageDropzone limit={limit} onChange={handleChange} onRejected={onRejected} />
        </div>
      </div>}
    </div>
  )
}

export default IconUploader
