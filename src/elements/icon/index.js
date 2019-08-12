import React from 'react'
import ArrowRight from './arrow-right'

export default function Icon(props) {
  const { icon } = props

  switch (icon) {
    case 'arrow-right':
      return <ArrowRight {...props} />
      break
    default:
      return false
  }
}
