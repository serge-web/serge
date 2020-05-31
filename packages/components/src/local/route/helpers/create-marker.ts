export const simpleIcon = (color: string): string => `<svg width="10" height="10">
    <circle cx="5" cy="5" r="5" fill="${color}" />
  </svg>`

const svgIcon = (color: string, deg: number): string => `<svg width="20" height="20">
      <line x1="0" y1="10" x2="20" y2="10" transform="rotate(${deg})" stroke="${color}" stroke-width="5" style="transform-origin:50% 50%;"/>
  </svg>`

export default svgIcon
