const groups = ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'] as const
const positions = ['before', 'after'] as const

export const reactPathGroupPattern = '{react,react-dom/**}'
export const nextPathGroupPattern = '{next,next/**}'
export const imagePathGroupPattern = './*.+(apng|avif|gif|jpg|jpeg|jfif|pjpeg|pjp|png|svg|webp)'
export const cssModulesPathGroupPattern = './*.module.css'

export const createPathGroup = ({
  pattern,
  group,
  position,
}: {
  pattern: string
  group: (typeof groups)[number]
  position: (typeof positions)[number]
}) => ({
  pattern,
  group,
  position,
})
