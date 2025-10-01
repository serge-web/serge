// FeedbackBlock.tsx
import React from 'react'
import Collapsible from '../../../helper-elements/collapsible'
import { ExpandedFeedbackList, CollapsedFeedbackList } from './collaboration-utils'
import { CollaborativePermission } from 'src/config'
import { FeedbackItem } from 'src/custom-types'
import styles from '../styles.module.scss'

interface FeedbackBlockProps {
    permission: number
    isObserver: boolean
    feedback?: FeedbackItem[]
}

const FeedbackBlock: React.FC<FeedbackBlockProps> = ({ permission, isObserver, feedback }) => (
  (permission > CollaborativePermission.CannotCollaborate || isObserver) && feedback && feedback.length > 0 
    ? (
      <div>
        <div className={styles['feedback-title']}>Feedback</div>
        <div className={styles['feedback-item']}>
          <Collapsible
            header={<CollapsedFeedbackList feedback={feedback} />}
            content={<ExpandedFeedbackList feedback={feedback} />}
          />
        </div>
      </div>) 
    : null
)

export default FeedbackBlock
