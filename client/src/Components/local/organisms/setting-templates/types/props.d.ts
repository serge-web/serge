import { TemplateBody } from 'src/custom-types'

interface PropTypes {
    templates: Array<TemplateBody>
    selectedTemplate?: TemplateBody
    onChange: (updates: { templates: TemplateBody[] }) => void
    onSave: (templates: TemplateBody) => void  
    onSidebarClick?: (selectedTemplate: TemplateBody) => void
    onCreate?: () => void
    onDelete?: () => void
    onDuplicate?: () => void
}

export default PropTypes
