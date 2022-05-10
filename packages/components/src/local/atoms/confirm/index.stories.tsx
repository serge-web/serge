// Import component files
import Confirm from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/confirm',
  component: Confirm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
