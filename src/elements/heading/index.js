import React from 'react'
import Truncate from 'react-truncate'

/**
 * A Heading.
 */

export default function Heading(props) {
  const { text, color, onClick, htmlEntity, size, iconFloat, truncate } = props

  const ElementType = htmlEntity || 'h1'
  const hasTruncate = truncate ? true : false;
  const ElementTypeInner = hasTruncate ? React.Fragment : React.Fragment
  const hasOnClick = onClick ? { onClick } : ''


  let lineHeight;
  switch (size) {
    case 'small':
      lineHeight = 20;
      break;
    case 'medium':
      lineHeight = 24;
      break;
    case 'large':
      lineHeight = 28;
      break;
    case 'x-large':
      lineHeight = 32;
      break;
    default:
    lineHeight = 20;
  }

  const styles = {
    lineHeight: `${lineHeight}px`,
    height: hasTruncate ? `${lineHeight * (truncate || 1)}px` : 'auto'
  };

  return (
    <ElementType {...hasOnClick} className={`heading ${size} ${color}`} style={styles}>
      <ElementTypeInner lines={truncate}>{text}</ElementTypeInner>
    </ElementType>
  )
}
