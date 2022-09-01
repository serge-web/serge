import React, { FC } from 'react'

/* Import proptypes */
import PropTypes from './types/props'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'

/* Import Styles */
import styles from './styles.module.scss'

/* Import Components */
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import TextInput from '../../../atoms/text-input'
import FormGroup from '../../../atoms/form-group-shadow'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'

const MobileSwitch = withStyles({
  switchBase: {
    color: '#FFFFFF',
    '&$checked': {
      color: '#1A394D'
    },
    '&$checked + $track': {
      backgroundColor: '#1A394D'
    }
  },
  checked: {},
  track: {}
})(Switch)

export const SettingsForceOverview: FC<PropTypes> = ({ data, handleChangeForce }) => {
  const onChangeUmpire = (): void => {
    data.umpire = !data.umpire
    handleChangeForce(data)
  }

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            className={styles['accordion-header']}
            expandIcon={<FontAwesomeIcon icon={faCaretDown} className={styles['arrow-icon']} />}
          >
            <Typography className={styles['accordion-title']}>Overview & Objectives</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={styles.row}>
              <div className={cx(styles.col, styles.section)}>
                <FormGroup placeholder="Overview & Objectives">
                  <FormControlLabel className={styles.umprire} control={<MobileSwitch size='small' checked={data.umpire} onChange={onChangeUmpire} />} label="Umpire" />
                  <TextInput
                    multiline
                    fullWidth
                    variant="filled"
                    minRows={8}
                    maxRows={8}
                    updateState={(target: { value: string }): void => {
                      handleChangeForce({ ...data, overview: target.value })
                    }}
                    value={data.overview}
                    className={styles.textarea}
                  />
                </FormGroup>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}

export default SettingsForceOverview
