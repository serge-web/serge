export const simpleIcon = (color: string): string => `<svg width="10" height="10">
    <circle cx="5" cy="5" r="5" fill="${color}" />
  </svg>`

export const svgIcon = (color: string, deg: number): string => `<svg width="20" height="20">
      <line x1="10" y1="0" x2="10" y2="20" transform="rotate(${deg})" stroke="${color}" stroke-width="5" style="transform-origin:50% 50%;"/>
  </svg>`
