import React from 'react'
import Truncate from 'react-truncate'

/**
 * A Heading.
 */

export default function Heading(props) {
  const { text, color, onClick, htmlEntity, size, iconFloat, truncate } = props

  const HasTruncate = truncate ? Truncate : React.Fragment
  const hasOnClick = onClick ? { onClick } : ''
  const ElementType = htmlEntity || 'h1'

  return (
    <ElementType {...hasOnClick} class={`heading ${size} ${color}`}>
      <HasTruncate lines={truncate}>{text}</HasTruncate>
    </ElementType>
  )
}
