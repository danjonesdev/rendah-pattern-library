import React from 'react'
import Truncate from 'react-truncate'

/**
 * A Copy.
 */

export default function Copy(props) {
  const { text, color, onClick, size, iconFloat, truncate } = props

  const hasTruncate = truncate ? true : false;
  const ElementTypeInner = hasTruncate ? React.Fragment : React.Fragment
  const hasOnClick = onClick ? { onClick } : ''


  let lineHeight;
  switch (size) {
    case 'small':
      lineHeight = 16;
      break;
    case 'medium':
      lineHeight = 18;
      break;
    case 'large':
      lineHeight = 20;
      break;
    case 'x-large':
      lineHeight = 22;
      break;
    default:
    lineHeight = 24;
  }

  const styles = {
    lineHeight: `${lineHeight}px`,
    height: hasTruncate ? `${lineHeight * (truncate || 1)}px` : 'auto'
  };

  return (
    <p {...hasOnClick} className={`copy ${size} ${color}`} style={styles}>
      <ElementTypeInner lines={truncate}>{text}</ElementTypeInner>
    </p>
  )
}
