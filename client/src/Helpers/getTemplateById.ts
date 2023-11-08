import { TemplateBody } from 'src/custom-types'

type Templates = TemplateBody[] | { [property: string]: TemplateBody }

// find template by template._id from templates array or from templates object[_id] (faster)
export const getTemplateById = (templates: Templates, id: string): TemplateBody | undefined => {
  // if templates is array then we will do simple find to get template
  if (Array.isArray(templates)) {
    // mostly need for Admin pages
    return templates.find((template): boolean => template._id === id)
  }
  // should be used for PlayerUI (faster)
  return templates[id]
}

export const getTemplateByIdNoUndefined = (templates: Templates, id: string): TemplateBody => {
  const template = getTemplateById(templates, id)
  if (typeof template === 'undefined') throw new TypeError(`Template with id: "${id}" not found`)
  return template
}

export default getTemplateById
