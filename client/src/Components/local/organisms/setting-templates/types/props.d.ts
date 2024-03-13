import { TemplateBody } from 'src/custom-types'

export interface FormData {
  foo?: string
  bar?: number
}

interface PropTypes {
    templates: Array<TemplateBody>
    selectedTemplate?: TemplateBody
    onChange: (updates: { templates: TemplateBody[] }) => void
    onSave: (templates: TemplateBody) => void  
    onSidebarClick?: (selectedTemplate: TemplateBody) => void
    onCreate?: (template: TemplateBody) => void
    onDelete?: () => void
    onDuplicate?: () => void
}

export default PropTypes
