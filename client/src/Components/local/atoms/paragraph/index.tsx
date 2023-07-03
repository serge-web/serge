import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const Paragraph: React.FC<Props> = ({ content }: Props) =>
  <div className={styles.paragraph}>
    { content }
  </div>

export default Paragraph
