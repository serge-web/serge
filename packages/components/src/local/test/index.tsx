import React from 'react'

import styles from './styles.module.scss'

interface Props {
  name: string
  colour: string
}

const Test: React.FunctionComponent<Props> = ({ name, colour }: Props) =>
  <div className={styles.blue}>
    This is an example component, the name provided to it was {name}
  </div>

export default Test
