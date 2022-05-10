// Import component files
import CustomDialog from './index'
import docs from './README.md'

export default {
  title: 'local/atoms/custom-dialog',
  component: CustomDialog,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}
