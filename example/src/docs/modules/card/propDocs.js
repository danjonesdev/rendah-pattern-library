export default [
  {
    name: 'title',
    default: '',
    type: 'Component',
    description: 'Props per <code>Heading</code> module'
  },
  {
    name: 'description',
    default: '',
    type: 'string',
    description: ''
  },
  {
    name: 'type',
    default: '',
    type: 'enum',
    description: '<code>block</code>, <code>inline</code>',
  },
  {
    name: 'withLinkProps',
    default: '',
    type: 'object',
    description: 'Props per <code>WithLink</code> util'
  }
]
